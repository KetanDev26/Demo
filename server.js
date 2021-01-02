const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path')

//const io=require('socket.io')
require('dotenv').config();


const app=express();

const port=process.env.PORT || 5000 
const Host=process.env.HOST || '0.0.0.0'

app.use(cors())
app.use(express.json());

console.log(process.env.DB_URL)


mongoose.connect(process.env.DB_URL ,

    {useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}
    
    
    
    ).then(()=>{
        
        console.log("Database is Connected...")
       //mongoose.connection.close()
        
    
    }).catch(err=>{
    
    
        
       
        console.log("Can't Connect to databse.....")
      
           
        
    })



    app.use(express.static('public'));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('build'));
        app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
        });
        }





    
    app.listen(port,Host,()=>{

        console.log(`Server is running on port ${port}`);
})


const DemoName=require("./Controller");

app.use('/Demo',DemoName);