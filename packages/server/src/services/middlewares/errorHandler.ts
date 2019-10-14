import { Context } from 'koa';

export const errorHandler = async(
  context: Context,
  next: () => Promise<void>
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    context.assert({}, 400, err.message);
  }
};
