import { Context } from 'koa';
import { signUpManager } from '../../../managers/user';

export const signUpAction = async(context: Context) => {
  const {
    email,
    password,
    firstName,
    lastName, 
    course,
    faculty, 
  } = context.request.body;

  const response = signUpManager(
    email,
    password,
    firstName,
    lastName, 
    course,
    faculty
  );

  return response;
};
