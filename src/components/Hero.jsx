import '../styles/hero.css'
import seta from '../assets/seta.png'

export default function Hero() {
    return(
        <div className="hero-section">
            <h1>Identidades de Marca para negócios<br/>
            <span>Inovadores e tecnológicos</span> </h1>
            <div id="hero" className="CTA-conteiner">
                <img src={seta} alt=""/>
                <a href="#destaques">
                    FORJE<br/>
                    SUA<br/>
                    MARCA
                </a>
            </div>
        </div>
    )
}