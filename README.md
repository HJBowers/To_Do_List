# to_do_list

## Overview & Weekly Goal
A simple to-do list app where users can store their tasks in a database, see their tasks, and mark them complete. Based on the [ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/) goal.

## Specifications
[ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/):
  - [x] Backend uses Node.js and Express.
  - [x] App persists tasks in a database.
  - [x] Users can sign in/out.
  - [x] Users cannot access any pages without signing in first.
  - [x] Going to the Home Page (http://localhost:3000/) should let you see all the lists
  - [x] Going to a list detail page should show all the tasks for that list
  - [x] Users can create lists without page refresh.
  - [ ] Adding a list should add a new list in the database, and redirect to the created list
  - [ ] Users can delete unwanted lists without page refresh.
  - [ ] Clicking on the Delete button for a list should delete the list without refreshing the page
  - [x] Users can create tasks without page refresh.
  - [x] Users can delete unwanted tasks without page refresh.
  - [ ] Users can edit the text on existing tasks without page refresh.
  - [ ] Users can check tasks off as completed without page refresh.
  - [ ] UI renders tasks differently when they are completed (using a checkbox or some other indicator).
  - [ ] User can change the order that tasks are listed.
  - [ ] Searching should show all the lists and tasks which match the search string
  - [x] Navbar shows signin on the signup page, and visa versa.
  - [x] Navbar shows logout when user has signed in.  

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
    - [x] Search

- AJAX
  - [ ] Create AJAX calls for `lists`:
    - [x] POST `create`
    - [ ] DELETE `delete`
  - [ ] Create AJAX calls for `tasks`:
    - [x] POST `create`
    - [x] DELETE `delete`
    - [ ] PUT `update`
  - [ ] Create AJAX calls for `users`:
    - [ ] PUT `update`
  - [ ] Create AJAX calls for `search`:
    - [ ] GET `search`

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
    - [x] DELETE`/list/task/delete`
    - [ ] PUT `/list/task/update` (order, completion, edit)
  - [ ] Search
    - [ ] GET `/list/search`

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
