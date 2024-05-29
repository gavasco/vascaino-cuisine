import { useNavigate, useParams } from 'react-router-dom'
import styles from './Prato.module.scss'
import stylesTema from '../../styles/Tema.module.scss'
import cardapio from '../Cardapio/Itens/itens.json'
import classNames from 'classnames'

export default function Pratos() {
    const navigate = useNavigate();
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id))
    if (!prato) {
        return <p>Not Found</p>
    }

    return (
        <div className={stylesTema.container}>
            <button
                className={styles.voltar}
                onClick={() => navigate(-1)}
            > {'<<< Voltar'} </button>
            <section className={styles.container}>
                <h3 className={stylesTema.titulo}> {prato.title} </h3>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}> {prato.description} </p>
                </div>
                <div>
                    <div className={styles.tags}>
                        <div className={classNames({
                            [styles.tags__tipo]: true,
                            [styles[`tags__tipo__${prato.category.label.toLocaleLowerCase()}`]]: true
                        })}> {prato.category.label} </div>
                        <div className={styles.tags__porcao}> {prato.size} g </div>
                        <div className={styles.tags__qtdpessoas}> {prato.serving} {prato.serving > 1 ? 'pessoas' : 'pessoa'} </div>
                        <div className={styles.tags__valor}> R${prato.price} </div>
                    </div>
                </div>
                <div className={styles.valorComDesconto}>Promoção: R$ {(prato.price*0.7).toFixed(2)} </div>
            </section>
        </div>
    )
}