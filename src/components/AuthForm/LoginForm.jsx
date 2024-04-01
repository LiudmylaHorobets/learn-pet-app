// import { Formik } from 'formik';
import { FormStyled, FormBtn, FormWrapper } from './AuthForm.styled';

const LoginForm = () => {
  return (
    <FormWrapper>
      <h2 className="form-title">Log In</h2>
      <p className="form-description">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <FormStyled>
        <div className="form-container">
          <label>
            <input name="email" type="email" placeholder="Email" />
          </label>

          <label>
            <input name="password" placeholder="Password" />
          </label>
        </div>

        <FormBtn type="submit">Log In</FormBtn>
      </FormStyled>
    </FormWrapper>
  );
};

export default LoginForm;
