import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "authproject-2bdef", appId: "1:811471033432:web:4a543e4178da16953ca62d", storageBucket: "authproject-2bdef.firebasestorage.app", apiKey: "AIzaSyBz9WA3FpX6nQq8N4G_n6DSpiJa3H55anE", authDomain: "authproject-2bdef.firebaseapp.com", messagingSenderId: "811471033432" })), provideAuth(() => getAuth())
  ]
};
