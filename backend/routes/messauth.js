const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const {body, validationResult} = require('express-validator');
const Messuser = require('../models/Messuser');

router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Minimum length 5').isLength({min:5})
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
        let messuser = await Messuser.findOne({email:req.body.email})
        if(messuser){
            return res.status(400).json({error:'User already exist'})
        }
        const salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(req.body.password, salt);
        messuser = await Messuser.create({
            name:req.body.name,
            email:req.body.email,
            password:secPass
        })
        res.json(messuser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error")
    }

});

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password','minimum length id 5').isLength({min:5})
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array});
    }
    try {
        let messuser = await Messuser.findOne({email:req.body.email})
        if(!messuser){
            return res.status(400).json({error:"Invalid Ceredentials"})
        }
        let passwordCompare = await bcrypt.compare(req.body.password, messuser.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Invalid Ceredentials"});
        }
        res.json(messuser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error")
    }
})

module.exports = router;