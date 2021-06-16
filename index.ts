import express from 'express';
import { allowCrossDomain } from './utils';
import api from './api';
import { ROOT_ROUTE, PORT, STATIC_FOLDER } from './constants';

const app = express();

app.use(allowCrossDomain);
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(express.static(STATIC_FOLDER));
app.use(ROOT_ROUTE, api)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});