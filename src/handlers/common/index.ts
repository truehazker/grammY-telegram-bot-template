import { Composer } from 'grammy';
import { BotContext } from '../../types';
import handleStart from './start.handler';

const commonHandlers = new Composer<BotContext>();
commonHandlers.command(['start', 'help'], handleStart);

export default commonHandlers;
