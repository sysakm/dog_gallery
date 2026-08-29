import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <>
            <h2>404 - Not Found</h2>
            <Link to='/home' replace>Go home</Link>
        </>
    )
}

export default NotFoundPage