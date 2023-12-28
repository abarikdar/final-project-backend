# final-project-backend
backend server for web dev final project


## Requirements:
These requirements are designed to give some guardrails and ensure each tool is used, but generally leave the focus and purpose of the project up to each team. In building a project with our tools, most of these requirements will be met without much extra effort, in the course of development.

### Backend Requirements

- Database (PostgreSQL, Sequlize)
  - Create 2 or more models, each with 2 or more fields
    - [`Animal Model`](https://github.com/abarikdar/final-project-backend/blob/main/database/models/Animal.js) 
    - [`Task Model`](https://github.com/abarikdar/final-project-backend/blob/main/database/models/Task.js)
  - 2 or models should be associated with each other
    - [`models/index.js#L4-L7`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/database/models/index.js#L4-L7)
- API (Express, Sequelize, CRUD operations)
  - Write routes to add new instances to each model
    - [`ADD Animal`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/animals.js#L29-L37)
    - [`ADD Task`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/tasks.js#L19-L28)
  - Write routes that returns all instances from each model
    - [`GET ALL Animals`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/animals.js#L7-L11)
    - [`GET ALL Tasks`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/tasks.js#L7-L11)
  - Write routes that return individual instances from each model based on their IDs
    - [`GET animal by ID`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/animals.js#L13-L17)
    - [`GET task by ID`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/tasks.js#L13-L17)
  - Write routes to update instances in each model
    - [`PUT animal`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/animals.js#L39-L48)
    - [`PUT task`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/tasks.js#L41-L46)
  - Write routes to remove instances form each model, based on their IDs
    - [`DELETE animal`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/animals.js#L19-L27)
    - [`DELETE task`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/tasks.js#L30-L39)
  - Write a route that returns one instance from a model, and all instances associated with it in a different model
    - [`GET animal include : [Task]`](https://github.com/abarikdar/final-project-backend/blob/865b76e20b87d385ec61f297bf0bcecec54d6d4d/routes/animals.js#L7-L17)