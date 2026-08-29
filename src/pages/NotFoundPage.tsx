import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <>
            <h1>404 NOT FOUND</h1>
            <Link to='/' replace>Go home</Link>
        </>
    )
}

export default NotFoundPage