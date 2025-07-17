import styles from './style.module.css'

export function Cycles() {
    return (
        <div className={styles.cycles}>
            <span className={styles.title}>Ciclos:</span>
            <div className={styles.cyclesPointers}>
                <span className={`${styles.cyclePoint} ${styles.workTime}`}></span>
                <span className={`${styles.cyclePoint} ${styles.shortTime}`}></span>
                <span className={`${styles.cyclePoint} ${styles.workTime}`}></span>
                <span className={`${styles.cyclePoint} ${styles.shortTime}`}></span>
                <span className={`${styles.cyclePoint} ${styles.workTime}`}></span>
                <span className={`${styles.cyclePoint} ${styles.shortTime}`}></span>
                <span className={`${styles.cyclePoint} ${styles.workTime}`}></span>
                <span className={`${styles.cyclePoint} ${styles.longTime}`}></span>
            </div>
        </div>
    )
}
