import { bootstrap }    from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES, provide } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {UxButton} from './export';

bootstrap(AppComponent, [
    ROUTER_DIRECTIVES 
    ,ROUTER_PROVIDERS
    ,provide(PLATFORM_DIRECTIVES, {useValue: UxButton, multi: true})
]);