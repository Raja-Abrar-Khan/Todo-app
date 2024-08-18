const mongoose=require('mongoose');

const conn =async (req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://rajaabrarkhan2911:MIUWATes669WEAKU@cluster0.djcsp.mongodb.net/").then(()=>{
            console.log("Connection Successful");
        });
    } catch (error) {
        res.status(400).json({message:"Connection Failed"});
    }
};
conn();