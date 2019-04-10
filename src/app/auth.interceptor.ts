import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const reqCloned = req.clone({ headers: this.headers });
    return next.handle(reqCloned);
  }
}
