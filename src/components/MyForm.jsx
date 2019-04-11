import React, { Component } from "react";
import * as Yup from "yup";
import MySelect from "./MySelect";
import { Formik } from "formik";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {};
  }

  handleSubmit = values => {
    console.log("handleSubmit");
    console.log("values", values);
  };

  initialValues = {
    topics: []
  };

  validationSchema = Yup.object().shape({
    topics: Yup.array().min(1, "Pick at least 1 tag")
  });

  render() {
    const { selectOptions } = this.props;
    return (
      <Formik
        ref={this.child}
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.validationSchema}
        render={({
          errors,
          handleBlur,
          handleSubmit,
          handleChange,
          setFieldTouched,
          setFieldValue,
          touched,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <MySelect
              error={errors.topics}
              name="topics"
              onBlur={setFieldTouched}
              onChange={setFieldValue}
              options={selectOptions}
              touched={touched.topics}
              value={values.topics}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    );
  }
}

export default MyForm;
