import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorgeServiceService } from '../service/local-storage/local-storge-service.service';

@Injectable()
export class TokenCheckInterceptor implements HttpInterceptor {

  constructor(private localService : LocalStorgeServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.localService.getToken();

    if(token){


      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });

      // Send the newly created request
      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
