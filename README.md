rna-wlu-edu
===========

Front end for [rna.wlu.edu](http://rna.wlu.edu).

This project is setup to be built with grunt:

```js
grunt build
```

## Technology stack

Build toolkit:

* [Yeoman](http://yeoman.io/) for scaffolding
* [Grunt](http://gruntjs.com/) for packaging and deployment

Frameworks:

* [Bootstrap](http://getbootstrap.com/) for front-end UI
* [jQuery](http://jquery.com/) for client dom hacking

RNA.wlu.edu server:

* [nginx](http://nginx.org/) for our world-facing static content and reverse-proxy server
* [nodejs](http://nodejs.org/) for a variety of apps on the backend
* [apache](http://httpd.apache.org/) for legacy apps on the backend
* [shiny-server](https://github.com/rstudio/shiny-server) and [shiny](http://www.rstudio.com/shiny/) (runs on nodejs) for interactive models
* All on [Ubuntu](http://www.ubuntu.com/server) VMs




