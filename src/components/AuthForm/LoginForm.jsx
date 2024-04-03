import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormBtn, FormWrapper, IconTogglePassword } from './AuthForm.styled';
import { loginSchema } from 'shemas/authShemas';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Icon from 'components/Icon/Icon';
import { togglePassword } from 'utils/togglePassword';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ closeModal }) => {
  const [error, setError] = useState('');

  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);

  const loginSubmit = values => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(user => {
        console.log(user);
        setError('');
        closeModal();
      })
      .catch(error => setError(error.message));
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
        onSubmit={loginSubmit}
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
                  autoComplete="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </label>

              <label className="label-toggle-password">
                <Field
                  name="password"
                  type={toggleInput}
                  placeholder="Password"
                  className="input "
                />
                <IconTogglePassword
                  className="eye-password"
                  onClick={() =>
                    togglePassword(toggleInput, setToggleInput, setToggleIcon)
                  }
                >
                  {toggleIcon ? (
                    <Icon className="icon-eye" id="eye" />
                  ) : (
                    <Icon className="icon-eye-off" id="eye-off" />
                  )}
                </IconTogglePassword>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </label>
            </div>

            <FormBtn type="submit">Log In</FormBtn>
            {error && <div className="error-message">{error}</div>}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default LoginForm;
