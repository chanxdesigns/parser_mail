const http = require('http');
const app = require('../app');

/**
 * Listen HTTP Server
 */
app.listen(process.env.PORT || 3000, function () {
    console.log("Yo Fired Up");
});