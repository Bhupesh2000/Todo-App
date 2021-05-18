// requiring express server
const express=require('express');
const router=express.Router();
// requiring home controllers
const homeController=require('../controllers/home_controller');

//setup the get request
router.get('/',homeController.homeGet);
router.post('/create-entry',homeController.homePost);
router.get('/delete-entry/',homeController.homeDelete);
// exporting the router
module.exports=router;

