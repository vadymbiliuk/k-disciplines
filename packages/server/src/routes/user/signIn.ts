import { Context } from 'koa';

export const signInAction = async(context: Context) => {
  const { login, password } = context.request.body;

  console.log(login, password);
};
