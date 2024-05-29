import { useEffect, useState } from 'react';
import ItemCardapio from './Item';
import styles from './Itens.module.scss';
import cardapio from './itens.json';

interface Props {
    busca: string,
    filtros: number | null,
    ordenador: string
}

export default function TodosItensCardapio ({ busca, filtros, ordenador }: Props) {
    const [lista, setLista] = useState(cardapio);

    function filtraPorBusca (title: string) {
        const regex = new RegExp(busca, 'i')
        return regex.test(title)
    }

    function filtraPorFiltros (id: number) {
        if (filtros != null) return filtros === id;
        return true;
    }

    function ordenar (novaLista: typeof cardapio) {
        switch (ordenador) {
            case 'porcao':
                return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'preco':
                return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return novaLista; 
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => filtraPorBusca(item.title) &&  filtraPorFiltros(item.category.id)) 
        setLista(ordenar(novaLista))
    }, [busca, filtros, ordenador])
    return (
        <div className={styles.itens}>
            {lista.map(item => 
                <ItemCardapio
                    key={item.id} 
                    {...item}
                />)}
        </div>
    )
}