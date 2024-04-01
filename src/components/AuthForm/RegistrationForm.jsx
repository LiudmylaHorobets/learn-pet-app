// import { Formik } from 'formik';

import { FormBtn, FormStyled, FormWrapper } from './AuthForm.styled';

const RegistrationForm = () => {
  return (
    <FormWrapper>
      <h2 className="form-title">Registration</h2>
      <p className="form-description">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <FormStyled>
        <div className="form-container">
          <label>
            <input name="name" type="name" placeholder="Name" />
          </label>

          <label>
            <input name="email" type="email" placeholder="Email" />
          </label>

          <label>
            <input name="password" placeholder="Password" />
          </label>
        </div>

        <FormBtn type="submit">Sign In</FormBtn>
      </FormStyled>
    </FormWrapper>
  );
};

export default RegistrationForm;
