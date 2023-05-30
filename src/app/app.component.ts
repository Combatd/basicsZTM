/** 
  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
}
*/

import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: '<p>Hello world!</p>',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
  // styles: ['']
})
export class AppComponent {
  name = 'Luis';
  imgURL = 'https://th.bing.com/th/id/R.ab6179ffc7d3df06f5ae73129339b2fb?rik=Db8oS4YnzPSiKQ&pid=ImgRaw&r=0'

  getName() {
    return this.name;
  }
}