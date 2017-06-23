import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import ListingList from '../../container/ListingList'

const ListingsPage = (props) => {
  const qs = props.location.search
  return (
    <div>
      <h2>Available Listings</h2>
      <ListingList query={qs} />
    </div>
  )
}

ListingsPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(ListingsPage)
