const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 443;

const app = express();
const server = http.createServer(app);

app.use('/assets',express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/assets/index.html'));
});

server.listen(port, () => {
  console.log('Server listening at port %d', port)
})
