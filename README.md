# Express-TS-Prisma-Swagger-Template

## Description

Express-TS-Prisma-Swagger-Template is a starter project and template that sets up a TypeScript application with
Express.js, Prisma, and Swagger. This project provides a solid foundation for building scalable backend applications using these
technologies.

## Installation

1. Clone the repository

````shell
git clone https://github.com/Okira-E/express-ts-prisma-swagger-template.git
````

1. Navigate to the project directory

````shell
cd express-ts-prisma-swagger-template
````

1. Install dependencies with either `npm` or `yarn`

````shell
npm install
````

or

````shell
yarn install
````

1. Create a `.env` file in the root directory and add the following environment variables

````shell
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb" # or any other database
CORS_ORIGIN="http://localhost:*"
ENVIRONMENT="DEV" # or "PROD"
PORT=3200
````

## Usage

The following commands are available for use in the project:

| Command          | Description                                                    |
|------------------|----------------------------------------------------------------|
| `npm run build`  | Compiles TypeScript in ./dist                                  |
| `npm run watch`  | Watches *.ts in src/ and continuously builds the app in ./dist |
| `npm run dev`    | Runs the application and watches changes in ./dist             |
| `npm run start`  | Runs the application in production mode                        |
| `npm run format` | Runs ESLint on the project                                     |
| `npm run format` | Runs Prettier on the project                                   |
| `npm run test`   | Runs Tests in ./src/tests                                      |

For running locally, use `npm run watch` and `npm run dev` in separate terminals.

## Configuration

The main configuration files for this project are as follows:

- tsconfig.json: Configuration file for TypeScript compiler options.
- prisma/schema.prisma: Prisma schema file for defining the database structure.
- src/main.ts: Entry point of the application.

## Project Structure

The project structure is as follows:

```
.
├── dist
├── node_modules
├── prisma
├── src
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── types
│   ├── handlers
│   ├── tests
│   └── main.ts
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

Feel free to modify the project structure to suit your needs.

## Swagger API Documentation

This project includes Swagger for API documentation. After starting the server, you can access the Swagger documentation
at /api-docs in your browser. This provides a detailed description of the available endpoints, request/response schemas,
and allows for easy testing and exploration of your API.

## Dependencies

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, MariaDB, SQLite
  and Microsoft SQL Server
- [Swagger](https://swagger.io/) - Simplify API development for users, teams, and enterprises with the Swagger open
  source and professional toolset
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript.
- [SuperTest](https://github.com/ladjs/supertest#readme) - Super-agent driven library for testing node.js HTTP servers
  using a fluent API.
- [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvement, please open
an issue or submit a pull request on the GitHub repository.

## License

This project is released under the Unlicense. For more details, see the [UNLICENSE](UNLICENSE) file.

---
Happy Coding!
