import React from "react";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      stove: 'nopref',
      oven: 'nopref',
      mixer: 'nopref',
      blender: 'nopref',
      refrigerator: 'nopref',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("event submitted", this.state);
  }

  onChange(e) {
    console.log("event name", e.target.name);
    console.log("event value", e.target.value);
    console.log("event", e);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log("state", this.state);
    return (
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
              header: "Stove Type",
              children: [
                { name: "stove", label: "Gas Stove", value: "gas" },
                { name: "stove", label: "Electric Stove", value: "electric" },
                { name: "stove", label: "No Preference", value: "nopref" }
              ]
            },
            {
              header: "Oven Type",
              children: [
                { name: "oven", label: "Gas Oven", value: "gas" },
                { name: "oven", label: "Electric Oven", value: "electric" },
                { name: "oven", label: "No Preference", value: "nopref" }
              ]
            },
            {
              header: "Mixer Type",
              children: [
                { name: "mixer", label: "KitchenAid", value: "kitchenaid" },
                { name: "mixer", label: "Other Mixer", value: "other" },
                { name: "mixer", label: "No Preference", value: "nopref" }
              ]
            },
            {
              header: "Blender Type",
              children: [
                { name: "blender", label: "Vitamix Blender", value: "vitamix" },
                { name: "blender", label: "Other Blender", value: "other" },
                { name: "blender", label: "No Preference", value: "nopref" }
              ]
            },
            {
              header: "Refrigerator Type",
              children: [
                {
                  name: "refrigerator",
                  label: "Stainless Steel Refrigerator",
                  value: "stainless"
                },
                {
                  name: "refrigerator",
                  label: "Black Refrigerator",
                  value: "black"
                },
                {
                  name: "refrigerator",
                  label: "No Preference",
                  value: "nopref"
                }
              ]
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
      </div>
    )
  }
}

export default Home;