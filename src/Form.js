import React from 'react';
import { Formik } from 'formik';

import styled from 'styled-components';

const FormInput = styled.input`
  {
    font-size: 12px;
    margin: 1rem 0;
    padding: .6rem;
  }
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  border: 1px solid #1b2638;
  background-color: white;
  color: #1b2638;
  display: inline-block;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 3rem 0;
`

const formValues = {
  email: '',
  firstname: '',
  password: '',
  lastname: ''
}

const validateForm = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

const ErrorText = styled.p`
 color: red;
`

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}


const Form = () => {
  return (
    <Formik
      initialValues={formValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorText>
              {errors.email && touched.email && errors.email}
            </ErrorText>
            <FormInput
              type="firstname"
              name="firstname"
              onChange={handleChange}
              placeholder="First Name"
              onBlur={handleBlur}
              value={values.firstname}
            />

            <FormInput
              type="lastname"
              name="lastname"
              onChange={handleChange}
              placeholder="Last Name"
              onBlur={handleBlur}
              value={values.lastname}
            />

            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </FormWrapper>
        )}
    </Formik>
  )
}

export default Form;