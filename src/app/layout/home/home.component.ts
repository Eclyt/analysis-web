import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/service/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    userInfo: any;
    // link: SafeResourceUrl;
    thumbnail:any;
    safeSrc: any=[
        {
            "_id":"qhhdqjk",
            "link":  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/9gM7d1m_xnw"),
        },
        {
            "_id":"qhhdqjk",
            "link":this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/hoxpwvT44oo")
        } 

    ];
    constructor(private api: ApiService,private sanitizer: DomSanitizer) { 
        // this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/9gM7d1m_xnw");
    }

    ngOnInit(): void {
        this.getUserData()

        // console.log("Yo ::O  " + JSON.stringify(this.safeSrc))
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
