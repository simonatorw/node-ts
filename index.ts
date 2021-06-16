import express from 'express';
import { allowCrossDomain } from './utils';
import api from './api';
import { PORT } from './constants';

const app = express();

app.use(allowCrossDomain);
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});