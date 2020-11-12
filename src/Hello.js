import { Link } from 'react-router-dom'

function Hello() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <Link to="/" data-cy="home-link">
                Go home
            </Link>
        </div>
    )
}

export { Hello }