import { db, storage } from "../firebaseClient";
import { collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export async function fetchProjects() {
  const projects = {};
  const index = {};

  // 1. Busca os documentos do Firestore
  const snapshot = await getDocs(collection(db, "cases"));
  const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  // 2. Para cada documento, busca as imagens no Storage
  for (const doc of docs) {
    const { id, title, description, behanceLink, capa } = doc;

    // Referência à pasta de imagens no Storage
    const imagesRef = ref(storage, `projects/${id}`);
    const imagesSnapshot = await listAll(imagesRef);

    // Busca as URLs das imagens
    const images = await Promise.all(
      imagesSnapshot.items.map((item) => getDownloadURL(item))
    );

    // Cria o objeto do projeto
    projects[id] = {
      id,
      title,
      description,
      behanceLink,
      capa,
      images,
    };

    // Adiciona ao índice
    index[id] = { id, title, capa };
  }

  return { projects, index };
}