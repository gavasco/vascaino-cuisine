import { lazy, memo, useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import classNames from 'classnames'

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

function Ordenador ({ ordenador, setOrdenador }: Props) {
    const [aberto, setAberto] = useState(false)
    const nomeOrdenador = opcoes.find(opcao => ordenador === opcao.value)?.nome

    return (
        <button onBlur={() => setAberto(false)} onClick={() => setAberto(!aberto)} className={classNames({
            [styles.ordenador]: true,
            [styles['ordenador--ativo']]: ordenador != ''
        })} >
            <span> { nomeOrdenador || 'Ordenar por'} </span>
            <MdKeyboardArrowUp 
                size={20}
                style={{
                    transform: `rotate(${aberto ? 0 : 180}deg)`
                }}
            />

            {/* {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>} ctrl + ; faz o comentario */}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]:aberto
            })}>
                {opcoes.map(opcao =>
                    <div 
                        key={opcao.value}
                        className={styles.ordenador__option}
                        onClick={() => setOrdenador(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                )}
            </div>
        </button>
    )
}

export default memo(Ordenador)