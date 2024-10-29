# Gist Clone Next.js Project

## Description

The **Gist Clone Next.js** project is a frontend application built with Next.js to provide a Gist-like experience for managing code snippets. This app offers authentication, account creation, and Gist management, including creating, updating, deleting, and viewing Gists. It connects to a backend API for data management using GraphQL.

## Project Setup

To install dependencies and set up the project, follow these steps:

1. Clone the repository.
2. Run the following command to install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

```bash
npm run dev
```

Or build and start the project in production mode:

```bash
npm run build
npm start
```

## Available Scripts

- npm run dev: Starts the Next.js development server.
- npm run build: Builds the application for production.
- npm start: Runs the built application in production mode.
- npm run lint: Lints the codebase with ESLint.

## Dependencies

The main dependencies used in this project include:

- @apollo/client: Apollo Client for managing GraphQL queries and mutations.
- @headlessui/react and @headlessui/tailwindcss: Provides unstyled UI components compatible with Tailwind CSS.
- axios: Handles HTTP requests to the backend API.
- graphql: Core GraphQL library for query syntax.
- heroicons and react-icons: Icon libraries for UI design.
- next: The Next.js framework, version 15.
- react and react-dom: React core libraries for building user interfaces.

## Development Dependencies

- eslint: Lints code for quality and consistency.
- tailwindcss and postcss: Used for utility-first CSS styling in the app.

## Project Purpose

The purpose of this project is to create a frontend application to interact with a Gist-like backend API. Key features include:

- User Authentication: Login and registration with secure token storage.
- Gist Management: Users can create, update, delete, and view their Gists with associated metadata.

## Author

- **Rodrigo Toledo**
  - [GitHub](https://github.com.br/rodrigotoledo)
  - [YouTube - Devin Lounge](https://www.youtube.com/@devinlounge)
  - Email: [rodrigo@rtoledo.inf.br](mailto:rodrigo@rtoledo.inf.br)