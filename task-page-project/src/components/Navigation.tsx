import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div>
            <Link to="/tasks">
                <h1>Task App</h1>
            </Link>
            <li>
                <Link to="/task-create">Create</Link>
            </li>
        </div>
    );
}