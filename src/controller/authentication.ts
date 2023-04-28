import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authenticationRouter = express.Router();

authenticationRouter.route('').post(async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if("admin" != username || "admin" != password) {
        res.status(400).json({ status: 400, message: `Erreur d'authentification` });
        return;
    }

    const user = { grade: "Maitre", firstname: "Obi Wan", lastname: "Kenobi" };
    const payload = { user };
    const token = await jwt.sign(payload, 'commentestvotreblanquette', {
        algorithm: 'HS512',
        expiresIn: 900
    });

    res.json({ token, user });

}).all((req: Request, res: Response) => {
    res.status(405).send( { status: 405, message: 'Method Not Allowed' });
});
