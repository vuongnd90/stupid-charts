import { Request, Response, NextFunction } from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic');
        res.end('Access denied');
    } else {
        next();
    }
}

export { checkAuth };