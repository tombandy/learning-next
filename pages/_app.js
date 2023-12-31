import "../styles/global.css"
import Link from 'next/link'
import {useRouter} from 'next/router'
import Footer from "../components/Footer"

export default function App({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
        <div>
            <h1>OurSite</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link></li>
                    <li><Link className={router.pathname == "/blog" ? "active" : ""} href="/blog">Blog</Link></li>
                    <li><Link className={router.pathname == "/about" ? "active" : ""} href="/about">About</Link></li>
                </ul>
            </nav>
        </div>
        <p>Header</p>
        <Component {...pageProps} />
        <Footer />
        </>
    )
}