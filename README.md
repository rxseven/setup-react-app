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

#### Ecosystem



#### Boilerplate & Skeleton



#### Enhancement



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
