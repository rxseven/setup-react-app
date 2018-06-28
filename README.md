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
