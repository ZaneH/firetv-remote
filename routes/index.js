var express = require('express');
var router = express.Router();

var sys = require("sys");
var exec = require("child_process").exec;

var deviceip;

router.get('/', function(req, res, next) {
    res.render('index', { title: 'FireTV Remote' });
});

router.post('/', function(req, res, next) {
    function puts(error,stdout,stderr) { console.log(stdout); }
    var adbPath = (process.platform == "linux") ? "./platform-tools/ubuntu/adb" : "./platform-tools/adb";

    if (req.body.deviceip != null) {
        console.log("Connecting...");
        deviceip = req.body.deviceip;
        exec(adbPath + " connect " + deviceip, puts);
        res.send("Successfully connected.");
    } else if (req.body.disconnect) {
        console.log("Disconnecting...");
        exec(adbPath + " disconnect", puts);
        res.send("Successfully disconnected.");
    } else if (req.body.keypadID != null) {
        var kpd = req.body.keypadID;

        if (kpd == "up") {
            exec(adbPath + " shell input keyevent 19", puts);
            res.send("Up arrow pressed.");
        } else if (kpd == "down") {
            exec(adbPath + " shell input keyevent 20", puts);
            res.send("Down arrow pressed.");
        } else if (kpd == "left") {
            exec(adbPath + " shell input keyevent 21", puts);
            res.send("Left arrow pressed.");
        } else if (kpd == "right") {
            exec(adbPath + " shell input keyevent 22", puts);
            res.send("Right arrow pressed.");
        } else if (kpd == "select") {
            exec(adbPath + " shell input keyevent 66", puts);
            res.send("Select button pressed.");
        } else if (kpd == "back") {
            exec(adbPath + " shell input keyevent 4", puts);
            res.send("Back button pressed.");
        } else if (kpd == "home") {
            exec(adbPath + " shell input keyevent 3", puts);
            res.send("Home button pressed.");
        } else if (kpd == "menu") {
            exec(adbPath + " shell input keyevent 1", puts);
            res.send("Menu button pressed.");
        } else if (kpd == "last") {
            exec(adbPath + " shell input keyevent 21", puts);
            res.send("Last button pressed.");
        } else if (kpd == "playtoggle") {
            exec(adbPath + " shell input keyevent 66", puts);
            res.send("Play button pressed.");
        } else if (kpd == "right") {
            exec(adbPath + " shell input keyevent 22", puts);
            res.send("Right button pressed.");
        } else {
            exec(adbPath + " shell input keyevent " + kpd, puts);
            res.send(kpd + " pressed.");
        }
    } else if (req.body.rawcommand != null) {
        exec(adbPath + " shell " + req.body.rawcommand, puts);
        res.send("Custom command sent.");
    }
});

module.exports = router;
