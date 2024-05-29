import styles from './Filtros.module.scss'
import classNames from 'classnames'
import opcoesFiltros from './filtros.json'
import { memo } from 'react';

type Filtro = typeof opcoesFiltros[0];

interface Props {
    filtros: number | null,
    setFiltros: React.Dispatch<React.SetStateAction<null | number>>
}

function Filtros ({ filtros, setFiltros }: Props) {
    function selecionaFiltro (opcao: Filtro) {
        if (filtros === opcao.id) return setFiltros(null)
            return setFiltros(opcao.id)
    }

    return (
        <div className={styles.filtros}>
            {opcoesFiltros.map(opcao =>
                <button 
                    onClick={() => selecionaFiltro(opcao)}
                    key={opcao.id}
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles["filtros__filtro--ativo"]]: filtros === opcao.id
                    })}
                >
                    {opcao.label}
                </button>
            )}
        </div>
    )
}

export default memo(Filtros)