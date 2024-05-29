import classNames from 'classnames'
import styles from './Item.module.scss'
import TagsPrato from 'componentes/TagsPrato'
import { memo } from 'react'

interface Props {
    title: string,
    description: string,
    photo: string,
    size: number,
    serving: number,
    price: number,
    id: number,
    category: {
        id: number,
        label: string
    }
}

function ItemCardapio (props: Props) {
    const { title, description, photo } = props;
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt="" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
            </div>
            <TagsPrato {...props} />
        </div>
    )
}

export default memo(ItemCardapio)