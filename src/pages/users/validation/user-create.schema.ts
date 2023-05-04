import { object, string } from 'yup';

export const userCreateSchema = object().shape({
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  email: string().email('Invalid email').required('Required'),
  avatar: string(),
});
