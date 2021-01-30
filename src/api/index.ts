import { Router, Request, Response } from 'express';
import NetworkController from './routes/NetworkController';
// guaranteed to get dependencies
export default () => {
	const app = Router();
	NetworkController(app);
	
	return app
}