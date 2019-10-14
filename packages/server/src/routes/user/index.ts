import { signUpAction } from './signUp';
import { signInAction } from './signIn';

export default [
  {
    path: '/public/signup',
    method: 'post',
    action: signUpAction,
  },
  {
    path: '/public/signin',
    method: 'post',
    action: signInAction,
  },
];
