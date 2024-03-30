import axios from 'axios';

// Copilot recomendation for fetch
// export cost getAllTasks = () => {
//     return fetch("http://localhost:3001/tasks")
//     .then(response => response.json())
//     .then(data => data);
// }

export const getAllTasks = () => {
   return axios.get("http://localhost:8000/tasks/api/v1/tasks/")
}

export const createTask = (task) => {
    return axios.post("http://localhost:8000/tasks/api/v1/tasks/", task)
}