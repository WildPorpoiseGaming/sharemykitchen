/* eslint-disable react/no-array-index-key */

import React from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates'
import querystring from 'querystring'

import { FEATURE_TYPES } from '../config'
import HomePageCarousel from '../component/home-page-carousel'

const featureSelectColors = [
  { background: '#5764c6',
    WebkitTextFillColor: 'black',
  },
  { background: '#32b643',
    WebkitTextFillColor: 'black',
  },
  { background: '#ffb700',
    WebkitTextFillColor: 'black',
  },
  { background: '#e85600',
    WebkitTextFillColor: 'black',
  },
  { background: '#727e96',
    WebkitTextFillColor: 'black',
  },
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      stove: '',
      oven: '',
      mixer: '',
      blender: '',
      refrigerator: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const qsObj = {
      ...this.state,
      endDate: this.state.endDate && this.state.endDate.toString(),
      startDate: this.state.startDate && this.state.startDate.toString(),
      focusedInput: '',
    }
    const qs = querystring.stringify(qsObj)
    this.props.history.push({
      pathname: '/listings',
      search: `?${qs}`,
    })
  }

  onChange(e) {
    this.setState({
<<<<<<< HEAD
      [e.target.name]: e.target.value
=======
      [e.target.name]: e.target.value,
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <form onSubmit={this.onSubmit}>
          <h3> Pick Your Dates </h3>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
          {[
            {
              header: 'Stove Type',
              children: [
                { name: 'stove', label: 'Gas Stove', value: 'gas' },
                { name: 'stove', label: 'Electric Stove', value: 'electric' },
                { name: 'stove', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Oven Type',
              children: [
                { name: 'oven', label: 'Gas Oven', value: 'gas' },
                { name: 'oven', label: 'Electric Oven', value: 'electric' },
                { name: 'oven', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Mixer Type',
              children: [
                { name: 'mixer', label: 'KitchenAid', value: 'kitchenaid' },
                { name: 'mixer', label: 'Other Mixer', value: 'other' },
                { name: 'mixer', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Blender Type',
              children: [
                { name: 'blender', label: 'Vitamix Blender', value: 'vitamix' },
                { name: 'blender', label: 'Other Blender', value: 'other' },
                { name: 'blender', label: 'No Preference', value: '' },
              ],
            },
            {
              header: 'Refrigerator Type',
              children: [
                {
                  name: 'refrigerator',
                  label: 'Stainless Steel Refrigerator',
                  value: 'stainless',
                },
                {
                  name: 'refrigerator',
                  label: 'Black Refrigerator',
                  value: 'black',
                },
                {
                  name: 'refrigerator',
                  label: 'No Preference',
                  value: '',
                },
              ],
            },
          ].map((feature, i) => {
            return (
              <div key={i}>
                <h3>{feature.header}</h3>
                {feature.children.map((child, j) => {
                  return (
                    <label key={j} htmlFor={child.name}>
                      <input
                        type="radio"
                        name={child.name}
                        value={child.value}
                        onChange={this.onChange}
                      />
                      {child.label}
                    </label>
                  )
                })}
              </div>
            )
          })}
          <button type="submit">Submit</button>
        </form>
=======
      <div className="container">
        <div className="columns">
          <div className="col-12 text-center">
            <form onSubmit={this.onSubmit}>
              <HomePageCarousel />
              <p>Share My Kitchen is a place where foodies and entertainers can
              make their spaces and tools available to like-minded individuals.
              </p>
              <p>Looking for a kitchen to use for your next event or project?<br />
              Scroll down to customize your search.<br />
              Interested in advertising your fabulous space?<br />
              Click the host button above to get started!
              </p>
              <div className="divider" />
              <h4> Pick your dates: </h4>
              <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => {
                  this.setState({ startDate, endDate })
                }}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => {
                  this.setState({ focusedInput })
                }}
              />
              <div className="divider" />
              <h4> Pick your features: </h4>
              <div className="container">
                <div className="columns">
                  {FEATURE_TYPES.map((feature, i) => {
                    return (
                      <div key={i} className="col-2 centered card" style={featureSelectColors[i]}>
                        <h5 className="card-header">{feature.type}</h5>
                        {feature.children.map((child, j) => {
                          return (
                            <label className="centered card-body" key={j} htmlFor={child.name}>
                              <input
                                type="radio"
                                name={child.name}
                                value={child.value}
                                onChange={this.onChange}
                              />
                              {child.label}
                            </label>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
              <button className="btn btn-lg" type="submit">Submit</button>
            </form>
          </div>
        </div>
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
      </div>
    )
  }
}

<<<<<<< HEAD
=======
Home.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
export default Home
