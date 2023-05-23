//https://serpapi.com/google-events-api
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let events = [
    {
        Title: 'Example',
        Description: 'Ceva',
        Date_ev: Date(),
        Max_Tickets: 10,
        Link_Image: 'https://deviniti.com/app/uploads/2021/10/09-20_DM-8186_EVENTS_01_MAIN-2-1024x682.png'
    }
];

app.get("/", function(req,res){
    res.render('events',{events:events});
    //res.sendFile(__dirname + "/index.html");
});
app.get("/create_event", function(req,res){
    res.render('create_events');
});
app.post("/create_event", function(req,res){
    events.push({
        Title: req.body.Title,
        Description: req.body.Description,
        Date_ev: req.body.Date_ev,
        Max_Tickets: Number(req.body.Max_Tickets),
        Link_Image: req.body.Link_Image
    })
    res.redirect('/');
});
// app.post("/", function(req,res){
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);

//     var result = num1 + num2;

//     res.send("The resut of the calculation is "+ result);
// });
app.listen(8000, function(){
    console.log("Server started on port 8000");
})

