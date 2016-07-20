var mongoose=require('mongoose');
var completedOrderSchema = new mongoose.Schema({
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
		deliveryDate: Date
	}]
});

mongoose.model('CompletedOrder', completedOrderSchema);

