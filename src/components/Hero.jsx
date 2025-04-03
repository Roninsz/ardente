import '../styles/hero.css'
import seta from '../assets/seta.png'
import logoBG from '../assets/logoBackground.png'
import { useEffect, useRef } from 'react';

export default function Hero() {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const image = imageRef.current;
            if (!image) return;

            const rect = image.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            const moveX = -mouseX * 0.05; // Ajuste a intensidade do efeito
            const moveY = -mouseY * 0.05;

            image.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return(
        <div className="hero-section">
            <div className="hero-background">
                <img ref={imageRef} src={logoBG} alt="Background Logo" />
            </div>
            <h1 className="slide-in-reverse">
                <span id="sp1">Identidades de Marca para negócios</span><br/>
                <span>Inovadores e tecnológicos</span>
            </h1>
            <div id="hero" className="CTA-conteiner">
                <img src={seta} alt=""/>
                <a href="#destaques" className="slide-in">
                    <span>FORJE</span><br/>
                    <span>SUA</span><br/>
                    <span>MARCA</span>
                </a>
            </div>
        </div>
    );
}