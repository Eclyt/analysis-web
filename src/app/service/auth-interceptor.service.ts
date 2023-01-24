import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private router: Router) { }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     // debugger
    //     let currentUser = localStorage.getItem('eclyt_auth');
    //     var token;
    //     if (currentUser && currentUser != 'undefined') {
    //         token = JSON.parse(currentUser).access_token;
    //         // console.log(token);
    //     } else {
    //         token = '';
    //         // console.log(token);
    //     }
    //     let url = '';

    //     url = req.url;

    //     const copiedReq = req.clone({
    //         headers: req.headers.append('access_token', token),
    //         url: url,
    //     });

    //     return next.handle(copiedReq).pipe(
    //         catchError((error: HttpErrorResponse) => {
    //             return throwError(error);
    //         })
    //     );
    // }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //  debugger
            let token = localStorage.getItem('eclyt_auth');
            if (!token) token = '';
            let url = environment.baseUrl;
    
            url += req.url;
    
            console.log(url);
    
            const copiedReq = req.clone({
                headers: req.headers.append('access_token', token), url: url
            });
            return next.handle(copiedReq);
        }
}
