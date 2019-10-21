import { signUpAction } from './signUp';
import { signInAction } from './signIn';

export default [
  {
    path: '/public/signIn',
    method: 'post',
    action: signInAction,
  },
  {
    path: '/public/signUp',
    method: 'post',
    action: signUpAction,
  },
];
