import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1>Welcome!</h1>
            <p>Lorem ipsum stuff and things and bits etc.</p>
            <Link href="/about">About</Link>
        </>
    )
}