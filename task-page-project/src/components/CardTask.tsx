import {useNavigate} from "react-router-dom"


export function CardTask({ task }) {

    const navigate = useNavigate();

    return (
        <div style={{background: "black"}}
        onClick={() => navigate(`/tasks/${task.id}`)}
        >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <hr/>
        </div>
    );
}