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
  name = 'gawr gura';
  imgURL = 'https://th.bing.com/th/id/R.ab6179ffc7d3df06f5ae73129339b2fb?rik=Db8oS4YnzPSiKQ&pid=ImgRaw&r=0'
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  
  logImg(event: string) {
    console.log(event);
  }
}