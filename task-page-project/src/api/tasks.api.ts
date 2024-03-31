import axios from 'axios';

// Copilot recomendation for fetch
// export cost getAllTasks = () => {
//     return fetch("http://localhost:3001/tasks")
//     .then(response => response.json())
//     .then(data => data);
// }

const tasksApi= axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/tasks/"
})

export const getAllTasks = () => tasksApi.get("/")

export const getTask = (id) => tasksApi.get(`/${id}/`)

export const createTask = (task) => tasksApi.post("/", task)

export const deleteTask = (task) => tasksApi.delete(`/${task.id}`)

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)