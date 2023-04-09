import { Context } from 'grammy';
import {
  HydrateFlavor,
} from '@grammyjs/hydrate';
import { ConfigFlavour, LoggerFlavour } from '../constants';

export type BotContext = HydrateFlavor<Context>
  & ConfigFlavour
  & LoggerFlavour;
