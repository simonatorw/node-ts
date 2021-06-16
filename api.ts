import express from 'express';
import { parse } from './utils';

const router = express.Router()

router.post('/*/parse', function(req, res) {
    const ver = req.path.split('/')[1];

    if (ver === 'v1' || ver === 'v2') {
        res.json(parse(req.body.data, ver));
    }
});

export default router;