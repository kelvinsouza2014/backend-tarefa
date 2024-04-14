import "reflect-metadata";
// import { createConnection } from "typeorm";
import express from "express";
import { AppDataSource } from './src/data-source';
import * as bodyParser from "body-parser";
import routes from "./routes";
import cors from '../backend-tarefa/node_modules/cors';

AppDataSource.initialize().then(async () => {
  const app = express();
  // createConnection()

  app.use(cors());
  app.use(bodyParser.json())
  app.use(routes);
  
  app.listen(3333);
})

// const app = express()
// createConnection()

// app.use(cors())
// app.use(bodyParser.json())
// app.use(routes)
 
// app.listen(3333)