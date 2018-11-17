const express = require('express'),
router = express.Router();

const User = require('../models/user')




router.post('/:username/:password', async (req,res)=>{

   const user = await User.find({
        username: req.params.username,
        password: req.params.password
    });

    if(user.length==0){
        res.json({authy:false});
    }else{
        res.json({
            authy: true,
            user
        })
    }

});

router.post('/register/:username/:password/:email', async (req,res)=>{

   const user = new User({
        username: req.params.username,
        password: req.params.password,
        email: req.params.email
    });

    await user.save();
    
    if(user.length==0){
        res.json({authy:false});
    }else{
        res.json({
            authy: true,
            user
        })
    }

});


module.exports = router;