import styles from './Menu.module.scss'
import { ReactComponent as Logo } from 'Assets/logo.svg'
import { Link, Outlet } from 'react-router-dom'

export default function Menu () {
    const rotas = [{
        label: 'Início',
        to: '/'
    },{
        label: 'Cardápio',
        to: '/cardapio'
    },{
        label: 'Sobre',
        to: '/sobre'
    }]

    return (
        <div>
            <nav className={styles.menu}>
                <div className={styles.logo}> 
                    <Logo />
                </div>
                <ul className={styles.menu__list}>
                    {rotas.map(( rota, index ) => 
                        <li key={index} className={styles.menu__link}>
                            <Link to={rota.to} > {rota.label} </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <div className={styles.header}>
                <h2 className={styles.header__text}> Vascaíno's <span> Italiene </span> Cuisine </h2>
            </div>
        </div>
        
    )
}