import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

export class SpyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    console.log('Zapytanie wykonano dnia:', new Date());
    console.log('Zapytanie na adres: ', req.url);
    return next.handle(req);
  }
}
