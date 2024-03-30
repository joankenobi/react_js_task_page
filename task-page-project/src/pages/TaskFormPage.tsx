/* formulario de imputs para crear una tarea */

export function TaskFormPage() {
    return (
        <div>
            <form>
                <label>
                    Title:
                    <input type="text" placeholder="title" />
                </label>
                <label>
                    Description:
                    <textarea rows="3" placeholder="description" ></textarea>
                </label>
                <button type="submit">Save Task</button>
            </form>
        </div>
    );
}