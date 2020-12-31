const router=require('express').Router()
let User=require("./Model");







router.route("/").get((req,res)=>{

        User.find().then(result =>{

            res.json(result)
        }).catch(err=>{

            console.log(err)
        })
    
})


router.route("/add").post((req,res)=>{


    const name=req.body.name;

    const newName=new User({
        name
    })
    
    newName.save().then(result=>{

        res.status(200).json({message:"Added Successfully !!!"})
    }).catch(err=>{
        res.status(400).json({message:"An error occured"})
    })


})


module.exports=router;
