import { Logger } from '../constants';
import { GrammyError, HttpError } from 'grammy';

const errorHandler = (err: any) => {
  const ctx = err.ctx;
  Logger.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    Logger.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    Logger.error("Could not contact Telegram:", e);
  } else {
    Logger.error("Unknown error:", e);
  }
}

export default errorHandler;
