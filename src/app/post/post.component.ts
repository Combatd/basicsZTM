import { Component, Input, EventEmitter, Output, OnInit
, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('PostComponent::constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterContentViewChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterContentViewInit() called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }
}
