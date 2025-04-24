import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from 'src/boot/firebase'

// 👉 Inscription avec enregistrement dans Firestore
export async function register(email, password, username) {
  try {
    // Validation des entrées
    if (typeof email !== 'string' || typeof password !== 'string' || typeof username !== 'string') {
      throw new Error('Les champs email, mot de passe et nom d\'utilisateur doivent être des chaînes de caractères.')
    }
    if (!email.includes('@')) {
      throw new Error('Adresse email invalide.')
    }
    if (password.length < 6) {
      throw new Error('Le mot de passe doit contenir au moins 6 caractères.')
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // 🔥 Enregistrer les infos de l'utilisateur dans Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      username: username, // Ajout du champ username
      createdAt: new Date()
    })
  } catch (error) {
    console.error("Erreur lors de l'inscription", error)
    throw error
  }
}
// 👉 Connexion simple
export async function login(email, password) {
  try {
    // Validation des entrées
    if (typeof email !== 'string' || typeof password !== 'string') {
      throw new Error('Les champs email et mot de passe doivent être des chaînes de caractères.')
    }
    if (!email.includes('@')) {
      throw new Error('Adresse email invalide.')
    }

    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    // Gestion des erreurs Firebase
    if (error.code === 'auth/user-not-found') {
      throw new Error('Utilisateur non trouvé.')
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Mot de passe incorrect.')
    } else if (error.code === 'auth/invalid-email') {
      throw new Error('Adresse email invalide.')
    } else {
      console.error("Erreur lors de la connexion", error)
      throw error
    }
  }
}

// 👉 Déconnexion
export async function logout() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Erreur lors de la déconnexion", error)
    throw error
  }
}
