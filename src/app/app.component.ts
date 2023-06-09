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
  imgURL = 'https://th.bing.com/th/id/R.ab6179ffc7d3df06f5ae73129339b2fb?rik=Db8oS4YnzPSiKQ&pid=ImgRaw&r=0';
  images = [
    'https://th.bing.com/th/id/R.ab6179ffc7d3df06f5ae73129339b2fb?rik=Db8oS4YnzPSiKQ&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.ab6179ffc7d3df06f5ae73129339b2fb?rik=Db8oS4YnzPSiKQ&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.ab6179ffc7d3df06f5ae73129339b2fb?rik=Db8oS4YnzPSiKQ&pid=ImgRaw&r=0'
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  };
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  toggleBlueClass() {
    this.blueClass = !this.blueClass;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  
  logImg(event: string) {
    console.log(event);
  }
}