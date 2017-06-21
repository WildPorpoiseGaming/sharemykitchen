import 'babel-polyfill'
import React from 'react'
import ListingList from '../../container/listinglist'
import { withRouter } from 'react-router'
import queryString from 'querystring'


const ListingsPage = (props) => {
   
  const qs = queryString.parse(props.location.search.slice(1))

    return (
      <div>
        <h2>Available Listings</h2>
        <ListingList query={qs} />
      </div>
    )
}

export default withRouter(ListingsPage)