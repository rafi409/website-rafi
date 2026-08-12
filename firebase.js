import { initializeApp } from "./node_modules/firebase/app/dist/index.esm.js";
import { getFirestore } from "./node_modules/firebase/firestore/dist/index.esm.js";

const firebaseConfig = {
  apiKey: "ISI_API_KEY",
  authDomain: "portofolio-rafi-63a53.firebaseapp.com",
  projectId: "portofolio-rafi-63a53",
  storageBucket: "portofolio-rafi-63a53.firebasestorage.app",
  messagingSenderId: "490436804497",
  appId: "ISI_APP_ID"
};

const app = initializeApp(firebaseConfig);

console.log("✅ Firebase berhasil terhubung");

export const db = getFirestore(app);

console.log("✅ Firestore siap dipakai");