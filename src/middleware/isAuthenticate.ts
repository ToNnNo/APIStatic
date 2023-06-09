import jwt from 'jsonwebtoken';

export default function isAuthenticated(req, res, next) {

    if(undefined !== req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            let payload = jwt.verify(token, 'commentestvotreblanquette', {
                algorithms: 'HS512'
            });
            next();
            return;
        }catch(e){}
    }

    res.status(401).json({ status: 401, message: `Erreur d'authentification`});
}
