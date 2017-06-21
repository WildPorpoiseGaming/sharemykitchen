import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'
import Home from '../../container/home'

const HomePage = () => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />
      <Home />
    </div>
  )
}

export default HomePage
