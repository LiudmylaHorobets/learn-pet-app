import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormBtn, FormWrapper } from './AuthForm.styled';
import { loginSchema } from 'shemas/authShemas';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {

  const onSubmit = values => {
    console.log('submit', values);
  };
  return (
    <FormWrapper>
      <h2 className="form-title">Log In</h2>
      <p className="form-description">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form-container">
            <div className="input-wrap">
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

            <FormBtn type="submit">Log In</FormBtn>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default LoginForm;
