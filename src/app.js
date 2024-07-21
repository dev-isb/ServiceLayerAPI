/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */

var fs = require('fs');
var http = require('http');

require('./database/index');
// var https = require('https');
// var privateKey = fs.readFileSync('./certificates/server.key', 'utf8');
// var certificate = fs.readFileSync('./certificates/server.crt', 'utf8');
// var credentials = { key: privateKey, cert: certificate };
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
/* Routes */
const router = require('./routes')

/* Middlewares */
app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ limit: "25mb" }));
app.use(router)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// app.listen(3000, () => {
//     console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")
// })


var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")

// httpsServer.listen(3001);
// console.log("Server is running!\nAPI documentation: https://localhost:3001/doc")
