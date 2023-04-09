import { BotContext } from '../../types';

const handleStart = async (ctx: BotContext) => {
  await ctx.reply('Hello!');
};

export default handleStart;
