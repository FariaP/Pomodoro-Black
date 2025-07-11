import styles from './style.module.css'

type InputFormProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function InputForm({ id, type, labelText, ...rest }: InputFormProps) {
    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input className={styles.input} type={type} id={id} {...rest} />
        </>
    )
}