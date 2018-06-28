# Setup React App

[![Build Status](https://travis-ci.org/rxseven/setup-react-app.svg?branch=master)](https://travis-ci.org/rxseven/setup-react-app) [![Coverage Status](https://coveralls.io/repos/github/rxseven/setup-react-app/badge.svg)](https://coveralls.io/github/rxseven/setup-react-app)

React app made easy :sunglasses:

**Setup React App** is a React & Redux boilerplate with best practices bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It can save you a lot of time and energy searching for highly scalable solutions with a nice development experience to get started.

## Table of Contents

#### Overview

- [Introduction](#introduction)
- [Objective](#objective)
- [What is Included](#what-is-included)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)

#### Getting Started

- [Setting up a Project](#setting-up-a-project)
- [Setting up a Code Editor](#setting-up-a-code-editor)
- [Creating a React app](#creating-a-react-app)

#### Development Workflow

- [Adding Pre-commit Hooks](#adding-pre-commit-hooks)
- [Adding React Hot Loader](#adding-react-hot-loader)
- [Running JavaScript Linting](#running-javascript-linting)
- [Running Stylesheet Linting](#running-stylesheet-linting)
- [Running Static Type Checking](#running-static-type-checking)
- [Running Tests](#running-tests)
- [Formatting Code Automatically](#formatting-code-automatically)
- [Using JSX Control Statements](#using-jsx-control-statements)
- [Using Absolute Imports](#using-absolute-imports)
- [Using HTTPS in Development](#using-https-in-development)
- [Debugging in the Editor](#debugging-in-the-editor)
- [Debugging Tests](#debugging-tests)

#### Ecosystem

- [Adding Sass and Post-Processing CSS](#adding-sass-and-post-processing-css)
- [Adding CSS Modules](#adding-css-modules)
- [Adding Redux](#adding-redux)
- [Adding React Router](#adding-react-router)
- [Adding Bootstrap](#adding-bootstrap)
- [Adding Open Iconic](#adding-open-iconic)

#### Boilerplate & Skeleton

- [Adding a Global Stylesheet](#adding-a-global-stylesheet)
- [Adding Sass Boilerplate](#adding-sass-boilerplate)
- [Adding a Layout Boilerplate](#adding-a-layout-boilerplate)
- [Adding Common Components](#adding-common-components)
- [Adding Core Components](#adding-core-components)
- [Adding Main Screens](#adding-main-screens)
- [Adding API Services](#adding-api-services)
- [Adding the App Skeleton](#adding-the-app-skeleton)

#### Enhancement

- [Analyzing the Bundle Size](#analyzing-the-bundle-size)

#### Deployment & Automated Tasks



#### Appendix



## Introduction

Setting up a React & Redux app from scratch can be a daunting task for beginners. Lots of libraries to install, lots of configuration and other tasks to do to get a project up and running smoothly.

**Setup React App** can save you from time-consuming tasks. You simply clone the project or follow our guidelines to setup your own development workflow from scratch.

[Back to top](#table-of-contents)

## Objective

The purpose of this project is to demonstrate how to setup a React & Redux application with everything you need for a comfortable development workflow, including type checking, code linting, testing, task automation, production optimizations, and more.

[Back to top](#table-of-contents)

## What is Included?

Your project should have a good starting point with a nice development experience you need to build a modern React & Redux app:

- All features ship with Create React App.
- Full-featured development workflow:
  - Language extras beyond JSX and ES6/ES7.
  - A live development server with real time module replacement.
  - Task automation and Git pre-commit hooks.
  - Delightful JavaScript and React testing.
  - Code linting and formatting.
  - Static type checking for JavaScript.
  - CSS processing, transforming, and CSS modules.
  - Lazy-load with code-splitting.
  - Continuous Integration and Continuous Deployment.
  - Editor integration and syntax support.
- React & Redux ecosystem:
  - A state management library.
  - Declarative routing for React.
  - Front-end component library and definitive icon set.
- Boilerplate and skeleton:
  - Extensible and scalable React & Redux structure.
  - Standard CSS architecture with best practices.
  - A minimal boilerplate for React & Redux.
- Detailed guidelines and live demo.

[Back to top](#table-of-contents)

## Prerequisites

### Tools

Before getting started, you are required to install the following tools on your machine:

#### [Git](https://git-scm.com)

Git is a version control system (VCS) for tracking changes in source files and coordinating work on those files among multiple people. It is primarily used for source code management (SCM) in software development.

#### [Node Version Manager](https://github.com/creationix/nvm)

nvm helps you manage and switch between different Node versions with ease. It provides a command line interface where you can install different versions with a single command, set a default, switch between them and much more.

#### [Node.js](https://nodejs.org)

Node.js is an open source, cross-platform JavaScript runtime environment. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

#### [Yarn](https://yarnpkg.com)

Yarn is a package manager for JavaScript. It’s mainly a replacement for package management in your web projects, with a few features missing from the npm CLI.

#### [Visual Studio Code](https://code.visualstudio.com)

Visual Studio Code is an open-source code editor that can be run on multiple platforms. It provides support for debugging, built-in terminal and version control, syntax highlights, snippets, and much more.

### Services

Below is a list of helpful online services that can make your life easier:

#### [GitHub](https://github.com)

GitHub is a web-based hosting service for version control using Git. Using GitHub has numerous benefits including easier collaboration with colleagues and peers, ability to look back on previous versions, and tons of easy integration options.

#### [Travis CI](https://travis-ci.org) \*

Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.

#### [Coveralls](https://coveralls.io) \*

Coveralls is a hosted analysis tool, providing statistics about your code coverage.

#### [Heroku](https://www.heroku.com) \*

Heroku is a container-based cloud Platform as a Service (PaaS). The platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.

\* optional, but will be required in latter sections.

> The usage of those tools and services will be explained in following sections.

[Back to top](#table-of-contents)

## Quick Start

In your working directory, clone **Setup React App** from [GitHub](https://github.com/rxseven/setup-react-app):

```sh
git clone https://github.com/rxseven/setup-react-app.git
```

And run the following commands to get the app up and running:

```sh
cd setup-react-app
nvm use
yarn install
yarn start
```

Then open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

[Back to top](#table-of-contents)

## Setting up a Project

### Creating a new project

In your working directory (the directory where you keep your projects e.g. `~/projects`), let’s create a new project by running a command:

```sh
mkdir setup-react-app
```

Then, change the current working directory to your local project:

```sh
cd setup-react-app
```

### Setting up Git

When it comes to version control, everybody is talking about Git and GitHub these days. Let’s embrace them!

#### Initializing Git repository

In the project’s root directory, create an empty Git repository by running a command:

```sh
git init
```

Then, the output should look like this:

```
Initialized empty Git repository in ~/setup-react-app/.git/
```

For more information, see [Git - git-init Documentation](https://www.git-scm.com/docs/git-init)

#### Specifying your name and email address

You may need to specify your name and email address to be recorded in any newly created commits.

In the project’s root directory, run the following commands to set your name and email address on a per-project basis:

```sh
git config user.name "Theerawat Pongsupawat"
git config user.email "me@mail.com"
```

Git will then store your settings in `.git/config` file inside your project, and the content may look like this:

```
[user]
  name = Theerawat Pongsupawat
  email = me@mail.com
```

To verify your settings, run the commands below:

```sh
git config user.name
git config user.email
```

Then, the output should look like this:

```
Theerawat Pongsupawat
me@mail.com
```

For more information, see [Git - git-config Documentation](https://www.git-scm.com/docs/git-config)

#### Specifying intentionally untracked files to ignore

A `.gitignore` file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected. For more information, see [Git - gitignore Documentation](https://www.git-scm.com/docs/gitignore) and [Ignoring files](https://help.github.com/articles/ignoring-files/).

In the project’s root directory, run the command below:

```sh
touch .gitignore
```

> commit: [Initial commit](https://github.com/rxseven/setup-react-app/commit/16357e851ed2baa6d72690f7514f4db8a14a7320)

#### Adding README

You can add a **README** file to your repository to tell other developers why your project is useful, what they can do with your project, and how they can use it. For more information see, [About READMEs](https://help.github.com/articles/about-readmes/).

In the project’s root directory, create a README file by running a command:

```sh
touch README.md
```

Then, add the content below:

```md
# Setup React App
```

> commit: [Add README](https://github.com/rxseven/setup-react-app/commit/82b4aaf74ce07c7a47c8a954f2dba9bd4594ce6d)

#### Adding a LICENSE

GitHub created [choosealicense.com](http://choosealicense.com/), to help you understand how to license your code. A software license tells others what they can and can’t do with your source code, so it’s important to make an informed decision.

You’re under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that **you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work**.

If you include a detectable license in your GitHub repository, people who visit your repository will see it at the top of the repository page. For more information on adding a license to a repository, see [Adding a license to a repository](https://help.github.com/articles/adding-a-license-to-a-repository) on GitHub Help.

**Setup React App** is open source software [licensed as MIT](https://choosealicense.com/licenses/mit/). Open source licenses enable others to freely use, change, and distribute the project in your repository.

> commit: [Add LICENSE](https://github.com/rxseven/setup-react-app/commit/9f45567c008fe01ba3022417700768cd1edc3c2f)

#### Adding an existing project to GitHub

First, we need to create a new remote repository on GitHub. To do that, head to the [relevant GitHub documentation page](https://help.github.com/articles/creating-a-new-repository) and follow the instructions.

Open your GitHub project page, click on green colored **Clone or download** button and copy the remote repository URL.

In the project’s root directory, add the URL for the remote repository where your local repository will be pushed by runnig the following command:

```sh
git remote add origin https://github.com/rxseven/setup-react-app.git
```

To verify that a remote repository named **origin** is set for your project successfully, run the command below:

```sh
git remote -v
```

Then, the output should look like this:

```
origin	https://github.com/rxseven/setup-react-app.git (fetch)
origin	https://github.com/rxseven/setup-react-app.git (push)
```

Now, you can publish a local branch to a remote repository on GitHub:

```sh
git push -u origin master
```

#### Setting up Git workflows

A Git workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner. Details are available in [this article](https://nvie.com/posts/a-successful-git-branching-model/).

**Creating develop branch**

A `develop` branch **must** branch off from the `master` branch:

```sh
git checkout -b develop
```

Once a new branch is created, you should publish it to a remote repository:

```sh
git push -u origin develop
```

**Creating a feature branch**

When starting work on a new feature, branch off from the `develop` branch:

```sh
git checkout -b feature/setup-project
```

Once a new branch is created, you should publish it to a remote repository:

```sh
git push -u origin feature/setup-project
```

### Specifying a Node version

[nvm](https://github.com/creationix/nvm) helps you manage and switch between different Node versions with ease. It allows you to specify a Node version on a per-project basis.

#### How it works

By creating a `.nvmrc` file inside a project and specify a version number, run `nvm use` command, nvm will then read the contents of the `.nvmrc` file and use whatever version of Node you specify.

#### Configuration

On the command line, run a single command from the project’s root directory to create a configuration file:

```sh
touch .nvmrc
```

And specify a Node version number to `.nvmrc` file:

```sh
echo "8.9.3" > .nvmrc
```

Now, your `.nvmrc` file should contain a Node version number like `8.9.3`.

> Note: the contents of a `.nvmrc` file **must** be the `<version>` (as described by `nvm --help`) followed by a newline. No trailing spaces are allowed, and the trailing newline is required.

> commit: [Specify Node version on a per-project basis](https://github.com/rxseven/setup-react-app/commit/d9ad77b4854968c272a4fda4938276c11415a0bd)

#### Usage

From the project’s root directory, run a simple command:

```sh
nvm use
```

Then, the output should look like this:

```
Found '~/setup-react-app/.nvmrc' with version <8.9.3>
Now using node v8.9.3 (npm v5.5.1)
```

[Back to top](#table-of-contents)

## Setting up a Code Editor

Visual Studio Code provides developers with many awesome features that significantly facilitate the process of source code editing. Besides, It also makes sure users won’t be bored when they work with it, as it allows them to customize several parts of its appearance and functionalities, such as themes, fonts, validaton rules, extensions etc.

### Configuring a workspace

Visual Studio Code allows you to customize a **Workspace Settings** on a per-project basis with a pretty straightforward and intuitive way to quickly add your customizations.

You can do this by editing configuration file in JSON format. First, let’s create `.vscode` folder in the project’s root directory:

```sh
mkdir .vscode
```

Then, create a configuration file inside that folder:

```sh
touch .vscode/settings.json
```

For more information, see [User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings).

> commit: [Add VSCode's workspace settings](https://github.com/rxseven/setup-react-app/commit/7cf314d2792f7f2d947dedef3290e20782f1b0e6)

### Enabling syntax highlighting

To enable the syntax highlighting in Visual Studio Code, you need to install [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring) extension:

1.  Open **Command Palette** in Visial Studio Code by pressing _command + p_.
2.  Type `ext install dzannotti.vscode-babel-coloring` and hit _enter_.
3.  Reload Visual Studio Code.

### Disabling built-in code formatter and validator

Visual Studio Code has built-in code formatter and validator which is useful for beginners. In the latter section we will be using a better solution which can take your development workflow to the next level.

For the time being, let’s disable the built-in tools through Visual Studio Code’s workspace settings:

1.  In Visual Studio Code, open a **Settings** screen by pressing _command + ,_.
2.  Select **Workspace Settings** tab.
3.  And add the following configuration to the empty configuration object:

```
{
  // Disable built-in code formatter and validator
  "editor.formatOnSave": false,
  "javascript.format.enable": false,
  "javascript.validate.enable": false
}
```

> commit: [Disable built-in VSCode's code formatter and validator](https://github.com/rxseven/setup-react-app/commit/9f8b492bf98d1142a1788c1e26f0dc5bdc5347f2)

[Back to top](#table-of-contents)

## Creating a React App

### Creating an app

With [Create React App](https://github.com/facebook/create-react-app), you don’t need to install or configure tools like Webpack or Babel. They are preconfigured so that you can focus on the code. Just create a project, and you’re good to go.

But to create a better development experience with best practices, in following sections we will customize Create React App to enhance our development workflow in an efficient way.

First, let’s create a new app with Create React App by running a single command from the project’s root directory:

```sh
npx create-react-app setup-react-app
```

> Note: [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, with npx you don’t need to install [create-react-app](https://www.npmjs.com/package/create-react-app) globally.

Now, your project structure should look like this:

```
setup-react-app
├── .git
├── .vscode
│   ├── launch.json
│   └── settings.json
├── setup-react-app
└── .nvmrc
```

We need to move all files and folders from `setup-react-app` (sub-folder) up one level. In the project’s root directory:

```sh
cd setup-react-app && mv {.[!.],}* ../ && cd .. && rmdir setup-react-app
```

> commit: [Create React app with CRA](https://github.com/rxseven/setup-react-app/commit/d3ad542c2d7c434bcc5f812aa5315011545255fc)

### Extracting hidden configuration

[Ejecting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) lets you customize anything, but from that point on you have to maintain the configuration and scripts yourself.

```sh
yarn eject
```

This command will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them.

After ejecting, these files and folders will be adding to your project:

```diff
  setup-react-app/
+   config/
+     jest/
+       cssTransform.js
+       fileTransform.js
+     env.js
+     paths.js
+     polyfills.js
+     webpack.config.dev.js
+     webpack.config.prod.js
+     webpackDevServer.config.js
+   scripts/
+     build.js
+     start.js
+     test.js
```

Also `package.json` file will be updating with the following changes:

```diff
  {
    ...
    ...
    "dependencies": {
+     ...
-     "react-scripts": "1.1.4"
+     ...
    }
    "scripts": {
-     "start": "react-scripts start",
-     "build": "react-scripts build",
-     "test": "react-scripts test --env=jsdom",
-     "eject": "react-scripts eject"
+     "start": "node scripts/start.js",
+     "build": "node scripts/build.js",
+     "test": "node scripts/test.js --env=jsdom"
-   }
+   },
+   "jest": {...},
+   "babel": {...},
+   "eslintConfig": {...}
  }
```

And these files **must** be checked into your repository.

> commit: [Extract hidden configuration from CRA](https://github.com/rxseven/setup-react-app/commit/179b096702f9aa058d64bfa03476d8fd0c9487e0)

Then, we need to update Yarn lockfile:

```sh
yarn install
```

> commit: [Update Yarn lockfile](https://github.com/rxseven/setup-react-app/commit/a9b06f5f94b38656a0b1a567d99af79ff98c6b56)

### Configuring Babel

To make `package.json` file clean and concise, we will be moving `babel` section to its own configuration file.

In the project’s root directory, create a configuration file:

```sh
touch .babelrc
```

Open `package.json` file, cut `babel` property and its values:

```diff
  {
-   "babel": {
-     "presets": [
-       "react-app"
-     ]
-   }
  }
```

In `.babelrc` file, paste code snippets from a clipboard and remove `babel` key:

```json
{
  "presets": ["react-app"]
}
```

> commit: [Settup Babel](https://github.com/rxseven/setup-react-app/commit/9749411d0db91a5003c16ef3b3108c874b5c3549)

You may need to define `.babelrc` as a `JSON` format to Visual Studio Code’s file association list. In `.vscode/settings.json` file, add the following configuration:

```
{
  // File associations to languages
  "files.associations": {
    ".babelrc": "json"
  }
}
```

> commit: [Add Babel configuration to VSCode's file association list](https://github.com/rxseven/setup-react-app/commit/58e75b21be6a7e72c2c74720f94ff7bf6b4412c7)

### Cleaning up app boilerplate

Let’s remove these files generated by Create React App:

```diff
  setup-react-app
    src
-     App.css
-     App.js
-     App.test.js
-     logo.svg
-     index.css
```

In the project’s root directory, run the command below:

```sh
cd src && rm App.css App.js App.test.js logo.svg index.css
```

Since those files have been removed, now the app is broken, so we need to fix it by updating `src/index.js` file (project starting point) with the following changes:

```diff
+ // Module dependencies
  import React from 'react';
  import ReactDOM from 'react-dom';
- import './index.css';
- import App from './App';
+
  import registerServiceWorker from './registerServiceWorker';

+ // Render React element into the DOM
- ReactDOM.render(<App />, document.getElementById('root'));
+ ReactDOM.render(<h1>Welcome to React</h1>, document.getElementById('root'));
+
+ // Service worker
  registerServiceWorker();
```

Now, your neat folder structure should look like this:

```
setup-react-app
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── index.js
│   └── registerServiceWorker.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

> commit: [Clean up app boilerplate generated by CRA](https://github.com/rxseven/setup-react-app/commit/ba28a22c790314d598dfbaa3c246bd18bf5aea73)

### Categorizing module dependencies

Module dependencies for development and production listed in `package.json` file must be categorized as `devDependencies` and `dependencies` respectively:

```json
{
  "dependencies": {
    "chalk": "",
    "dotenv": "",
    "dotenv-expand": "",
    "fs-extra": "",
    "object-assign": "",
    "promise": "",
    "raf": "",
    "react": "",
    "react-dom": "",
    "resolve": "",
    "whatwg-fetch": ""
  },
  "devDependencies": {
    "autoprefixer": "",
    "babel-core": "",
    "babel-eslint": "",
    "babel-jest": "",
    "babel-loader": "",
    "babel-preset-react-app": "",
    "babel-runtime": "",
    "case-sensitive-paths-webpack-plugin": "",
    "css-loader": "",
    "eslint": "",
    "eslint-config-react-app": "",
    "eslint-loader": "",
    "eslint-plugin-flowtype": "",
    "eslint-plugin-import": "",
    "eslint-plugin-jsx-a11y": "",
    "eslint-plugin-react": "",
    "extract-text-webpack-plugin": "",
    "file-loader": "",
    "html-webpack-plugin": "",
    "jest": "",
    "postcss-flexbugs-fixes": "",
    "postcss-loader": "",
    "react-dev-utils": "",
    "style-loader": "",
    "sw-precache-webpack-plugin": "",
    "url-loader": "",
    "webpack": "",
    "webpack-dev-server": "",
    "webpack-manifest-plugin": ""
  }
}
```

> commit: [Categorize module dependencies](https://github.com/rxseven/setup-react-app/commit/0bc7d17ffdcaf5a4b85be153f1254b9115db6c45)

### Adding app information

#### [package.json](https://docs.npmjs.com/files/package.json)

In the project’s root directory, open `package.json` file and update with the changes below:

```diff
  {
    ...
    ...
+   "description": "React app made easy.",
    "version": "0.1.0",
+   "license": "MIT",
+   "author": {
+     "name": "Theerawat Pongpawat",
+     "email": "rxseven.com@gmail.com",
+     "url": "http://www.rxseven.com"
+   },
+   "repository": {
+     "type": "git",
+     "url": "https://github.com/rxseven/setup-react-app.git"
+   },
    "private": true,
+   "main": "index.js",
    ...
    ...
  }
```

> commit: [Add app information to package.json file](https://github.com/rxseven/setup-react-app/commit/2464cdf290b218ec0f3e6d056c752670bc4aec37)

> Important note on `homepage` field in `package.json`: see [deployment section](building-for-relative-paths).

#### [manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json)

Open `public/manifest.json` file and update with the changes below:

```diff
  {
    "short_name": "React App",
-   "name": "Create React App Sample",
+   "name": "Setup React App",
    ...
    ...
  }
```

> commit: [Add app information to manifest.json file](https://github.com/rxseven/setup-react-app/commit/64fd94e559337bd910e8977f4d7595ddbbc98e4b)

### Cleaning up scripts

`scripts` section in `package.json` file also needs to be refactored. First, let’s reorder its list items alphabetically:

```json
{
  "scripts": {
    "build": "node scripts/build.js",
    "start": "node scripts/start.js",
    "test": "node scripts/test.js --env=jsdom"
  }
}
```

Then, move `scripts` section over dependency lists.

> commit: [Reorder scripts in package.json alphabetically](https://github.com/rxseven/setup-react-app/commit/defe29af6979dcc0ca18ece9e4f2baf6642c9cd5)

### Specifying the app title

Open `public/index.html` file and update `<title>` element:

```diff
- <title>React App</title>
+ <title>Setup React App</title>
```

> commit: [Specify app title to HTML document](https://github.com/rxseven/setup-react-app/commit/0427072b09d2caadd840e0e3c9d33d7ad05bfe6d)

### Changing the app favicon

Replace `public/favicon.io` with new images:

```
16px @1x (Standard)
24px
32px @2x (Retina display)
64px @4x
```

> commit: Change app favicon

### Creating a scalable folder structure

To create a scalable folder structure, in the project’s root directory, run a couple of commands below:

```sh
cd src
mkdir components config constants dependencies helpers HOCs images screens tests
cd components && mkdir common core && cd ..
cd helpers && mkdir __tests__ && cd ..
cd HOCs && mkdir common && cd ..
cd images && mkdir common && cd ..
cd screens && mkdir main && cd ..
```

Now, your folder structure should look like this:

```
src
├── components
│   ├── common
│   └── core
├── config
├── constants
├── dependencies
├── helpers
│   └── __tests__
├── HOCs
│   └── common
├── images
│   └── common
├── screens
│   └── main
└── tests
```

### Changing file extension

Essentially, `.js` should only ever be for files that use features of standard JavaScript - anything non-standard, like JSX, Flow, TypeScript, or early-stage proposals, needs a different extension. For convenience, we will be using `.jsx` with React components rather than `.js`. For more information, see [this discussion](https://github.com/airbnb/javascript/pull/985).

First, we need to change the extension of the project starting point from `.js` to `.jsx` by running the following command:

```js
mv src/index.js src/index.jsx
```

Then, update the `appIndexJs` property in `config/paths.js` file to point to `src/index.jsx`:

```diff
  module.exports = {
    ...
-   appIndexJs: resolveApp('src/index.js'),
+   appIndexJs: resolveApp('src/index.jsx'),
    ...
  };
```

We also need to update `main` section in `package.json` file as the following:

```diff
  {
    ...
    "private": true,
-   "main": "index.js",
+   "main": "index.jsx",
    "dependencies": {
    ...
  }
```

> commit: [Change project starting point's file extension](https://github.com/rxseven/setup-react-app/commit/f835be099af24ffac84f1eb1034e361713dd0c43)

### Creating a starting point component

On the command line, create `App` folder inside `src/components/core`:

```sh
mkdir src/components/core/App && cd src/components/core/App
```

Then, create a component file inside `App`:

```sh
touch index.jsx
```

To create a component, add the content below to `index.jsx` file:

```jsx
// Module dependencies
import React from 'react';

// Component
const App = () => <div>App component</div>;

// Module exports
export default App;
```

After that, import App component to the project starting point. To do that, open `src/index.jsx` file and update with the following changes:

```diff
  // Module dependencies
  import ReactDOM from 'react-dom';
  import React from 'react';

+ // Starting point component
+ import App from './components/core/App';

  ...
  ...

  // Render React element into the DOM
- ReactDOM.render(<h1>Welcome to React</h1>, root);
+ ReactDOM.render(<App />, root);
```

> commit: [Create App component](https://github.com/rxseven/setup-react-app/commit/2cde32a7475cb6d4ab7158d0a7310fd485e8d213)

### Adding the dependency entry point

On the command line, run the command below:

```sh
touch src/dependencies/index.js
```

Then, add the following import statement to `src/index.jsx` file:

```diff
  ...
  import registerServiceWorker from 'registerServiceWorker';
+ import 'dependencies';
```

> commit: [Add dependency entry point (1)](https://github.com/rxseven/setup-react-app/commit/22418532a2842b78a55e27cc44da027b428fe0f8), [(2)](https://github.com/rxseven/setup-react-app/commit/5bba50c5ecb65ea9b9a256147fefbcd6378a5079)

### Specifying root HTML element

On the command line, create `html.js` file inside `elements` folder:

```sh
mkdir src/constants/elements && touch src/constants/elements/html.js
```

Inside `html.js` file, just export an empty object:

```js
export default {};
```

> commit: [Add JavaScript constants for specifying HTML elements](https://github.com/rxseven/setup-react-app/commit/4795d8718ba73aecf4649f55da0a0cc1adcedb56)

Then, update `html.js` file with the following changes:

```diff
- export default {};
+ export default {
+   root: 'root'
+ };
```

Open `src/index.jsx` file and replace static `'html'` with JavaScript constant:

```diff
+ // Constants
+ import HTML from './constants/elements/html';

  // Render React element into the DOM
- ReactDOM.render(<App />, document.getElementById('html'));
+ ReactDOM.render(<App />, document.getElementById(HTML.root));
```

> commit: [Specify root HTML element to the project starting point](https://github.com/rxseven/setup-react-app/commit/89edd0eb3e78561a765c4e26b88c87f4acd5afcd)

### Adding an error handler

Open `src/index.jsx` file and update with the following changes:

```diff
  ...
  ...

+ // Initialize root HTML element
+ const root = document.getElementById(HTML.root);
+
+ // Validate root element
+ if (root == null) {
+   throw new Error('No root element found');
+ }
+
  // Render React element into the DOM
- ReactDOM.render(<App />, document.getElementById(HTML.root));
+ ReactDOM.render(<App />, root);

  // Service worker
  registerServiceWorker();
```

> commit: [Add error handler](https://github.com/rxseven/setup-react-app/commit/116884d39e10cd82919a24315cb3372c3079ecf9)

#### Defining URLs variable

In the project’s root directory, create a variable file inside `src/constants/router`:

```sh
mkdir src/constants/router && touch src/constants/router/urls.js
```

Then, add the remote repository URL to `repo` property:

```js
export default {
  repo: 'rxseven/setup-react-app'
};
```

> commit: [Add URLs variable (optional)](https://github.com/rxseven/setup-react-app/commit/02428fd463468927c7cc97b4cd5bb450e55a4548)

### Adding the permanent environment variables

Create **env** files in the project’s root directory by running a single command:

```sh
touch .env .env.development .env.production
```

> commit: [Add permanent environment variables](https://github.com/rxseven/setup-react-app/commit/ae9038616534d8dfe737eee274f2bc23126cc8b9)

### Specify app URLs

Open `.env.development` file and add the content below:

```
# Web application
REACT_APP_WEB_URL=http://localhost:3000
```

> commit: [Specify app URL in development environment](https://github.com/rxseven/setup-react-app/commit/158655e08ced99e5fa89ef6d2cb3755fbf133b36)

Open `.env.production` file and add the content below:

```
# Web application
REACT_APP_WEB_URL=https://setup-react-app.herokuapp.com
```

> commit: [Specify app URL in production environment](https://github.com/rxseven/setup-react-app/commit/bfe5bbf209313ddbcf862de414d061ec86fe0f77)

#### Running scripts across platforms

To be able to run scripts that set and use environment variables across platforms, you may need a [cross-env](https://github.com/kentcdodds/cross-env) library.

With **cross-env**, you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it’s running on a POSIX system, and it will take care of setting it properly.

Let’s install it as a development dependency:

```sh
yarn add --dev cross-env
```

> commit: [Install cross-env package](https://github.com/rxseven/setup-react-app/commit/a961b07b9df607200227166cff44cd969ea84764)

#### Installing utility libraries

You might come to the point to choose a JavaScript utility library that gives you more complex functionalities. You might even want to be more flexible when chaining these utility functions or even compose them dynamically into each other. That’s the point in time where you would introduce a utility library.

My recommendations are three libraries, we will be using the following widespread JavaScript utility libraries throughout this project and all of them are required to be installed beforehand.

[Lodash](https://lodash.com) - A modern JavaScript utility library delivering modularity, performance & extras.

```sh
yarn add lodash
```

> commit: [Install lodash package](https://github.com/rxseven/setup-react-app/commit/404f5a0b95205dafb255f20ec3cbb6be89ae7773)

[Ramda](https://ramdajs.com) - A practical functional library for JavaScript programmers.


When you move towards [functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) in JavaScript, there is no way around this utility library. Even though Lodash comes with its own functional programming derivate (which is [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide)), I would recommend using Ramda when dealing with functional programming.

```sh
yarn add ramda
```

> commit: [Install ramda package](https://github.com/rxseven/setup-react-app/commit/bd2f0b5c15c8833917ce0d8697d6d9a92472cc6c)

[Classnames](https://github.com/JedWatson/classnames) - A simple JavaScript utility for conditionally joining CSS class names together.

```sh
yarn add classnames
```

> commit: [Install classnames package](https://github.com/rxseven/setup-react-app/commit/2391c87733cad9b5aaaf1ecf691f936839ae4251)

[Back to top](#table-of-contents)

## Adding Pre-commit Hooks

In this section we’ll look at Git hooks. These hooks are a feature of Git which furthers its extensibility by allowing developers to create event triggered scripts. For more information, see [Git Hooks](https://www.atlassian.com/git/tutorials/git-hooks).

### What is a pre-commit

The pre-commit hook is the ideal opportunity to run many of the checks that your CI server would run. This hook can be used to make sure certain checks pass before a commit can be considered worthy to be made to the remote repository.

### Introducing Husky and Lint-staged

[Husky](https://github.com/typicode/husky) is a really cool library that provides the ability to easily create Git commit hooks allowing you to run arbitrary scripts as a pre-commit sequence.

[Lint-staged](https://github.com/okonet/lint-staged) on the other hand allows you to run arbitrary scripts against currently staged files. In Git, a file is being “staged” after you have “added” it to a commit. This allows you to slightly pick the files that will go into your next commit.

Why we don’t just use Husky to run scripts? the key concept is that **we only want to run scripts against the list of files currently staged - nothing else**.

#### Installation

On the command line, let’s install Husky as a development dependency:

```sh
yarn add --dev husky
```

> commit: [Install husky package](https://github.com/rxseven/setup-react-app/commit/107194da1c5639c83b04673a8c52af5399510b40)

Follow by Lint-staged:

```sh
yarn add --dev lint-staged
```

> commit: [Install lint-staged package](https://github.com/rxseven/setup-react-app/commit/ff79b1a5cebf14b55a851ec1a74d813173a0fc30)

#### Configuration

**Lint-staged**

In the project’s root directory, let’s create a configuration file:

```sh
touch .lintstagedrc
```

Once the file has created, add the placeholder object below:

```json
{}
```

> commit: [Create Lint-staged configuration](https://github.com/rxseven/setup-react-app/commit/bece2ec2d2fee298eac69ec9bdd145cf384b13eb)

You may need to define `.lintstagedrc` as a `JSON` format to Visual Studio Code’s file association list. In `.vscode/settings.json` file, add the following line to `"files.associations"` section:

```diff
  {
    // File associations to languages
    "files.associations": {
-     ".babelrc": "json"
+     ".babelrc": "json",
+     ".lintstagedrc": "json"
    }
  }
```

> commit: [Add Lint-staged configuration to VSCode's file association list](https://github.com/rxseven/setup-react-app/commit/9c8c7095b4caf7ec5f347de28c0b9e892cd7beb7)

**Husky**

Open `package.json` file and add `precommit` script to `scripts` section:

```diff
  {
    "build": "node scripts/build.js",
+   "precommit": "lint-staged",
    "start": "node scripts/start.js",
    "test": "node scripts/test.js --env=jsdom"
  }
```

> commit: [Add Git pre-commit script](https://github.com/rxseven/setup-react-app/commit/ab5df518a7b2d6579a0eb2cc614f51baef8d81e4)

[Back to top](#table-of-contents)

## Adding React Hot Loader

[React Hot Loader](https://github.com/gaearon/react-hot-loader) is a plugin that allows React components to be live reloaded without the loss of state. It works with Create React App that support both Hot Module Replacement (HMR) and Babel plugins.

#### Installation

You can safely install it as a regular dependency instead of a development dependency:

```sh
yarn add react-hot-loader
```

> commit: [Install react-hot-loader package](https://github.com/rxseven/setup-react-app/commit/0f5fcade53df7821b8a1a360fa08f82c269d4087)

#### Configuration

In `config/webpack.config.dev.js` file, add `plugins: ['react-hot-loader/babel']` to Babel loader configuration. Your configuration should look like this:

```diff
  // Process JS with Babel.
  {
    test: /\.(js|jsx|mjs)$/,
    ...
    options: {
      ...
      cacheDirectory: true,
+
+     // React Hot Loader
+     plugins: ['react-hot-loader/babel']
    }
  }
```

Then, add the lines below to `src/components/core/App/index.jxs` file:

```diff
  // Module dependencies
  import React, { Fragment } from 'react';
+ import { hot } from 'react-hot-loader';

  // Component
  const App = () => <div>App component</div>;

  // Module exports
- export default App;
+ export default hot(module)(App);
```

> commit: [Setup React Hot Loader](https://github.com/rxseven/setup-react-app/commit/db81fd345df256f1f4c565bbfd429f58f30540aa)

[Back to top](#table-of-contents)

## Running JavaScript Linting

Code linting is a form of static analysis that will find both code errors as well as highlight syntax not adhering to formatting styles. This means it can help us find problematic code before we commit to version control and more importantly before the code finds its way onto production.

### Setup

#### Installation

Create React App ships with [ESLint](https://eslint.org) out of the box! there is no need to install any additional library separately.

Here is a list of ESLint dependencies we got when create a new app with Create React App:

**Core**

```
eslint
```

**Shareable configuration**

```
eslint-config-react-app
```

**Plugins**

```
eslint-plugin-flowtype
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-react
```

#### Configuration

In the project’s root directory, create a configuration file:

```sh
touch .eslintrc
```

> commit: [Create ESLint configuration](https://github.com/rxseven/setup-react-app/commit/cda31607c9f6a6f7ad89c0cba20155a1147333f3)

Then, add the following configuration to the newly created file:

```json
{
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint"
}
```

Open `package.json` file, cut `eslintConfig` property and its values:

```diff
  {
-   "eslintConfig": {
-     "extends": "react-app"
-   }
  }
```

In `.eslintrc` file, paste code snippets from a clipboard and remove `eslintConfig` key:

```diff
  {
    "env": {...},
+   "extends": [
+     "react-app"
+    ],
    "parser": "babel-eslint"
  }
```

> commit: [Setup ESLint](https://github.com/rxseven/setup-react-app/commit/b74d24c0ab36d2436a5e0f9e906728c850ae6304)

You may need to define `.eslintrc` as a `JSON` format to Visual Studio Code’s file association list. In `.vscode/settings.json` file, add the following line to `"files.associations"` section:

```diff
  {
    // File associations to languages
    "files.associations": {
      ".babelrc": "json",
+     ".eslintrc": "json",
      ".lintstagedrc": "json"
    }
  }
```

> commit: [Add ESLint configuration to VSCode's file association list](https://github.com/rxseven/setup-react-app/commit/c1c58d8e06971184465fd788348cd96be66d10d2)

### Ignoring files

ESLint supports excluding files from the linting process when ESLint operates on a directory.

In the project’s root directory, let’s create an ignoring file:

```sh
touch .eslintignore
```

> commit: [Create ESLint ignoring file](https://github.com/rxseven/setup-react-app/commit/d8f9c8b0a81a4474e8bdabc446e6bc86f51da285)

To exclude files from linting, add entries to a `.eslintignore` file:

```
/build
/config
/scripts
/src/playground
/src/registerServiceWorker.js
```

> commit: [Update ignoring list to exclude files from being linted by ESLint](https://github.com/rxseven/setup-react-app/commit/f2d6eaf84313823596198ad09ff9e765f8a6bdb7)

### Using a shareable configuration

Create React App ships with its shareable ESLint configuration called [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) and it is awesome! But we be using another popular one from **Airbnb** which is [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

#### Installation

On the command line, install the configuration as a development dependency:

```sh
yarn add --dev eslint-config-airbnb
```

> commit: [Install eslint-config-airbnb package](https://github.com/rxseven/setup-react-app/commit/1bae339badbb9b9a0da295573e2fc6b8fac808d3)

To list its peer dependencies and their versions, run the command below:

```sh
npm info "eslint-config-airbnb@latest" peerDependencies
```

Then, the output should look like this:

```
{
  eslint: '^4.9.0',
  'eslint-plugin-import': '^2.7.0',
  'eslint-plugin-jsx-a11y': '^6.0.2',
  'eslint-plugin-react': '^7.4.0'
}
```

Since Create React App ships with all dependencies listed above (they are `eslint-config-react-app`’s peer dependencies), we will need to check only the minumum versions of dependencies it requires.

If some are needed to be updated, run `yarn remove <dependency>` follow by `yarn add --dev <dependency>@<version>` for each listed items.

You may need to update `eslint-plugin-jsx-a11y` package, let’s remove the old version first:

```sh
yarn remove eslint-plugin-jsx-a11y
```

Then, install the latest version as a development dependency:

```sh
yarn add --dev eslint-plugin-jsx-a11y
```

> commit: [Update eslint-plugin-jsx-a11y package to v6.0.3](https://github.com/rxseven/setup-react-app/commit/edae96c69341fb911acd76499740b4d05e2418cc)

#### Configuration

In `.eslintrc` file, add `airbnb` to `extends` section:

```diff
  {
    "env": {...},
-   "extends": ["react-app"],
+   "extends": ["react-app", "airbnb"],
    "parser": "babel-eslint"
  }
```

> Note: there is no need to add all peer dependencies to `plugins` section in `.eslintrc` file since they are already pre-configured in the shareable configuration.

> commit: [Setup shareable Airbnb configuration for ESLint](https://github.com/rxseven/setup-react-app/commit/938db6ebf8bca5d33e9cb8558cf2bad9265b2c23)

### Overriding linting rules

In `.eslintrc` file, add the following `rules` section:

```json
{
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "none"
      }
    ],
    "no-useless-escape": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["to"]
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "react/jsx-filename-extension": "off",
    "react/no-string-refs": "off",
    "react/prop-types": "off"
  }
}
```

> commit: [Override ESLint shareable rules](https://github.com/rxseven/setup-react-app/commit/3b6cef1af7c1dfbd69f6d71df435fb97fc9cb18b)

### Displaying lint output in the editor

We will be using [ESLint extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to automatically lint our JavaScript code in the editor.

#### Installatation

1.  Open **Command Palette** in Visial Studio Code by pressing _command + p_.
2.  Type `ext install vscode-eslint` and hit _enter_.
3.  Reload Visual Studio Code.

#### Usage

Head to the [extension’s documentation page](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and follow the instructions.

### Running code linting through the CLI

We will define scripts for running code linting against the entire project from the command line.

#### Configuration

Open `package.json` file and add the following scripts to `scripts` section:

```diff
  {
    "scripts": {
      "build": "node scripts/build.js",
+     "lint:script": "eslint src/**/*.{js,jsx}",
+     "lint:script:fix": "eslint --fix src/**/*.{js,jsx}",
      "precommit": "lint-staged",
      ...
    }
  }
```

> commit: [Add scripts for running code linting through the CLI](https://github.com/rxseven/setup-react-app/commit/659c164e0cc357b6589431dbaeee2cb3d8aa2cb8)

#### Usage

Run the following script to lint JavaScript code with ESLint through the CLI:

```sh
yarn lint:script
```

To automatically fix problems, run the following script instead:

```sh
yarn lint:script:fix
```

With `:fix` option, it instructs ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output. For more information, see [ESLint - Command Line Interface](https://eslint.org/docs/user-guide/command-line-interface#--fix).

### Preventing linting violations from being committed

To prevent invalid code from being committed to a repository, we need to setup a pre-commit hook to run ESLint against staged files that about to be committed.

This pre-commit task will check (lint) JavaScript files that are being marked as "staged" via `git add` before committing valid code to a repository.

In `.lintstagedrc` file, add the following code block:

```diff
  {
+   "src/**/*.{js,jsx}": [
+     "yarn lint:script:fix",
+     "git add"
+   ]
  }
```

> Note: make sure you have [`yarn lint:script:fix`](#running-code-linting-through-the-cli) script defined beforehand.

> commit: [Add pre-commit hook for running code linting against staged files](https://github.com/rxseven/setup-react-app/commit/64bfb18270544a7172ad2338fa616bb4eb327e79)

[Back to top](#table-of-contents)

## Running Stylesheet Linting

[Stylelint](https://stylelint.io) is a modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets. It analyzes code and reports errors when a piece of code doesn’t pass the rules defined in the linter’s configuration.

### Setup

#### Installation

Stylelint should be installed as a development dependency:

```sh
yarn add --dev stylelint
```

> commit: [Install stylelint package](https://github.com/rxseven/setup-react-app/commit/ff155912d1fdea17df80216c5eb0c610201b39fe)

Stylelint by itself supports SCSS syntax very well (as well as other syntaxes) but it was developed to focus on standard CSS.

With [stylelint-scss](https://github.com/kristerkari/stylelint-scss), it introduces rules specific to SCSS syntax. It offers a collection of lint rules for conventions and syntax specific to SCSS.

Let’s install it as well:

```sh
yarn add --dev stylelint-scss
```

> commit: [Install stylelint-scss package](https://github.com/rxseven/setup-react-app/commit/41b268eb36443450a34ff6723514faeea9f4724d)

#### Configuration

After you have Stylelint installed, you need to create a configuration file for it. This is where you will configure all the lint rules you want Stylelint to check for.

In the project’s root directory, create a configuration file:

```sh
touch .stylelintrc
```

Once the file has created, add the placeholder object below:

```json
{}
```

> commit: [Create Stylelint configuration](https://github.com/rxseven/setup-react-app/commit/671660b4ad080facaf685df0040130b940fb7969)

You may need to define `.stylelintrc` as a `JSON` format to Visual Studio Code’s file association list. In `.vscode/settings.json` file, add the following line to `"files.associations"` section:

```diff
  {
    // File associations to languages
    "files.associations": {
      ".babelrc": "json",
      ".eslintrc": "json"
-     ".lintstagedrc": "json"
+     ".lintstagedrc": "json",
+     ".stylelintrc": "json"
    }
  }
```

> commit: [Add Stylint configuration to VSCode's file association list](https://github.com/rxseven/setup-react-app/commit/8537fde960bdf2825e979006b1075fdc3ab52289)

### Using a shareable configuration

We will be using a famous shareable [recommended SCSS configuration](https://github.com/kristerkari/stylelint-config-recommended-scss) for Stylelint. We can use it as is or as a foundation for our own configuration.

#### Installation

On the command line, install the configuration as a development dependency:

```sh
yarn add --dev stylelint-config-recommended-scss
```

> commit: [Install stylelint-config-recommended-scss package](https://github.com/rxseven/setup-react-app/commit/279d7fc895d9a8320a3ab510689f16d72c713595)

You may also need another shareable configuration to tweak Stylelint rules to accept [CSS modules specific syntax](https://github.com/pascalduez/stylelint-config-css-modules):

```sh
yarn add --dev stylelint-config-css-modules
```

> commit: [Install stylelint-config-css-modules package](https://github.com/rxseven/setup-react-app/commit/b3a03d3f577f21b528c7c42778036b86177cf63a)

#### Configuration

In `.stylelintrc` file, add `stylelint-config-recommended-scss` to `extends` section:

```diff
- {}
+ {
+   "extends": [
+     "stylelint-config-recommended-scss"
+   ]
+ }
```

> commit: [Setup shareable recommended SCSS configuration for Stylelint](https://github.com/rxseven/setup-react-app/commit/b950a5a1c66a7e795fb76f5cbcaaa83e395db2b2)

Follow by `stylelint-config-css-modules`:

```diff
  {
    "extends": [
-     "stylelint-config-recommended-scss"
+     "stylelint-config-recommended-scss",
+     "stylelint-config-css-modules"
    ]
  }
```

> commit: [Setup shareable CSS modules configuration for Stylelint](https://github.com/rxseven/setup-react-app/commit/3c2b8fbf76dc820f31e0788315142323679e2bfc)

### Overriding linting rules

In `.stylelinerc` file, add the following `rules` section to prevent Stylelint from warning against Sass directives:

```json
{
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["each", "extend", "function", "if", "include", "mixin"]
    }],
    "no-descending-specificity": null
  }
}
```

> commit: [Override Stylelint shareable rules](https://github.com/rxseven/setup-react-app/commit/b3b1b9fc010fb21e116ac7f08aa87078e0606323)

### Display lint output in the editor

We will be using [Stylelint extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) to automatically lint our stylesheet code in the editor.

#### Installatation

1.  Open **Command Palette** in Visial Studio Code by pressing _command + p_.
2.  Type `ext install stylelint` and hit _enter_.
3.  Reload Visual Studio Code.

#### Usage

Head to the [extension’s documentation page](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) and follow the instructions.

#### Configuration

To prevent both the editor’s stylesheet built-in linters and this extension from reporting essentially the same errors, we need to disable the editor’s tools in Visual Studio Code’s **Workspace Settings**.

Let’s Add the following configuration to `.vscode/settings.json` file:

```
{
  // Stylelint
  // Prevent both the editor’s stylesheet built-in linters and Stylelint
  // from reporting essentially the same errors.
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
}
```

> commit: [Setup Stylelint extension for VSCode](https://github.com/rxseven/setup-react-app/commit/30d1d4bc19f1ad8432bc6f2236524316e6c2a3c4)

### Running stylesheet linting through the CLI

We will define a script for running stylesheet linting against the entire project from the command line.

#### Configuration

Open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      ...
      "lint:script:fix": "eslint --fix src/**/*.{js,jsx}",
+     "lint:stylesheet": "stylelint \"src/**/*.scss\"",
      "precommit": "lint-staged",
      ...
    }
  }
```

> Note: be sure to include the quotation marks around file globs. This ensures that you can use the powers of node-glob (like the `**` globstar) regardless of your shell. For more information, see [The stylelint CLI](https://stylelint.io/user-guide/cli/#examples).

> commit: [Add script for running stylesheet linting through the CLI](https://github.com/rxseven/setup-react-app/commit/e547e4ab4e5bdbd88e32964b2cedaadceaf47812)

#### Usage

Run the following script to lint stylesheet with Stylelint through the CLI:

```sh
yarn lint:stylesheet
```

### Preventing linting violations from being committed

To prevent invalid stylesheet from being committed to a repository, we need to setup a pre-commit hook to run Stylelint against staged stylesheet files that about to be committed.

This pre-commit task will check (lint) `.scss` files that are being marked as "staged" via `git add` before committing valid stylesheet to a repository.

In `.lintstagedrc` file, add the following code block:

```diff
  {
-   "src/**/*.{js,jsx}": [...]
+   "src/**/*.{js,jsx}": [...],
+   "src/**/*.scss": [
+     "yarn lint:stylesheet",
+     "git add"
+   ]
  }
```

> Note: make sure you have [`yarn lint:stylesheet`](#running-stylesheet-linting-through-the-cli) script defined beforehand.

> commit: [Add pre-commit hook for running stylesheet linting against staged files](https://github.com/rxseven/setup-react-app/commit/428df764483faaecaae483356a68158e02f141b6)

[Back to top](#table-of-contents)

## Running Static Type Checking

JavaScript is awesome! however, its lack of static typing can be a real pain for developers, bugs only appear at runtime, are hard to find and code refactoring is a real challenge.

This is where static type checkers such as TypeScript and Flow come into play with their main features being:

- Helping to catch errors early, close to the root cause and at buildtime.
- Improving code readability and maintainability.

[Flow](https://flow.org) is a static type checker for your JavaScript code that helps you write code with fewer bugs. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale.

### Setup

#### Installation

Recent versions of Flow work with Create React App projects out of the box. All we need to do is install Flow and create a configuration file.

We need to install Flow binary as a development dependency:

```sh
yarn add --dev flow-bin
```

> Note: there is no need to install [babel-preset-flow](https://github.com/babel/babel/tree/master/packages/babel-preset-flow) since Create React App already supports Flow by default.

> commit: [Install flow-bin package](https://github.com/rxseven/setup-react-app/commit/67e2db815188e76aebfc33dfe3605000b52e8ebd)

#### Configuration

First, we need to prepare a project for Flow by running the following command to initialize Flow configuration:

```sh
yarn flow init
```

The command will then create `.flowconfig` file inside the project’s root directory with default options as follows:

```
[ignore]

[include]

[libs]

[lints]

[options]

[strict]
```

Next, we need to create a script for running Flow within our project, open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      ...
-     "test": "node scripts/test.js --env=jsdom"
+     "test": "node scripts/test.js --env=jsdom",
+     "type": "flow"
    }
  }
```

> commit: [Setup Flow](https://github.com/rxseven/setup-react-app/commit/087b15aba3620dd7f0198802d21c2d486b3177b1)

### Ignoring files

Flow needs to know which files to read and watch for changes. This set of files is determined by taking all included files and excluding all the ignored files.

The `[ignore]` section in a `.flowconfig` file tells Flow to ignore files matching the specified regular expressions when type checking your code. By default, nothing is ignored.

You may need to configure Flow to ignore certain files especially files in `node_modules`:

```diff
  [ignore]
+ .*/node_modules/.*
```

> commit: [Update ignoring list to exclude files from being checked by Flow](https://github.com/rxseven/setup-react-app/commit/f1dc867e7d667b5d4905f26e4ecd72253869e2b3)

### Specifying file extensions

By default, Flow will look for files with the extensions `.js`, `.jsx`, `.mjs` and `.json`. You may need to override this behavior with this option.

In `.flowconfig` file, add a list of file extensions to `[options]` section as follows:

```diff
  [options]
+ module.file_ext=.css
+ module.file_ext=.js
+ module.file_ext=.json
+ module.file_ext=.jsx
+ module.file_ext=.mjs
+ module.file_ext=.scss
```

> commit: [Override Flow's file extension list](https://github.com/rxseven/setup-react-app/commit/1b86179bb0ccbb7cf4c69724ed362f9e52967022)

### Library Definitions

When you start a JavaScript project (including React obviously) and use Flow for static type checking, you likely want to use some third-party libraries that were not written with Flow and they are absolutely not under the control of the project.

That means a project using Flow for static type checking may need to reference outside code that either doesn’t have type information or doesn’t have accurate and/or precise type information. By default, Flow will just ignore these libraries leaving them untyped.

In order to handle this, Flow supports the concept of a **“library definition”** or **“libdef”** which allow you to describe the interface of a module or library separate from the implementation of that module/library. For more information on library definitions, see [this documentation](https://flow.org/en/docs/libdefs).

#### Introducing Flow-typed

[Flow-typed](https://github.com/flowtype/flow-typed) is a repository of third-party library interface definitions for use with Flow. It is a collection of high-quality library definitions, tests to ensure that definitions remain high quality, and tooling to make it as easy as possible to import them into your project.

#### Installation

Let’s install the CLI tool on the command line as a development dependency:

```sh
yarn add --dev flow-typed
```

> commit: [Install flow-typed package](https://github.com/rxseven/setup-react-app/commit/2505980e69dd15c0b83042b55e6457bb7e3bca66)

#### Configuration

We will need to define script for running `flow-typed install` on the command line. To do this, open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      ...
-     "type": "flow"
+     "type": "flow",
+     "type:install": "flow-typed install"
    }
  }
```

> commit: [Add script for installing library definitions](https://github.com/rxseven/setup-react-app/commit/1c7ec57468f648de059a8dea823e9cd11cd2f045)

#### Usage

All you have to do when you add one or more new dependencies to your project is run the script on the command line. This will search the libdef repository and download all the libdefs that are relevant for your project and install them for you.

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/2a82727369de4416bbf5edfca94c7cb7a3dcffc7)

### Using Flow extension for code editor

We will be using [Flow for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) to automatically check our JavaScript in the editor.

#### Installatation

1.  Open **Command Palette** in Visial Studio Code by pressing _command + p_.
2.  Type `ext install flowtype.flow-for-vscode` and hit _enter_.
3.  Reload Visual Studio Code.

#### Configuration

We will be using Flow for static type checking and ESLint for JavaScript linting rather than the editor’s built-in JavaScript & TypeScript validators.

To disable the editor’s built-in tools, we need to add the following configuration to `.vscode/settings.json` file:

```diff
  {
    // Disable built-in code formatter and validator
    "editor.formatOnSave": false,
    "javascript.format.enable": false,
-   "javascript.validate.enable": false,

    ...
    ...

+   // Flow and ESLint
+   // Use Flow for static type checking and ESLint for JavaScript linting
+   // rather than built-in JavaScript & TypeScript validation.
+   "javascript.validate.enable": false
  }
```

We also need to configure Visual Studio Code to run Flow binary from the project’s dependencies, which is from `node_modules`:

```diff
  {
    ...
    ...

    // File associations to languages
-   "files.associations": {...}
+   "files.associations": {...},
+
+   // Flow
+   // Run Flow from local Node modules.
+   "flow.useNPMPackagedFlow": true

    ...
    ...
  }
```

> commit: [Setup Flow extension for VSCode](https://github.com/rxseven/setup-react-app/commit/d75a8984ac773e52ab5c834f964ab0bdc4fc0554)

#### Usage

Head to the [extension’s documentation page](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) and follow the instructions.

### Linting

There is no need to install [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype) plugin separately, Flow type linting rules for ESLint work with Create React App projects out of the box!

> Note: ESLint works with `babel-eslint@8.1.1` and higher, please do double check your current version in `package.json` file. For more information, see [this issue](https://github.com/eslint/eslint/issues/9767).

In case you need to update a new version of [babel-eslint](https://github.com/babel/babel-eslint) library, you need to remove the current version from the project’s development dependency before updating to a new version:

```sh
yarn remove babel-eslint
```

Then, install a new version:

```sh
yarn add --dev babel-eslint@8.2.3
```

> commit: [Update babel-eslint package to v8.2.3](https://github.com/rxseven/setup-react-app/commit/1a95e01e90cab141546e853d3d6168ca275c29c5)

### Running type checking through the CLI

We will define a script for running type checking through the entire project from the command line.

#### Configuration

Open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      ...
      "type": "flow",
+     "type:check": "flow check",
      "type:install: "flow-typed install"
    }
  }
```

> commit: [Add script for running type checking through the CLI](https://github.com/rxseven/setup-react-app/commit/c6ee7a26258122f39580dd13402205c2a648ac79)

#### Usage

Run the command below to run a full check and print the results through the CLI:

```sh
yarn type:check
```

### Preventing type violations from being committed

To prevent invalid code from being committed to a repository, we need to setup a pre-commit hook to run type checking against staged files that about to be committed.

This pre-commit task will run type checking JavaScript files that are being marked as "staged" via `git add` before committing valid code to a repository.

First, open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      ...
      "type:check": "flow check",
+     "type:check:focus": "flow focus-check",
      "type:install: "flow-typed install"
    }
  }
```

Then, in `.lintstagedrc` file, add the following line:

```diff
  {
    "src/**/*.{js,jsx}": [
      "yarn lint:script:fix",
+     "yarn type:check:focus",
      "git add"
    ]
  }
```

> commit: [Add pre-commit hook for running type checking against staged files](https://github.com/rxseven/setup-react-app/commit/7d11964b38ea1cb5adadac9015bfcb2fe5979113)

### Applying type checking

You may need to apply type checking to the project starting point and App component.

#### Project startin point

Open `src/index.jsx` file and add the content below:

```diff
+ // @flow
  ...
  ...
```

> commit: [Add type checking to the project starting point](https://github.com/rxseven/setup-react-app/commit/15e50d77d54f3b429404d5d99d152c24945e2ce6)

#### App component

Open `src/components/core/App/index.jsx` file and add the content below:

```diff
+ // @flow
  // Module dependencies
- import React from 'react';
+ import * as React from 'react';
  import { hot } from 'react-hot-loader';

+ // Types
+ type Return = React.Node;
+
  // Component
- const App = () => <div>App component</div>;
+ const App = (): Return => <div>App component</div>;

  // Module exports
  export default hot(module)(App);
```

> commit: [Add type checking to App component](https://github.com/rxseven/setup-react-app/commit/e8bcd812577fd73ec39955bfd98a4b837c4bd08d)

[Back to top](#table-of-contents)

## Running Tests

Writing tests is an essential part of software development to ensure a robust application. Tests enable you to automatically verify that your application is working on a certain level. The certain level depends on the quality, quantity (coverage) and type of your tests (unit tests, integration tests, end-to-end tests).

This section will guide you through the steps necessary to setup testing tools in Create React App from the ground up.

### Configuring Jest

[Jest](https://facebook.github.io/jest/) is a delightful JavaScript test framework running on Node.js. It is the official testing library by Facebook and it is used by Facebook to test all JavaScript code including React applications. Jest introduced the so called snapshot tests which can be used perfectly as supplement to your React unit and integration tests with [Enzyme](https://github.com/airbnb/enzyme).

#### Installation

Jest works out of the box with Create React App, there is no need to install any additional library separately. But there are some small changes we need to tweak to suit our preferences.

#### Configuration

We will define Jest configuration in `jest.config.json` file rather than in `package.json` file (default).

On the command line, create a configuration file in the project’s root directory:

```sh
touch jest.config.json
```

Open `package.json` file, cut `jest` property and its values:

```diff
  {
-   "jest": {...}
  }
```

Sort those configuration properties alphabetically, remove `jest` key, and paste it in `jest.config.json` file:

```json
{
  "collectCoverageFrom": ["src/**/*.{js,jsx,mjs}"],
  "moduleFileExtensions": [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
    "mjs"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "setupFiles": ["<rootDir>/config/polyfills.js"],
  "testEnvironment": "node",
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
}
```

In order to tell Jest to use your configuration file for the test environment, in `package.json` file update the following `test` script with:

```diff
- "test": "node scripts/test.js --env=jsdom"
+ "test": "node scripts/test.js --env=jsdom --config jest.config.json"
```

> commit: [Setup Jest](https://github.com/rxseven/setup-react-app/commit/05faf4387169ad4a6fb4566b6950152d514bf6ad)

#### Ignoring paths

`coveragePathIgnorePatterns` property is an array of regexp pattern strings that are matched against all file paths before executing the test. If the file path matches any of the patterns, coverage information will be skipped. For more information on coverage path ignoring patterns, see [Configuring Jest](https://facebook.github.io/jest/docs/en/configuration.html#coveragepathignorepatterns-array-string).

We will need to configure Jest to ignore the following paths when running code coverage:

```diff
  {
    "collectCoverageFrom": ["src/**/*.{js,jsx,mjs}"],
+   "coveragePathIgnorePatterns": [
+     "<rootDir>/build/",
+     "<rootDir>/config/",
+     "<rootDir>/node_modules/",
+     "<rootDir>/src/config/",
+     "<rootDir>/src/constants/",
+     "<rootDir>/src/dependencies/",
+     "<rootDir>/src/index.jsx",
+     "<rootDir>/src/registerServiceWorker.js"
+   ],
    ...
    ...
  }
```

> commit: [Add code coverage ignoring paths](https://github.com/rxseven/setup-react-app/commit/7511cab9c9f78464c8446472e7bbbdd3f8d74ac6)

### Configuring Enzyme

[Enzyme](http://airbnb.io/enzyme) is a JavaScript testing utility for React that makes it easier to assert, manipulate, and traverse your React Component’s output. Its API is meant to be intuitive and flexible by mimicking jQuery’s API for DOM manipulation and traversal.

> Enzyme uses the [React Test Utilities](https://reactjs.org/docs/test-utils.html) underneath, but is more convenient, readable, and powerful.

#### Installation

We will need to install Enzyme along with an adapter corresponding to the version of React we are using. For instance, if you are using Enzyme with React 16, you can run:

```sh
yarn add --dev enzyme
```

> commit: [Install enzyme package](https://github.com/rxseven/setup-react-app/commit/ffcfd49318de8e29d16265ffaa4e05548972c059)

and:

```sh
yarn add --dev enzyme-adapter-react-16
```

> commit: [Install enzyme-adapter-react-16 package](https://github.com/rxseven/setup-react-app/commit/9b3cb0c5ff5ebbf0ddbcdb163766aa52eb520165)

Each adapter may have additional peer dependencies which we will need to install as well. For instance, [enzyme-adapter-react-16](https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16) has peer dependencies on [react](https://github.com/facebook/react), [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom), and [react-test-renderer](https://reactjs.org/docs/test-renderer.html).

We just need to install the missing one:

```sh
yarn add --dev react-test-renderer
```

> commit: [Install react-test-renderer package](https://github.com/rxseven/setup-react-app/commit/4d306c4979cd3c6b0dd7b9d12bc8cfd045ae8459)

Additionally, we find [jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md) helpful to simplify our tests with readable matchers. So, let’s also install it as a development dependency:

```sh
yarn add --dev jest-enzyme
```

> commit: [Install jest-enzyme package](https://github.com/rxseven/setup-react-app/commit/3b981431a833068302ff50e88b40b66cc36593a2)

#### Configuration

The adapter will also need to be configured in the global setup file. To create a configuration file, run the following command in the project’s root directory:

```sh
touch src/tests/setup.js
```

Then, add the configuration below:

```js
// Module dependencies
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

// Configure Enzyme adapter
configure({ adapter: new Adapter() });
```

Since we bootstraped the project with Create React App and we ran [`yarn eject`](#extracting-hidden-configuration) before creating `src/tests/setup.js` file, the resulting `package.json` file won’t contain any reference to it, so we should manually create the property `setupTestFrameworkScriptFile` in the configuration for Jest.

To do that, open `jest.config.json` file and add the line below:

```diff
  {
    ...
    "setupFiles": ["<rootDir>/config/polyfills.js"],
+   "setupTestFrameworkScriptFile": "<rootDir>/src/tests/setup.js",
    "testEnvironment": "node",
    ...
  }
```

Then, we have to update the reference path in `config/paths.js` file:

```diff
  module.exports = {
    ...
    yarnLockFile: resolveApp('yarn.lock'),
-   testsSetup: resolveApp('src/setupTests.js'),
+   testsSetup: resolveApp('src/tests/setup.js'),
    appNodeModules: resolveApp('node_modules'),
    ...
  };
```

> commit: [Setup Enzyme](https://github.com/rxseven/setup-react-app/commit/c195221b1d2382c73f5bc776809f5a3f41a4235f)

### Configuring Redux testing

In order to be able to [run tests on Redux application](https://redux.js.org/recipes/writing-tests), you will need install a [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) library to create a mock store for your Redux testing.

On the command line, let’s install the library as a development dependency:

```sh
yarn add --dev redux-mock-store
```

> commit: [Install redux-mock-store package](https://github.com/rxseven/setup-react-app/commit/614930d6fea21c3e621c4542f463625ba30a5cfc)

### Linting

To make ESLint happy when writing tests with Jest, we need to install an ESLint plugin for Jest.

#### Installation

Let’s install [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) as a development dependency:

```sh
yarn add --dev eslint-plugin-jest
```

> commit: [Install eslint-plugin-jest package](https://github.com/rxseven/setup-react-app/commit/27761a2e4fdc05d0216d1a05db9e33ff7e7d1a0d)

#### Configuration

Open `.eslintrc` file and add `jest` to the `plugins` section:

```diff
  {
    ...
    "parser": "babel-eslint",
+   "plugins": ["jest"],
    "rules": {...}
    ...
  }
```

Then, configure the rules for the plugin within `rules` section as follows:

```diff
  {
    "rules": {
      ...
      "import/no-named-as-default-member": "off",
+     "jest/no-disabled-tests": "warn",
+     "jest/no-focused-tests": "error",
+     "jest/no-identical-title": "error",
+     "jest/prefer-to-have-length": "warn",
+     "jest/valid-expect": "error",
      "jsx-a11y/anchor-is-valid": [...],
      ...
    }
  }
```

We will also need to whitelist the environment variables provided by Jest by doing:

```diff
  {
    "env": {
      "browser": true,
-     "node": true
+     "node": true,
+     "jest/globals": true
    },
    ...
  }
```

This plugin exports a recommended configuration that enforces good testing practices. To enable this configuration, update `.eslintrc` file as below:

```diff
  {
    "env": {...},
-   "extends": ["react-app", "airbnb"],
+   "extends": ["react-app", "airbnb", "plugin:jest/recommended"],
    "parser": "babel-eslint",
    ...
  }
```

> commit: [Setup ESLint plugin for Jest](https://github.com/rxseven/setup-react-app/commit/90c3ce740042c50603c03038e82dbacc4c7939b8)

### Using Jest extension for code editor

We will be using [Jest for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) to automatically test our JavaScript in the editor.

#### Installatation

1.  Open **Command Palette** in Visial Studio Code by pressing _command + p_.
2.  Type `ext install orta.vscode-jest` and hit _enter_.
3.  Reload Visual Studio Code.

#### Usage

Head to the [extension’s documentation page](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) and follow the instructions.

### Running tests through the CLI

We will define a scripts for running tests through the entire project from the command line.

#### Configuration

> `test` script is already set and ready to use.

Jest has an integrated [coverage reporter](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#coverage-reporting) that requires no configuration, but we will need to add this to our workflow manually.

Let’s open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      ...
      "test": "node scripts/test.js --env=jsdom --config jest.config.json",
+     "test:coverage": "npm test -- --coverage --no-cache",
      "type": "flow",
      ...
    }
  }
```

> Note: the cache should only be disabled if you are experiencing caching related problems. On average, disabling the cache makes Jest at least two times slower. For more information on caching, see [Jest CLI Options](https://facebook.github.io/jest/docs/en/cli.html#cache) and [Caching Issues](https://facebook.github.io/jest/docs/en/troubleshooting.html#caching-issues).

> commit: [Add script for running tests with coverage report through the CLI](https://github.com/rxseven/setup-react-app/commit/a3f5b15cd185863b9984697af04263bdbf45d09b)

#### Usage

Run the following script to run tests with Jest through the CLI:

```sh
yarn test
```

By default, when you run the command above, Jest will only run the tests related to files changed (modified) since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests in the project you have. However, you can also press `a` in the watch mode to force Jest to run all tests.

> Note: Jest will always run all tests on a [continuous-integration](#continuous-integration) server.

Moreover, you can use the following command to run tests include a coverage report:

```sh
yarn test:coverage
```

> Note: tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

### Preventing broken code from being committed

To prevent broken code from being committed to a repository, we need to setup a pre-commit hook to run tests against staged files that about to be committed.

This pre-commit task will run tests against JavaScript files that are being marked as "staged" via `git add` before committing working code to a repository.

First, open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      ...
      "test:coverage": "npm test -- --coverage --no-cache",
+     "test:staged": "cross-env CI=true node scripts/test.js --env=jsdom --config jest.config.json --findRelatedTests"
    }
  }
```

> Note: when set `--findRelatedTests`, will find and run the tests that cover a space separated list of source files that were passed in as arguments. Useful for pre-commit hook integration to run the minimal amount of tests necessary. For more information, see [Jest CLI Options](https://facebook.github.io/jest/docs/en/cli.html#findrelatedtests-spaceseparatedlistofsourcefiles).

> Note: when set `CI=true`, Create React App makes the test runner non-watching. Most CIs set this flag by default. Details are available [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#advanced-configuration).

Then, in `.lintstagedrc` file, add the following line:

```diff
  {
    "src/**/*.{js,jsx}": [
+     "yarn test:staged",
      "yarn lint:script:fix",
      "git add"
    ]
  }
```

> commit: [Add pre-commit hook for running tests against staged files](https://github.com/rxseven/setup-react-app/commit/57e9d8825cd97a53a7ac9e9aa8ff82cc27d971a0)

### Applying tests

You may need to apply tests to App component. On the command line, let’s create a test file:

```sh
touch src/components/core/App/index.test.js
```

Then, add the tests below:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import App from './index';

// Tests
describe('components/core/App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
```

> commit: [Add tests to App component](https://github.com/rxseven/setup-react-app/commit/5ba99e7568a20d7c221953f287677cff3615c1db)

[Back to top](#table-of-contents)

## Formatting Code Automatically

Having consistent code formatting and style is an important part of reducing cognitive load when working with other developers or when jumping around between projects.

We will be using [Prettier](https://prettier.io), a tool that will format code against some opinionated and standard default formatting rules to ensure all final code maintains a consistent style.

### Setup

#### Installation

Prettier should be installed as a development dependency:

```sh
yarn add --dev --exact prettier
```

> commit: [Install prettier package](https://github.com/rxseven/setup-react-app/commit/3c33f581af861ae8b5e031bc811db6a0e49faa33)

#### Configuration

In the project’s root directory, create a configuration file:

```sh
touch .prettierrc
```

> commit: [Create Prettier configuration](https://github.com/rxseven/setup-react-app/commit/0f78f4a57fa0b229961132679cd7155cc1b738f4)

Then, add the following configuration to the newly created file:

```json
{
  "singleQuote": true
}
```

> commit: [Setup Prettier](https://github.com/rxseven/setup-react-app/commit/dfb556a7b6f9121eaa4299ef548c9d8b48bd8f8d)

You may need to define `.prettierrc` as a `JSON` format to Visual Studio Code’s file association list. In `.vscode/settings.json` file, add the following line to `"files.associations"` section:

```diff
  {
    // File associations to languages
    "files.associations": {
      ...
      ".lintstagedrc": "json",
+     ".prettierrc": "json",
      ".stylelintrc": "json"
    }
  }
```

> commit: [Add Prettier configuration to VSCode's file association list](https://github.com/rxseven/setup-react-app/commit/ad2a3469fbc5c6a8270b43d81ee18f7a9b21aa29)

### Ignoring code

Prettier offers an escape hatch to ignore a block of code or prevent entire files from being formatted.

In the project’s root directory, let’s create an ignoring file:

```sh
touch .prettierignore
```

> commit: [Create Prettier ignoring file](https://github.com/rxseven/setup-react-app/commit/1feea5ba9a145876e13f9404da9f3f593c3bfee0)

To exclude files from formatting, add entries to a `.prettierignore` file:

```
/config
/scripts
package.json
README.md
```

> commit: [Update ignoring list to exclude files from being formatted by Prettier (1)](https://github.com/rxseven/setup-react-app/commit/8f534e02e5d15ec09e08156ba307b05c027eed1d), [(2)](https://github.com/rxseven/setup-react-app/commit/4effb64923d9281c2c92768d550c5b7178cd1f4e)

### Using Prettier extension for code editor

We will be using [Prettier formatter for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to automatically format our code in the editor.

#### Installatation

1.  Open **Command Palette** in Visial Studio Code by pressing _command + p_.
2.  Type `ext install prettier-vscode` and hit _enter_.
3.  Reload Visual Studio Code.

#### Configuration

There is one change required to the editor’s settings is to ensure the **Format On Save** functionality is triggered. This ensures the Prettier extension applies the format rules on each save of a supported file type.

To do this, we will need to remove the existing configuration we’ve done in [the previous section](#disabling-built-in-code-formatter-and-validator) in `.vscode/settings.json` file:

```diff
  {
-   // Disable built-in code formatter and validator
-   "editor.formatOnSave": false,
-   "javascript.format.enable": false,

    ...
    ...
  }
```

Then, add the configuration below:

```diff
  {
    ...
    ...

+   // Prettier
+   // Format a file on save.
+   "editor.formatOnSave": true,

    // File associations to languages
    "files.associations": {..}
  }
```

Next, we have to disable the default JavaScript formatter (editor’s built-in) and allow Prettier to handle code formatting:

```
  {
    ...
    ...

    // Flow
    // Run Flow from local Node modules.
    "flow.useNPMPackagedFlow": true,

+   // Prettier
+   // Disable the default JavaScript formatter (editor’s built-in) and allows
+   // Prettier to handle code formatting.
+   "javascript.format.enable": false
+
    ...
    ...
  }
```

> commit: [Setup Prettier extension for VSCode](https://github.com/rxseven/setup-react-app/commit/724d08ec03796fc7fe41ac5c7a96edc6d0e01d77)

#### Usage

Head to the [extension’s documentation page](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and follow the instructions.

### Fixing formatting conflicts

We need to configure Prettier and ESLint to work together.

#### Solution

[prettier-eslint](https://github.com/prettier/prettier-eslint) is a lightweight library that will run your code through **Prettier** and then run **ESLint** `--fix`.

This solution allows you to format your code via Prettier, and then pass the result of that to ESLint `--fix`. This way you can get the benefits of Prettier’s superior formatting capabilities, but also benefit from the configuration capabilities of ESLint.

> For files with an extension of `.css`, `.scss`, or `.json` this only runs Prettier since ESLint cannot process those.

#### Installation

We need to install this library as a development dependency:

```sh
yarn add --dev prettier-eslint
```

> commit: [Install prettier-eslint package](https://github.com/rxseven/setup-react-app/commit/4ed193c554d9fd454d6af6718c743b0bb346a04c)

#### Configuration

Add the configuration below to `settings.json` file:

```diff
  {
    ...
    ...

    // Flow and ESLint
    // Use Flow for static type checking and ESLint for JavaScript linting
    // rather than built-in JavaScript & TypeScript validation.
-   "javascript.validate.enable": false
+   "javascript.validate.enable": false,
+
+   // Prettier
+   // Use prettier-eslint instead of prettier. Other settings will only be
+   // fallbacks in case they could not be inferred from ESLint rules.
+   "prettier.eslintIntegration": true
  }
```

> commit: [Setup Prettier and ESLint integration](https://github.com/rxseven/setup-react-app/commit/13f45b7e6cf3103d2b491109a83e05f9446f5a32)

### Running code formatting through the CLI

Running Prettier this way on the command line outputs to the screen the format changes that would have been made to your code based on the rules of Prettier and ESLint.

#### Installation

We need to install a [prettier-eslint-cli](https://github.com/prettier/prettier-eslint-cli) library, this CLI allows you to use `prettier-eslint` on one or multiple files. `prettier-eslint-cli` forwards on the `filePath` and other relevant options to `prettier-eslint` which identifies the applicable ESLint configuration for each file and uses that to determine the options for `prettier` and `eslint --fix`.

Let’s install the CLI tool as a development dependency:

```sh
yarn add --dev prettier-eslint-cli
```

> commit: [Install prettier-eslint-cli package](https://github.com/rxseven/setup-react-app/commit/ee764dfa85f1d6146ba42e30be850de37b058873)

#### Configuration

Open `package.json` file and add the following script to `scripts` section:

```diff
  {
    "scripts": {
      "build": "node scripts/build.js",
+     "format": "prettier-eslint --write src/**/*.{js,json,jsx,scss}",
      "lint:script": "eslint src/**/*.{js,jsx}",
      ...
    }
  }
```

> commit: [Add script for running code formatting through the CLI](https://github.com/rxseven/setup-react-app/commit/0fe17485fc510dbee388bfb6114b8148ce08ac7b)

#### Usage

Run the following script to format code with Prettier throught the CLI:

```sh
yarn format
```

### Preventing formatting violations from being committed

To prevent invalid code from being committed to a repository, we need to setup a pre-commit hook to run Prettier against staged files that about to be committed.

This pre-commit task will re-formatting files that are being marked as "staged" via `git add` before committing consistent code formatting and style to a repository.

In `.lintstagedrc` file, add the following code block:

```diff
  {
    ...
-   "src/**/*.scss": [...]
+   "src/**/*.scss": [...],
+   "src/**/*.{js,json,jsx,scss}": [
+     "yarn format",
+     "git add"
+   ]
  }
```

> Note: make sure you have [`yarn format`](#running-code-formatting-through-the-cli) script defined beforehand.

> commit: [Add pre-commit hook for running code formatting against staged files](https://github.com/rxseven/setup-react-app/commit/1aad338b7cd7bdece43dd8683fd1df6be24de25a)

[Back to top](#table-of-contents)

## Using JSX Control Statements

There is no built-in looping or conditional syntax in React. JSX is not a templating library, it’s declarative syntactic sugar over functional JavaScript expressions. For more information, see [React - Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html).

### Setup

[JSX Control Statements](https://github.com/AlexGilleran/jsx-control-statements) is a Babel plugin that extends JSX to add basic control statements (conditionals and loops). It provides a component-like syntax that keeps your `render` functions neat and readable, but desugars into clean, readable JavaScript.

#### Installation

On the command line, install the library as a development dependency:

```sh
yarn add --dev babel-plugin-jsx-control-statements
```

> commit: [Install babel-plugin-jsx-control-statements package](https://github.com/rxseven/setup-react-app/commit/3ae1bc2ec1160305fc80e9e941103e851dad60cb)

#### Configuration

Open `.babelrc` file and add the following line:

```diff
  {
+   "plugins": ["jsx-control-statements"],
    "presets": ["react-app"]
  }
```

> commit: [Setup JSX control statements](https://github.com/rxseven/setup-react-app/commit/dbbbac407c0044ae900a87d5f1a4e86a03205b94)

### Linting

Since all control statements are transformed via Babel, no require or import calls are needed. This in turn would lead to warnings or errors by ESLint about undefined variables.

But fortunately you can use this [ESLint plugin for JSX Control Statements](https://github.com/vkbansal/eslint-plugin-jsx-control-statements) to lint your code.

#### Installation

Let’s install the ESLint plugin as a development dependency:

```sh
yarn add --dev eslint-plugin-jsx-control-statements
```

> commit: [Install eslint-plugin-jsx-control-statements package](https://github.com/rxseven/setup-react-app/commit/bfc22528b892dae9c814a918c97a01d8aa343d99)

#### Configuration

Open `.eslintrc` file and add the following configuration:

```diff
  {
    "env": {
      "browser": true,
-     "jest/globals": true
+     "jest/globals": true,
+     "jsx-control-statements/jsx-control-statements": true
    },
-   "extends": ["react-app", "airbnb", "plugin:jest/recommended"],
+   "extends": [
+     "react-app",
+     "airbnb",
+     "plugin:jest/recommended",
+     "plugin:jsx-control-statements/recommended"
+   ],
    ...
-   "plugins": ["jest"],
+   "plugins": ["jest", "jsx-control-statements"],
    "rules": {
      ...
+     "jsx-control-statements/jsx-choose-not-empty": "warn",
+     "jsx-control-statements/jsx-for-require-each": "warn",
+     "jsx-control-statements/jsx-for-require-of": "warn",
+     "jsx-control-statements/jsx-if-require-condition": "warn",
+     "jsx-control-statements/jsx-otherwise-once-last": "warn",
+     "jsx-control-statements/jsx-use-if-tag": "warn",
+     "jsx-control-statements/jsx-when-require-condition": "warn",
+     "jsx-control-statements/jsx-jcs-no-undef": "warn",
      ...
+     "react/jsx-no-undef": ["error", { "allowGlobals": true }],
      ...
    }
  }
```

> commit: [Update ESLint configuration to support JSX control statements syntax](https://github.com/rxseven/setup-react-app/commit/e4491485988cbafe1a1e3d8d1edb07960080d4f6)

[Back to top](#table-of-contents)

## Using Absolute Imports

By default ES6 modules in Create React App environment use relative paths like `../`, which is fine for cases where the files you’re importing are relatively close within the file tree (for example, `index.jsx` and `index.test.js`).

But using relative paths is a real pain when you start dealing with deeply nested tree structures because you end up with **dot.dot** syndrome :weary:

### Implementing absolute imports in Create React App

Create React App supports the [`NODE_PATH`](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#advanced-configuration) variable for setting up custom import paths. Let’s improve our development workflow with absolute imports by adding the following line to `.env` file:

```
# Absolute path
NODE_PATH=src/
```

> This solution works with all environments since variables defined in `.env` file will act as the defaults.

There is a few more things we need to do...

### Linting

To prevent ESLint’s `import/no-extraneous-dependencies` rule from violation since it doesn’t recognize absolute paths, we need to tell ESLint to aware of this.

To do this, open `.eslintrc` file and add the following `settings` next to `rules` section:

```json
{
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  }
}
```

### Type checking

To prevent Flow’s **Cannot resolve module** error occure, we also need to tell Flow to aware of this as well.

By default, Flow will look in directories named `node_modules` for node modules. You can configure this behavior with this option.

In `.flowconfig` file, add `resolve_dirname` property to `[options]` section as below:

```diff
  [options]
  ...
  module.file_ext=.scss
+ module.system.node.resolve_dirname=src

  [strict]
```

Now, you are all good with ES6 absolute imports.

> commit: [Setup absolute import statements](https://github.com/rxseven/setup-react-app/commit/88bb5760af8f3a3f0b3f35afe7aca9f268a46e3b)

### Applying absolute imports

You may need to apply absolute imports to the project starting point.

To do this, open `src/index.jsx` file and update with the following changes:

```diff
  ...
  ...

- import registerServiceWorker from './registerServiceWorker';
+ import registerServiceWorker from 'registerServiceWorker';

  // Starting point component
- import App from './components/core/App';
+ import App from 'components/core/App';

  // Constants
- import HTML from './constants/elements/html';
+ import HTML from 'constants/elements/html';
```

> commit: [Apply absolute imports to the project starting point](https://github.com/rxseven/setup-react-app/commit/8a53681e581e8e8272af1799e180cbe8fd084217)

[Back to top](#table-of-contents)

## Using HTTPS in Development

In many circumstances, you may require the [development server](https://github.com/webpack/webpack-dev-server) to serve your web pages over `https://` protocol.

With Create React App, set the `HTTPS` environment variable to `true`, then start the development server as usual with `yarn start`:

```sh
HTTPS=true yarn start
```

> Note: the development server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

#### Adding a particular script

Let’s make our development workflow great again by creating a particular script for running the app over HTTPS.

To do this, open `package.json` file and add the following script to `scripts` section:

```diff
  {
    ...
    "start": "node scripts/start.js",
+   "start:https": "HTTPS=true yarn start",
    ...
  }
```

> commit: [Add script for running the app over HTTPS protocol](https://github.com/rxseven/setup-react-app/commit/289d4eb97302a17de2eb3007a9b31e7ae254a9ee)

#### Usage

Run `yarn start:https` on the command line and view your app in the browser at [https://localhost:3000](https://localhost:3000).

[Back to top](#table-of-contents)

## Debugging in the Editor

Visual Studio Code supports debugging out of the box with Create React App. This feature enables you to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

#### Installation

You would need to have the latest version of [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed, follow the installation below:

1.  Open **Command Palette** in Visial Studio Code by pressing _command + p_.
2.  Type `ext install debugger-for-chrome` and hit _enter_.
3.  Reload Visual Studio Code.

#### Configuration

Create a configuration file in `.vscode` folder by running a command in the project’s root directory:

```sh
touch .vscode/launch.json
```

Then, add the content below to `launch.json` file:

```json
{
  "configurations": [
    {
      "name": "Debug JavaScript",
      "request": "launch",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      },
      "type": "chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src"
    }
  ],
  "version": "0.2.0"
}
```

> commit: [Setup JavaScript debugging for VSCode](https://github.com/rxseven/setup-react-app/commit/043a50e0331ad34da748525443a6bd01e4083949)

#### Usage

1.  Start your app by running `yarn start` or `yarn start:https` command.
2.  Open **Debug** panel in Visual Studio Code, select **Debug JavaScript** from a drop-down menu.
3.  Start debugging by pressing **F5** or by clicking the **Start Debugging** button next to the drop-down menu.
4.  You can then write code as usual, set breakpoints, make changes to the code, and debug your newly modified code, all from your editor.

[Back to top](#table-of-contents)

## Debugging Tests

There are different ways to setup a debugger for Jest and Enzyme tests in Create React App. We will cover only debugging in Chrome and Visual Studio Code.

> Note: debugging tests requires Node version 8 or higher.

### Debugging tests in Chrome

#### Configuration

Add the following script to the `scripts` section in `package.json` file:

```diff
  {
    "scripts": {
      ...
      "test:coverage": "npm test -- --coverage --no-cache",
+     "test:debug": "react-scripts --inspect-brk test --runInBand --env=jsdom",
      "test:staged": "...",
      ...
    }
  }
```

> commit: [Add script for debugging tests in Chrome](https://github.com/rxseven/setup-react-app/commit/fec000a644a8be5adb7613988ab3098cbdc45114)

#### Usage

Follow the instruction [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-tests-in-chrome).

### Debugging tests in Visual Studio Code

Debugging Jest tests is supported out of the box for Visual Studio Code.

#### Configuration

Open `.vscode/launch.json` file and add the following configuration next to **Debug JavaScript** block:

```diff
  {
    "configurations": [
      {
        "name": "Debug JavaScript",
        ...
        ...
-     }
+     },
+     {
+       "args": ["test", "--runInBand", "--no-cache", "--env=jsdom"],
+       "console": "integratedTerminal",
+       "cwd": "${workspaceRoot}",
+       "internalConsoleOptions": "neverOpen",
+       "name": "Debug Tests",
+       "request": "launch",
+       "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
+       "protocol": "inspector",
+       "type": "node"
+     }
    ],
    "version": "0.2.0"
  }
```

> commit: [Setup tests debugging for VSCode](https://github.com/rxseven/setup-react-app/commit/79e627d52c1e1792e350a4e5b4af302c7eec53a2)

#### Usage

1.  Start your app by running `yarn start` or `yarn start:https` command.
2.  Open **Debug** panel in Visual Studio Code, select **Debug Tests** from a drop-down menu.
3.  Start debugging by pressing **F5** or by clicking the **Start Debugging** button next to the drop-down menu.
4.  You can then write code as usual, set breakpoints, make changes to the code, and debug your newly modified code, all from your editor.

[Back to top](#table-of-contents)

## Adding Sass and Post-Processing CSS

CSS pre-processors are in our development life for years. In their first implementations, they had few features. But nowadays, they are the key ingredients and must have tools for CSS development.

This section will walk you through the steps necessary to setup [Sass](https://sass-lang.com) and [PostCSS](https://postcss.org) in Create React App from the ground up.

### Sass

#### Installation

First, we need to install a library that provides [binding for Node.js to LibSass](https://github.com/sass/node-sass) as a development dependency.:

```sh
yarn add --dev node-sass
```

> commit: [Install node-sass package](https://github.com/rxseven/setup-react-app/commit/77e3f8c62ff5c6367625d11b22556684f42e5b50)

We will also need to install [Sass loader](https://github.com/webpack-contrib/sass-loader) for Webpack:

```sh
yarn add --dev sass-loader
```

> commit: [Install sass-loader package](https://github.com/rxseven/setup-react-app/commit/f1cffb16e7e9dad46f3fc90df4aaa0022c8264ae)

#### Configuring Sass in development environment

Open `config/webpack.config.dev.js` file and add the following Sass configuration next to CSS section (`test: /\.css$/`):

```js
// Sass
{
  test: /\.scss$/,
  use: [
    {
      loader: require.resolve('style-loader')
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        sourceMap: true,
        importLoaders: 2
      }
    },
    {
      loader: require.resolve('sass-loader')
    }
  ]
},
```

> commit: [Setup Sass in development environment](https://github.com/rxseven/setup-react-app/commit/58557c5efb7f49507381535710b6fadadf86a9b9)

#### Configuring Sass in production environment

Open `config/webpack.config.prod.js` file and add the following Sass configuration next to CSS section (`test: /\.css$/`):

```js
// Sass
{
  test: /\.scss$/,
  use: ExtractTextPlugin.extract(
    Object.assign(
      {
        fallback: {
          loader: require.resolve('style-loader'),
          options: {
            hmr: false,
          },
        },
        use: [
          {
            loader: require.resolve('css-loader'),
            options: {
              minimize: true,
              sourceMap: shouldUseSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: require.resolve('sass-loader')
          }
        ]
      },
      extractTextPluginOptions
    )
  )
},
```

> commit: [Setup Sass in production environment](https://github.com/rxseven/setup-react-app/commit/dfb4b057c9e87476f41c634324877af9da7479a9)

### PostCSS

#### Installation

Create React App ships with [PostCSS loader for Webpack](https://github.com/postcss/postcss-loader) out of the box. It includes everything we need to get PostCSS running. We don’t need to install any additional dependencies.

#### Configuring PostCSS in development environment

Open `config/webpack.config.dev.js` file, under Sass section, add the following PostCSS configuration between `css-loader` and `sass-loader`:

```js
{
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ],
        flexbox: 'no-2009',
      })
    ]
  }
},
```

> commit: [Setup PostCSS in development environment](https://github.com/rxseven/setup-react-app/commit/4d1fd46527746033c6fee6e410cdd32cc23486eb)

#### Configuring PostCSS in production environment

Open `config/webpack.config.prod.js` file, under Sass section, add the following PostCSS configuration between `css-loader` and `sass-loader`:

```js
{
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ],
        flexbox: 'no-2009'
      })
    ]
  }
},
```

> commit: [Setup PostCSS in production environment](https://github.com/rxseven/setup-react-app/commit/5f7f887ab195a67f2ba30d8e8fd9b645123bbcb8)

### Excluding CSS files from being committed

Since we will be implementing SCSS rather than plain CSS. Therefore, we need to exclude all CSS files from being committed to the repository. To do this, open `.gitignore` file and add the following entry:

```
# generated assets
/src/**/*.css
```

> commit: [Update Git ignoring list to prevent compiled CSS from being committed to source control](https://github.com/rxseven/setup-react-app/commit/6345bb3d042128619e89f81f289323c246cc52bc)

[Back to top](#table-of-contents)

## Adding CSS Modules

A [CSS Module](https://github.com/css-modules/css-modules) is not an official specification or an implementation in the browser but rather a process in a build step (with the help of module bundlers like Webpack or Browserify) that loads CSS scoped to a particular document. CSS module loader will generate a unique name (i.e. kinda like namespaced) for each CSS class at the time of loading the CSS document ([Interoperable CSS](https://github.com/css-modules/icss) to be precise). For more information on learning CSS modules, see [this article](https://glenmaddern.com/articles/css-modules).

### Basic setup

[CSS Loader](https://github.com/webpack-contrib/css-loader) is a Webpack loader that can parse a CSS file and apply various transforms to it. Crucially it has a CSS Modules mode that can take your CSS and hash the classes as mentioned above.

#### Installation

Lucky us! It turns out the project generated by Create React App includes all the Webpack loaders we need to get CSS Modules running. We don’t need to install any additional dependencies.

#### Configuring CSS modules in development environment

Open `config/webpack.config.dev.js` file, under Sass section, update `css-loader` block with the following changes:

```diff
  {
    loader: require.resolve('css-loader'),
    options: {
      sourceMap: true,
-     importLoaders: 2
+     importLoaders: 2,
+     modules: true,
+     localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
    }
  }
```

> commit: [Setup CSS modules in development environment](https://github.com/rxseven/setup-react-app/commit/c65750d385eb938f329e0ee06a4e868cdf27fdcd)

#### Configuring CSS modules in production environment

Open `config/webpack.config.prod.js` file, under Sass section, update `css-loader` block with the following changes:

```diff
  {
    loader: require.resolve('css-loader'),
    options: {
      minimize: true,
      sourceMap: shouldUseSourceMap,
-     importLoaders: 2
+     importLoaders: 2,
+     modules: true,
+     localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
    }
  }
```

> commit: [Setup CSS modules in production environment](https://github.com/rxseven/setup-react-app/commit/b24ffbf3836d0ff97a537dd70151f73dc4ac9f59)

### Advanced usage

CSS Modules is a specification that can be implemented in multiple ways.

Webpack CSS Loader itself has several disadvantages:

- You have to use `camelCase` CSS class names.
- You have to use `styles` object whenever constructing a `className`.
- Mixing CSS Modules and global CSS classes is cumbersome.
- Reference to an `undefined` CSS Module resolves to `undefined` without a warning.

#### Introducing a Babel plugin for React CSS modules

[babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules) implements automatic mapping of CSS modules using compile time resolution. Every CSS class is assigned a local-scoped identifier with a global unique name.

`styleName` attribute is not a React defined attribute but the plugin defined attribute. At compile time, the plugin merges the `styleName` with the `className`, allowing you to write elegant code.

The advantages of using Bable plugin are:

- You are not forced to use the `camelCase` naming convention.
- You do not need to refer to the `styles` object every time you use CSS Modules.
- There is clear distinction between global CSS and CSS modules.

#### Installation

Let’s install the plugin as a development dependency:

```sh
yarn add --dev babel-plugin-react-css-modules
```

> commit: [Install babel-plugin-react-css-modules package](https://github.com/rxseven/setup-react-app/commit/89c87e564418e9d79743764a025fe26feb2d899e)

The default configuration should work out of the box with Create React App, but to add support for different CSS syntaxes (e.g. SCSS), we will need to install [PostCSS syntax loader for SCSS](https://github.com/postcss/postcss-scss) to transform SCSS source code alongside CSS:

```sh
yarn add --dev postcss-scss
```

> commit: [Install postcss-scss package](https://github.com/rxseven/setup-react-app/commit/016fb3116c091ee823bd20af8474f7717e138d2f)

#### Configuration

Open `.babelrc` file and add the configuration below:

```diff
  {
-   "plugins": ["jsx-control-statements"],
+   "plugins": [
+     "jsx-control-statements",
+     [
+       "react-css-modules",
+       {
+         "filetypes": {
+           ".scss": {
+             "syntax": "postcss-scss"
+           }
+         }
+       }
+     ]
+   ],
    "presets": ["react-app"]
  }
```

> commit: [Setup Babel plugin for React CSS modules](https://github.com/rxseven/setup-react-app/commit/5323fc945992c4271a8fbafae610da9dc71ce0a8)

[Back to top](#table-of-contents)

## Adding Redux

### Installing Redux ecosystem

**[Redux](https://redux.js.org)**

Redux is a very popular library that provides a predictable state container for JavaScript applications.

```sh
yarn add redux
```

> commit: [Install redux package](https://github.com/rxseven/setup-react-app/commit/22b09375a4558408196869ed70e7cf1f443b7380)

**[React Redux](https://github.com/reduxjs/react-redux)**

React Redux is the official bindings between React app and Redux. It adds some useful syntactic sugar for binding your components to Redux state.

```sh
yarn add react-redux
```

> commit: [Install react-redux package](https://github.com/rxseven/setup-react-app/commit/aae1025f94ed930a7019d068438c4e6f27760b45)

**[Redux Saga](https://redux-saga.js.org)**

Redux Saga is a Redux middleware library, that is designed to make handling side effects (i.e. asynchronous actions like data fetching and impure things like accessing the browser cache) in your Redux app nice and simple. It achieves this by leveraging an ES6 Generators, allowing you to write asynchronous code that looks synchronous, and is very easy to test and handle failures.

```sh
yarn add redux-saga
```

> commit: [Install redux-saga package](https://github.com/rxseven/setup-react-app/commit/6548037fec4891a6ff20428370f38406ec432077)

**[Reselect](https://github.com/reduxjs/reselect)**

Reselect is a tiny memoized selector library that provides a convenient way of getting values from a store in a React & Redux application.

```sh
yarn add reselect
```

> commit: [Install reselect package](https://github.com/rxseven/setup-react-app/commit/5bb25dd43033917ca131177a4b652a71407626f7)

**[Immutable](https://facebook.github.io/immutable-js/)**

Because Redux doesn’t allow us to mutate the application state, it can be helpful to enforce yourself by modeling application state with immutable data structures.

Immutable.js provides many Persistent Immutable data structures with mutative interfaces, and they’re implemented in an efficient way.

```sh
yarn add immutable
```

> commit: [Install immutable package](https://github.com/rxseven/setup-react-app/commit/fac8b8855874e5b515e4969e9eeecc03cba3c752)

**[Redux Immutable](https://github.com/gajus/redux-immutable)**

Redux utility for creating an equivalent function of Redux `combineReducers` that works with Immutable.js state.

```sh
yarn add redux-immutable
```

> commit: [Install redux-immutable package](https://github.com/rxseven/setup-react-app/commit/5499a66ce0b41f4d1cbbf6b0e375475c2d137c22)

**[Redux Form](https://redux-form.com/7.4.0/)**

A Higher order component decorator for forms using React and Redux to keep form state in a Redux store.

```sh
yarn add redux-form
```

> commit: [Install redux-form package](https://github.com/rxseven/setup-react-app/commit/a056bae998fd61f5b8cd88ff28bd534f2daf7247)

**[Normalizr](https://github.com/paularmstrong/normalizr)**

Many APIs return JSON data that has deeply nested objects. Using data in this kind of structure is often very difficult for JavaScript applications, especially those using Redux.

The idea behind Normalizr is to take an API response that has nested objects with a schema definition and flatten them.

```sh
yarn add normalizr
```

> commit: [Install normalizr package](https://github.com/rxseven/setup-react-app/commit/cda4afe57ac0c32bb06c67874a036e271bc489a6)

**Library Definitions**

Finally, don’t forget to update the library definitions:

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/fbdc839faa997b095a6982638d9e65e26832ce4a)

### Creating a folder structure

To create a Redux folder structure, run the following command in the project’s root directory:

```sh
cd src && mkdir reducers sagas store components/core/Root
```

Now, your Redux folder structure should look like this:

```
src
├── components
│   └── core
│       └── Root
├── reducers
├── sagas
└── store
```

### Creating a root reducer

One day, your app would grow more complex, you’ll want to split your reducing function into separate functions, each managing independent parts of the state (domain).

A root reducer turns an object whose values are different reducing functions into a single reducing function you can pass to a store.

On the command line, run the following command:

```sh
touch src/reducers/index.js
```

Then, add the content below:

```js
// Module dependencies
import { combineReducers } from 'redux-immutable';

// Combine reducers
const reducer = combineReducers({
  data: () => null
});

// Module exports
export default reducer;
```

We will also need to configure Jest to ignore root reducer when running code coverage, open `jest.config.json` file and update with the following changes:

```diff
  {
    "collectCoverageFrom": ["src/**/*.{js,jsx,mjs}"],
    "coveragePathIgnorePatterns": [
      ...
      "<rootDir>/src/dependencies/",
+     "<rootDir>/src/reducers/",
      "<rootDir>/src/index.jsx",
      ...
    ]
  }
```

> commit: [Create root Redux reducer](https://github.com/rxseven/setup-react-app/commit/abf68103e26bc4483e519718c3414dbe7f0df766)

### Creating a root saga

On the command line, run the following command:

```sh
touch src/sagas/index.js
```

Then, add the content below:

```js
// Module dependencies
import { map } from 'ramda';
import { all, fork } from 'redux-saga/effects';

// Combine sagas
const sagas = {};

// Root saga
function* root() {
  yield all(map(fork, sagas));
}

// Module exports
export default root;
```

We will also need to configure Jest to ignore root saga when running code coverage, open `jest.config.json` file and update with the following changes:

```diff
  {
    "collectCoverageFrom": ["src/**/*.{js,jsx,mjs}"],
    "coveragePathIgnorePatterns": [
      ...
      "<rootDir>/src/reducers/",
+     "<rootDir>/src/sagas/",
      "<rootDir>/src/tests/setup.js",
      ...
    ]
  }
```

> commit: [Create root Redux saga](https://github.com/rxseven/setup-react-app/commit/3a394c1b154c77d6ca475a25195dc5aec76af63a)

### Configuring a store

On the command line, run the following command:

```sh
touch src/store/setup.js
```

Then, add the configuration below:

```js
// Module dependencies
import { Map } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from 'reducers';
import saga from 'sagas';

// Initialize middleware
const sagaMiddleware = createSagaMiddleware();

// Initialize state
const initialState = Map();

// Store configuration
const configureStore = () => {
  // Create store
  const store = createStore(
    reducer,
    initialState,
    compose(
      // Middleware
      applyMiddleware(sagaMiddleware),

      // Redux DevTools Extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // Run middleware
  sagaMiddleware.run(saga);

  // Check if Webpack Hot Module Replacement is enabled
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable HMR by accepting update of dependency
      module.hot.accept('../reducers', () => {
        // Replaces the reducer currently used by the store to calculate the state
        store.replaceReducer(reducer);
      });
    }
  }

  // Return store configuration
  return store;
};

// Module exports
export default configureStore;
```

We will also need to configure Jest to ignore store configuration when running code coverage, open `jest.config.json` file and update with the following changes:

```diff
  {
    "collectCoverageFrom": ["src/**/*.{js,jsx,mjs}"],
    "coveragePathIgnorePatterns": [
      ...
      "<rootDir>/src/sagas/",
+     "<rootDir>/src/store/",
      "<rootDir>/src/tests/setup.js",
      ...
    ]
  }
```

> commit: [Setup Redux store](https://github.com/rxseven/setup-react-app/commit/602accc3c4fcc5205be1b935b6e73b0de096b502)

### Creating Root component

Create `Root` folder inside `src/components/core` then create a component along with its test file:

```sh
mkdir src/components/core/Root && cd src/components/core/Root
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Types
type Return = React.Node;

// Component
const Root = (): Return => <div>Root component</div>;

// Module exports
export default Root;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Root from './index';

// Tests
describe('components/core/Root', () => {
  it('should render without crashing', () => {
    shallow(<Root />);
  });
});
```

> commit: [Create Root component](https://github.com/rxseven/setup-react-app/commit/58704fe052e979a61db05e231f0918cb4c101240)

### Connecting Root component to Redux store

We will be configuring the Redux store available to the `connect()` calls in the React component hierarchy below.

To do that, open `src/components/core/Root/index.jsx` file and update with the following changes:

```diff
// @flow
// Module dependencies
  import * as React from 'react';
+ import { Provider } from 'react-redux';
+
+ import App from 'components/core/App';

  // Types
+ type Props = { store: any };
  type Return = React.Node;

  // Component
- const Root = (): Return => <div>Root component</div>;
+ const Root = ({ store }: Props): Return => (
+   <Provider store={store}>
+     <App />
+   </Provider>
+ );

// Module exports
export default Root;
```

We also need to update its tests:

```diff
  // Module dependencies
  import { shallow } from 'enzyme';
+ import { Map } from 'immutable';
  import React from 'react';
+ import configureStore from 'redux-mock-store';

  // Components
+ import App from 'components/core/App';
  import Root from './index';

  // Tests
  describe('components/core/Root', () => {
-   it('should render without crashing', () => {
-     shallow(<Root />);
-   });
+   it('should accept "store" prop', () => {
+     // Initialize mock Redux store
+     const store = configureStore();
+
+     // Mock data
+     const initialState = Map();
+
+     // Shallow rendering
+     shallow(<Root store={store(initialState)} />);
+   });
+
+   it('should render <App />', () => {
+     // Initialize mock Redux store
+     const store = configureStore();
+
+     // Mock data
+     const initialState = Map();
+
+     // Shallow rendering
+     const wrapper = shallow(<Root store={store(initialState)} />);
+
+     // Assertions
+     expect(wrapper).toContainReact(<App />);
+   });
  });
```

> commit: [Connect Root component to Redux store](https://github.com/rxseven/setup-react-app/commit/6cedd5cc89227adca2a7d9285da182a3953f1295)

### Configuring project entry point & scaffold component hierarchy

Open `src/index.js` file and update with the following changes:

```diff
  ...
  ...

  import registerServiceWorker from 'registerServiceWorker';
  import 'dependencies';

- // Starting point component
- import App from 'components/core/App';
+ import Root from 'components/core/Root';
+
+ // Redux store
+ import configureStore from 'store/setup';

  ...
  ...

+ // Initialize Redux store
+ const store = configureStore();
+
  // Render React element into the DOM
- ReactDOM.render(<App />, root);
+ ReactDOM.render(<Root store={store} />, root);
```

> commit: [Setup project entry point & scaffold component hierarchy](https://github.com/rxseven/setup-react-app/commit/a28a96bb5c4fb7198f543548d6a65800f567f579)

### Creating a Higher Order Component to convert container component’s Immutable.js props to presentational component’s JavaScript props

We need a higher order component to map the Immutable.js props in our container component to the pure JavaScript props used in our presentational component. It simply takes the Immutable.js props from our container component, and converts them using Immutable.js’s `toJS()` to plain JavaScript props, which are then passed to our presentational component. For more information, see [What are some opinionated Best Practices for using Immutable.JS with Redux?](https://redux.js.org/recipes/using-immutable.js-with-redux#what-are-some-opinionated-best-practices-for-using-immutable-js-with-redux)

Let’s create `toJS` folder and a component file inside `src/HOCs/common`:

```sh
mkdir src/HOCs/common/toJS && touch src/HOCs/common/toJS/index.jsx
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// Module dependencies
import { Iterable } from 'immutable';
import React from 'react';

// Component
const toJS = WrappedComponent => (wrappedComponentProps) => {
  // Variables
  const KEY = 0;
  const VALUE = 1;

  // Map Immutable props to pure JavaScript props
  const propsJS = Object.entries(wrappedComponentProps).reduce((newProps, wrappedComponentProp) => {
    // eslint-disable-next-line
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE])
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE];
    return newProps;
  }, {});

  return <WrappedComponent {...propsJS} />;
};

// Module exports
export default toJS;
```

We will also need to configure Jest to ignore this HOC when running code coverage, open `jest.config.json` file and update with the following changes:

```diff
  {
    "collectCoverageFrom": ["src/**/*.{js,jsx,mjs}"],
    "coveragePathIgnorePatterns": [
      ...
      "<rootDir>/src/dependencies/",
+     "<rootDir>/src/HOCs/common/toJS",
      "<rootDir>/src/reducers/",
      ...
    ]
  }
```

> commit: [Create HOC to convert Immutable data structure to pure JavaScript object](https://github.com/rxseven/setup-react-app/commit/3e9c738483fa8340cb859837da86d5f0e6017a8b)

### Creating a reducer for root data domain

On the command line, create a reducer along with its test file:

```sh
mkdir src/data && cd src/data && touch reducers.js
mkdir __tests__ && touch __tests__/reducers.test.js
```

#### Reducer

Add the content below to `src/data/reducers.js`:

```js
// @flow

// Types
type Action = { +type: string };
type State = ?Object;

// Reducer
export default (state: State = null, action: Action): State => state;
```

We will also need to combine this slice reducer with the current application state. To do this, open `src/reducers/index.js` and update with the following changes:

```diff
  ...

+ // Reducers
+ import data from 'data/reducers';
+
  // Combine reducers
  const reducer = combineReducers({
-   data: () => null
+   data
  });

  ...
```

#### Tests

You may need to add tests to `index.test.js` file:

```js
// Reducers
import reducers from '../reducers';

// Tests
describe('data/reducers', () => {
  it('should return the initial state', () => {
    // Assertions
    expect(reducers(undefined, {})).toBeNull();
  });
});
```

> commit: [Define reducer for root data domain](https://github.com/rxseven/setup-react-app/commit/542497e28b801f204d7e6527e862aee5311f3ea1)

### Creating a reducer for root screens domain

On the command line, create a reducer along with its test file:

```sh
cd src/screens && touch reducers.js
mkdir __tests__ && touch __tests__/reducers.test.js
```

#### Reducer

Add the content below to `src/screens/reducers.js`:

```js
// @flow

// Types
type Action = { +type: string };
type State = ?Object;

// Reducer
export default (state: State = null, action: Action): State => state;
```

We will also need to combine this slice reducer with the current application state. To do this, open `src/reducers/index.js` and update with the following changes:

```diff
  ...

  import data from 'data/reducers';
+ import screens from 'screens/reducers';

  // Combine reducers
  const reducer = combineReducers({
-   data
+   data,
+   screens
  });

  ...
```

#### Tests

You may need to add tests to `index.test.js` file:

```js
// Reducers
import reducers from '../reducers';

// Tests
describe('screens/reducers', () => {
  it('should return the initial state', () => {
    // Assertions
    expect(reducers(undefined, {})).toBeNull();
  });
});
```

> commit: [Define reducer for root screens domain](https://github.com/rxseven/setup-react-app/commit/2beec741f340dcd5aa1ee84982eff757b8ab4605)

### Creating state models

On the command line, create `models` folder inside `src/constants`:

```sh
mkdir src/constants/models
```

Then, create `state.js` file inside `models` folder:

```sh
touch src/constants/models/state.js
```

Inside `state.js`, just export an empty object:

```js
export default {};
```

> commit: [Define state models](https://github.com/rxseven/setup-react-app/commit/cf585128ac66a408dd82661be71a77de4fc62cf8)

### Creating asynchronous objects

Open `src/constants/models/state.js` and replace the entire empty object with the following values:

```js
export default {
  model: {
    asynchronous: {
      error: null,
      loading: false
    }
  },
  pattern: {
    asynchronous: props => ({
      state: {
        ui: {
          asynchronous: {
            error: null,
            loading: false
          }
        }
      }
    })
  },
  wrapper: {
    asynchronous: props => ({
      state: {
        ui: {
          asynchronous: { ...props }
        }
      }
    })
  }
};
```

> commit: [Add asynchronous objects to state models](https://github.com/rxseven/setup-react-app/commit/7e9c16da70f5ae2372e552213a83f85f28227d6f)

[Back to top](#table-of-contents)

## Adding React Router

A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

It is important to note that the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change.

### Installing React Router ecosystem

**[React Router](https://reacttraining.com/react-router/web/guides/philosophy)**

To configure client-side routing, we will be using React Router, the most popular declarative routing for React.

```sh
yarn add react-router-dom
```

> commit: [Install react-router-dom package](https://github.com/rxseven/setup-react-app/commit/5bf81e3af920d987fbba78c6b645e7f2a703d005)

**[React Router Last Location](https://github.com/hinok/react-router-last-location)**

A utility provides access to the last location in React Router. Useful for handling internal routing. Easily prevent leaving your app by users.

```sh
yarn add react-router-last-location
```

> commit: [Install react-router-last-location package](https://github.com/rxseven/setup-react-app/commit/c132ecb3ae8e2436bb1dc538cea9ca9c21a25dbe)

**[React Router Scroll Memory](https://github.com/ipatate/react-router-scroll-memory)**

A React component to keep the scroll of the page and to restore it if the user clicks a previous button on the browser.

```sh
yarn add react-router-scroll-memory
```

> commit: [Install react-router-scroll-memory package](https://github.com/rxseven/setup-react-app/commit/beb868f2d096e65dbe43b10e2867c0489c406f9d)

**Library Definitions**

Finally, don’t forget to update the library definitions:

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/793fed7a6701029f4e67e3233c7b0f090b2d1876)

### Defining paths variable for router

Create `paths.js` file inside `src/constants/router` folder:

```sh
touch src/constants/router/paths.js
```

Then, add a placeholder object:

```js
export default {};
```

> commit: [Add paths variable for router](https://github.com/rxseven/setup-react-app/commit/32f43e8ce5bfe740974332556b0cf094dfcaed88)

### Creating Routes component

Routes is a component wrapping all routes, it uses the HTML5 history API to keep your UI in sync with the URL.

On the command line, create `Routes` folder inside `src/components/core`:

```sh
mkdir src/components/core/Routes
```

Then, create a component along with its test file inside `Routes`:

```sh
cd src/components/core/Routes && touch index.jsx index.test.js
```

To create a component, add the content below to `index.jsx` file:

```jsx
// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Component
const Routes = () => (
  <Switch>
    <Route path="/" render={() => <div>Home</div>} />
  </Switch>
);

// Module exports
export default Routes;
```

You may need to add tests to `index.test.js` file, the following is a simple “smoke test” verifying that a component renders without throwing:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Routes from './index';

// Tests
describe('components/core/Routes', () => {
  it('should render without crashing', () => {
    shallow(<Routes />);
  });
});
```

> commit: [Create Routes component](https://github.com/rxseven/setup-react-app/commit/f58887f3524310f488ed2814f2e4a1a5f07781e0)

[Back to top](#table-of-contents)

## Adding Bootstrap

[Bootstrap](http://getbootstrap.com) is an open source toolkit for developing with HTML, CSS, and jQuery. Quickly prototype your ideas or build your entire app with its Sass variables and mixins, responsive grid system, and extensive prebuilt components.

#### Installation

On the command line, run the following commands:

```sh
yarn add bootstrap
```

> commit: [Install bootstrap package](https://github.com/rxseven/setup-react-app/commit/13be73ed6eecd53885a9309d77c8c2d0e47b59f0)

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/4ca32304ec036b32a16b159050f02d515a194ee3)

#### Importing compiled CSS

You can use Bootstrap’s ready-to-use CSS by simply adding compiled CSS to your project’s dependency entry point.

To do this, open `src/dependencies/index.js` file and add the following import statement:

```diff
+ // Bootstrap CSS
+ export * from 'bootstrap/dist/css/bootstrap.min.css';
```

> commit: [Add compiled Bootstrap CSS to the dependency entry point](https://github.com/rxseven/setup-react-app/commit/a268343d24fc315754ab918c6ede21bfa1d9ef1f)

[Back to top](#table-of-contents)

## Adding Open Iconic

[Open Iconic](http://useiconic.com/open) is the open source sibling of [Iconic](http://useiconic.com). It is a hyper-legible collection of 223 icons with a tiny footprint—ready to use with Bootstrap.

#### Installation

On the command line, run the following commands:

```sh
yarn add open-iconic
```

> commit: [Install open-iconic package](https://github.com/rxseven/setup-react-app/commit/432b0404bb31ea047059b017a5b0ecf2923c8b36)

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/8be888a30dc2ca5bf42fcae5f6aa1e9e8922d238)

#### Using Open Iconic’s icon font with Bootstrap

Open `src/dependencies/index.js` file and add the following import statement:

```diff
  // Bootstrap CSS
  export * from 'bootstrap/dist/css/bootstrap.min.css';
+
+ // Open Iconic icon font for Bootstrap
+ export * from 'open-iconic/font/css/open-iconic-bootstrap.min.css';
```

> commit: [Add compiled Open Iconic CSS to the dependency entry point](https://github.com/rxseven/setup-react-app/commit/4a986bd9031263ce654394c9a5848d36af5b1356)

[Back to top](#table-of-contents)

## Adding a Global Stylesheet

### Creating Sass structure

To create a global Sass’s folder structure, run the following commands in the terminal:

```sh
mkdir src/styles && cd src/styles
mkdir base components content mixins placeholders utilities vendor && touch index.scss
cd base && touch _settings.scss && cd ..
cd vendor && mkdir frameworks plugins
```

> Note: you may need to add placeholder styles to `index.scss` and `_settings.scss` files in order to pass stylesheet linting.

After creation, your folder structure should look like this:

```
styles
├── base
│   └── _settings.scss
├── componentss
├── content
├── mixins
├── placeholders
├── utilities
├── vendor
│   ├── frameworks
│   └── plugins
└── index.scss
```

> commit: [Create global stylesheet structure](https://github.com/rxseven/setup-react-app/commit/50675d56fee3cf44fcc1bf0ebfa7be3c7fa3cd13)

### Creating Sass starting point

With this approach, Sass will take the file that we want to import and combine it with the file we’re importing into so we can serve a single Sass file to the project starting point.

Let’s combine all partials in one place which is a global Sass starting point, open `src/styles/index.scss` then add the following import statements:

```diff
- // Empty styles
+ // Base
+ @import './base/settings';
```

> commit: [Setup Sass starting point](https://github.com/rxseven/setup-react-app/commit/a8aa28e0e1d3b015334e5efa1d0b00ffa08d2ca2)

### Applying global styles

Last thing we need to do is to import the global Sass starting point to the project starting point.

To do that, open `src/index.jsx` file and add the following import statement next to the list of module dependencies:

```diff
  // Module dependencies
  ...
  ...

+ // Styles
+ import './styles/index.scss';
```

> commit: [Add global styles to the project starting point](https://github.com/rxseven/setup-react-app/commit/8483aad1b76653c19fb8dc593483d911555d308e)

[Back to top](#table-of-contents)

## Adding Sass Boilerplate

Let’s add minimal styles to kickstart a responsive React app.

### Variables

Open `src/styles/base/_settings.scss` file and add the global variables as follows:

```scss
// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

// Screen sizes
$screen-xs: 320px;
$screen-sm: 576px;
$screen-md: 768px;
$screen-lg: 992px;
$screen-xl: 1200px;

// Layout
$footer-height-xs: 145px;
$footer-height-sm: 175px;
$header-height-xs: 35px;
$header-height-sm: 45px;
```

> commit: [Add generic Sass variables](https://github.com/rxseven/setup-react-app/commit/ae837968dac218edf914ea2bbb3227077208ac60)

### Mixins

#### Clearfix

On the command line, create `_clearfix.scss` file inside `src/styles/mixins`:

```sh
touch src/styles/mixins/_clearfix.scss
```

Then, add a clearfix mixin:

```scss
@mixin clearfix {
  &::after {
    clear: both;
    content: '';
    display: block;
  }
}
```

And add the following import statement to the Sass starting point:

```diff
  // Base
  @import './base/settings';

+ // Mixins
+ @import './mixins/clearfix';
```

> commit: [Add clearfix mixin](https://github.com/rxseven/setup-react-app/commit/c65340d1da7d7bdbc79e02fcc0ed7e18a7c5c784)

#### Transition

On the command line, create `_transition.scss` file inside `src/styles/mixins`:

```sh
touch src/styles/mixins/_transition.scss
```

Then, add a transition mixin:

```scss
// Link transition
@mixin transition-link {
  transition: color 0.2s ease-in-out;
}
```

And add the following import statement to the Sass starting point:

```diff
  ...
  ...

  // Mixins
  @import './mixins/clearfix';
+ @import './mixins/transition';
```

> commit: [Add link transition mixin](https://github.com/rxseven/setup-react-app/commit/d0506eceee51ca4e79f9a1fed81361af55e724df)

### Utilities

#### Visibility

On the command line, create `_visibility.scss` file inside `src/styles/utilities`:

```sh
touch src/styles/utilities/_visibility.scss
```

Then, add generic visibility styles:

```scss
:global(.visible) {
  visibility: visible;
}

:global(.invisible) {
  visibility: hidden;
}
```

And add the following import statement to the Sass starting point:

```diff
  ...
  @import './mixins/transition';

+ // Utilities
+ @import './utilities/visibility';
```

> commit: [Add generic visibility styles](https://github.com/rxseven/setup-react-app/commit/6a963d30a0686bcf86e80ede277eaba713f37a10)

### Content

#### Typography

On the command line, create `_typography.scss` file inside `src/styles/content`:

```sh
touch src/styles/content/_typography.scss
```

Then, add generic typography styles:

```scss
:global(.headline) {
  font-size: 1.5rem;
}

:global(.subheadline) {
  font-size: 1.25rem;
}

:global(.text-block) {
  display: block;
}

:global(.text-end) {
  margin-bottom: 0;
}
```

And add the following import statement to the Sass starting point:

```diff
  ...
  @import './mixins/transition';

+ // Content
+ @import './content/typography';
```

> commit: [Add generic typography styles](https://github.com/rxseven/setup-react-app/commit/203a570deba789181e247ff99d74a6df3cf7d05c)

### Components

#### Buttons

On the command line, create `_buttons.scss` file inside `src/styles/components`:

```sh
touch src/styles/components/_buttons.scss
```

Then, add generic button styles:

```scss
// Button wrapper
:global(.button-wrapper) {
  $element-spacing: 0.25rem;

  > :not(:last-child) {
    margin-right: $element-spacing;
  }

  > :not(:first-child) {
    margin-left: $element-spacing;
  }
}
```

And add the following import statement to the Sass starting point:

```diff
  ...
  ...

  // Utilities
  @import './utilities/visibility';
+
+ // Components
+ @import './components/buttons';
```

> commit: [Add generic button styles](https://github.com/rxseven/setup-react-app/commit/a5dce32962e662da4bd57be2f7e92835a3a81cad)

[Back to top](#table-of-contents)

## Adding a Layout Boilerplate

On the command line, create `_layout.scss` file inside `src/styles/base`:

```sh
touch src/styles/base/_layout.scss
```

Then, add base layout styles to `html` and `body` as follows:

```scss
// HTML
html {
  font-size: 87.5%;
  min-height: 100%;
  position: relative;
}

// Body
body {
  font-size: 1rem;
  min-width: $screen-xs;
}
```

And add the following import statement to the Sass starting point:

```diff
  // Base
  @import './base/settings';
+ @import './base/layout';
```

> commit: [Add base layout to main HTML elements](https://github.com/rxseven/setup-react-app/commit/b3ac48294e5d99d0f3a0466d5891b6fb157346eb)

[Back to top](#table-of-contents)

## Adding Common Components

### Grid

On the command line, create `Grid` folder inside `src/components/common`:

```sh
mkdir src/components/common/Grid
```

Then, create an index file inside `Grid`:

```sh
touch src/components/common/Grid/index.js
```

> commit: [Create Grid index](https://github.com/rxseven/setup-react-app/commit/0449424e65bc75d15296f60d80b27f269599dfa8)

### Container

Create `Container` folder inside `Grid`:

```sh
mkdir src/components/common/Grid/Container
```

Then, create a component along with its test file inside `Container`:

```sh
cd src/components/common/Grid/Container
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Container = ({ children }: Props): Return => <div className="container">{children}</div>;

// Module exports
export default Container;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Container from './index';

// Tests
describe('components/common/Grid/Container', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Container>{children}</Container>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should have a correct class name', () => {
    // Mock data
    const children = <div>Content</div>;
    const className = 'container';

    // Shallow rendering
    const wrapper = shallow(<Container>{children}</Container>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(className);
  });
});
```

#### Index

Next, add the export statement below to the index file:

```js
// eslint-disable-next-line
export { default as Container } from './Container';
```

> commit: [Create Container component](https://github.com/rxseven/setup-react-app/commit/2f0256940caa5cfea51e1b72a30eb3413a02982f)

### Row

Create `Row` folder inside `Grid`:

```sh
mkdir src/components/common/Grid/Row
```

Then, create a component along with its test file inside `Row`:

```sh
cd src/components/common/Grid/Row
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Types
type Props = {
  alignment?: string,
  children: React.Node
};
type Return = React.Node;

// Default props
const defaultProps = {
  alignment: null
};

// Component
const Row = ({ alignment, children }: Props): Return => (
  <div className={cx('row', alignment)}>{children}</div>
);

// Specify default values for props
Row.defaultProps = defaultProps;

// Module exports
export default Row;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Row from './index';

// Tests
describe('components/common/Grid/Row', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Row>{children}</Row>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should have a correct class name', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Row>{children}</Row>);

    // Assertions
    expect(wrapper.prop('className')).toEqual('row');
  });

  it('should accept "alignment" prop', () => {
    // Mock data
    const alignment = 'justify-content-center';
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Row alignment={alignment}>{children}</Row>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(`row ${alignment}`);
  });
});
```

#### Index

Next, add the export statement below to the index file:

```diff
- // eslint-disable-next-line
  export { default as Container } from './Container';
+ export { default as Row } from './Row';
```

> commit: [Create Row component](https://github.com/rxseven/setup-react-app/commit/9add857506aa7a0a27121c8f1a916d3484b6e919)

### Column

Create `Column` folder inside `Grid`:

```sh
mkdir src/components/common/Grid/Column
```

Then, create a component along with its test file inside `Column`:

```sh
cd src/components/common/Grid/Column
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = {
  children: React.Node,
  size?: string
};
type Return = React.Node;

// Default props
const defaultProps = {
  size: 'col'
};

// Component
const Column = ({ children, size }: Props): Return => <div className={size}>{children}</div>;

// Specify default values for props
Column.defaultProps = defaultProps;

// Module exports
export default Column;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Column from './index';

// Tests
describe('components/common/Grid/Column', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Column>{children}</Column>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should render default column width', () => {
    // Mock data
    const children = <div>Content</div>;
    const size = 'col';

    // Shallow rendering
    const wrapper = shallow(<Column>{children}</Column>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(size);
  });

  it('should accept "size" prop', () => {
    // Mock data
    const children = <div>Content</div>;
    const size = 'col-sm-12';

    // Shallow rendering
    const wrapper = shallow(<Column size={size}>{children}</Column>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(size);
  });
});
```

#### Index

Next, add the export statement below to the index file:

```diff
+ export { default as Column } from './Column';
  export { default as Container } from './Container';
  export { default as Row } from './Row';
```

> commit: [Create Column component](https://github.com/rxseven/setup-react-app/commit/8cb8d22daffaa93efa7f02fb4c0c3baae6c94746)

### Layout

On the command line, create `Layout` folder inside `src/components/common`:

```sh
mkdir src/components/common/Layout
```

Then, create a component along with its test file inside `Layout`:

```sh
cd src/components/common/Layout
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

import { Column, Row } from 'components/common/Grid';

// Types
type Props = {
  children: React.Node,
  size?: string
};
type Return = React.Node;

// Default props
const defaultProps = {
  size: 'col-md-10 col-lg-8'
};

// Component
const Layout = ({ children, size }: Props): Return => (
  <Row alignment="justify-content-sm-center">
    <Column size={size}>{children}</Column>
  </Row>
);

// Specify default values for props
Layout.defaultProps = defaultProps;

// Module exports
export default Layout;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import { Column, Row } from 'components/common/Grid';
import Layout from './index';

// Tests
describe('components/common/Layout', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Layout>{children}</Layout>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should contain a correct layout structure', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Layout>{children}</Layout>);

    // Assertions
    expect(wrapper.find(Row)).toHaveLength(1);
    expect(wrapper.find(Row).find(Column)).toHaveLength(1);
  });

  it('should contain <Row /> component with default "alignment" prop', () => {
    // Mock data
    const children = <div>Content</div>;
    const alignment = 'justify-content-sm-center';

    // Shallow rendering
    const wrapper = shallow(<Layout>{children}</Layout>);

    // Assertions
    expect(wrapper.find(Row).prop('alignment')).toEqual(alignment);
  });

  it('should accept "size" prop', () => {
    // Mock data
    const children = <div>Content</div>;
    const size = 'col-sm-12';

    // Shallow rendering
    const wrapper = shallow(<Layout size={size}>{children}</Layout>);

    // Assertions
    expect(wrapper.find(Column).prop('size')).toEqual(size);
  });
});
```

> commit: [Create Layout component](https://github.com/rxseven/setup-react-app/commit/8634671b92e0730d6c7e7727c706ca3f86c2177a)

### Page

On the command line, create `Page` folder inside `src/components/common`:

```sh
mkdir src/components/common/Page
```

Then, create an index file inside `Page`:

```sh
touch src/components/common/Page/index.js
```

> commit: [Create Page index](https://github.com/rxseven/setup-react-app/commit/4e961701ac7635396430ffaf96ef0b434cdd92e3)

### Document

Create `Document` folder inside `Page`:

```sh
mkdir src/components/common/Page/Document
```

Then, create a component along with its test file inside `Document`:

```sh
cd src/components/common/Page/Document
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
export const Document = ({ children }: Props): Return => children;

// Module exports
export default Document;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Document from './index';

// Tests
describe('components/common/Page/Document', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Document>{children}</Document>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
```

#### Index

Next, add the export statement below to the index file:

```js
// eslint-disable-next-line
export { default as Document } from './Document';
```

> commit: [Create Document component](https://github.com/rxseven/setup-react-app/commit/ab83f57ab0c81913e62578f705cb6583305c1e1c)

### Body

Create `Body` folder inside `Page`:

```sh
mkdir src/components/common/Page/Body
```

Then, create a component along with its test file inside `Body`:

```sh
cd src/components/common/Page/Body
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Body = ({ children }: Props): Return => children;

// Module exports
export default Body;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Body from './index';

// Tests
describe('components/common/Page/Body', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Body>{children}</Body>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
```

#### Index

Next, add the export statement below to the index file:

```diff
- // eslint-disable-next-line
+ export { default as Body } from './Body';
  export { default as Document } from './Document';
```

> commit: [Create Body component](https://github.com/rxseven/setup-react-app/commit/dd44e3fc244efc506939ba4dc2eed26d91322189)

### Head

Create `Head` folder inside `Page`:

```sh
mkdir src/components/common/Page/Head
```

Then, create a component along with its test file inside `Head`:

```sh
cd src/components/common/Page/Head
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Head = ({ children }: Props): Return => children;

// Module exports
export default Head;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Head from './index';

// Tests
describe('components/common/Page/Head', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Head>{children}</Head>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
```

#### Index

Next, add the export statement below to the index file:

```diff
  export { default as Body } from './Body';
  export { default as Document } from './Document';
+ export { default as Head } from './Head';
```

> commit: [Create Head component](https://github.com/rxseven/setup-react-app/commit/a08de93a5e15bd59bd034daebfaaf9608250cdbe)

### Title

Create `Title` folder inside `Page`:

```sh
mkdir src/components/common/Page/Title
```

Then, create a component along with its test file inside `Title`:

```sh
cd src/components/common/Page/Title
touch index.jsx index.test.js
```

#### Dependencies

You may need to dynamically update the page title based on the content or from React component, you can use [React Helmet](https://github.com/nfl/react-helmet), a third party library.

React Helmet is a document head manager for React. It takes plain HTML tags and outputs plain HTML tags. It is so simple, and React beginner friendly.

Let’s install the library as a depencency:

```sh
yarn add react-helmet
```

> commit : [Install react-helmet package](https://github.com/rxseven/setup-react-app/commit/4ac95f45459c24dbe48ef6322a7b6c6447ebf3aa)

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/502f0a0aae47178e6332a250cded7c8f3ace55e5)

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';
import { Helmet } from 'react-helmet';

// Types
type Props = { children: React.Node };
type Render = React.Node;

// Component
export const Title = ({ children }: Props): Render => (
  <Helmet>
    <title>{children}</title>
  </Helmet>
);

// Module exports
export default Title;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Title from './index';

// Tests
describe('components/common/Page/Title', () => {
  it('should render children', () => {
    // Mock data
    const text = 'Page title';

    // Shallow rendering
    const wrapper = shallow(<Title>{text}</Title>);

    // Assertions
    expect(wrapper.find('title').text()).toEqual(text);
  });
});
```

#### Index

Next, add the export statement below to the index file:

```diff
  export { default as Body } from './Body';
  export { default as Document } from './Document';
  export { default as Head } from './Head';
+ export { default as Title } from './Title';
```

> commit: [Create Title component](https://github.com/rxseven/setup-react-app/commit/c5e17895b6d6c9d8f552cd0363b3aaa5eb9f4303)

### Spinner

On the command line, create `Spinner` folder inside `src/components/common`:

```sh
mkdir src/components/common/Spinner
```

Then, create a component along with its test file and stylesheets inside `Spinner`:

```sh
cd src/components/common/Spinner
touch index.jsx index.test.js styles.scss
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Spinner = (): Return => <div styleName="spinner">Loading...</div>;

// Module exports
export default Spinner;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Spinner from './index';

// Tests
describe('components/common/Spinner', () => {
  it('should render a correct output', () => {
    // Mock data
    const data = 'Loading...';

    // Shallow rendering
    const wrapper = shallow(<Spinner />);

    // Assertions
    expect(wrapper.text()).toEqual(data);
  });
});
```

#### Styles

Let’s add a minimal amount of styles to the component as below:

```scss
// Container
.container {
  display: block;
}
```

> commit: [Create Spinner component](https://github.com/rxseven/setup-react-app/commit/cd6618b1109f8e19b7c8315a8c3d83fd61176606)

### ExLink

On the command line, create `ExLink` folder inside `src/components/common`:

```sh
mkdir src/components/common/ExLink
```

Then, create a component along with its test file inside `ExLink`:

```sh
cd src/components/common/ExLink
touch index.jsx index.test.js
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = {
  children: React.Node,
  replace?: boolean,
  styles?: string,
  to: string
};
type Return = React.Node;

// Default props
const defaultProps = {
  replace: false,
  styles: 'link'
};

// Component
const ExLink = (props: Props): Return => {
  const {
    children, replace, styles, to
  } = props;

  return (
    <a className={styles} href={to} rel="noopener noreferrer" target={replace ? '_self' : '_blank'}>
      {children}
    </a>
  );
};

// Specify default values for props
ExLink.defaultProps = defaultProps;

// Module exports
export default ExLink;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import ExLink from './index';

// Tests
describe('components/common/ExLink', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should render a correct attribute value', () => {
    // Mock data
    const children = 'External link';
    const rel = 'noopener noreferrer';

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('rel')).toEqual(rel);
  });

  it('should render default "target" attribute', () => {
    // Mock data
    const children = 'External link';
    const target = '_blank';

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('target')).toEqual(target);
  });

  it('should render default "class" attribute', () => {
    // Mock data
    const children = 'External link';
    const style = 'link';

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(style);
  });

  it('should accept "replace" prop', () => {
    // Mock data
    const children = 'External link';
    const replace = true;
    const target = '_self';

    // Shallow rendering
    const wrapper = shallow(<ExLink replace={replace}>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('target')).toEqual(target);
  });

  it('should accept "to" prop', () => {
    // Mock data
    const children = 'External link';
    const to = 'https://setup-react-app.herokuapp.com';

    // Shallow rendering
    const wrapper = shallow(<ExLink to={to}>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('href')).toEqual(to);
  });

  it('should accept "styles" prop', () => {
    // Mock data
    const children = 'External link';
    const styles = 'nav-link';

    // Shallow rendering
    const wrapper = shallow(<ExLink styles={styles}>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(styles);
  });
});
```

> commit: [Create ExLink component(1)](https://github.com/rxseven/setup-react-app/commit/dcc176fd724c9d18ee2e708c6b9b36e7b70d9066), [(2)](https://github.com/rxseven/setup-react-app/commit/29882de8f9c1fa9659677cf7cedbde25f2788762)

[Back to top](#table-of-contents)

## Adding Core Components

### Wrapper

Wrapper is an element containing everything, including elements with fixed positioning.

On the command line, create `Wrapper` folder inside `src/components/core`:

```sh
mkdir src/components/core/Wrapper
```

Then, create a component along with its test file and stylesheets inside `Wrapper`:

```sh
cd src/components/core/Wrapper
touch index.jsx index.test.js styles.scss
```

#### Temporary solution

Please note that this is a tempolary solution to prevent [FOUC](https://www.paulirish.com/2009/fighting-the-font-face-fout/) with CSS modules. So, let’s create a helper function to help with this issue.

Create `utilities.js` file inside `src/helpers`:

```sh
touch src/helpers/utilities.js
```

Then, add the content below:

```js
// @flow

// Deley
// eslint-disable-next-line
export const delay = (callback: Function, duration: number) => {
  setTimeout(() => {
    callback();
  }, duration);
};
```

> commit: [Create delay helper function](https://github.com/rxseven/setup-react-app/commit/4e2847d49d6c5748144e1741a6199a228a47d801)

Before creating a commponent, we need to specify `wrapper` property to `src/constants/elements/html.js` file:

```diff
  export default {
-  root: 'root'
+  root: 'root',
+  wrapper: 'wrapper'
  };
```

#### Components

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

import { delay } from 'helpers/utilities';

// Constants
import HTML from 'constants/elements/html';

// Styles
import './styles.scss';

// Types
type Props = { children: React.Node };
type Return = React.Node;
type State = { visibility: string };

// Component
class Wrapper extends React.Component<Props, State> {
  // Initial state
  state = { visibility: 'invisible' };

  // After a component is mounted...
  componentDidMount() {
    // Set visibility after FOUC has gone
    delay(this.onVisible, 200);
  }

  // Set visibility
  onVisible = () => {
    this.setState(() => ({ visibility: 'visible' }));
  };

  // Render component
  render(): Return {
    return (
      <div className={this.state.visibility} id={HTML.wrapper} styleName="container">
        {this.props.children}
      </div>
    );
  }
}

// Module exports
export default Wrapper;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Wrapper from './index';

// Tests
describe('components/core/Wrapper', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Wrapper>{children}</Wrapper>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
```

#### Styles

Let’s add a minimal amount of styles to the component as below:

```scss
// Global styles
@import '../../../styles/base/settings';

// Container
.container {
  margin-bottom: $footer-height-xs;
  margin-top: $header-height-xs;

  @media (min-width: $breakpoint-sm) {
    margin-bottom: $footer-height-sm;
    margin-top: $header-height-sm;
  }
}
```

> commit: [Create Wrapper component](https://github.com/rxseven/setup-react-app/commit/82e2682a2db6ef589952ac1f09ff6da86cd21237)

### Content

Content is an element wrapping the rest of the content on our page except elements with fixed positioning.

On the command line, create `Content` folder inside `src/components/core`:

```sh
mkdir src/components/core/Content
```

Then, create a component along with its test file inside `Content`:

```sh
cd src/components/core/Content
touch index.jsx index.test.js
```

Before creating a commponent, you need to specify `content` property to `src/constants/elements/html.js` file:

```diff
  export default {
+  content: 'content',
   root: 'root',
   wrapper: 'wrapper'
  };
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

// Constants
import HTML from 'constants/elements/html';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Content = ({ children }: Props): Return => <div id={HTML.content}>{children}</div>;

// Module exports
export default Content;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Content from './index';

// Tests
describe('components/core/Content', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Content>{children}</Content>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
```

> commit: [Create Content component](https://github.com/rxseven/setup-react-app/commit/9ebc3a3572247ce2e6301f8030b7ef170ef556e3)

### Header

On the command line, create `Header` folder inside `src/components/core`:

```sh
mkdir src/components/core/Header
```

Then, create a component along with its test file and stylesheets inside `Header`:

```sh
cd src/components/core/Header
touch index.jsx index.test.js styles.scss
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

import { Column, Container, Row } from 'components/common/Grid';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Header = (): Return => (
  <header styleName="container">
    <Container>
      <Row>
        <Column>
          <div styleName="brand">Setup React App</div>
        </Column>
      </Row>
    </Container>
  </header>
);

// Module exports
export default Header;
```

#### Tests

You may need to add tests to `index.test.js` file, the following is a simple “smoke test” verifying that a component renders without throwing:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Header from './index';

// Tests
describe('components/core/Header', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});
```

#### Styles

Let’s add a minimal amount of styles to the component as below:

```scss
// Global styles
@import '../../../styles/base/settings';

// Container
.container {
  align-items: center;
  background-color: #343a40;
  display: flex;
  height: $header-height-xs;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  @media (min-width: $breakpoint-sm) {
    height: $header-height-sm;
  }
}

// Branding
.brand { /* TODO */ }
```

> commit: [Create Header component](https://github.com/rxseven/setup-react-app/commit/c2e6635cd66085b3096e23bb261270838a817a72)

### Main

On the command line, create `Main` folder inside `src/components/core`:

```sh
mkdir src/components/core/Main
```

Then, create a component along with its test file and stylesheets inside `Main`:

```sh
cd src/components/core/Main
touch index.jsx index.test.js styles.scss
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

import { Column, Container, Row } from 'components/common/Grid';

// Styles
import './styles.scss';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Main = ({ children }: Props): Return => (
  <main styleName="container">
    <Container>
      <Row>
        <Column>{children}</Column>
      </Row>
    </Container>
  </main>
);

// Module exports
export default Main;
```

#### Tests

You may need to add tests to `index.test.js` file:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Main from './index';

// Tests
describe('components/core/Main', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Main>{children}</Main>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
```

#### Styles

Let’s add a minimal amount of styles to the component as below:

```scss
// Container
.container {
  padding-top: 1.5rem;
}
```

> commit: [Create Main component](https://github.com/rxseven/setup-react-app/commit/1283f85a742b0569de0ac9642af66fd7751c9c70)

### Footer

On the command line, create `Footer` folder inside `src/components/core`:

```sh
mkdir src/components/core/Footer
```

Then, create a component along with its test file and stylesheets inside `Footer`:

```sh
cd src/components/core/Footer
touch index.jsx index.test.js styles.scss
```

#### Component

To create a component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

import ExLink from 'components/common/ExLink';
import { Column, Container, Row } from 'components/common/Grid';

// Constants
import URLs from 'constants/router/urls';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Footer = (): Return => (
  <footer styleName="container">
    <Container>
      <Row>
        <Column>
          <ul styleName="navigation">
            <li>
              <ExLink to={`https://github.com/${URLs.repo}`}>View on GitHub</ExLink>
            </li>
          </ul>
          <div styleName="ci-status">
            <div className="button-wrapper">
              <ExLink to={`https://travis-ci.org/${URLs.repo}`}>
                <img
                  alt="Build Status"
                  src={`https://travis-ci.org/${URLs.repo}.svg?branch=master`}
                />
              </ExLink>
              <ExLink to={`https://coveralls.io/github/${URLs.repo}?branch=master`}>
                <img
                  src={`https://coveralls.io/repos/github/${URLs.repo}/badge.svg?branch=master`}
                  alt="Coverage Status"
                />
              </ExLink>
            </div>
          </div>
          <div styleName="legal">
            <p>
              Designed &amp; built with all the love in{' '}
              <ExLink to="https://reactjs.org">React</ExLink> &amp;{' '}
              <ExLink to="https://redux.js.org">Redux</ExLink>.
            </p>
            <p>
              Copyright © 2018{' '}
              <ExLink to="https://github.com/rxseven">Theerawat Pongsupawat</ExLink>.
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  </footer>
);

// Module exports
export default Footer;
```

#### Tests

You may need to add tests to `index.test.js` file, the following is a simple “smoke test” verifying that a component renders without throwing:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Footer from './index';

// Tests
describe('components/core/Footer', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });
});
```

#### Styles

We will be implementing "sticky footer". The purpose of a sticky footer is that it "sticks" to the bottom of the browser window. But not always, if there is enough content on the page to push the footer lower, it still does that. But if the content on the page is short, a sticky footer will still hang to the bottom of the browser window.

Let’s add styles to the component as below:

```scss
// Global styles
@import '../../../styles/base/settings';
@import '../../../styles/mixins/transition';

// Variables
$color-bright: #fff;
$color-light: #999;

// Container
.container {
  background-color: #343a40;
  bottom: 0;
  color: #999;
  height: $footer-height-xs;
  left: 0;
  padding-top: 1rem;
  position: absolute;
  right: 0;
  text-align: center;

  a {
    @include transition-link;

    &:hover {
      text-decoration: none;
    }
  }

  @media (min-width: $breakpoint-sm) {
    height: $footer-height-sm;
    padding-top: 1.75rem;
    text-align: left;
  }
}

// Navigation
.navigation {
  list-style: none;
  margin: 0 0 1.15rem 0;
  padding: 0;

  @media (min-width: $breakpoint-sm) {
    margin-bottom: 1.5rem;
  }

  > li {
    display: inline;
    font-size: 0.85rem;

    & + li {
      margin-left: 1rem;
    }

    @media (min-width: $breakpoint-sm) {
      font-size: 0.9rem;
    }
  }

  :global(.link) {
    color: $color-bright;

    &:hover {
      color: $color-light;
    }
  }
}

// Continuous Integration
.ci-status {
  margin-bottom: 1.15rem;

  @media (min-width: $breakpoint-sm) {
    margin-bottom: 1.5rem;
  }
}

// Legal
.legal {
  font-size: 0.8rem;

  @media (min-width: $breakpoint-sm) {
    font-size: 0.875rem;
  }

  p {
    margin-bottom: 0.25rem;

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (min-width: $breakpoint-sm) {
      margin-bottom: 0.35rem;
    }
  }

  :global(.link) {
    color: $color-light;

    &:hover {
      color: $color-bright;
    }
  }
}
```

> commit: [Create Footer component](https://github.com/rxseven/setup-react-app/commit/08beb6fe35e6640fa189a78188cf25596851e5ea)

[Back to top](#table-of-contents)

## Adding Main Screens

### Home page

On the command line, create `Home` folder inside `src/screens/main`:

```sh
mkdir src/screens/main/Home
```

Then, create a component along with its test file and stylesheets inside `Home`:

```sh
cd src/screens/main/Home
touch index.jsx index.test.js styles.scss
```

#### Component

To create a screen component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';

import ExLink from 'components/common/ExLink';
import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Constants
import URLs from 'constants/router/urls';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Home = (): Return => (
  <Document>
    <Head>
      <Title>Setup React App</Title>
    </Head>
    <Body>
      <Layout>
        <h2 className="headline">Setup React App</h2>
        <p>
          A minimal React &amp; Redux boilerplate with best practices bootstrapped with{' '}
          <ExLink to="https://github.com/facebookincubator/create-react-app">
            Create React App
          </ExLink>. It can save you a lot of time and energy searching for highly scalable
          solutions with a nice development experience to get started.
        </p>
        <div styleName="footnote">
          <div className="button-wrapper">
            <ExLink styles="btn btn-primary btn-sm" to={`https://github.com/${URLs.repo}`}>
              View on GitHub
            </ExLink>
          </div>
        </div>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Home;
```

#### Tests

You may need to add tests to `index.test.js` file, the following is a simple “smoke test” verifying that a component renders without throwing:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Home from './index';

// Tests
describe('screens/main/Home', () => {
  it('should render without crashing', () => {
    shallow(<Home />);
  });
});
```

#### Styles

Let’s add a minimal amount of styles to the component as below:

```scss
// Footnote
.footnote {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
}
```

> commit: [Create Home screen](https://github.com/rxseven/setup-react-app/commit/5137952f38e4760e97d98c67e162763ff0fcadf5)

#### Route

Open `src/constants/router/paths.js` file and add new route property for home screen (root route):

```diff
- export default {};
+ export default {
+   main: {
+     home: '/'
+   }
+ };
```

Then, open `src/components/core/Routes/index.jsx` file and define a root route:

```diff
+ // Screens
+ import Home from 'screens/main/Home';
+
+ // Constants
+ import PATHS from 'constants/router/paths';
+
  // Component
  const Routes = () => (
    <Switch>
-     <Route path="/" render={() => <div>Home</div>} />
+     <Route component={Home} exact path={PATHS.main.home} />
    </Switch>
  );
```

> commit: [Add route to Home screen](https://github.com/rxseven/setup-react-app/commit/ee3809e177b213f116cbdcbd0183f5edc649b009) (for more information about the change, see comment on GitHub)

#### Navigation link

Open `src/components/core/Header/index.jsx` and replace a branding text with the following `NavLink`:

```diff
  ...
  import * as React from 'react';
+ import { NavLink } from 'react-router-dom';

  ...

+ // Constants
+ import PATHS from 'constants/router/paths';

  ...

  // Component
  const Header = (): Return => (
    <header styleName="container">
      <Container>
        <Row>
          <Column>
-           <div styleName="brand">Setup React App</div>
+           <div styleName="brand">
+             <NavLink activeClassName="active" exact styleName="link" to={PATHS.main.home}>
+               Setup React App
+             </NavLink>
+           </div>
          </Column>
        </Row>
      </Container>
    </header>
  );

  ...
  ...
```

Then, open `src/components/core/Header/styles.scss` and add styles for a navigation link:

```diff
  // Global styles
  @import '../../../styles/base/settings';
+ @import '../../../styles/mixins/transition';
+
+ // Variables
+ $color-bright: #fff;
+ $color-light: rgba(255, 255, 255, 0.5);

  ...
  ...

  // Branding
- .brand {}
+ .brand {
+   > .link {
+     @include transition-link;
+     color: $color-bright;
+
+     &:hover {
+       color: $color-light;
+       text-decoration: none;
+     }
+
+     &:global(.active) {
+       color: $color-light;
+       cursor: default;
+     }
+   }
+ }
```

> commit: [Add navigation link to Home screen](https://github.com/rxseven/setup-react-app/commit/ee3809e177b213f116cbdcbd0183f5edc649b009)

### Page not found (404)

You can display a custom 404 error page when people try to access non-existent pages on your React app.

On the command line, create `404` folder inside `src/screens/main`:

```sh
mkdir src/screens/main/404
```

Then, create a component along with its test file inside `404`:

```sh
cd src/screens/main/404
touch index.jsx index.test.js
```

#### Component

To create a screen component, add the content below to `index.jsx` file:

```jsx
// @flow
// Module dependencies
import * as React from 'react';
import { Link } from 'react-router-dom';

import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Constants
import PATHS from 'constants/router/paths';

// Types
type Return = React.Node;

// Component
const NotFound = (): Return => (
  <Document>
    <Head>
      <Title>Page not found</Title>
    </Head>
    <Body>
      <Layout>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">404</h5>
            <p className="card-text">This is not web page you are looking for.</p>
            <Link className="card-link" to={PATHS.main.home}>
              Go back to Home page
            </Link>
          </div>
        </div>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default NotFound;
```

#### Tests

You may need to add tests to `index.test.js` file, the following is a simple “smoke test” verifying that a component renders without throwing:

```jsx
// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import NotFound from './index';

// Tests
describe('screens/main/404', () => {
  it('should render without crashing', () => {
    shallow(<NotFound />);
  });
});
```

> commit: [Create 404 screen](https://github.com/rxseven/setup-react-app/commit/4af6abfdd0fbf2913cecc9a43131650ad235b199)

#### Route

Then, open `src/components/core/Routes/index.jsx` file and define a 404 route:

```diff
  // Screens
  ...
+ import NotFound from 'screens/main/404';

  ...

  // Component
  const Routes = () => (
    <Switch>
      <Route component={Home} exact path={PATHS.main.home} />
+     <Route component={NotFound} />
    </Switch>
  );
```

> commit: [Add route to 404 screen](https://github.com/rxseven/setup-react-app/commit/c42506e1a3a1d214562d0a3f34daec2634a625c9)

#### Navigation link

Open `src/screens/main/Home/index.jsx` and add a `404` link:

```diff
  ...
  import * as React from 'react';
+ import { Link } from 'react-router-dom';

  ...
  ...

  // Component
  const Home = () => (
    <Document>
      ...
      <Body>
        <Layout>
          ...
          <div styleName="footnote">
            <div styleName="button-wrapper">
              <ExLink>View on GitHub</ExLink>
+             <Link className="btn btn-secondary btn-sm" to="/404">
+               404
+             </Link>
            </div>
          </div>
        </Layout>
      </Body>
    </Document>
  );

  ...
  ...
```

> commit: [Add navigation link to 404 screen](https://github.com/rxseven/setup-react-app/commit/7761af93e744eca99462940097892d17d4b67a24)

[Back to top](#table-of-contents)

## Adding API Services

### Setting up environment variables

The only one thing we need to do is to define a placeholder to the API’s base URL.

For **development**, add the following lines to `.env.development` file:

```diff
+ # API
+ REACT_APP_API_URL=null
+
  # Web application
  REACT_APP_WEB_URL=http://localhost:3000
```

> commit: [Define API's base URL placeholder in development environment](https://github.com/rxseven/setup-react-app/commit/cebc11a72205e9fd78ba9ef0d2c6d777c9ad33dd)

For **production**, add the following lines to `.env.production` file:

```diff
+ # API
+ REACT_APP_API_URL=null
+
  # Web application
  REACT_APP_WEB_URL=https://setup-react-app.herokuapp.com
```

> commit: [Define API's base URL placeholder in production environment](https://github.com/rxseven/setup-react-app/commit/1222ef1be567ef39cbabfe2c7ab8ac313b4ff0fc)

### Adding an API configuration

From the project’s root directory, run the following command to create a configuration file:

```sh
touch src/config/api.js
```

Then, add the configuration below to the newly created file:

```js
export default {
  url: process.env.REACT_APP_API_URL,
  endpoints: {}
};
```

> commit: [Add API configuration](https://github.com/rxseven/setup-react-app/commit/15e3de372d7a29642e853813b79f5d7f216efc25)

### Installing Promise based HTTP library

#### Introducing Axios

[Axios](https://github.com/axios/axios) is a very popular Promise based HTTP library for JavaScript that runs on both the client and the server. With Axios it’s easy to make an asynchronous HTTP request to RESTful API endpoints and perform CRUD operations.

On the command line, let’s install Axios with these commands:

```sh
yarn add axios
```

> commit: [Install axios package](https://github.com/rxseven/setup-react-app/commit/68349d29cb922b08386a8ae39cc482cb1256d6a1)

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/e6b3545062d1caf8b93502859a2a3b938c0ee22e)

[Back to top](#table-of-contents)

## Adding the App Skeleton

We will construct the app skeleton by combining core components together and wrap the entire structure with Router component. The Router will use the HTML5 history API to keep our UI in sync with the URL.

To do that, open `src/components/core/App/index.jsx` file and update with the content below:

```diff
  // @flow
  // Module dependencies
  import * as React from 'react';
  import { hot } from 'react-hot-loader';
+ import { BrowserRouter as Router } from 'react-router-dom';
+ import { LastLocationProvider as Location } from 'react-router-last-location';
+ import ScrollMemory from 'react-router-scroll-memory';
+
+ import Content from '../Content';
+ import Footer from '../Footer';
+ import Header from '../Header';
+ import Main from '../Main';
+ import Routes from '../Routes';
+ import Wrapper from '../Wrapper';

  // Component
- const App = () => <div>App component</div>;
+ const App = () => (
+   <Router>
+     <React.Fragment>
+       <ScrollMemory />
+       <Location>
+         <Wrapper>
+           <Header />
+           <Content>
+             <Main>
+               <Routes />
+             </Main>
+             <Footer />
+           </Content>
+         </Wrapper>
+       </Location>
+     </React.Fragment>
+   </Router>
+ );

  // Module exports
  export default hot(module)(App);
```

> commit: [Add app skeleton](https://github.com/rxseven/setup-react-app/commit/77db3bfa516fe75a80fbab652717d6649241e35f)

[Back to top](#table-of-contents)

## Analyzing the Bundle Size

[Source Map Explorer](https://github.com/danvk/source-map-explorer) analyzes JavaScript (or Sass) bundles using the source maps. It determines which file each byte in your build came from. It shows you a treemap visualization to help you understand where code bloat is coming from.

To add Source Map Explorer to you project, follow these steps:

#### Installation

```sh
yarn add source-map-explorer
```

> commit: [Install source-map-explorer package](https://github.com/rxseven/setup-react-app/commit/6e7e294f220c5c79989981140e5be367b9aa2708)

```sh
yarn type:install
```

> commit: [Update library definitions](https://github.com/rxseven/setup-react-app/commit/e13aff8981630b352e5e93b9b6c624d82de1d4ff)

#### Configuration

In `package.json` file, add the following line to `scripts` section:

```diff
  {
    "scripts": {
+     "analyze": "source-map-explorer build/static/js/main.*",
      "build": "node scripts/build.js",
      ...
    }
  }
```

> commit: [Add script for analyzing the bundle size](https://github.com/rxseven/setup-react-app/commit/d9b5d889fb843d2f34b7baa8ed6c4416ee466fa7)

#### Usage

To analyze the bundle size, run the production build command:

```sh
yarn build
```

And run the analyze script:

```sh
yarn analyze
```

Then, Source Map Explorer will launch your default browser automatically with the result of your bundle.

[Back to top](#table-of-contents)
