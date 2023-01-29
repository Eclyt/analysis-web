import { Component, OnInit,OnDestroy,Renderer2,ElementRef,ChangeDetectionStrategy,HostListener } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { ScrollService } from 'src/app/service/scroll.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements  OnInit  {

    listener: any;
    height:any =1
    scrollY$: Observable<number>;
	
	// @HostListener('window:scroll') onScroll(e: Event): void {
	//     this.windowScrollService.scrollY.next(this.getYPosition(e));
	// }
    @HostListener('window:scroll', ['$event'])
        track(e: Event) {
        console.debug("Scroll Event", window.pageYOffset );
    }
    constructor(private renderer2: Renderer2,private el: ElementRef,private windowScrollService:ScrollService) {
        this.scrollY$ = this.windowScrollService.scrollY$;
        // windowScrollService.currentSection.subscribe(
        //     (res:any) => {
        //       console.log("current section: ", res)
        //     }
        // )
    }
    ngOnInit(): void {
        this.listener = this.renderer2.listen('window', 'scroll', (e) => {
            this.height = this.height +1;
            console.log("Y position ::"+  this.height);
            // console.log("Y position ::"+ this.getYPosition(e));
            // this.renderer2.removeClass(this.el.nativeElement, 'before');
            // this.renderer2.addClass(this.el.nativeElement, 'after');
        });
    }
    getYPosition(e: Event): number {
        return (e.target as Element).scrollTop;
    }
    ngOnDestroy(): void {
        this.listener();
    }

    getScrollHeight(): number {
        
        return Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );
    }
}

