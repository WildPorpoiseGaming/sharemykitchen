/* eslint-disable arrow-body-style */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import {
  HOME_PAGE_ROUTE,
<<<<<<< HEAD
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  LISTINGS_INDEX,
=======
  LISTINGS_INDEX,
  LISTINGS_SHOW,
  LISTINGS_CREATE,
  AUTH_ME,
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
} from './routes'

import Nav from './component/nav'
import HomePage from './component/page/home'
import NotFoundPage from './component/page/not-found'
import ProfilePage from './component/page/profile-page'
import ListingsPage from './component/page/listings-page'
import ListingDetailPage from './component/page/listing-detail-page'
import ListingsCreatePage from './component/page/listings-create-page'

import ListingsPage from './component/page/listings-page'

const App = () => {
  return (
    <div className="main container">
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Nav />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
<<<<<<< HEAD
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
        <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
        <Route path={LISTINGS_INDEX} render={() => <ListingsPage />} />
=======
        <Route exact path={AUTH_ME} render={() => <ProfilePage />} />
        <Route exact path={LISTINGS_CREATE} render={() => <ListingsCreatePage />} />
        <Route exact path={LISTINGS_SHOW} render={() => <ListingDetailPage />} />
        <Route exact path={LISTINGS_INDEX} render={() => <ListingsPage />} />
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
        <Route render={() => <NotFoundPage />} />
      </Switch>
    </div>
  )
}

export default App
