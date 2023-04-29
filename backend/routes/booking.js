const express = require('express');
const router = express.Router();
const Studuser = require('../models/Studuser');
const Item = require('../models/Item');
const fetchstuduser = require('../middleware/fetchstuduser');
const Bookeditem = require('../models/Bookeditem');

router.get('/getbooked', fetchstuduser, async (req, res)=>{
    try {
        let bookeditem = await Bookeditem.find({studuser:req.studuser.id});
        let studuser = await Studuser.findById(req.studuser.id);
        if(!studuser){
            return res.status(401).json({error:"Student Not found"});
        }
        let bill_amount = studuser.billamt;
        if(!bookeditem){
            return res.status(400).json({error:"No item booked"})
        }
        res.json({bill_amount,bookeditem});
    } catch (error) {
        res.status(500).send("Internal Server Error");
        console.error(error.message);
    }
})


router.put('/bookitem/:id', fetchstuduser ,async (req, res)=>{

    try {
        let item = await Item.findById(req.params.id);
        if(!item){
            return res.status(400).json({error:"Item doesn't exist"})
        }
        studid = req.studuser.id;
        let studuser = await Studuser.findById(studid)
        if(!studuser){
            return res.status(400).json({error:"Student doesn't exist"});
        }
        let bookeditem = await Bookeditem.create({
            itemname:item.itemname,
            itemprice:item.itemprice,
            studuser:studid
        })
        const newStud = {};
        if(item.itemprice){newStud.billamt = studuser.billamt+item.itemprice}
        studuser = await Studuser.findByIdAndUpdate(studid, {$set: newStud}, {new:true});
        res.json({bookeditem, studuser})
    } catch (error) {
       console.log("Internal Server error");
       console.error(error.message); 
    }
})

router.delete('/deletebook/:id', fetchstuduser, async (req, res)=>{
    try {
        let bookeditem = await Bookeditem.findOne({_id:req.params.id, studuser: req.studuser.id})
        if(!bookeditem){
            return res.status(400).json({error:"Item doesn't exist"});
        }
        let studuser = await Studuser.findById(req.studuser.id);
        if(!studuser){
            return res.status(401).json({error:"Student Not found"});
        }
        const newStud = {};
        if(bookeditem.itemprice){newStud.billamt = studuser.billamt-bookeditem.itemprice;}
        studuser = await Studuser.findByIdAndUpdate(req.studuser.id, {$set:newStud}, {new:true});
        bookeditem = await Bookeditem.findByIdAndDelete({_id:req.params.id})
        res.json({studuser, bookeditem});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router;