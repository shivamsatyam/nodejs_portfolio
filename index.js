const express = require('express')
const app  = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const siginInModel = require('./model/signin_model')
const router = require('./router')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const Html5Entities = require('html-entities').Html5Entities
const bcrypt = require('bcryptjs')
const validator = require('validator');
const save_model  = require('./model/save_model.js')

const port = process.env.PORT || 5000


app.use(session({
 	secret:"shivam",
 	resave:false,
 	saveUninitialized:true,
 	store:new MongoStore({
 		url:'mongodb+srv://shivamsatyam:shivamsatyam123@cluster0.hrigk.mongodb.net/port?retryWrites=true&m=majority',
 		mongooseConnection:mongoose.connection,
 		ttl:14*24*60*60
 	})
 }))
 



mongoose.connect('mongodb+srv://shivamsatyam:shivamsatyam123@cluster0.hrigk.mongodb.net/port?retryWrites=true&m=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then((err)=>{
	console.log('the connection is successfully established')
})



app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
const static_path = path.join(__dirname,'public')
app.use(express.static(static_path))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
	if(req.session.email !=null){
			res.render('index')
	}else{
		res.render('login',{"data":''})
	}
})



app.get('/signin',(req,res)=>{
		console.log(req.session)
	res.render('signin',{data:""})
})
app.get('/login',(req,res)=>{
	console.log(req.session)
	res.render('login',{data:""})
})


app.post('/signin',router)

app.post('/login',(req,res)=>{
	console.log(req.session)
	if(validator.isEmail(req.body.email)){


	siginInModel.findOne({"email":req.body.email}).then((data)=>{
		if(data){
			if(bcrypt.compareSync(req.body.password,data.password)){
				req.session.username = data.username
				req.session.email = data.email

				res.render('login',{"data":"You login successfully"})
			}else{
				res.render('login',{"data":"Invalid login datails"})
			}
		}else{
			res.render('signin',{data:"Please sign In first"})
		}		
	})

	}else{

		res.render('login',{"data":"Please enter a valid email address"})
	}

})


app.post('/save',(req,res)=>{
	if (req.session.email) {
			title = req.body.title		
	data = req.body.data

	save_model({
		username:req.session.username,
		email:req.session.email,
		title:title,
		data:data,
	}).save((err)=>{
		if (err) {
			throw err;
		}else{
			res.redirect('/login')
		}
	})

	}

})



app.get('/your',(req,res)=>{
	if(req.session.email){
		save_model.find({'email':req.session.email}).then((data)=>{
			res.render('your',{data:data})
		})
	}else{
		res.render('login',{"data":"please login first"})
	}
})


app.get('/describe/:id',(req,res)=>{
	let id = req.params.id
	save_model.find({_id:id}).then((d)=>{
		data = d[0];

		res.render('describe',{data:data})
	})

})

app.get('/download/:a/:b',(req,res)=>{
res.send('fhj')

})

app.listen(port,(err)=>{
	console.log('the programm is running')
})

















