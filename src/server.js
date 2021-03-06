import express from "express";
import viewEngine from "./config/viewEngine.js";
import webRouters from "./routes/web.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
require("dotenv").config();
let app = express();


//config view engine
viewEngine(app);

//parser request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//init web router
webRouters(app);

let port = process.env.PORT || 8082;

app.listen( port,() => {
    console.log("chatbot dang chay o cong: "+port);
})



