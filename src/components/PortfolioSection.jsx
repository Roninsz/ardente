import '../styles/portfolio.css';
import SocialL from './SocialLinks.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProjects } from '../utils/fetchProjects'; // Certifique-se de que o caminho está correto

export default function PortfolioSection() {
    const [index, setIndex] = useState(null); // Estado para armazenar o índice dos projetos
    const navigate = useNavigate();

    useEffect(() => {
        // Configura o scroll horizontal
        const container = document.querySelector('.cases-container');
        const handleWheel = (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        };
        container?.addEventListener('wheel', handleWheel);
        return () => container?.removeEventListener('wheel', handleWheel);
    }, []);

    useEffect(() => {
        // Busca os dados dos projetos
        const loadProjects = async () => {
            const { index } = await fetchProjects(); // Busca o índice dos projetos
            setIndex(index); // Atualiza o estado com os dados
        };
        loadProjects();
    }, []);

    const handleClick = (id) => {
        navigate(`/case/${id}`);
    };

    if (!index) return <p>Carregando...</p>; // Exibe um carregamento enquanto os dados não chegam

    return (
        <div className="portfolio-container">
            <h1>Nossos cases</h1>
            <div className="cases-container">
                {Object.entries(index).map(([id, project]) => (
                    <div key={id} className="case-card" onClick={() => handleClick(id)}>
                        <img src={project.capa} alt={project.title} className="case-image" />
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>
            <SocialL />
        </div>
    );
}