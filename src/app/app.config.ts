import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; //Optimizacion
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; //importa desde app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), //Mejora la detección de cambios
    provideRouter(routes), // Configura rutas
  ],
};
