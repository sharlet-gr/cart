"use strict";

import express from 'express';     
import mongoose from 'mongoose';  
import morgan from 'morgan';             
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import http from 'http';
import path from 'path';

let app = express();

mongoose.connect('mongodb://localhost/cart');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '../public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(cookieParser());
app.use(bodyParser());
app.use(expressSession({secret: 'a secret'}));

app.use(function(req,res,next){
	if(req.session.userId){
		req.user = req.session.userId;
		if((Date.now()-req.session.timestamp)>2)
			req.session.destroy();
	}
	next();
});

require('./controllers/index')(app);

app.listen(3000);
console.log("App listening on port 3000");