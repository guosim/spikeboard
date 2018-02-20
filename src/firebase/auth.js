//use firebase api to define log in, sign up, etc
import { auth } from './firebase';

//Sign up 
export const doCreateUserWithEmailAndPassword = (email, password) =>
	auth.createUserWithEmailAndPassword(email, password);

//Sign in
export const doSignInWithEmailAndPassword = (email, password) => 
	auth.signInWithEmailAndPassword(email, password);

//Sign out
export const doSignOut = () =>
	auth.signOut();

//Reset password
export const doPasswordReset = (email) =>
	auth.sendPasswordResetEmail(email);

//Password change
export const doPasswordUpdate = (password) =>
	auth.currentUser.updatePassword(password);

