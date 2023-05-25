//https://serpapi.com/google-events-api
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

let events = [
    {
        Title: 'Example',
        Description: `ceva`,
        Date_ev: year + "-" + month + "-" + day,
        Max_Tickets: 10,
        Link_Image: 'https://deviniti.com/app/uploads/2021/10/09-20_DM-8186_EVENTS_01_MAIN-2-1024x682.png'
    }
];

app.get("/", function(req,res){
    res.render('events',{events:events, type1:"none", type2:"none", title:"Events"});
    //res.sendFile(__dirname + "/index.html");
});
app.get("/create_event", function(req,res){
    res.render('create_events',{title:"Create events"});
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

app.get('/:title', function(req,res){
    const title = req.params.title;
    const result = events.filter(element => element.Title == title);//unique event withy the same name
    if(result.length != 0){
        res.render('event_zone', {event: result[0], title:title})
    }
    {
        res.sendFile(__dirname + "/404.html");
    }
    if(title == "button")
    {
        res.render('events',{events:events, type1:'block',type2:'block'})//for display of the button
    }
})

app.all('*',(req,res) => {
    res.status(404).sendFile("404.html");
})
app.listen(8000, function(){
    console.log("Server started on port 8000");
})

