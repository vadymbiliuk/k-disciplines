import Koa from 'koa';
import jwt from 'koa-jwt';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import Router from 'koa-router';
import logger from 'koa-logger';
import { Routes } from './routes';
import { errorHandler } from './services/middlewares/errorHandler';
import { createConnection, ConnectionOptionsReader } from 'typeorm';

const corsOptions = {
  allowHeaders: ['X-Total-Count', 'Authorization', 'content-type'],
  exposeHeaders: ['X-Total-Count', 'Authorization', 'content-type'],
  credentials: true,
  allowedMethods: ['get', 'post', 'put', 'delete'],
};

const Main = async() => {
  const connectionOptionsReader = new ConnectionOptionsReader({
    root: process.cwd(),
  });

  const connectionOptions = {
    ...(await connectionOptionsReader.get(
      process.env.TYPEORM_CONNECTION || 'default',
    )),
    entities: [`${__dirname}/database/entities/**/*.ts`],
    migrations: [`${__dirname}/database/migrations/**/*.ts`],
  };

  try {
    await createConnection(connectionOptions);

    console.log('Server is connected to database.');

    const app = new Koa();
    const router = new Router();

    app.use(cors(corsOptions));

    app.use(
      jwt({
        secret: process.env.JWT_SECRET || 'secret',
      }).unless({
        path: [new RegExp(/^\/public/)],
      }),
    );

    Routes.forEach((route) => router[route.method as 'get' | 'post' | 'delete' | 'put'](route.path, route.action));

    app.use(logger());

    app.use(errorHandler);
    app.use(
      koaBody({
        multipart: true,
      }),
    );
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(3005);

    console.log('The server is up and running on port 3005');
  } catch (error) {
    console.log(`TypeORM error: ${error}`);
  }
};

Main();
