import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './export';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

bootstrap(AppComponent, [
    ROUTER_DIRECTIVES 
    ,ROUTER_PROVIDERS
]);