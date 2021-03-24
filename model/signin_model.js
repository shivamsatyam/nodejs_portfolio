const mongoose = require('mongoose')


const SigninSchema = new mongoose.Schema({

	username:{
		type:String,
		required:true

	},
	email:{
		type:String,
		required:true,
		unique:true

	},
	password:{
		type:String,
		required:true

	}
	

})



module.exports = new mongoose.model('person',SigninSchema)




































