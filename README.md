# Changes to original

- This plugin won't mess with your original \<content src\>. It starts a webserver for you and let you decide if you want something to access through it. e.g you can run your app as usual, file://, but request resources from Documents/ folder through http://localhost:8888/local-filesystem/
- Port is now configurable in config.xml
- No access to www/ folder
- Removed some dependencies

This plugin currently modified to our needs, it not necessarily nice or makes no sense atm.
   

# Cordova Local WebServer

This Apache Cordova plugin will install a local web server in your iOS app.

### localStorage, IndexedDB persistence

If you plan on using HTML5 localStorage and/or IndexedDB, you must choose a fixed port in the `content` tag specified above. This is because of the HTML5 Origin policy (scheme, domain and port must be the same).

In the `config.xml` in your project root, change the '0' port to a number between 1 and 49152 (avoiding the ephemeral port range of 49152 to 65535 on iOS). For example:
    
        <content src="http://localhost:49000" />
    

This port number must be consistent across all app launches for saved data to be accessed.


## Security Caveats

    In order to limit access to your app, requests are restricted to localhost and are protected with an auth token.
    This should effectively restrict access to the server to your app.
    
This plugin is only compatible with the 3.7.0 release of cordova-ios, or greater.
    

## Credits

The local web server implementation is from https://github.com/swisspol/GCDWebServer

To update with the latest from that repo execute in the top-level directory:

        git remote add GCDWebServer https://github.com/swisspol/GCDWebServer.git
        git subtree pull --prefix=local-webserver/src/ios/GCDWebServer --squash GCDWebServer master
