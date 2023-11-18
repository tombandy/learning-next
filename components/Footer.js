import Link from "next/link"
import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
        <footer>
            <p className={styles.p}>Copyright &copy; 2021</p>
            <Link href="/about">Footer About</Link>
        </footer>
    )
}

export default Footer