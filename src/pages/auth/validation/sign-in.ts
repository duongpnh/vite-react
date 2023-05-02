import { object, string } from 'yup';

export const signInSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  password: string().required('Required'),
});
