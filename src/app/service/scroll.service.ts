import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ScrollService {

    scrollY = new BehaviorSubject(0);
    scrollY$ = this.scrollY.asObservable();

    public currentSection: BehaviorSubject<string> = new BehaviorSubject('header');
    // public booleanSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    sections: string[] = ['header', 'action', 'features', 'contact']

    constructor() {
        document.addEventListener('scroll', () => {
            this.keepTrack();
        })
    }

    keepTrack() {
        const viewHeight = window.innerHeight;
        for (var section of this.sections) {

            const element = document.getElementById(section);
            if (element != null) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < viewHeight / 2) {
                    this.currentSection.next(section);
                }
            } else {
            }
        }
    }

    
   
}
