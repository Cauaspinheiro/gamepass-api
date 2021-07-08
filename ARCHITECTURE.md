# :building_construction: Architecture

This file contains the explanation of the logic used to structure de folders/files in this project.

## Overview

This project was built based on the principles of [SOLID](https://en.wikipedia.org/wiki/SOLID) and [DDD](https://en.wikipedia.org/wiki/Domain-driven_design).

For more details, see the [`/lib` Topic](#lib---flutter-application).

### Name conventions

All the created (not generated) files are in the [`snake_case`](https://en.wikipedia.org/wiki/Snake_case) convention.

## `/.github` - Github related files

Contains all the files related to Github, like the README images or Github Actions configuration.

## `/public` - Public Files

Contains all the public website files

## `/src` - Next.js application

The Next.js application, where most of the action happens.

### `/app` - Application business logic

Contains all the business logic of the application.

Where the [`/pages`](#pages---application-view) and the [`/infra`](#infra---application-data-access) layers are connected.

### `/domain` - Application entities

Contains all the application entities classes.

Each entity is responsible for define all its business logic information.

### `/components` - React components

Contains all the React components of the project.

### `/infra` - Application data access

Contains all the application data access logic. This is the lower-boundary of our application that communicates with external sources

Based in the Repository/Model logic:

- Each repository is responsible for getting the data from the external source.
- Each model is responsible for transforming the external data into an application entity.

### `/pages` - Application view

Contains all the view logic of the app.

Communicates with the [`/app`](#app---application-business-logic) logic to retrieve the necessary data to display on the API.

Based on the [Next.js routing system](https://nextjs.org/docs/routing/introduction)

### `/styles` - Stylesheet files

Contains all the stylization (CSS) of the project.

## `package.json` - Flutter configuration file

Contains all the necessary configuration for Node and its dependencies. All the possible options are on the [official documentation](https://nodejs.dev/learn/the-package-json-guide).

## `.eslintrc` - Eslint configuration file

Contains all the [ESlint](https://github.com/eslint/eslint) configuration options.

## `tsconfig.json` - Typescript configuration file

Contains all the [Typescript](https://www.typescriptlang.org/) configuration options.
