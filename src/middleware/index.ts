import { Composer } from 'grammy';
import { BotContext } from '../types';
import { hydrate } from '@grammyjs/hydrate';
import { configMiddleware } from './common';
import { loggerMiddleware } from './common';

// Global middleware
// Add new middleware to this file
const middleware = new Composer<BotContext>();
middleware.use(hydrate());
middleware.use(configMiddleware); // Makes the config available in the context
middleware.use(loggerMiddleware); // Makes the logger available in the context

export default middleware;
