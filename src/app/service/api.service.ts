import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
    constructor(
        private http: HttpClient
    ) { }


    baseUrl = environment.baseUrl
    post(url: any, data: any) {
        return this.http.post(`${this.baseUrl}/users/${url}`, data);
    }
    put(url: any, data: any) {
        return this.http.put(`${this.baseUrl}/users/${url}`, data);
    }
    patch(url: any, data: any) {
        return this.http.patch(`${this.baseUrl}/users/${url}`, data);
    }
    delete(url: any, data: any) {
        return this.http.delete(`${this.baseUrl}/users/${url}`, data);
    }
    
    get(url: any) {
        return this.http.get(`${this.baseUrl}/users/${url}`);
        // return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

}
