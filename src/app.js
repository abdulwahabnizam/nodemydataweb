const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname,"../public");

const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '../public/icons_svgs');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});

//To set template engine for dynamic website
app.set("view engine", "hbs");

//Builtin Middle ware
app.use(express.static(staticPath));

//Template engine route
app.get("",(req, res)=>{
    res.render("index",
    {
        topic: "Topics",
        cssPath: staticPath,
    });
});

/*app.get("/",(req, res)=>{
    res.send("Hello for the express server"+staticPath);
});*/

app.listen(3000,()=>{
    console.log("Listening at port 3000");
});