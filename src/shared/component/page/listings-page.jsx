import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

<<<<<<< HEAD
import ListingList from '../../container/ListingList'
=======
import ListingList from '../../container/listing-list'
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4

const ListingsPage = (props) => {
  const qs = props.location.search
  return (
    <div>
<<<<<<< HEAD
      <h2>Available Listings</h2>
=======
      <h2 className="text-center">Available Listings</h2>
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
      <ListingList query={qs} />
    </div>
  )
}

ListingsPage.propTypes = {
<<<<<<< HEAD
  location: PropTypes.object.isRequired,
=======
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
}

export default withRouter(ListingsPage)
