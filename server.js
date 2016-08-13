var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    _ = require('lodash'),
    cors = require('cors'),
    app = express(),
    port = 8080;


app.use(cors());
app.use(session({
    secret: 'cDevMountainIsfuLLofSecrets',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var projects =
    [
        {
            "name": "project 1",
            "link": "http://i.imgur.com/VNPJTra.png",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : "1"
        },
        {
            "name": "project 2",
            link: "http://i.imgur.com/DMHlsYN.png",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : "2"

        },
        {
            "name": "project 3",
            "link": "http://i.imgur.com/PmDQ1lh.png",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : "3"


        },
        {
            "name": "project 4",
            "link": "http://i.imgur.com/2h4dfvG.png",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : "4"

        }
    ];

var myinfo =
    {
        name : "Sienna Belle",
        intro: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Lorem ipsum dolor sit amet,consectetur adipiscing elit.dolor sit amet,consectetur.Lorem ipsum dolor sit amet,consectetur adipiscing elit. ",
        mainImage: "https://hd.unsplash.com/photo-1470713810641-8136c29329b4",
        email: "siennabelle@email.com",
        phone: "5555555555",
        profileImg:"http://i.imgur.com/2h4dfvG.png"

    };



function findUser(array, value) {
    var index = array.map(function(arr) {
        return arr.id;
    }).indexOf(value);
    return array[index];
}


app.get('/api/myData', function(req, res) {
    res.send(myinfo);
});


app.get('/api/userInfo/:id', function(req, res) {
    var userId = req.params.id;
    var userObj = findUser(usersBlogData, userId);
    res.send(userObj);

});

app.get('/api/usersBlogData', function(req, res) {
    res.send(usersBlogData);
});


app.listen(port, function () {
    console.log('Listening on port', port);
});



