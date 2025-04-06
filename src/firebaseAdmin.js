import admin from "firebase-admin";
import serviceAccount from "./key_firebase.json";

// Inicializa o Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;