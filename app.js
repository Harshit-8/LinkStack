const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
var _ = require('lodash');
require("dotenv").config();

const app = express();


app.use(express.static('public'));
app.use(morgan("dev"));
app.set("view engine", "pug");
app.set("json spaces", 2);

app.listen(process.env.PORT || 80, () => {
  console.log(`Listening at.... http://localhost:${process.env.PORT || 80}`);
});

/*

app.get("/", async (req, res) => {
  // res.send(req.headers);
  let api_url = `${req.headers['x-forwarded-proto']||'http'}://${req.headers.host}/api/info`;
  try {
    let startDate = new Date();
    const response = await axios.get(api_url);
    let endDate = new Date();
  
    let mypage = ``;
    mypage+=`---- START TIME = ${startDate.toISOString()} <br>`;
    mypage+=`---- END TIME= ${endDate.toISOString()} <br>`;
    mypage+=`RESPONSE TIME = ${endDate - startDate} <br><br><br>`;
  
  
    mypage+=`Path /api/info <br><br>`;
    mypage+=`Data <br><br>`;
    mypage+=`${response.data}`;
    res.send(mypage);
  } catch (error) {
    console.log(error);
    res.send(error);
  }

});

*/

app.get("/", (req, res) => {
  res.render('index');
});


app.get("/login",(req,res)=>{

  res.render('login');
});

app.post("/login",(req,res)=>{

});



app.get("/signup",(req,res)=>{

  res.render('signup');
});


app.post("/signup",(req,res)=>{

});


app.get("/forgot-password",(req,res)=>{
  if(_.isEmpty(req.query) == false)
  {
    // With Parameters

    console.log("With Parameters");
    console.log(req.query);
  }
  else
  {
    // Without Parameters

    console.log("No Parameters");
    console.log("EMPTY");
  }
});


app.post("/reset-password",(req,res)=>{


});

app.get("/verify",(req,res)=>{

});



app.get("/dashboard",(req,res)=>{
  
});