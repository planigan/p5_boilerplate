# p5_boilerplate

This is my attempt to get a starter project configured to be able to easily get
a new p5 project going with ES2016/Sass/Pug and have Dat.GUI available. The
initial structure is as follows:
```
├── src
│   ├── assets
│   │   ├── audio
│   │   ├── img
│   │   │   └── test.png
│   │   └── video
│   ├── js
│   │   ├── SettingsPanel.js
│   │   ├── sketch.js
│   │   └── Utils.js
│   ├── styles
│   │   ├── reset.sass
│   │   └── styles.sass
│   ├── alt_index.html
│   ├── app.js
│   └── index.pug
├── package.json
├── package-lock.json
├── README.md
├── webpack.config.js
└── yarn.lock
```
Hot reloading is working through `webpack-dev-server`. To get started:
```
# Clone the repo
> git clone git@github.com:planigan/p5_boilerplate.git
# Remove git history
> rm -rf .git
# Edit the description/etc
> vim package.json
# Pull the dependencies
> yarn
# or
> npm install
# Reinitialize git
> git init
# Start the dev server
> npm start
```
I have done anything to optimize for a production build yet, but you can get the
following for deployment with `npm run build`.
```
├── dist
│   ├── assets
│   │   └── img
│   │       └── test.png
│   ├── css
│   │   └── main.css
│   ├── bundle.js
│   └── index.html
```
More to come...
