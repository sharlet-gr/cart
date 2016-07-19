'use strict';

import * as mongoose from './mongoose';
import * as express from './express';

mongoose.connect((db) => {
	const app = express.init(db);
	app.listen(3000);
	console.log("App listening on port 3000");	
});



