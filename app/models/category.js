var mongoose=require('mongoose');
var categorySchema = new mongoose.Schema({
	name:{
		type: String, 
		required: true, 
		unique: true
	},
	products:[{
		type: mongoose.Schema.Types.ObjectId,
		ref:'Product'
	}]
});

mongoose.model('Category', categorySchema);