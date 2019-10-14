import { Context } from 'koa';

export const signUpAction = async(context: Context) => {
  const { login, password } = context.request.body;

  console.log(login, password);
};
