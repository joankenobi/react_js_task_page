/* formulario de imputs para crear una tarea */
import { useForm } from "react-hook-form"


export function TaskFormPage() {
    const { register, handleSubmit, formState: {errors} } = useForm(); // register y handleSubmit son funciones que se obtienen de useForm, use form debre iterarse para obtener las funciones
    
    const onSubmit = handleSubmit(data => {
        console.log(data);
    })
    
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
            </form>
        </div>
    );
}