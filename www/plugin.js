const exec = require('cordova/exec');

const PLUGIN_NAME = 'CDVLocalWebServer';

class LocalWebServer {
    static getAuthToken() {
	return new Promise((resolve, reject) => {
            exec(resolve, reject, PLUGIN_NAME, 'getAuthToken', []);
	});
    }
}

module.exports = LocalWebServer;
