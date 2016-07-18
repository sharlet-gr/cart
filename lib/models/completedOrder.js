var mongoose=require('mongoose');
require('./product');
var Product = mongoose.model('Product');
require('./user');
var User = mongoose.model('User');
var completedOrderSchema = new mongoose.Schema({
	product:{type: mongoose.Schema.Types.ObjectId,ref:'Product'},
	quantity:Number,
	orderDate: Date,
	deliveryDate: {type: Date, required:true},
	user:{type: mongoose.Schema.Types.ObjectId,ref:'User'},
	cost:Number,
	user:{type: mongoose.Schema.Types.ObjectId,ref:'User'},
});

mongoose.model('CompletedOrder', completedOrderSchema);

