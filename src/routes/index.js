const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.html',{title:'first website'});
 });

 router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'contact website'});
 });

 module.exports = router;