import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from 'body-parser';
import { authenticationRouter } from "./src/controller/authentication";
import { quoteRouter } from "./src/controller/quote";
import { productRouter } from "./src/controller/product";
import isAuthenticated from "./src/middleware/isAuthenticate";

const app = express();
app.use(helmet());
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        'projet': 'API static Node pour React et Angular',
        'urls': [
            { 'method': 'POST', 'url': 'http://localhost:3200/authentication', 'authentication': false },
            { 'method': 'GET', 'url': 'http://localhost:3200/products', 'authentication': false },
            { 'method': 'GET', 'url': 'http://localhost:3200/quote', 'authentication': true },
        ],
        'users': [
            { 'username': 'admin', 'password': 'admin' }
        ]
    });
});

app.use('/authentication', authenticationRouter);
app.use('/quote', isAuthenticated, quoteRouter);
app.use('/product', productRouter);

app.use('*', (req: Request, res: Response) => {
    res.status(404).json({'message': 'Not Found'});
});

const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal TSNode Server is listenning on http://localhost:${port}`);
    console.log('Shutdown TSNode Server with CTRL + C');
});
