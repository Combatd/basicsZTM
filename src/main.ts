/** 
 * Breaking the main.ts file to rewrite ourselves
 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

platformBrowserDynamic();