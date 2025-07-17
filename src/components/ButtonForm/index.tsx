import styles from './style.module.css'

type ButtonFormProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
}

export function ButtonForm({ icon, color = 'green', ...props }: ButtonFormProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}>
                {icon}
            </button>
        </>
    )
}