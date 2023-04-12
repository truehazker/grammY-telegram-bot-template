# GrammY telegram bot template

This is a template for a [GrammY](https://grammy.dev) bot. It is a good starting point for your own bot.

## Getting started

1. Clone this repository
2. Create .env file from provided .env.example and fill it with your bot token and other variables
3. Run `yarn` to install dependencies
4. Run `yarn dev` to start the bot in development mode
5. Run `yarn build` to build the bot for production
6. Run `yarn start` to start the bot in production mode

## Features

- Scalable architecture
- TypeScript support
- Configurable with environment variables
- Built-in logging

## Environment variables

| Variable    | Description                                             | Default | Required |
|-------------|---------------------------------------------------------|---------|:--------:|
| BOT_API_KEY | Telegram bot token                                      |         |    ✓     |
| ADMIN_IDS   | Comma-separated list of Telegram user IDs of bot admins |         |          |
| LOG_LEVEL   | Log level                                               | info    |          |


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)