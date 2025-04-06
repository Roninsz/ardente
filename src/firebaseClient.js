// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDI4WqvuN_UixXx9QyKLA1xDdNAjGnRbTs",
  authDomain: "ardente-488f4.firebaseapp.com",
  projectId: "ardente-488f4",
  storageBucket: "ardente-488f4.firebasestorage.app",
  messagingSenderId: "839568346294",
  appId: "1:839568346294:web:525170e77e8c4572c22a17",
  measurementId: "G-XMKRZG705M",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta Firestore e Storage
export const db = getFirestore(app);
export const storage = getStorage(app);