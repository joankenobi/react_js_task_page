import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";

export function TaskList() {
    
    const [
        tasks, // Variable que guarda el estado
        setTasks // Función que actualiza el estado
        ] = useState(
            [] // Valor inicial del estado en vacio (da error si no lo tiene )
            );

    useEffect(() => { // Se ejecuta cuando el componente se monta o carga la primera vez
        console.log("TaskList component loaded");

        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks();
    }, []);
  
    return (
    <div>
        {tasks.map(task => ( // Recorre el array de tareas
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>))

        }
    </div>
  );
}