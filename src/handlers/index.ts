import { Composer } from 'grammy';
import { BotContext } from '../types';
import commonHandlers from './common';

const handlers = new Composer<BotContext>();
handlers.use(commonHandlers);

export default handlers;