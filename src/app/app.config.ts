import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {
  ApplicationConfig,
  LOCALE_ID,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideAnimationsAsync,
} from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';

registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideToastr({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
    }),
    provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
