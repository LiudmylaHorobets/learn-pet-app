import * as Yup from 'yup';

export const registerSchema = () => {
  return Yup.object({
    name: Yup.string()
      .min(2, 'Must be at least 2 characters long')
      .max(20, 'Must be no more than 20 characters')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .max(30, 'Must be no more than 30 characters')
      .required('Required'),
  });
};

export const loginSchema = () => {
  return Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters long')
      .max(20, 'Must be no more than 20 characters')
      .required('Required'),
  });
};
