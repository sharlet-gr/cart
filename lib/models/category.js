var mongoose=require('mongoose');
require('./product');
var Product = mongoose.model('Product');
var categorySchema = new mongoose.Schema({
	name:{type: String, required: true, unique: true},
	products:[{type: mongoose.Schema.Types.ObjectId,ref:'Product'}]
});

mongoose.model('Category', categorySchema);