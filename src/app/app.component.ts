import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '6ixups - Why so serious';

  constructor( private titleService: Title ) {
      this.setTitle( this.title );
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
