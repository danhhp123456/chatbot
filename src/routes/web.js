import express from "express";
import chatbotController from "../controller/chatbotcontroller.js"
let router = express.Router();

let initwebrouters = (app)=> {
    router.get("/", chatbotController.gethomepage);

    router.get("/webhook", chatbotController.getWebhook);
    router.post("/webhook,", chatbotController.postWebhook);

  
    return app.use("/", router);
};

export default initwebrouters;