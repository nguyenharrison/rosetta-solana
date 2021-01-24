import { Router, Request, Response } from 'express';
import network from './routes/network';
// guaranteed to get dependencies
export default () => {
	const app = Router();
	network(app);
	
	return app
}