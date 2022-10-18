// File: lib/firebase.js

import admin from 'firebase-admin'
import { fireConfig } from './fireConfig'
import { getAuth } from 'firebase/auth'
try {
  admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
  })
 

  console.log('Initialized.')
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack)
  }
}
export const auth = getAuth()
export default admin