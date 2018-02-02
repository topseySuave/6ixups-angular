import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-six-category-list',
  templateUrl: 'six-category-list.component.html',
  styleUrls: ['six-category-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SixCategoryListComponent implements OnInit {
  private _list = this.getCats();

  constructor() {
    console.log(this._list);
  }

  ngOnInit() {
  }

  getCats(){
    return [
      {
        name: "alvin",
        image_url: 'img/demo/alvin.png'
      },
      {
        name: "alex",
        image_url: 'img/demo/alex.png'
      },
      {
        name: "kevin",
        image_url: 'img/demo/kevin.png'
      },
      {
        name: "alan",
        image_url: 'img/demo/alan.png'
      },
      {
        name: "office",
        image_url: 'img/demo/office.jpg'
      },
      {
        name: "mobile",
        image_url: 'img/demo/mobile.png'
      }
    ];
  }

}
