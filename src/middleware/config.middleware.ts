import { BotContext } from '../types';
import { Config } from '../services';

export const configMiddleware = (ctx: BotContext, next: () => Promise<void>) => {
  ctx.config = Config;
  return next();
}
