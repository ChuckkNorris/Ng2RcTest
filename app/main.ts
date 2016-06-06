import { bootstrap }    from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES, provide } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {UxButton, UxText} from './export';
import { FirebaseService } from './SERVICES/firebase.service';
import { UserService } from './SERVICES/user.service';

bootstrap(AppComponent, [
     FirebaseService
    ,ROUTER_DIRECTIVES 
    ,ROUTER_PROVIDERS
   
    ,provide(PLATFORM_DIRECTIVES, {useValue: UxButton, multi: true})
    ,provide(PLATFORM_DIRECTIVES, {useValue: UxText, multi: true})
]);