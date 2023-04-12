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
  ADMIN_IDS: z.array(z.number().int()).default([]),
  LOG_LEVEL: z.nativeEnum(ELogLevel).optional().default(ELogLevel.INFO),
});

const parseConfig = (env: NodeJS.ProcessEnv) => {
  // Parse ADMIN_IDS from string to array of numbers
  const adminIds = env.ADMIN_IDS ? env.ADMIN_IDS.split(',').map((id) => parseInt(id)) : [];
  return configSchema.parse({
    ...env,
    ADMIN_IDS: adminIds
  });
};

export type TConfig = ReturnType<typeof parseConfig>;

export type ConfigFlavour = {
  config: TConfig;
}

export const Config = parseConfig(process.env);
