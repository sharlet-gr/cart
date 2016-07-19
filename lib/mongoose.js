import mongoose from 'mongoose';

export function connect(cb){
	const db = mongoose.connect('mongodb://localhost/cart',  (err) => {
		if(err)
			console.log(err);
		if(cb) cb(db);
	});
}