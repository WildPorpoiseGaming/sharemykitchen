import React from 'react'
import Listing from '../component/listing'

class ListingList extends React.Component {

  constructor(props) {
    super(props)

    this.state= {
      listings: [
        {
          'name': 'Vestibulum accumsan neque et nunc. Quisque',
          'host_id': 80,
          'pictures': ['http://www.homedepot.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Kitchen/kitchen-hero-2.jpg'],
          'features': {
              'refrigerator': 'stainless',
              'stove': 'gas',
              'oven': 'gas',
              'blender': 'oscar',
              'mixer': 'avantco',
              'seats': 2,
            },
          'rating': 1,
          'area': 'Wie',
          'address': '736 Et Avenue',
          'city': 'Vienna',
          'zip': '37741',
        },
        {
          'name': 'odio. Nam interdum enim non nisi.',
          'host_id': 39,
          'pictures': ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Modern_kitchen_gnangarra.JPG/1200px-Modern_kitchen_gnangarra.JPG'],
          'features': {
              'refrigerator': 'black',
              'stove': 'gas',
              'oven': 'electric',
              'blender': 'vitamix',
              'mixer': 'avantco',
              'seats': 4,
            },
          'rating': 5,
          'area': 'C',
          'address': 'Ap #726-3005 Molestie Road',
          'city': 'Paraíso',
          'zip': '15682',
        },
        {
          'name': 'luctus vulputate, nisi sem semper erat,',
          'host_id': 22,
          'pictures': ['http://hbu.h-cdn.co/assets/17/08/1600x1028/gallery-1487868231-kitchen-1.jpg'],
          'features': {
              'refrigerator': 'black',
              'stove': 'electric',
              'oven': 'gas',
              'blender': 'oscar',
              'mixer': 'avantco',
              'seats': 4,
              },
          'rating': 3,
          'area': 'ON',
          'address': '3405 Est Avenue',
          'city': 'Markham',
          'zip': '35-641',
        },
      ]
    }
  }

  componentDidMount() {
    //TODO:
    //get the query info from props
    console.log(this.props.qs)
    //query the database for kitchens that match the query
      //set the state with these kitchens
  }

  handleListingClick() {
    //TODO: 
    //write function to direct user to individual listing page when 
    //a listing is clicked
  }

  render() {
    return (
        <div className="listing-list">
          {this.state.listings.map((kitchen, i) => {
            return <Listing kitchen={kitchen} key={i} />
          }
          )}
        </div>
      )
  }
}

export default ListingList 