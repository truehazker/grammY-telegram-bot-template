import 'dotenv/config';
import z from 'zod';

enum ELogLevel {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal',
}

const configSchema = z.object({
  BOT_API_KEY: z.string(),
  ADMIN_IDS: z.string().transform((str) => str.split(',')),
  LOG_LEVEL: z.nativeEnum(ELogLevel).default(ELogLevel.INFO),
});

const parseConfig = (env: NodeJS.ProcessEnv) => {
  return configSchema.parse(env);
};

export type TConfig = ReturnType<typeof parseConfig>;

export type ConfigFlavour = {
  config: TConfig;
}

export const Config = parseConfig(process.env);
