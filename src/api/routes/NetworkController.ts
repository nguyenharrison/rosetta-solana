import { Connection } from '@solana/web3.js';
import { Router, Request, Response, NextFunction} from 'express';
import { Logger } from 'winston';
import { Container} from 'typedi';
import NetworkService from '../../service/NetworkService';
import { NetworkIdentifier } from '../../interfaces/NetworkIdentifier';

const route = Router();

export default (app: Router) => {
  app.use('/network', route);


  route.post('/list', (req: Request, res: Response) => {
    const networkService = Container.get(NetworkService);
    const availableNetworks = networkService.getAvailableNetworks();
    const logger: Logger = Container.get('logger');
    logger.info("This is waht we're getting");
    logger.info(availableNetworks);
    return res.send(availableNetworks).status(200);
  });

  route.post(
    '/options',// add body validation here with celebration + joi),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger:Logger = Container.get('logger');
      logger.debug('Calling options endpoint');
      try {
        const networkServiceInstance = Container.get(NetworkService);
        const blockIdentifier = await networkServiceInstance.getNetworkStatus(req.body as NetworkIdentifier);
        logger.info("Found block identifier of recent slot");
        logger.info(JSON.stringify(blockIdentifier));
        return res.sendStatus(204);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
   );

};