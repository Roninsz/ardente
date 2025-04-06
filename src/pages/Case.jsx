import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa o hook useParams
import { fetchProjects } from "../utils/fetchProjects";

export default function ProjectPage() {
  const { id } = useParams(); // Extrai o ID da URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      const { projects } = await fetchProjects();
      setProject(projects[id]);
    };

    loadProject();
  }, [id]);

  if (!project) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.behanceLink} target="_blank" rel="noopener noreferrer">
        Ver no Behance
      </a>
      <div>
        {project.images.map((url, index) => (
          <img key={index} src={url} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}