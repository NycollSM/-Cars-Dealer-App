const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('../cars.js');
    const reqUrl = url.parse(req.url, true);

    // GET
    if (reqUrl.pathname == '../index.html' && req.method === 'GET') {
            console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.sampleRequest(req, res);

        // POST Endpoint
    } else if (reqUrl.pathname == './index.html' && req.method === 'POST') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.testRequest(req, res);

    } else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);

        service.invalidRequest(req, res);

    }
});