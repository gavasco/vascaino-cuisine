import styles from './Footer.module.scss'
import { ReactComponent as Logo } from 'Assets/logo.svg'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <h3> Desenvolvido por Gabriel Vasco </h3>
            <div className={styles.logo}>
                <Logo />
            </div>
        </footer>
    )
}