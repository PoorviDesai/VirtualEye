const express = require("express");
const app = express();
const bodyParser  = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const https = require('https');

//Firebase setup
var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential : firebase.credential.cert(serviceAccount),
    databaseURL : "https://engage-835dd-default-rtdb.firebaseio.com"
});

//Firebase realtime database setup
var db = firebase.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var usersRef = ref.child("registered_faces");
// usersRef.set({
//   Poorvi: {
//     email: "poorvidsi@gmail.com",
//     photo: "Alan Turing"
//   },
//   Rachel: {
//     email: "rachel@gmail.com",
//     photo: "Grace Hopper"
//   }
// });
var userexamRef = ref.child("examrecords");
// userexamRef.set({
//   harvey:{
//     email: "harvey@gmail.com",
//     otherthings: "to be added"

//   }
// });

const path = require("path");
const http = require("http");
const { getMaxListeners } = require("process");
const server = http.createServer(app);

let API_KEY_SECRET = process.env.API_KEY_SECRET;
let PORT = process.env.PORT || 3000; // signalingServerPort
let localHost = "http://localhost:" + PORT; // http

app.use(bodyParser.json());
app.use(cookieParser());

//use all the static files from the static folder
app.use(express.static(path.join(__dirname, "static")));

app.use(express.json());

app.get(["/"], (req, res) => {
    res.sendFile(path.join(__dirname, "static/index.html"));
});

app.get(["/register"], (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

app.get(["/login"], (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});
app.get(["/facereg"], (req, res) => {
    res.sendFile(path.join(__dirname, "facereg.html"));
});

app.get(["/dashboard"], (req, res) => {
    res.sendFile(path.join(__dirname, "static/dashboard.html"));
});

// app.get(["/faceverif"], (req, res) => {
//     res.sendFile(path.join(__dirname, "faceverif.html"));
// });

app.get(["/exam"], (req, res) => {
    res.sendFile(path.join(__dirname, "exam.html"));
});
app.get(["/exam2"], (req, res) => {
  res.sendFile(path.join(__dirname, "exam2.html"));
});

//only for admin as of to be made
app.get(["/stat"], (req, res) => {
  res.sendFile(path.join(__dirname, "static/stat.html"));
})
app.listen(PORT, function () {
    console.log(`listening on PORT: ${PORT}`);
  });


    





