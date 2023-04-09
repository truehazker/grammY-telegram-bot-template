import { Logger } from '../constants';
import { BotContext } from '../types';

export const loggerMiddleware = (ctx: BotContext, next: () => Promise<void>) => {
  ctx.logger = Logger;
  return next();
}
