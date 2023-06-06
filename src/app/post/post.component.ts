import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('PostComponent::constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }
}
