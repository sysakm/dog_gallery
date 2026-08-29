import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <section className='not-found'>
            <span className='not-found__code'>404</span>
            <h1>Page not found</h1>
            <p>The page you requested wandered off.</p>
            <Link className='action-link' to='/home' replace>Go home</Link>
        </section>
    )
}

export default NotFoundPage
