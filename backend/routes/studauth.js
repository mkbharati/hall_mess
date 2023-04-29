const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const {body, validationResult} = require('express-validator');
const Studuser = require('../models/Studuser');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mynameismanish'
router.post('/createstud',[
    body('name', "Enter a minimum charater").isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter minimum 5 character').isLength({min:5})
] ,async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        let studuser = await Studuser.findOne({email:req.body.email});
        if(studuser){
            return res.status(400).json({error:"Student alredy exist"});
        }
        const salt = await bcrypt.genSalt(10);
        let secPass =await bcrypt.hash(req.body.password, salt);
        studuser = await Studuser.create({
            name:req.body.name,
            email:req.body.email,
            password:secPass,
            billamt:0
        })
        const data = {
            studuser:{
               id:studuser._id 
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({authtoken});
    } catch (error) {
        console.error(error.message);
        console.log("Internal Server error");
    }
})

router.post('/loginstud', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Enter a valid password").isLength({min:5})
] ,async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        let studuser = await Studuser.findOne({email:req.body.email});
        if(!studuser){
            return res.status(400).json({error:"Invalid Ceredentials"});
        }
        let passwordComp = await bcrypt.compare(req.body.password, studuser.password);
        if(!passwordComp){
            return res.status(400).json({error:"Invalid Ceredentials"});
        }
        const data = {
            studuser:{
                id:studuser._id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({authtoken}); // both name are same the no need to return {authtoken:authtoken}
    } catch (error) {
        console.error(error.message);
        console.log("Internal Server Error");
    }
})

module.exports = router;