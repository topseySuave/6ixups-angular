import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'six-card-list',
    templateUrl: 'six-card-list.component.html',
    styleUrls: ['six-card-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SixCardListComponent implements OnInit {
    sixList: number[] = this.loopList();

    constructor() { }

    ngOnInit() {
    }

    loopList(){
        let i, total = 28;
        let list = [];
        for(i = 1; i < total; i++){
            list.push(i);
        }
        return list;
    }
}
