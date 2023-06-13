import { Link } from 'react-router-dom';

function EnvironmentIndexItem({ environment }) {
    return (
        <li className="environment-item">
            <h1>{environment.name}</h1>
            <Link to={`/track-index/${environment.id}`}>
                <button>Open Environment</button>
            </Link>
        </li>
    );
}

export default EnvironmentIndexItem;
