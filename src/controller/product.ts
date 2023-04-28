import express, { Request, Response } from 'express';

export const productRouter = express.Router();

productRouter.route('').get((req: Request, res: Response) => {
    const products = [
        { id: 1, name: "Pommes Golden", price: 2.79},
        { id: 2, name: "Baguette", price: 1.56 },
        { id: 3, name: "Jambon à poêler", price: 3.55 },
        { id: 4, name: "Oeuf", price: 1.67 },
        { id: 5, name: "Coca", price: 1.69 },
    ];

    res.json(products);
}).all((req: Request, res: Response) => {
    res.status(405).send( { status: 405, message: 'Method Not Allowed' });
});
