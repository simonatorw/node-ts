import express from 'express';
import { parse } from './utils';
import { CHILD_ROUTE, VER_1, VER_2 } from './constants';

const router = express.Router()

router.post(CHILD_ROUTE, function(req, res) {
    const ver: string = req.path.split('/')[1];

    if (ver === VER_1 || ver === VER_2) {
        res.json(parse(req.body.data, ver));
    }
});

export default router;