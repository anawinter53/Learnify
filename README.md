# ____Website Name___

## About

Quiz/flashcards website for project week 3. 


## Site directory

### Client-side

| Page | Description|
|------|------------|
| Landing | Homepage that allows users to view main features of site, to login/sign up and to access dashboard. |
| Login/Sign Up | Dynamic interactive page allows users to either create an account or login with an existing account. |
| Dashboard | Shows users any flashcards they may have favourited, for ease of use. |
| Quizzes Categories | Users are able to select by either 'GCSE' or 'A Level' grade of questions and select from 9 different categories. |
| Quiz Questions | Users are presented with questions and are able to chose between 4 options. |
| Flashcard Categories | Users are able to select from 9 different categories for flashcards. |
| Flashcards | Users are shown flashcards and are able to reveal the answer, favourite flashcards and create new flashcards. |
| Profile | Users are shown their username, email, current XP and overall percentage. They are also able to update their username, email and password. |


### Server-side

| Route | Method | Response |
|-------|--------|----------|
| "/users/register" | POST | Creates a new user account, redirects to ______ |
| "/users/login" | POST | Logs user into their account, redirects to ______ |
| "/users/logout" | POST | Logs user out of their account, redirects to landing page |
| "/users/username/:id" | GET | Finds user profile by their id |
| "/users/username/token/:id" | GET |    |
| "/users/username/single/:id" | GET |    |
| "/users/score/:id" | PATCH |    |
| "/users/:id" | PATCH |    |
| "/users/password/:id" | PATCH |    |
|-------|--------|----------|
| "/quiz" | GET | Shows all quizzes |
| "/quiz/:subject" | GET | Finds quiz by subject |
| "/quiz/single/:id" | GET |    |
|-------|--------|----------|
| "/flashcards" | GET | Creates a new item that is added to the database |
| "/flashcards/:subject" | GET |    |
| "/flashcards/single/:id" | GET |    |
| "/flashcards/user/:id" | GET |    |
| "/flashcards" | POST |    |
| "/flashcards/:id" | DELETE |    |
| "/flashcards/favorite/user/:userId/card/:cardId" | POST |    |
| "/flashcards/favorite/user/:id" | GET |    |
| "/favorite/user/:userId/card/:cardId" | DELETE |    |


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


