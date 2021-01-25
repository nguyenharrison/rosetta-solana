import expressLoader from './Express';
import Logger from './Logger';
import cluster from './cluster';
import dependencyInjectorLoader from './DependencyInjector'
//We have to import at least all the events once so they can be triggered
//import './events';

export default async ({ expressApp }) => {
    // It returns the agenda instance because it's needed in the subsequent loaders
    const dependencyInjector = dependencyInjectorLoader()
// you probably load the solana connection here and then inject it into the apps. 
    await expressLoader({ app: expressApp });
    Logger.info('✌️ Express loaded');
};
