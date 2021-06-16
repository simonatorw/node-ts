import express from 'express';
import { parse } from './utils';

const router = express.Router()

router.post('/v1/parse', function(req, res) {
    res.json(parse(req.body.data, 'v1'));
});

router.post('/v2/parse', function(req, res) {
    res.json(parse(req.body.data, 'v2'));
});

export default router;