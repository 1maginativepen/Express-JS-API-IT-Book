 

(
    function() {
        "use strict";
        let express = require('express');
        var http=require('http'); 
        var cors = require('cors');   
        const bodyParser = require('body-parser'); 
        const router = express.Router();
        const fs = require('fs')
        const detect = require('detect-port');

        let app = express();

        // import fetch from 'cross-fetch';
        
        const port = process.env.PORT || 9100;
        const ENDPOINT = 'https://api.itbook.store';
        /*
            Routing Variable
        */  

        app.get('/verify-me', cors(),  function (req, res) { 
            res.json({"status":"202"})
        });  

        app.get('/books_new', cors(),  function (req, res) { 
            var request = require('request');
            var options = {
                'method': 'GET',
                'url': ENDPOINT+'/1.0/search/'+ req.query.query,
                'headers': {
                }
            }; 

            request(options, function (error, response) {
                if (error) throw new Error(error);  
                
                res.json(JSON.parse(response.body).books)
            }); 
        });   

        app.get('/books_query', cors(),  function (req, res) { 
            var request = require('request');
            var options = {
                'method': 'GET',
                'url': ENDPOINT+'/1.0/books/'+ req.query.query,
                'headers': {
                }
            }; 

            request(options, function (error, response) {
                if (error) throw new Error(error);  
                
                res.json(JSON.parse(response.body))
            });
            
        });   

        const authLogin = require('./routes/users/authLogin');
        app.use('/login', cors(), authLogin);    

        // app.get('/file-picture', function (req, res) { 

        //     const path = __dirname +'/resources/img/'+req.query.user_id;
        //     fs.access(path, fs.F_OK, (err) => {
        //         if (err) {
        //             res.sendFile(__dirname +'/resources/img/nophoto.jpg') 
        //             return
        //         }
        //         res.sendFile(__dirname +'/resources/img/'+req.query.user_id) 
        //       })
        // }); 
 

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true, }));



        app.use(cors()); 

        // Default Endpoint
        app.get('/', function(req, res) { res.send("<marquee><h1 style='color : red'>You should not be here. Sending notification to administrators ...</h1></marquee>"); }); 

        detect(port, (err, _port) => {
            if (err) {
              console.log(err);
            }
           
            if (port == _port) {
              console.log(`port: ${port} was not occupied`);

                let server = app.listen(port, function () { console.log("You should not be here. Sending notification to administrators ...") });  

            } else {
              console.log(`port: ${port} was occupied, try port: ${_port}`);
            }
        });

        app.use((err, req, res, next) => {
            const statusCode = err.statusCode || 500;
            console.error(err.message, err.stack);
            res.status(statusCode).json({'message': err.message}); 
            return;
          });

        module.exports = app;
    }()
);