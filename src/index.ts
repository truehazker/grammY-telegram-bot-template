import { Bot } from 'grammy';
import { BotContext } from './types';
import middleware from './middleware';
import { Config } from './services';
import { Logger } from './services';
import errorHandler from './handlers/error.handler';
import handlers from './handlers';
import { run } from '@grammyjs/runner';

const main = async () => {
  Logger.info('Starting bot...');
  const bot = new Bot<BotContext>(Config.BOT_API_KEY);
  Logger.info('Bot created');

  bot.use(middleware); // Load all middleware
  Logger.info('Middleware loaded');

  bot.use(handlers); // Load all handlers
  Logger.info('Handlers loaded');

  bot.catch(errorHandler); // Catch all unhandled errors
  Logger.info('Error handler loaded');

  await bot.init();

  run(bot);
  Logger.info(`Bot started as @${bot.botInfo.username}`);
}

main()
  .catch((err) => {
    Logger.error(err);
    process.exit(1);
  });
