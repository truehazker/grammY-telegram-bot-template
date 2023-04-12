import pino, { DestinationStream, LoggerOptions } from 'pino';
import { Config } from '../index';

const options: LoggerOptions = {
  level: Config.LOG_LEVEL,
};

const transport = pino.transport({
  targets: [
    {
      target: 'pino-pretty',
      level: Config.LOG_LEVEL,
      options: {
        ignore: 'pid,hostname',
        colorize: true,
        translateTime: true,
      },
    },
  ],
}) as DestinationStream;

export const Logger = pino(options, transport);

export type LoggerFlavour = {
  logger: pino.Logger;
}
