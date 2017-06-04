var express = require('express')
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var router = express.Router();

//Defining Parameters 
var m2t = {
    "/": " ",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "-....-": "-",
    "-..-.": "/",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")"
};
var t2m = {};
//Reversing List
Object.keys(m2t).forEach(function (key) {
    t2m[m2t[key]] = key;
});

var input = "hello world".toUpperCase();
var output = "";
//Defining Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Index Page
app.get('/', function (req, res) {
    res.sendfile('index.html');
});

//Sockets
io.on('connection', function (socket) {
    console.log('A user Connected!');

    socket.on('disconnect', function () {
        console.log('A user Dissconnected')
    });
});

//On click of convert T2M
router.post('/t2m', function (req, res) {
    var data = req.body.text.toUpperCase();
    console.log("[+]Input:" + data);
    output = "";
    for (i = 0; i < data.length; i++) {
        var b = (Object.values(t2m[data.charAt(i)])).join("");
        output = output + " " + b;
    }
    console.log(output);
});


//Convert M2T
router.post('/m2t', function (req, res) {
    var morse = req.body.morse;
    var a1 = morse.split(" ");
    var output1 = "";
    for (i = 0; i < a1.length; i++) {
        var b1 = Object.values(m2t[a1[i]]).join("");
        output1 = output1 + "" + b1;
    }
    console.log(output1);
})




app.use('/', router);
app.listen(3000, function () {
    console.log('Magic is happening on Port 3000');
});