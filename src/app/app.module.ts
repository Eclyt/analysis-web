import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommanModule } from './comman/comman.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppEnumComponent } from './models/app-enum/app-enum.component';
@NgModule({
    declarations: [AppComponent, AppEnumComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommanModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    //   providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptorService },],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
