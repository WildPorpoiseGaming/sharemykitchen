import compression from 'compression'
import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import Raven from 'raven'
import passport from 'passport'
import './db/'

import authenticationRoute from './routes/authentication'
import bookingsRoute from './routes/bookings'
import listingsRoute from './routes/listings'
import reviewsRoute from './routes/reviews'
import usersRoute from './routes/users'
import routing from './routing'

import { WEB_PORT, STATIC_PATH, RAVEN_PATH_SERVER, COOKIE_SECRET } from '../shared/config'
import { currEnv } from '../shared/util'

if (RAVEN_PATH_SERVER) {
  // eslint-disable-next-line global-require
  Raven.config(RAVEN_PATH_SERVER, { environment: currEnv }).install()
}

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(bodyParser.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: COOKIE_SECRET,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.use('/auth', authenticationRoute)
app.use('/api', bookingsRoute, listingsRoute, reviewsRoute, usersRoute)
routing(app)

/* eslint-disable no-console,no-unused-expressions,no-unused-vars */
app.use((err, req, res, next) => {
  currEnv === 'development' && console.error(err.stack)
  RAVEN_PATH_SERVER && Raven.captureException(err)
  res.sendStatus(500)
})

!module.parent && app.listen(WEB_PORT, () => {
  console.log(`Server is running on port ${WEB_PORT} (${currEnv}).`)
  currEnv === 'development' && console.log('Keep "yarn dev:wds" running on a separate terminal')
})
/* eslint-disable no-console,no-unused-expressions,no-unused-vars */

export default app
