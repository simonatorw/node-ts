import { Request, Response, NextFunction } from 'express';

interface IInfo {
    firstName: string;
    lastName: string;
    clientId: string;
}

export function allowCrossDomain(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

export function parse(data: string, ver: string): IInfo {
    const info = data.split(/[0]+/);

    return {
        firstName: ver === 'v2' ? info[0] : data.substring(0, data.indexOf(info[1])),
        lastName: ver === 'v2' ? info[1] : data.substring(data.indexOf(info[1]), data.indexOf(info[2])),
        clientId: ver === 'v1' ? info[2] : `${info[2].substring(0, 3)}-${info[2].substring(3)}`
    };
}