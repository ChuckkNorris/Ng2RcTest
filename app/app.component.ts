import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { LoginPage } from './PAGES/login';

@Component({
  moduleId: 'app/',
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: 'login', component: LoginPage}
])
export class AppComponent { 
    
}
