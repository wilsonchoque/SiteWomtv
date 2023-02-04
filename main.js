import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'


// lista de cambios de estado de autenticación
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      window.location.href = "./tarjeta.html";      
    } catch (error) {
      console.log(error)
    }
  } else {    
    loginCheck(user);
  }
});