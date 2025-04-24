// src/boot/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// 🔐 Remplace ces valeurs avec celles de ton projet Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBUOzeon1LpecwDNTRshmwUxZ77XTz2TQg',
  authDomain: 'vuefirebaseapp-b72e4.firebaseapp.com',
  projectId: 'vuefirebaseapp-b72e4',
  storageBucket: 'vuefirebaseapp-b72e4.firebasestorage.app',
  messagingSenderId: '296742687362',
  appId: '1:296742687362:web:59b093dbdc3b35b1fa1a9b'
}

// 🔧 Initialisation de Firebase
const app = initializeApp(firebaseConfig)

// 🔐 Exportation des services utiles
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
