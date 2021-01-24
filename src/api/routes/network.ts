import { Router, Request, Response } from 'express';
import { Container } from 'winston';
import NetworkService from '../../service/network';
const route = Router();

export default (app: Router) => {
  app.use('/network', route);
  const networkService = new NetworkService

  route.post('/list', (req: Request, res: Response) => {
      return res.send(networkService.getAvailableNetworks()).status(200);
  });

  route.post('/options', (req: Request, res: Response) => {
    return res.send(networkService.getAvailableNetworks()).status(200);
  });

  route.post('/status', (req: Request, res: Response) => {
    return res.send(networkService.getAvailableNetworks()).status(200);
});
};