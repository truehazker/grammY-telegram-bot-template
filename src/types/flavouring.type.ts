import { Context } from 'grammy';
import {
  HydrateFlavor,
} from '@grammyjs/hydrate';
import { ConfigFlavour, LoggerFlavour } from '../services';

export type BotContext = HydrateFlavor<Context>
  & ConfigFlavour
  & LoggerFlavour;
