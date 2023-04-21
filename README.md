# Learnify

## About

Learnify is an all-in-one website that allows users to learn and revise a range of subjects, both at GCSE and A-level standards. Learnify aims to make learning more enjoyable for users, with bright colours and engaging features such as the quiz and flashcard pages. On Learnify you have the choice between nine different subjects, ranging from Maths to Geography and even Sports Science! If quizzes aren't your thing, the flashcard page allows you to test your knowledge and even create custom flashcards. You'll be able to view all your custom and favourite flashcards on your Dashboard for ease of use. 

## Development

The team followed an Agile methodology for the development of Learnify, using wireframing and Kanban boards. 

We streamlined our development process using our Kanban board on Trello. This allowed us to prioritise the demands of the projects whilst ensuring we weren't all working on the same files, helping us avoid Git merge conflicts as much as possible.

<p align="center">
<img src="https://github.com/anawinter53/give-us-a-br/blob/dev/documentation/Wireframes.png" width=75% height=75%>
</p>
<br>

Using Figma we were able to plan out the design for our website before coding it, helping with a more consistent design look across all the team's work. Figma enabled us to conceptualise possible features in a way that allowed for joint planning and more discussions on any new design ideas. 

<p align="center">
<img src="https://github.com/anawinter53/give-us-a-br/blob/dev/documentation/Trello-board.png" width=75% height=75%>
</p>
<br>

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

#### User Routes

| Route | Method | Response |
|-------|--------|----------|
| "/users/register" | POST | Creates a new user account, redirects to login page |
| "/users/login" | POST | Logs user into their account, redirects to dashboard |
| "/users/logout" | POST | Logs user out of their account, redirects to landing page |
| "/users/username/:id" | GET | Finds user profile by their id |
| "/users/username/token/:id" | GET | Gets a user by their tokenId |
| "/users/username/single/:id" | GET | Gets a user by their userId |
| "/users/score/:id" | PATCH | Updates the user score after a test |
| "/users/:id" | PATCH | Updates the users information |
| "/users/password/:id" | PATCH | Updates the user's password |

#### Quiz Routes

| Route | Method | Response |
|-------|--------|----------|
| "/quiz" | GET | Shows all quizzes |
| "/quiz/:subject" | GET | Finds quiz by subject |
| "/quiz/single/:id" | GET | Gets a single quiz question by questionId |

#### Flashcard Routes

| Route | Method | Response |
|-------|--------|----------|
| "/flashcards" | GET | Creates a new item that is added to the database |
| "/flashcards/:subject" | GET | Gets all flashcards for a specific subject |
| "/flashcards/single/:id" | GET | Gets a single flashcard based on the cardID |
| "/flashcards/user/:id" | GET | Gets all the flashcards by UserId |
| "/flashcards" | POST | Creates a new flashcard |
| "/flashcards/:id" | DELETE | Deletes a flashcard based on the cardId |
| "/flashcards/favorite/user/:userId/card/:cardId" | POST | Adds a flashcard to the user's favourites |
| "/flashcards/favorite/user/:id" | GET | Retrieves the user's favourite flashcards |
| "/favorite/user/:userId/card/:cardId" | DELETE | Deletes a user's favourite flashcard |


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

## Usage

### Landing page:


https://user-images.githubusercontent.com/112402783/233736923-12e90207-0541-4a7a-9a36-c5aecf6298ed.mp4


### Login/Sign Up page:


https://user-images.githubusercontent.com/112402783/233735443-2a1a4f13-aed4-4d79-91b1-7d28c86daabb.mp4


### Dashboard & Other Pages:





