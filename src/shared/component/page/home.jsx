import React from 'react'
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
      <Home history={props.history}/>
    </div>
  )
}

export default withRouter(HomePage)
