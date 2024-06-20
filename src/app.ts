import express, {Application, Request, Response} from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';
import bodyParser from 'body-parser';
import { corseHeaders } from './middlewares/cors.middleware';
import { productsRouter } from './routes/products.router';


const app:Application=express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(corseHeaders);

// app.use()

app.use('/skaiciuokle', skaiciuokleRouter);
app.use('/products', productsRouter);

export {app};