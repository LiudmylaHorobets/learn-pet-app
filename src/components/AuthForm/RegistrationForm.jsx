import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormBtn, FormWrapper, IconTogglePassword } from './AuthForm.styled';
import { registerSchema } from 'shemas/authShemas';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

import Icon from 'components/Icon/Icon';
import { togglePassword } from 'utils/togglePassword';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = ({ closeModal }) => {
  const [error, setError] = useState('');

  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);

  const registerSubmit = (values, { setSubmitting }) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        const user = userCredential.user;
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            console.log(user);
            setError('');
            closeModal();
          })
          .catch(error => setError(error.message));
      })
      .catch(error => setError(error.message));
    setSubmitting(false);
  };

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
        onSubmit={registerSubmit}
      >
        {/* {({ errors, touched }) => ( */}
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
                  className="input"
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

            <FormBtn type="submit">Sign In</FormBtn>
            {error && <div className="error-message">{error}</div>}
          </Form>
        {/* )} */}
      </Formik>
    </FormWrapper>
  );
};

export default RegistrationForm;
