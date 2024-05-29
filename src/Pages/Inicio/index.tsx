import styles from './Inicio.module.scss'
import stylesTema from '../../styles/Tema.module.scss'
import cardapio from '../Cardapio/Itens/itens.json'
import nossaCasaImg from '../../Assets/nossa_casa.png'
import { Prato } from 'types/tipos';
import { useNavigate } from 'react-router-dom';
import { stat } from 'fs';

export default function Inicio () {
    const navigate = useNavigate()
    const pratosRecomendados = [cardapio[0], cardapio[7]];

    function redirecionarParaDetalhes (prato: Prato) {
        navigate(`/prato/${prato.id}`, {state: {prato}})
    }

    return (
        <div className={stylesTema.container}>
            <h3 className={stylesTema.titulo}> Recomendações da Cozinha </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(prato => 
                    <div className={styles.recomendado} key={prato.id}>
                        <h3> {prato.title} </h3>
                        <div className={styles.recomendado__imagem}>
                            <img src={prato.photo} alt={prato.title} />
                        </div>
                        <button 
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(prato)}
                        >
                                Ver mais
                        </button>
                    </div>
                )}
            </div>
            <div className={styles.nossaCasa}>
                <h2> Nossa Casa </h2>
                <div>
                    <img src={nossaCasaImg} alt="imagem nossa casa" />
                </div>
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, nº 265 <br /> <br /> Lago Artificial - Garça/SP
                </div>
            </div>
        </div>
    )
}