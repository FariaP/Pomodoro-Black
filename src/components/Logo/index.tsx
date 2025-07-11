
import { TimerIcon } from 'lucide-react'
import styles from './style.module.css'

export function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <a href="#" className={styles.logoLink}>
                    <TimerIcon />
                    <span>ZenTime</span>
                </a>
            </div>
        </>
    )
}