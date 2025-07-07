import { TimerIcon } from 'lucide-react'
import styles from './Heading.module.css'

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
    return (
        <>
            <form className={styles.heading}>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Digite sua senha" />
                {children}
            </form>
        </>
    )
}