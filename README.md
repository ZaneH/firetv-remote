# FireTVRemote-Node :fire:
A web app that can control the Amazon FireTV (/ Stick). Just start <a href="https://github.com/ZaneH/FireTVRemote-Node#setup">app.js</a>, fill in your device's IP address and use your web browser as a remote.
Be sure to enable ADB on the FireTV.

# Setup
```bash
$ git clone https://github.com/ZaneH/FireTVRemote-Node.git
$ cd FireTVRemote-Node
$ node app.js
```

## Keyboard bindings
|Keyboard Button|Remote Button|
|:-------------:|:-----------:|
|↑              |↑            |
|↓              |↓            |
|←              |←            |
|→              |→            |
|Enter          |Select       |
|Spacebar       |Select       |
|Escape         |Back         |

All alphanumeric keys are also mapped to the keyboard so you can simply type on your keyboard and recieve feedback from your FireTV.

*Not all traffic is guaranteed to be sequential if you're a fast typer.*

<center><img src="http://i.imgur.com/hWTlubK.png">
<img src="http://i.imgur.com/MCPluXk.png"></center>
