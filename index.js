const http = require('http');

const Router = require('./core/router.js');
const cars = require('./controllers/carsBrand.js');

const routes = [
    {
        method: 'GET',
        path: 'api/v1/cars',
        controller: cars.getAll,
    },
    {
        method: 'GET',
        path: '/api/v1/cars/report',
        controller: cars.report
    },
    {
        method: 'GET',
        path: 'api/v1/cars/:id',
        controller: cars.getOne,
    },
    {
        method: 'POST',
        path: '/api/v1/cars',
        controller: cars.create
    },
    {
        method: 'PUT',
        path: '/api/v1/cars/:id',
        controller: cars.updateOne
    },
];

const server = http.createServer(Router.Register(routes));
server.listen(5000, '127.0.0.1', () => console.log('Server running on: 127.0.0.1:5000'));