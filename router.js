const express = require('express')
const router = express.Router()
const siginInModel = require('./model/signin_model')
const bcrypt = require('bcryptjs')
const validator = require('validator');

router.post('/signin',(req,res)=>{
	
if(validator.isEmail(req.body.email)){



	siginInModel.findOne({"email":req.body.email}).then((data)=>{
		if(data){
			res.render('login',{data:"you already signIn please login"})
		}else{
			const hash_password = bcrypt.hashSync(req.body.password,10)

			siginInModel({
				username:req.body.username,
				email:req.body.email,
				password:hash_password
			}).save((err)=>{
				if(err){throw err}else{
					res.render('login',{data:"you sign In succesfully please login"})
				}
			})
		}




	})

}else{
	res.render('signin',{data:"Please enter a valid email address"})
}

})











module.exports = router













































