import styles from './Heading.module.css'


export function Heading() {
    return (
        <>
            <form className={styles.cyan}>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Digite sua senha" />
            </form>
        </>
    )
}