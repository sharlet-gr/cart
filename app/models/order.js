import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	orderDate: Date,
	delivered: Boolean,
	products: [{
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'Product'},
		quantity: Number,
		cost: Number,
		deliveryDate: Date
	}]
});

mongoose.model('Order', orderSchema);

