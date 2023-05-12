import { Logger } from '../../services';
import { BotContext } from '../../types';

export const loggerMiddleware = (ctx: BotContext, next: () => Promise<void>) => {
  ctx.logger = Logger;
  return next();
}
