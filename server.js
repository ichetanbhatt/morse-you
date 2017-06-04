var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
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
    "----.": "9"
};
var t2m = {};
//Reversing List
Object.keys(m2t).forEach(function(key){
    t2m[m2t[key]] = key;
});
// console.log(Object.values(t2m["A"]));
var input = "Chetan".toUpperCase();
var output = "";
//Defining Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Index Page
router.get('/', function (req, res) {
    res.sendfile('index.html');
});

//On click of convert
// router.post('/go', function (req, res) {
//     var data = req.body.head;
//     console.log("[+]Input:" + data);    
// });

for(i=0;i<input.length;i++){
    console.log(input.charAt(i));
    console.log(Object.values(t2m[input.charAt(i)]));
}





app.use('/', router);
app.listen(3000, function () {
    console.log('Magic is happening on Port 3000');
});