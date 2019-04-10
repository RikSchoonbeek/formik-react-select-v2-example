import React from "react";
import * as Yup from "yup";
import MySelect from "./MySelect";
import { withFormik } from "formik";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  getSelectValue = () => {
    // const { values: formikValues, newTags } = this.props;
    // const combinedValues = [newTags, ...formikValues.topics];
    // return combinedValues;

    const { values: formikValues } = this.props;
    return formikValues.topics;
  };

  render() {
    const {
      values,
      touched,
      errors,
      handleSubmit,
      selectOptions,
      setFieldValue,
      setFieldTouched
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <MySelect
          error={errors.topics}
          name="topics"
          onBlur={setFieldTouched}
          onChange={setFieldValue}
          options={selectOptions}
          touched={touched.topics}
          value={this.getSelectValue()}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    topics: Yup.array().min(1, "Pick at least 1 tag")
  }),
  mapPropsToValues: props => ({
    topics: []
  }),
  handleSubmit: values => {
    console.log("handleSubmit");
    console.log("values", values);
  },
  displayName: "MyForm"
});

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;
