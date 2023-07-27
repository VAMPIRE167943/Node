A simple NodeJS restful application that manages users and tasks for those users.

IMPORTANT:
Steps on running and testing--------

1. Fork and download and place wherever.
2. (Optional) Open project with VS code.
3. Git Bash in project folder.
4. Copy in Git Bash
```
node main.js
```
5. Open another Git Bash instance and execute cURL commands.

Create User:
```
curl -i -H "Content-Type: application/json" -X POST -d '{"username":"jsmith","first_name" : "John", "last_name" : "Smith"}' http://localhost:3000/api/users
```
Update User:
```
curl -i -H "Content-Type: application/json" -X PATCH -d '{"first_name" : "John", "last_name" : "Doe"}' http://localhost:3000/api/users/{id}
```
Read Users:
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users
```
Read User:
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users/{id}
```
Delete User:
```
curl -i -X DELETE http://localhost:3000/api/users/{id}
```
Create Task:
```
curl -i -H "Content-Type: application/json" -X POST -d '{"name":"My task","description" : "Description of task", "date_time" : "2016-05-25 14:25:00"}' http://localhost:3000/api/users/{user_id}/tasks
```
Update Task:
```
curl -i -H "Content-Type: application/json" -X PATCH -d '{"name":"My updated task"}' http://localhost:3000/api/users/{user_id}/tasks/{task_id}
```
Delete Task:
```
curl -i -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/users/{user_id}/tasks/{task_id}
```
Read Task:
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users/{user_id}/tasks/{task_id}
```
Read Tasks:
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/users/{user_id}/tasks
```
6. Ctrl + left click on the url to view the results in browser.