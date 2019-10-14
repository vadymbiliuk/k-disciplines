import { Context } from 'koa';
import { logger } from '../logger/logger';

export const errorHandler = async(
  context: Context,
  next: () => Promise<void>
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    logger.log(err.message);
    context.assert({}, 400, err.message);
  }
};
