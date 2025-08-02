import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'about-page',
    template: `<div joyrideStep="step1" title="STEP 1 ABOUT" (next)="onNext()" (prev)="onPrev()"><h1>About title</h1></div>
               <div joyrideStep="step2" title="STEP 2 ABOUT END" (next)="onNext()" (prev)="onPrev()">About Subtitle</div>`
})
export class AboutComponent {

    constructor(private readonly router: Router) { }

    onNext() { }

    onPrev() { }
}
