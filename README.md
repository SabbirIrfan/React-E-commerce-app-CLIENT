# React-E-commerce-app-CLIENT
<h1 align="center">
Suppliers backend and frontend For Web Project
</h1>
<p align="center">
MongoDB, Expressjs, React, Redux, Nodejs
</p>

<p align="center">
   <a href="https://travis-ci.com/amazingandyyy/mern">
      <img src="https://travis-ci.com/amazingandyyy/mern.svg?branch=master" />
   </a>
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/SabbirIrfan/React-E-commerce-app-CLIENT/
$ npm i
```

## project structure
```terminal
client/
   package.json
server/
   package.json
   .env (need to create your own .env for run this project see below for instructions)
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd react-shop-ui   // go to client folder
$ npm i       // npm install packages
$ npm start // run it locally

```

## Server-side usage(PORT: 8000)

### Prepare your secret
#```
#(You need to add .env File to run the Server side API code)
#.env File Structure
#NODE_ENV = development
#PORT = 3006
#CONNECTION_URL = Your Mongodb Connection Url
#```

### Start

``` terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
```


# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.27.2 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
react: ^18.2.0 | dotenv: ^16.0.1
react-dom: ^18.2.0 | express: ^4.18.1
react-redux: ^8.0.2 | jwt-simple: ^0.5.1
react-router-dom: ^6.3.0 | mongoose: ^6.3.5
redux: ^4.4.0 | jsonwebtoken : ^8.5.1
redux-thunk: ^2.1.0 | crypto-js : ^4.1.1
redux-persist : ^6.0.0| nodemon : ^2.0.16
styled-components : ^5.3.5 | cors: ^2.8.5


## Screenshots

Landing page
![Landing page](https://user-images.githubusercontent.com/40023605/201540312-a02dae10-de72-4771-b0c1-4108fd9ed3c0.png)

User can sign in or sign up
![User can sign in or sign up](https://user-images.githubusercontent.com/40023605/201540387-f1615c85-f473-42f2-a538-0ffb13a68c82.png)

After first time sign in a popup appears to enter user bank information.
![After first time sign in a popup appears to enter user bank information.](https://user-images.githubusercontent.com/40023605/201540300-87751815-16b2-407c-bc8f-032803c8b61a.png)

There are three category of products.
![There are three category of products.](https://user-images.githubusercontent.com/40023605/201540313-bde827c5-961d-4870-8de5-d774213bbc8c.png)

Single product details.
![Single product details.](https://user-images.githubusercontent.com/40023605/201540304-64e6d080-7c22-40b4-8a3b-e095dac9ff52.png)

Cart details.
![Cart details.](https://user-images.githubusercontent.com/40023605/201540307-7dbf11de-c848-48ad-b08e-34b834f8b207.png)

Admin panel
![Admin Panel](https://user-images.githubusercontent.com/40023605/201541611-ba46c010-6cbe-4c7e-8ebe-ec085ae12c7e.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments
[Create new Issues](https://github.com/NaimulHasanFahim/webproject/issues) (preferred)

Email Me: sabbirirfan29@gmail.com


