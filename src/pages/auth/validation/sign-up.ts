import { object, ref, string } from 'yup';

export const signUpSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  password: string().required('Required'),
  passwordConfirmation: string()
    .oneOf([ref('password')], 'Password mismatch')
    .required('Required'),
  firstName: string().required('Required'),
  lastName: string().required('Required'),
});
