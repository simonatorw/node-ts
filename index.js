"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
});
function parse(data, ver) {
    var info = data.split(/[0]+/);
    return {
        firstName: ver === 'v2' ? info[0] : data.substring(0, data.indexOf(info[1])),
        lastName: ver === 'v2' ? info[1] : data.substring(data.indexOf(info[1]), data.indexOf(info[2])),
        clientId: ver === 'v1' ? info[2] : info[2].substring(0, 3) + "-" + info[2].substring(3)
    };
}
app.post('/api/v1/parse', function (req, res) {
    res.json(parse(req.body.data, 'v1'));
});
app.post('/api/v2/parse', function (req, res) {
    res.json(parse(req.body.data, 'v2'));
});
