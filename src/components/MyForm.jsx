import React from "react";
import * as Yup from "yup";
import MySelect from "./MySelect";
import { withFormik } from "formik";

const selectOptions = [
  { value: "Food", label: "Food" },
  { value: "Being Fabulous", label: "Being Fabulous" },
  { value: "Ken Wheeler", label: "Ken Wheeler" },
  { value: "ReasonML", label: "ReasonML" },
  { value: "Unicorns", label: "Unicorns" },
  { value: "Kittens", label: "Kittens" }
];

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    setFieldTouched
  } = props;
  return (
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
  );
};

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    topics: Yup.array().min(1, "Pick at least 1 tag")
  }),
  mapPropsToValues: props => ({
    topics: []
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("handleSubmit");
    console.log("values", values);
  },
  displayName: "MyForm"
});

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;
