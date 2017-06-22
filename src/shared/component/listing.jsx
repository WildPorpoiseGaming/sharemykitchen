import React from 'react'
import PropTypes from 'prop-types'

class Listing extends React.Component {
  render() {
    const features = this.props.kitchen.features
    return (
      <div className="one-listing">
        <h2>{this.props.kitchen.name}</h2>
        <img className="listing-pic" src={this.props.kitchen.pictures[0]} alt="kitchen" />
        <div className="listing-details">
          Area: {this.props.kitchen.area} <br />
          Rating: {this.props.kitchen.rating} <br />
          Features:
            <ul>
              {Object.keys(features).map((keyValue, keyIndex) => {
                return <li key={keyIndex}>{keyValue}</li>
              })}
            </ul>
        </div>
      </div>
    )
  }
}

Listing.propTypes = {
  kitchen: PropTypes.object.isRequired,
}

export default Listing
