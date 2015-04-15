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

    if (req.body.deviceip != null) {
        console.log("Connecting...");
        deviceip = req.body.deviceip;
        exec("./platform-tools/adb connect " + deviceip, puts);
        res.send("Successfully connected.");
    } else if (req.body.disconnect) {
        console.log("Disconnecting...");
        exec("./platform-tools/adb disconnect", puts);
        res.send("Successfully disconnected.");
    } else if (req.body.keypadID != null) {
        var kpd = req.body.keypadID;

        if (kpd == "up") {
            exec("./platform-tools/adb shell input keyevent 19", puts);
            res.send("Up arrow pressed.");
        } else if (kpd == "down") {
            exec("./platform-tools/adb shell input keyevent 20", puts);
            res.send("Down arrow pressed.");
        } else if (kpd == "left") {
            exec("./platform-tools/adb shell input keyevent 21", puts);
            res.send("Left arrow pressed.");
        } else if (kpd == "right") {
            exec("./platform-tools/adb shell input keyevent 22", puts);
            res.send("Right arrow pressed.");
        } else if (kpd == "select") {
            exec("./platform-tools/adb shell input keyevent 66", puts);
            res.send("Select button pressed.");
        } else if (kpd == "back") {
            exec("./platform-tools/adb shell input keyevent 4", puts);
            res.send("Back button pressed.");
        } else if (kpd == "home") {
            exec("./platform-tools/adb shell input keyevent 3", puts);
            res.send("Home button pressed.");
        } else if (kpd == "menu") {
            exec("./platform-tools/adb shell input keyevent 1", puts);
            res.send("Menu button pressed.");
        } else if (kpd == "last") {
            exec("./platform-tools/adb shell input keyevent 21", puts);
            res.send("Last button pressed.");
        } else if (kpd == "playtoggle") {
            exec("./platform-tools/adb shell input keyevent 66", puts);
            res.send("Play button pressed.");
        } else if (kpd == "right") {
            exec("./platform-tools/adb shell input keyevent 22", puts);
            res.send("Right button pressed.");
        } else {
            exec("./platform-tools/adb shell input keyevent " + kpd, puts);
            res.send(kpd + " pressed.");
        }
    } else if (req.body.rawcommand != null) {
        exec("./platform-tools/adb shell " + req.body.rawcommand, puts);
        res.send("Custom command sent.");
    }
});

module.exports = router;
