const express = require('express');
const controller = require('./controller');
const dotenv = require('dotenv')
const massive = require('massive');
dotenv.config()
const port = process.env.SERVER_PORT
const connectionString = process.env.CONNECTION_STRING

const server = express();
massive({connectionString,ssl: {rejectUnauthorized: false}})
    .then(dbInstance => {
        console.log("DB instance configured");
        server.set('db', dbInstance);
        server.use(express.json())
        server.get('/api/inventory', controller.getInventory);
        server.get('/api/product/:id', controller.getProduct);
        server.post('/api/product', controller.createProduct);
        server.put('/api/product/:id', controller.updateProduct);
        server.delete('/api/product/:id', controller.deleteProduct);
        
        server.listen(port, () =>{
            console.log("Server running on port: "+port);
        })

    })
    .catch(err => console.log(err));
