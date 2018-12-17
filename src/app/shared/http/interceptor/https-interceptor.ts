import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { AuthService } from 'src/app/auth/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable ({
  providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor {
  // constructor(private authService: AuthService) {
  // }
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = null;
    // var token = this.authService.getToken();
    // if (token) {
      req.headers.set("Access-Control-Allow-Origin", "*");
      req.headers.set("ContentType ", "application/json");
      authReq = req.clone({ headers: req.headers });
    // } else {
    //   authReq = req.clone();
    // }
    // Clone the request to add the new header.
    //send the newly created request
    return next.handle(authReq)
      .pipe(
        catchError(this.handlePdmHttpError.bind(this))
      );
  }

  /**
   * Handle http errors
   * `caught`, which is the source observable, in case you'd like to "retry" that observable by returning it again.
   * Whatever observable
   *  is returned by the `selector` will be used to continue the observable chain.
   *
   * @private
   * @param {(Response | any)} error
   * @param {Observable} caught
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  private handleHttpError(error: HttpErrorResponse | any, caught?: Observable<any>): Observable<any> {
    // if (error.status == 401) {
    //   this.authService.logout();
    // }
    let message: string;
    if (error instanceof HttpErrorResponse) {
      message = error.message;
    } else {
      message = error.message ? error.message : error.toString();
    }
    return throwError(message);
  }

  /**
   * Handle pdm http errors
   * `caught`, which is the source observable, in case you'd like to "retry" that observable by returning it again.
   * Whatever observable
   *  is returned by the `selector` will be used to continue the observable chain.
   *
   * @private
   * @param {(Response | any)} error
   * @param {Observable} caught
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  handlePdmHttpError(error: HttpErrorResponse | any, caught?: Observable<any>): Observable<any> {
    // if (error.status == 401) {
    //   this.authService.logout();
    // }
    let message: string;
    if (error instanceof HttpErrorResponse) {
      // error from loopback
      if (error.error.error) {
        message = error.error.error.message;
      } else {
        message = error.message;
      }
    } else {
      message = error.message ? error.message : error.toString();
    }
    return throwError(message);
  }
}
