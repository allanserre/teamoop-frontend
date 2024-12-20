# Teamoop: Collaborative Project Platform

## Introduction

Teamoop is a platform designed to foster learning and collaboration through project-based activities. The application provides the possibility for users to publish, join, and manage projects. Teamoop caters to developers, learners, and project managers looking to work together effectively on diverse initiatives.

This document provides a comprehensive guide to setting up, running, and contributing to the Teamoop platform. Whether you are a developer, contributor, or end user, this README will help you get started.

# Prerequisites

Before starting, ensure you have the following installed:

- **Node.js Version 22**  
  Verify the version of Node.js by running:

  ```bash
  node -v # should display `v22.x.x`
  ```

- **npm Version 10.x.x**  
  Check the npm version with:

  ```bash
  npm -v # should display `10.x.x`
  ```

- **Docker and Docker Compose**  
  Ensure you have Docker and Docker Compose installed. You can verify by running:

  ```bash
  docker -v # should display the Docker version
  docker-compose -v # should display the Docker Compose version
  ```

# Installation

Install the required dependencies by running:

```bash
npm install
```

## Development Server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you make changes to a source file.

## Starting the API

To launch the backend API, ensure you have Docker and Docker Compose installed, then run:

```bash
docker-compose up
```

This will start the API service as defined in the `docker-compose.yml` file of the backend project.

## Project Structure

### `services/`

Contains all the services used for communication with the backend API.

### `pages/`

Holds the main application components (e.g., main page, login, etc.).

### `components/`

Includes subcomponents and reusable components.

### `models/`

Defines the interfaces and classes used throughout the application.

## Coding Guidelines

This project is built with Angular 19 and follows these practices:

- **Standalone Components**: All components are standalone.
- **Signals API**: Utilized for state management.
- **Enhanced Control Flow**: Makes use of `@if` and `@else` directives.
- **Input and Output Models**: Employs `@Input()` and `@Output()` bindings.
- **RxJS**: Used for managing complex asynchronous requests.

## Code Verification

Ensure code quality by running linters:

- **StyleLint** for CSS/SCSS code
- **ESLint** for JavaScript/TypeScript code:
  ```bash
  npm run lint
  ```



## Running Tests

This project uses **Cypress** for End-to-End (e2e) and component testing.

### Run Tests

To execute the tests, run:

```bash
npm run e2e
```

### Cypress Test Runner

To visually execute and debug tests using the Cypress Test Runner, run:

```bash
npm run cypress:open
```

---


