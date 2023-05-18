import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import config from 'config';

const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));

bot.on(message('voice'), async context => await context.reply('hello my friend2'));

bot.command('start', async context => await context.reply('hello my friend'));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
