import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withRouter } from 'react-router'

import { APP_NAME } from '../../config'
import Home from '../../container/home'

const HomePage = (props) => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />
<<<<<<< HEAD
      <Home history={props.history}/>
=======
      <Home history={props.history} />
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    </div>
  )
}

<<<<<<< HEAD
=======
HomePage.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
export default withRouter(HomePage)
