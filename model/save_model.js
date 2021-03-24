const mongoose = require('mongoose')


const SaveSchema = new mongoose.Schema({

	username:{
		type:String,
		required:true

	},
	email:{
		type:String,
		required:true,


	},
	title:{
		type:String,
		required:true

	},
	data:{
		type:String,
		required:true

	}
	
	

})



module.exports = new mongoose.model('data',SaveSchema)





