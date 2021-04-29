import express from "express";

let configViewengine = (app) => {
    app.use(express.static("./src/public"))
    app.set("view engine", "ejs");
    app.set("view", "./src/view");
};

export default configViewengine;