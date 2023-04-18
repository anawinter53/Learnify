# ____Website Name___

## About

Quiz/flashcards website for project week 3. 


## Site directory

### Client-side

| Page | Description|
|------|------------|


### Server-side

| Route | Method | Response |
|-------|--------|----------|


## Required software & accounts
- [VSCode](https://code.visualstudio.com/) or any desired IDE
- [Node.js](https://nodejs.org/en)
- [Npm.js](https://www.npmjs.com)
- [PostgreSQL](https://www.elephantsql.com)

## Installation

1. To get the repository set up on your computer, open your terminal and move into your desired directory using the `cd` command.
2. From the Code button copy the HTTPS/SSH key and run the command `git clone` followed by the key you copied.
3. Move into the repistory and run `code .` to open the code in VSCode/your desired IDE.
4. Run `npm install` to install the necessary dependencies.
5. Create a new instance with Elephant SQL (or another PostgreSQL site) and copy the instance link created.
6. In the root folder create a **.env** file and add the following lines:
- [x] PORT=<port_number>   
- [x] DB_URL=<postgresql_instance_url>

Make sure there are no spaces between the content on each line and ensure you don't add any commas or any other punctuation at the end of each line.

7. Set up the database connection by running `npm run setup-db`
8. To get the server running, run `npm run dev`

### Libraries

These are the necessary libraries used with this repository:

#### Client-side

- cors (cors allows cross-origin resource sharing which allows access to other domains, ports and schemes)
- express (express offers built-in functions that make development much easier)
- dotenv (dotenv processes environment variables in a .env file to make them accessible whilst allowing the contents of .env to remain secret)
- pg (pg allows connection to a database using PostgreSQL)
- nodemon (as a dev dependency, nodemon automatically restarts the server when changes are detected)

#### Server-side

- react (react allows us to implement functionality needed for React components)
- react-dom (react-dom allows us to render to the virtual DOM with React)
- react-router-dom (react-router-dom allows us to use router functionality through pages)
- vite (as a dev dependency, vite bundles JavaScript files for faster build times)


## Usage

### Homepage:

### Login/Register page:


