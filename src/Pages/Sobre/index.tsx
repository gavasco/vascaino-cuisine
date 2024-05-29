import styles from './Sobre.module.scss'
import stylesTema from '../../styles/Tema.module.scss'
import FotoCasa from 'Assets/sobre/casa.png'
import massa1 from 'Assets/sobre/massa1.png'
import massa2 from 'Assets/sobre/massa2.png'

export default function Sobre () {
    const massas = [massa1, massa2]

    return (
        <section className={stylesTema.container}>
            <h3 className={stylesTema.titulo}> Sobre </h3>
            <div className={styles.sobreNos}>
                <img src={FotoCasa} alt='Foto fachada do restaurante'  />
                <p className={styles.sobreNos__texto}> O <span> Vascaíno's Italiene Cuisine </span>  é um restaurante italiano renomado, conhecido por sua autêntica culinária italiana e ambiente acolhedor. Localizado em um espaço sofisticado e elegante, o restaurante oferece uma variedade de pratos tradicionais italianos preparados com ingredientes frescos e de alta qualidade. <br /> <br /> O menu inclui clássicos como massas artesanais, risotos cremosos, pizzas assadas em forno a lenha e sobremesas deliciosas, tudo com um toque contemporâneo. A carta de vinhos é cuidadosamente selecionada para complementar as refeições, apresentando rótulos italianos e internacionais. Com um serviço atencioso e um ambiente que mistura o charme da Itália com um toque moderno, o Vascaíno Italiene Cuisine proporciona uma experiência gastronômica inesquecível para seus clientes. </p>
            </div>
            <div className={styles.imagens}>
                {massas.map(massa => 
                <div className={styles.imagens__imagem}>
                    <img src={massa} />
                </div>
            )}
            </div>
        </section>
    )
}