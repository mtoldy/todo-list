# Todos
Welcome to README. Bellow are some tasks what we need to tackle. Can you help us with them?

* Application can't be build and properly started, could you find and fix these issues? Be sure that even in the console there are no errors.
* In `todo-list.component.html` is a possible performance issue. Can you find it and explain the issue as well as the solution?
* Please load the 'Todo' module lazy as we don't need it on load.
* We would like to see the actual task list on the home page with the possibility to mark a task as completed and to delete a task.  
  *Hint1*: with correct solution, any newly added tasks on Todo list page would persist on page change (Todo list page -> Home page => Todo list page).  
  *Hint2*: you can reuse existing component.
* When the task is completed, its title should be striked through. Can you do it only by modification of the host element?
* Sometimes the network can be slower, so it would be nice to show the rotating spinner during every network request. The spinner is prepared in `shared/components/spinner`.
* Sometimes a network error can occure. In the configurationService we have defined how many ("n") retry attempt should we used before the error should occure. So if the network error rise, retry request "n" times. Imagine we provide this app as a library, so user can define own retry times. So don't change anything in the configurationService and use the Injection Token instead.
* Animation on the task list is not optimized, especially when it contains more than 10 tasks. Do you have any idea how to solve it?

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

