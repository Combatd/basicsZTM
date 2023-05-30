/** 
 * Breaking the main.ts file to rewrite ourselves
 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

#platformBrowserDynamic will load an object with information on the current platform/browser.
#bootstrapModule will load our app and Angular features
AppModule will give definitions of Angular features to compile.
*/

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module"; // root module

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));