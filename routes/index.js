// requiring express server
const express=require('express');
const router=express.Router();

// requiring home controllers
const homeController=require('../controllers/home_controller');

//setup the get request
router.get('/',homeController.homeGet);

// exporting the router
module.exports=router;

