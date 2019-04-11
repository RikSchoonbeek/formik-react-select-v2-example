import React from "react";
import Select from "react-select";

class MySelect extends React.Component {
  handleChange = value => {
    const { name } = this.props;
    // this is going to call setFieldValue and manually update values.topics
    this.props.onChange(name, value);
  };

  handleBlur = () => {
    const { name } = this.props;
    // this is going to call setFieldTouched and manually update touched.topics
    this.props.onBlur(name, true);
  };

  render() {
    const { name, options } = this.props;
    return (
      <React.Fragment>
        <Select
          id="color"
          options={options}
          isMulti={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
          name={name}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MySelect;
