import { Container } from 'typedi';
import LoggerInstance from './Logger';
import config from '../config';
import SolanaInstance from './cluster'


export default () => {
  try {
    Container.set('solnode', SolanaInstance);
    Container.set('logger', LoggerInstance);

    return;
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};