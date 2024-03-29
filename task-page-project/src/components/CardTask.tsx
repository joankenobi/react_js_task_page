export function CardTask({ task }) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <hr/>
        </div>
    );
}