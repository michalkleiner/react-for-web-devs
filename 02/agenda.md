Day 2: Building a Web App with React
====

## Abstract

This course extends the simple web app built in the first class into a more advanced application using React.JS. You’ll review key takeaways from the last course, and then go deeper into React’s specific properties and functions that make creating a web app so easy. You’ll see how to organize your application around your components and learn more about how components behave and what they can do.

* Learn how to structure your components for a more sophisticated web app
* Dive deep into component hierarchy, state, and representation
* See how your data flow communicates and interacts with React components
* Learn about view navigation and other React features

## Initial Steps

1. [Install Node](https://nodejs.org/en/)
1. Update npm `sudo npm install -g npm`
1. Install browserify `npm install -g browserify`
1. [Install React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
1. [Install Babel syntax definition](http://babeljs.io/)
1. [Window Terminal](http://cmder.net/)

## 02: Setup Simple Dev Environment

1. `cd` into project directory
1. Split `main.js` out of `index.html`
1. Run `npm install --save react react-dom babelify babel-preset-react`
1. Run `browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js`

## 03: Setup Advanced Dev Environment

1. Add `package.json` to project directory
1. Add `gulpfile.js` to project directory
1. Install gulp globally `sudo npm install -g gulp`
1. Run `npm install`
1. Run `gulp`


