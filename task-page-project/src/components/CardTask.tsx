import {useNavigate} from "react-router-dom"


export function CardTask({ task }) {

    const navigate = useNavigate();

    return (
        <div className="bg-zinc-800 hover:bg-zinc-700 p-8 rounded-lg shadow-lg hover:cursor-pointer"
        onClick={() => navigate(`/tasks/${task.id}`)}
        >
            <h3 className="font-bold uppercase">{task.title}</h3>
            <p className="text-slate-400" >{task.description}</p>
            <hr/>
        </div>
    );
}