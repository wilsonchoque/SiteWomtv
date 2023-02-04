import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyC_ays3s0ny_zGe5BTV81uvbuOlB5H_Xxg",
  authDomain: "womtv-web.firebaseapp.com",
  projectId: "womtv-web",
  storageBucket: "womtv-web.appspot.com",
  messagingSenderId: "834801293575",
  appId: "1:834801293575:web:0153511a2129ed08a9cda2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)