const express=require('express');
const route=express.Router();
const homecontroller=require('../controllers/homecontroller');
const registrationcontroller=require('../controllers/registrationcontroller');
const logincontroller=require('../controllers/logincontroller');
const authusermiddleware=require('../middleware/authusermiddleware');
const authusergetdatamiddleware=require('../middleware/authusergetdatamiddleware');
const getdatacontroller=require('../controllers/getdatacontroller');
const logoutcontroller=require('../controllers/logoutcontroller');
route.get('/',homecontroller);
route.get('/home',authusermiddleware,homecontroller);
route.get('/logout',logoutcontroller);
route.get('/getdata',authusergetdatamiddleware,getdatacontroller);
route.post('/register',registrationcontroller);
route.post('/login',logincontroller);


module.exports=route;