# to_do_list

## Overview & Weekly Goal
A simple to-do list app where users can store their tasks in a database, see their tasks, and mark them complete. Based on the [ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/) goal.

## Specifications
[ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/):
  - [x] Users can sign in/out.
  - [x] Users cannot access any pages without signing in first.
  - [x] Users can create lists without page refresh.
  - [x] Navbar shows signin on the signup page, and visa versa.
  - [x] Navbar shows logout when user has signed in.
  - [ ] Users can delete unwanted lists without page refresh.
  - [x] Users can create tasks without page refresh.
  - [ ] Users can delete unwanted tasks without page refresh.
  - [ ] Users can edit the text on existing tasks without page refresh.
  - [ ] Users can check tasks off as completed without page refresh.
  - [ ] UI renders tasks differently when they are completed (using a checkbox or some other indicator).
  - [ ] User can change the order that tasks are listed.
  - [ ] When an error occurs, the user is notified with an alert message.
  - [x] Backend uses Node.js and Express.
  - [x] App persists tasks in a database.
  - [ ] App has been deployed.

## Implementation Plan
[ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/):
- Views
  - [ ] Create front end:
    - [x] Implement jQuery, and vanilla JavaScript
    - [x] Use scripts to manipulation DOM
    - [ ] Task order can be changed using jQuery
    - [x] Navbar partial that takes user info

- Database
  - [ ] Create schemas:
    - [x] Create `users` table using `id`, `name`, `email`, & `password` columns
    - [x] Create `lists` table with `id`, `title`, & `username` columns
    - [x] Create `tasks` table with `id`, `completed`, `task`, `list` columns'
  - [ ] Queries
    - [x] Create list
    - [x] Delete list
    - [x] Update list
    - [x] Create tasks
    - [x] Delete tasks
    - [x] Update tasks
    - [x] Find user by email
    - [x] Get all lists
    - [ ] Get list by user ID
    - [ ] Edit profile
    - [x] Get tasks by list ID
    - [x] Sign up
    - [x] Sign in

- AJAX
  - [ ] Create AJAX calls for `lists`:
    - [x] POST `create`
    - [ ] DELETE `delete`
  - [ ] Create AJAX calls for `tasks`:
    - [x] POST `create`
    - [ ] DELETE `delete`
    - [ ] PUT `update`
  - [ ] Create AJAX calls for `users`:
    - [ ] PUT `update`

- Routes
  - [x] Implement `express-session` for user data
  - [x] Create users routes
    - [x] POST `/signin`
    - [x] POST `/signup`
    - [x] POST `/logout`
    - [ ] GET `/profile`
    - [ ] POST `/profile/edit`
  - [ ] Create lists routes
    - [x] GET `lists`
    - [x] POST `/list/create`
    - [ ] DELETE `/list/delete`
  - [ ] Create tasks routes
    - [x] GET `lists/:listId`
    - [x] POST `/list/addTask`
    - [ ] DELETE`/list/task/delete`
    - [ ] PUT `/list/task/update` (order, completion, edit)

- Testing
  - [ ] Testing `tasks`:
    - [ ] Creating to do list items
    - [ ] Deleting to do list items
    - [ ] Completing to do list items
    - [ ] Editing to do list items
    - [ ] All tests are passing
  - [ ] Testing `lists`:
    - [ ] Creating list
    - [ ] Deleting list
    - [ ] Completing list
    - [ ] Editing list
    - [ ] All tests are passing

  - [ ] Deploy site on heroku
