const express = require("express");
const cookieParser = require("cookie-parser")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

const Users = require("./models/UserSchema")

require('./db/connection');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors({ //cors is a middleware which is used when different servers need to communicate with each other eg client and server both are running on diff server and we need to connect them  
    origin:[process.env.ORIGIN],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true //to enable cookies
}));

const port = process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send("Hello world");
})

// app.get('/api/register', async (req,res,next)=>{
//     try{
//         const {username,email,password} = req.body;

//         const isExist = await Users.findOne({email});
    
//         if(isExist){
//             res.status(400).send("User already exists");
//         }else{
//             const user = new Users({
//                 username,
//                 email,
                
//             })
//             bcryptjs.hash(password,10,(err,hashedPassword)=>{
//                 if(err) next(err)
//                  user.set("password",hashedPassword)
//                 user.save((error)=>{
//                     if(error) next(error)
//                     return res.status(200).send("Successfully Registered")  
//                 })   
//             })
           
//     }    
//     }catch(error){
//         res.status(500).send("server Error");
//         console.log(error,"error");
        
        
//     }
// })
app.post('/api/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check if the user already exists
      const isExist = await Users.findOne({ email });
      if (isExist) {
        return res.status(400).send("User already exists");
      }
  
      // Hash the password
      const hashedPassword = await bcryptjs.hash(password, 10);
  
      // Create a new user
      const user = new Users({
        username,
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await user.save();
      res.status(200).send("Successfully Registered");
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).send("Server Error");
    }
  });
  
  app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(401).send("Username or password is invalid");
      }
  
      // Compare the password
      const isValidPassword = await bcryptjs.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).send("Username or password is invalid");
      }
  
      // Generate JWT token
      const payload = {
        id: user._id,
        username: user.username,
      };
      const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ;
      const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d' });
  
      res.status(200).json({ user, token });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Server Error");
    }
  });
  

app.listen(8000,()=>{
    console.log("server is running");
    
})