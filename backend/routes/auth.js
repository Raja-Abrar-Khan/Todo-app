const router= require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');


//Sign In
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Check if user already exists
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ message: "User already exists" });
        // }

        const hashpassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashpassword });
        await user.save();
        res.status(200).json({ message:"Sign Up Successfull" });
    } catch (error) {
        res.status(200).json({ message: "User already exists" });
        // res.status(500).json({ message: "Server error" });
    }
});



//sign up

router.post("/signin",async (req,res)=>{
    try {
       const user= await User.findOne({email:req.body.email});
       if(!user){
        res.status(200).json({message: "Please Sign Up First"});
       }
       const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
       if(!isPasswordCorrect){
        res.status(200).json({message: "Password is incorrect"});
       }
       const {password,...others} = user._doc;
     
       res.status(200).json({others});
    } catch (error) {
        res.status(200).json({message: "user Already exists"});
    }
});


module.exports = router;