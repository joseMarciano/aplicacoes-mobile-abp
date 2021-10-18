import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './http-interceptor.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
];