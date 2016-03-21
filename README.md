# webpack-howto-bootstrap

## Goal of this guide

This is a copy of Pete Hunt's guide, including support for Bootstrap (sass version).

## Prerequisites

  * You know browserify, RequireJS or something similar
  * You see the value in:
    * Bundle splitting
    * Async loading
    * Packaging static assets like images and CSS

## 1. Why webpack?


  * **It's like browserify** but can split your app into multiple files. If you have multiple pages in a single-page app, the user only downloads code for just that page. If they go to another page, they don't redownload common code.

  * **It often replaces grunt or gulp** because it can build and bundle CSS, preprocessed CSS, compile-to-JS languages and images, among other things.

It supports AMD and CommonJS, among other module systems (Angular, ES6). If you don't know what to use, use CommonJS.

## 2. How to invoke webpack

Switch to the directory containing `webpack.config.js` and run:

  * `webpack` for building once for development
  * `webpack -p` for building once for production (minification)
  * `webpack --watch` for continuous incremental build in development (fast!)
  * `webpack -d` to include source maps

## 5. Stylesheets and images

First update your code to `require()` your static assets (named as they would with node's `require()`):

```js
require('./bootstrap.css');
require('./myapp.less');

var img = document.createElement('img');
img.src = require('./glyph.png');
```

When you require CSS (or less, etc), webpack inlines the CSS as a string inside the JS bundle and `require()` will insert a `<style>` tag into the page. When you require images, webpack inlines a URL to the image into the bundle and returns it from `require()`.

But you need to teach webpack to do this (again, with loaders):

```js
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    path: './build', // This is where images AND js will go
    publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
```


## Additional resources

Take a look at a real world example on how a successful team is leveraging webpack: http://youtu.be/VkTCL6Nqm6Y
This is Pete Hunt at OSCon talking about webpack at Instagram.com

## FAQ

### webpack doesn't seem modular

webpack is **extremely** modular. What makes webpack great is that it lets plugins inject themselves into more places in the build process when compared to alternatives like browserify and requirejs. Many things that may seem built into the core are just plugins that are loaded by default and can be overridden (i.e. the CommonJS require() parser).
