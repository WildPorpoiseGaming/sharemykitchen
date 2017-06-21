import React from 'react'

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const features = this.props.kitchen.features

    return (
        <div className="one-listing">
          <h2>{this.props.kitchen.name}</h2>
          <img className="listing-pic" src={this.props.kitchen.pictures[0]} /> 
          <div className="listing-details">
            Area: {this.props.kitchen.area} <br>
            </br>
            Rating: {this.props.kitchen.rating} <br>
            </br>
            Features: 
              <ul>
                {Object.keys(features).map( (keyValue, keyIndex) => {
                  return <li key={keyIndex}>{keyValue}</li>
                })}
              </ul>
          </div>
        </div>
      )
  }
}

export default Listing
