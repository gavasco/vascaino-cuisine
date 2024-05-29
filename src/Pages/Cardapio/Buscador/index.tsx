import { memo, useMemo } from 'react'
import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador ({ busca, setBusca }: Props) {
    const buscadorIcon = useMemo(() => <CgSearch size={20} color='#4c4d5e' />, [])
    return (
        <div className={styles.buscador}>
            <input type="search" 
                placeholder="Buscar"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
            />
            {buscadorIcon}
        </div>
    )
}

export default memo(Buscador)