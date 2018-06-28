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

#### Development Workflow



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
