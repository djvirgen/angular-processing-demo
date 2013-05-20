Staticly, a Simple Static Web Server
===================================

*Why?* Sometimes you just need to host a couple of static files and don't
want to bother with setting up something massive like Apache or Nginx.

Requirements
------------

1. NodeJS
2. NPM
3. Some static files

Usage
-----

    $ git checkout git@git.corp.attinteractive.com:hvirgen/staticly.git
    $ cd staticly
    $ npm install
    $ node server.js

That's it! You now have a simple static web server running on port 3000:

http://localhost:3000

To begin serving files, just copy them into the `staticly` folder. Of course,
subfolders are also supported.

Advanced Usage
--------------

You can change the port by specifying a PORT environment variable when you
start the server:

    $ PORT=8888 node server.js
