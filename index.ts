import express from 'express';
import { allowCrossDomain } from './utils';
import api from './api';

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

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});



