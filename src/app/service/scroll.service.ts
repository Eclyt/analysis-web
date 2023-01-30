import { Injectable, ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { BrowserWindowRef } from 'ngx-owl-carousel-o/lib/services/window-ref.service';
import { isPlatformBrowser } from "@angular/common";
/* Create a new injection token for injecting the window into a component. */
export const WINDOW = new InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
export abstract class WindowRef {

    get nativeWindow(): Window | Object {
        throw new Error('Not implemented.');
    }

}
@Injectable({
    providedIn: 'root'
})
export class ScrollService {

    scrollY = new BehaviorSubject(0);
    scrollY$ = this.scrollY.asObservable();

    public currentSection: BehaviorSubject<string> = new BehaviorSubject('header');
    // public booleanSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // sections: string[] = ['header', 'action', 'features', 'contact']

    constructor() {
        
    }
    get nativeWindow(): Window | Object {
        return window;
    }
    // keepTrack() {
    //     const viewHeight = window.innerHeight;
    //     for (var section of this.sections) {

    //         const element = document.getElementById(section);
    //         if (element != null) {
    //             const rect = element.getBoundingClientRect();
    //             if (rect.top >= 0 && rect.top < viewHeight / 2) {
    //                 this.currentSection.next(section);
    //             }
    //         } else {
    //         }
    //     }
    // }



}



