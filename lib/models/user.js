var mongoose=require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
require('./product');
var Product = mongoose.model('Product');
var userSchema = new mongoose.Schema({
	emailid:{type: String, required: true, unique: true},
	name:{type: String, required: true},
	password:{type: String, required: true},
	address: String,
	phone: String,
	carts: [{
		name: {type: String, unique: true, required:true},
		products: [{
			product: {type: mongoose.Schema.Types.ObjectId,ref:'Product'},
			quantity: Number,
			cost: Number
		}]
	}],
	orders: [{
		product: {type: mongoose.Schema.Types.ObjectId,ref:'Product'},
		quantity: Number,
		cost: Number,
		date: Date, default: Date.now
	}]
});
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

mongoose.model('User', userSchema);
