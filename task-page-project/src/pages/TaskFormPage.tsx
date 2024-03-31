/* formulario de imputs para crear una tarea */
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom"

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm(); // register y handleSubmit son funciones que se obtienen de useForm, useForm debe iterarse para obtener las funciones

    const Navigate = useNavigate();
    const params = useParams();
    console.log(params.id)

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
        }else{
            await createTask(data)
        }
        Navigate("/tasks")
    })

    useEffect(() => {
        async function getTaskById() {
        if (params.id) {
            const res = await getTask(params.id)
            console.log(res.data)
            setValue("title", res.data.title)
            setValue("description", res.data.description)
        }}
        getTaskById() // como es async se debe llamar la funcion
    },[])

    return (
        <div>
            <form
                onSubmit={onSubmit} // onSubmit es un evento que se dispara cuando se envia el formulario.
            >
                <label>
                    Title:
                    <input type="text" placeholder="title"
                        {...register("title", { required: true })}
                    // Se registra el input con el nombre title y se le pasa un objeto con la propiedad required en true
                    />
                </label>
                {errors.title && <span>Title is required</span>}
                <label>
                    Description:
                    <textarea rows="3" placeholder="description"
                        {...register("description", {
                            required: true // para tener una mejor validacion se recomienda usar yup
                        })}
                    ></textarea>
                </label>
                {errors.description && <span>Title is required</span>}
                <button type="submit">Save Task</button>
                {
                    params.id && <button type="submit" onClick={async () => {
                        const accepted = window.confirm("Are you sure you want to delete this task?") // Ventana de confirmación
                        if (accepted) {
                            await deleteTask(params)
                            Navigate("/tasks")
                        }
                    }}>Deleted</button>
                }
            </form>
        </div>
    );
}