import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/service/api.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    userInfo: any;
    constructor(private api: ApiService) { }

    ngOnInit(): void {
        this.getUserData()
    }

    getUserData() {
        
        this.api.get('login').subscribe((res: any) => {          
            this.userInfo = res['data']
            console.log(":::::::::::::::::" + this.userInfo, " showing here data ")
        })
    }
    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            740: {
                items: 3,
            },
            940: {
                items: 5,
            },
        },
        nav: false,
    };

    customOptions1: OwlOptions = {
        loop: true,
        autoplay: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            740: {
                items: 1,
            },
            940: {
                items: 1,
            },
        },
        nav: true,
    };
}
