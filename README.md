<!-- Headers -->

# Xbox Game Pass API

An API to provide the [Xbox Game Pass](https://www.xbox.com/en-us/xbox-game-pass) games library.

> This app does not have any connection with the Xbox Game Pass official app and was made for educational purposes only. If you want to see the real updated library please look at the **official app**.

> This API was not built and maintained to support third-party usage. If you need a real API to get all the latest games you will not find here.

<!-- Prints / Outputs -->

## :video_game: Usage

You can use the official API on the following URL: https://gamepass-api.vercel.app/api

You can download the Insomnia project with all the API endpoints by clicking on the button below.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Gamepass%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCauaspinheiro%2Fgamepass-api%2Fmain%2F.github%2Finsomnia.yaml)

## :page_facing_up: About the Project

### Available Languages

The project is written entirely in English, but the official application content supports only the ![BR flag](.github/BR.png) Brazilian Portuguese language.

### Motivation

This app was made to improve my Next.js skills, especially in the [API routes](https://nextjs.org/docs/api-routes/introduction) functionality.

### Architecture

This app was built using the principles of [SOLID](https://en.wikipedia.org/wiki/SOLID) and [DDD](https://en.wikipedia.org/wiki/Domain-driven_design).

For more details see the file [ARCHITECTURE.md](ARCHITECTURE.md).

### License

This project is licensed under the [MIT License](LICENSE)

## :test_tube: Technologies

![Next.js](https://blog.rocketseat.com.br/content/images/2018/12/image-93.png)

### Next.js

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. (Official Website)

Website: https://nextjs.org/

### Typescript

TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. (Official Website)

Website: https://www.typescriptlang.org/

### Mongo DB

MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. (Official Website)

Website: https://www.mongodb.com/

### Dependencies

#### mongodb

The official MongoDB driver for Node.js. (Official repository)

Github: https://github.com/mongodb/node-mongodb-native

#### eslint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

Github: https://github.com/eslint/eslint

## :construction_worker: Installation

### Tools

You go need these tools to install this repository on your local machine:

- Git -> https://git-scm.com/downloads
- Node -> https://nodejs.org/en/

After you install all these tools up head, you can proceed to the next topic.

### MongoDB Atlas Setup

- Create a project on MongoDB Atlas -> https://www.mongodb.com/cloud/atlas
- Setup your cluster and copy your connection string -> https://codeforgeek.com/mongodb-atlas-node-js/

### Running Locally

#### Cloning the Repository:

First of all, clone the repository by running the following command:

```bash
git clone https://github.com/Cauaspinheiro/gamepass-api
```

After this, go to the project's folder by running the following command:

```bash
cd gamepass-api
```

#### Installing the project's dependencies

You can install the project's dependencies by running the following command inside the project's folder:

```bash
npm install
```

#### Env setup

Rename the file `.env.example` to `.env.local` and replace the following options

`YOUR_CONNECTION_STRING` to your connection string that you got on the [MongoDB Atlas Setup Topic](#mongodb-atlas-setup)

`YOUR_DATABASE` to your database name. You can use `gamepass` by default.

---

**That's it!** Now you can run the project on your local machine.

To see witch scripts are available for use, go to the [Scripts Section](#scripts)

## :joystick: Scripts

### dev

```bash
npm run dev
```

Starts the development server at `http://localhost:3000`

### build

```bash
npm run build
```

Build a Next.js production server

### start

```bash
npm run start
```

Start a Next.js production server

## :link: Useful Links

- Xbox Game Pass mobile app that consumes this API: https://github.com/Cauaspinheiro/gamepass_mobile
