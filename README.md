# to_do_list
### 1-8-18

## Overview & Weekly Goal
A simple to-do list app where users can store their tasks in a database, see their tasks, and mark them complete. Based on the [ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/) goal.

## Specifications
[ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/):
  - [ ] Users can sign in/out.
  - [ ] Users cannot access any pages without signing in first.
  - [ ] Users can create lists without page refresh.
  - [ ] Users can delete unwanted lists without page refresh.
  - [ ] Users can create tasks without page refresh.
  - [ ] Users can delete unwanted tasks without page refresh.
  - [ ] Users can edit the text on existing tasks without page refresh.
  - [ ] Users can check tasks off as completed without page refresh.
  - [ ] UI renders tasks differently when they are completed (using a checkbox or some other indicator).
  - [ ] User can change the order that tasks are listed.
  - [ ] When an error occurs, the user is notified with an alert message.
  - [ ] Backend uses Node.js and Express.
  - [ ] App persists tasks in a database.
  - [ ] App has been deployed.

## Implementation Plan
[ToDo List](https://curriculum.learnersguild.org/Phases/Practice/Modules/To-Do-List/):
  - [ ] Create front end:
    - [ ] Implement jQuery, and vanilla JavaScript
    - [ ] Use scripts to manipulation DOM
    - [ ] Task order can be changed using jQuery
  - [ ] Implement `express-session` for user data:
  - [ ] Create schemas:
    - [ ] Create `users` table using `express-session`
    - [ ] Create `tasks` table with `id`, `completed`, `task`, `list` columns'
    - [ ] Create `lists` table with `id` & `username` columns
  - [ ] Create AJAX calls for `lists`:
    - [ ] `create`
    - [ ] `delete`
  - [ ] Create AJAX calls for `tasks`:
    - [ ] `create`
    - [ ] `delete`
    - [ ] `update`
    - [ ] `completed` route (binary)
  - [ ] Create users routes
    - [ ] `/signin`
    - [ ] `/signup`
  - [ ] Create lists routes
    - [ ] `/list/create`
    - [ ] `/list/delete`
  - [ ] Create tasks routes
    - [ ] `/list/task/create`
    - [ ] `/list/task/delete`
    - [ ] `/list/task/update`
    - [ ] `/list/task/completed` route (binary)
  - [ ] Errors displayed using `alert()`
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
