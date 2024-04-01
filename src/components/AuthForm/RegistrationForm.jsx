import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormBtn, FormWrapper } from './AuthForm.styled';
import { registerSchema } from 'shemas/authShemas';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  return (
    <FormWrapper>
      <h2 className="form-title">Registration</h2>
      <p className="form-description">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={values => {
          console.log('submit', values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-container">
            <div className="input-wrap">
              <label>
                <Field
                  name="name"
                  type="name"
                  placeholder="Name"
                  className="input"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </label>

              <label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </label>

              <label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </label>
            </div>

            <FormBtn type="submit">Sign In</FormBtn>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default RegistrationForm;
