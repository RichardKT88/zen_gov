import { firebase } from "./firebase";

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const anonymousProvider = new firebase.auth.signInAnonymously();