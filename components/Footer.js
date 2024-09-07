import Link from "next/link"
import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
        <footer>
            <p className={styles.p}>Copyright &copy; 2024</p>
            <Link href="/about">Footer About v3</Link>
        </footer>
    )
}

export default Footer