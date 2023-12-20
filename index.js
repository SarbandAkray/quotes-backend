const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const PORT = 8080;
const fs = require('fs');

app.listen(process.env.PORT ||PORT);


app.use(express.static(__dirname+"/pages"));

//getting desktop version
app.get("/getVersion", (req,res)=>{
res.status(200).send({
    version: "1.0.0"
});
});

//getting android
app.get("/getVersion/android", (req,res)=>{
    res.status(200).send({
        version: "1.0.0"
});
});

app.post("/download/desktop" ,(req,res)=>{
    
    fs.readFile('desktopDownloads.json', 'utf8', function(err, data){
        let jsonData = JSON.parse(data);
        let getAmount = jsonData[0].amount;
        getAmount= getAmount+1;
        let NewData = [{amount:getAmount}];
        let goodData = JSON.stringify(NewData);
        fs.writeFile('desktopDownloads.json', goodData, 'utf8',()=>{});
    });


});

// get the amount of downloads for windows
app.get("/get/downalodsForWindows" ,(req,res)=>{
    
    fs.readFile('desktopDownloads.json', 'utf8', function(err, data){
        let jsonData = JSON.parse(data);
        res.send(jsonData);
    });


});


app.post("/download/android" ,(req,res)=>{
    
    fs.readFile('androidDownloads.json', 'utf8', function(err, data){
        let jsonData = JSON.parse(data);
        let getAmount = jsonData[0].amount;
        getAmount= getAmount+1;
        let NewData = [{amount:getAmount}];
        let goodData = JSON.stringify(NewData);
        fs.writeFile('androidDownloads.json', goodData, 'utf8',()=>{});
    });


});

// get amout of donwlaods for android
app.get("/get/downalodsForAndroid" ,(req,res)=>{
    
    fs.readFile('androidDownloads.json', 'utf8', function(err, data){
        let jsonData = JSON.parse(data);
        res.send(jsonData);
    });


});