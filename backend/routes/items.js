const express = require("express");
const router = express.Router();
const Item = require('../models/Item');
const Studuser = require('../models/Studuser');
const { findByIdAndUpdate } = require("../models/Studuser");

router.get('/getitem', async (req, res)=>{
    try {
        let items = await Item.find({}) // To find all the item pass empty json
        res.json(items)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

router.post('/additem', async (req, res)=>{
    try {
        let item = await Item.findOne({itemname:req.body.itemname})
        if(item){
            return res.status(400).json({error:"Item already exist"});
        }
        item = await Item.create({
            itemname:req.body.itemname,
            itemprice: req.body.itemprice
        })
        res.json(item);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.put('/updateitem/:id', async (req, res)=>{
    const {itemname, itemprice} = req.body; // destructure
    try {
        let item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).send("Not Found");
        }
        const newItem = {}
        if(itemname) {newItem.itemname = itemname}
        if(itemprice) {newItem.itemprice = itemprice}

        item = await Item.findByIdAndUpdate(req.params.id, {$set: newItem}, {new:true})
        res.json(item)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
router.delete('/deleteitem/:id', async (req, res)=>{
    try {
        let item = await Item.findById(req.params.id);
        if(!item){
            return res.status(403).json({error: "Item doesn't exist"});
        }
        item = await Item.findByIdAndDelete(req.params.id);
        res.json(item); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }
})

router.get('/getstud', async (req, res)=>{
    try {
        let studusers = await Studuser.find({}).select('-password');
        if(!studusers){
            return res.status(400).json({error:"No student to display"});
        }
        res.json({studusers});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.put('/settlebill/:id', async (req, res)=>{
    try {
        let studuser = await Studuser.findById(req.params.id);
        if(!studuser){
            return res.status(400).json({error:"Student doesn't exist"});
        }
        let payamt = req.body.payamt;
        const newStud = {};
        if(payamt){
            newStud.billamt = studuser.billamt-payamt; 
        }
        studuser = await Studuser.findByIdAndUpdate(req.params.id, {$set:newStud}, {new:true}).select('-password');
        res.json({studuser});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;