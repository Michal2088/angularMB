import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = { email: '', password: '' };
  constructor(private auth: Auth) {}
  login(user: User): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
  logInWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout(): Promise<void> {
    return this.auth.signOut();
  }
  setSessionData(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }
  getSessionData(key: string): string {
    return sessionStorage.getItem(key) as string;
  }
  register(user: User): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }
}
