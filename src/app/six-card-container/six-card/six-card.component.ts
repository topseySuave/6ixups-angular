import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'six-card',
    templateUrl: 'six-card.component.html',
    styleUrls: ['six-card.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class SixCardComponent implements OnInit {

    private _loop: any = this.loopCard();

    constructor() {
    }

    loopCard() {
        let card = [];
        for (let i = 0; i < 5; i++) {
            card.push(i);
        }
        return card;
    }

    ngOnInit() {
    }

}
