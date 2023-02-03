import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ChangeDetectionStrategy, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScrollService } from 'src/app/service/scroll.service';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    listener: any;
    height: any = 1
    scrollY$: Observable<number>;
    //tp scroll
    scrollTop: boolean = true
    //hiding info box
    scrollSticky: boolean = false
    constructor(
        private renderer2: Renderer2,
        private el: ElementRef,
        private windowScrollService: ScrollService,
        @Inject(ScrollService) private window: ScrollService,
        @Inject(DOCUMENT) private document: Document,
    ) {
        this.scrollY$ = this.windowScrollService.scrollY$;

    }
    @HostListener("window:scroll", [])
    onWindowScroll() {
        const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (offset > 30) {
            this.scrollTop= false;
            this.scrollSticky=true
            // this.renderer2.removeClass(this.el.nativeElement, 'before');
            // this.renderer2.addClass(this.el.nativeElement, 'after');
        } else {
            this.scrollTop= true;
            this.scrollSticky=false
            // this.renderer2.removeClass(this.el.nativeElement, 'after');
            // this.renderer2.addClass(this.el.nativeElement, 'before');
        }
    }
    ngOnInit(): void {

        // this.listener = this.renderer2.listen('window', 'scroll', (e) => {
        //     this.height = this.height +1;
        //     console.log("Y position ::"+  this.height);
        // console.log("Y position ::"+ this.getYPosition(e));

        // });
    }
    getYPosition(e: Event): number {
        return (e.target as Element).scrollTop;
    }
    ngOnDestroy(): void {
      
    }

    getScrollHeight(): number {

        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }
}

