# Tasks Management App

Simple task management application built with React.js.

# Technologies

The application is built using the following technologies:

* [React.js](https://react.dev/)
* [Redux](https://react-redux.js.org/) (via the official React binding for Redux)
* [Redux Persist](https://github.com/rt2zz/redux-persist) (to persist the application state using local storage)
* [Material UI](https://mui.com/) (UI framework)
* [React Router](https://reactrouter.com/en/main) (to navigate when showing task details in edit mode)
* [uuid](https://github.com/uuidjs/uuid) (to fake task IDs)
* [Moment.js](https://momentjs.com/) (to handle task due dates)
* [Jest](https://jestjs.io/pt-BR/) (to test components)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (to test components)

# How to Run the Application

You need Node.js installed on your machine to run the application. After installing it, open the application on terminal or command prompt and run the following commands:

```
npm install
npm run start
```

Navigate to `http://localhost:3000` to see the application.

To run tests, run the command `npm run test`. There are tests for the main features of the application.

**Main view**
![Home Page](https://raw.githubusercontent.com/evgomes/react-task-management-test/main/images/home-page.png)

**Add task dialog**
![Add Task](https://raw.githubusercontent.com/evgomes/react-task-management-test/main/images/add-task.png)

**Edit task dialog**
![Edit Task](https://raw.githubusercontent.com/evgomes/react-task-management-test/main/images/edit-task.png)

**Delete task dialog**
![Delete Task](https://raw.githubusercontent.com/evgomes/react-task-management-test/main/images/delete-task.png)

# Features

The application renders a Kanban structure with three columns: To Do, Doing, and Done. You can add tasks to each columns. You can also visualize and edit tasks by clicking in the task name or description. You can also delete tasks from each column.

In future versions, it will be possible to drag and drop tasks between columns.