import mongoose from 'mongoose';
const pendingOrderSchema = new mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	orderDate: Date,
	products: [{
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'Product'},
		quantity: Number,
		cost: Number,
	}]
});

mongoose.model('PendingOrder', pendingOrderSchema);

