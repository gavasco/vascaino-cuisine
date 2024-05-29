import { Prato } from 'types/tipos'
import styles from './TagsPrato.module.scss'
import classNames from 'classnames'

export default function TagsPrato({ size, serving, price, category }: Prato) {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]]: true
            })}> {category.label} </div>
            <div className={styles.tags__porcao}> {size} g </div>
            <div className={styles.tags__qtdpessoas}> {serving} {serving > 1 ? 'pessoas' : 'pessoa'} </div>
            <div className={styles.tags__valor}> R${price} </div>
        </div>
    )
}