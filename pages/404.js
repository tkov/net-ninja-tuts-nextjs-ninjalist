import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/server/router';
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, [])

    return (
        <div className="not-found">
            <h1>Sorry!</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;