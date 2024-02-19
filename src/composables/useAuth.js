import router from '../router'

import { firebaseApp } from './userFirebase'
import { getAuth, signInWithEmailandPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () {
    const login = async (username, password) => {
      await signInWithEmailandPassword(auth, username, password)
      return isAuthenticated.value
    }
    
    const logout = async () => {
      await signOut(auth)
      router.push({name: 'Home'})
    }

  return {isAuthenticated, user, login, logout}
  
}


