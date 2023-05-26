/**
 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */


/**
 * Modules are not necessarily isolated from each other.
 * They are a way to group files at the same time.
 * So there will be times where we need code from other modules.
 * We can import modules into other Angular modules.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule
  ]
})
export class AppModule {

}