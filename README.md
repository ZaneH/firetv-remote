# FireTVRemote-Node :fire:

A web app that can control the Amazon FireTV via [adb](https://developer.android.com/studio/releases/platform-tools.html). Follow the Setup guide below, fill in your device's IP address and use your web browser as a remote and keyboard.

- **Required:** Be sure to enable ADB on the FireTV.

- **Required For FireTV 4K**: You must upgrade the `./platform-tools` folder with the latest version from [here](https://developer.android.com/studio/releases/platform-tools.html). `adb` version 1.0.40 and above is recommend for the 4K FireTV. See [Issue #1](https://github.com/ZaneH/firetv-remote/issues/1) for more details.

# Setup
```bash
$ git clone https://github.com/ZaneH/firetv-remote.git
$ cd firetv-remote
$ npm install
$ npm run start # navigate to localhost:3000
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

You can use the Keyboard Input field to type text directly into the FireTV.

- **Note:** Not all traffic is guaranteed to be sequential if you're quickly typing.

<center><img src="http://i.imgur.com/hWTlubK.png">
<img src="http://i.imgur.com/MCPluXk.png"></center>
