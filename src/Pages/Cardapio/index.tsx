import { useState } from 'react'
import Buscador from './Buscador'
import styles from './Cardapio.module.scss'
import Filtros from './Filtro'
import Ordenador from './Ordenador'
import TodosItensCardapio from './Itens'

export default function Cardapio () {
    const [busca, setBusca] = useState('')
    const [ordenador, setOrdenador] = useState('')
    const [filtros, setFiltros] = useState<null | number>(null)

    return (
        <main>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}> Cardápio </h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtros={filtros} setFiltros={setFiltros} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <TodosItensCardapio busca={busca} filtros={filtros} ordenador={ordenador} />
            </section>
        </main>
    )
}