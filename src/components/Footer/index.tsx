import styles from './style.module.css'

export function Footer() {
    return (
        <div className={styles.footer}>
            <a href="#">Entenda como funciona a técnica pomodoro 📝</a>
            <a href="#">ZenTime Pomodoro &copy; {new Date().getFullYear()} - Feito para melhorar seu 🕝</a>
        </div>
    )
}