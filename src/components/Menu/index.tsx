
import { CogIcon, HouseIcon, SunIcon, TimerResetIcon } from 'lucide-react'
import styles from './style.module.css'

export function Menu() {
    return (
        <>
            <div className={styles.menu}>
                <a href="#" className={styles.menuLink}>
                    <HouseIcon />
                </a>
                <a href="#" className={styles.menuLink}>
                    <TimerResetIcon />
                </a>
                <a href="#" className={styles.menuLink}>
                    <CogIcon />
                </a>
                <a href="#" className={styles.menuLink}>
                    <SunIcon />
                </a>
            </div>
        </>
    )
}