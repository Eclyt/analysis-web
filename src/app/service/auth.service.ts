import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Routes, Router, ActivatedRoute } from "@angular/router";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    baseUrl = environment.baseUrl
    constructor(private router: Router, private http: HttpClient) { }

    isLogin() {
        var token;
        // debugger
        var remembered = localStorage.getItem("remember_me");
        if (remembered == undefined) {
            token = localStorage.getItem("eclyt_auth");
        } else {
            token = localStorage.getItem("eclyt_auth");
        }

        if (token) return true;
        else return false;
    }
    login(data: any) {
        return this.http.post(environment.baseUrl + `/`, data);
    }


    isLoggedIn() {
        var token = localStorage.getItem('eclyt_auth');
        if (token) return true;
        else return false;
    }

    logOut() {
        localStorage.removeItem('eclyt_auth');
        // localStorage.removeItem('eclyt_auth');
        this.router.navigate([ `/login/${localStorage.getItem('language')}`]);
        return true;
    }

}
