var mongoose=require('mongoose');
var productSchema = new mongoose.Schema({
	name:{type: String, required: true, unique: true},
	quantity:{type: Number, required:true, min:0},
	price:{type: Number, required:true, min:0},
	detail: String,
	images: [String],
	categories: [{type: mongoose.Schema.Types.ObjectId,ref:'Category'}]
});

mongoose.model('Product', productSchema);

