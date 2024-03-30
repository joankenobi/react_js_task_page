import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { CardTask } from "../components/CardTask";

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
            <CardTask key={task.id} task={task}/>
            ))}
    </div>
  );
}