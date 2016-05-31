import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { LoginPage, AddCandidatePage } from './export';

@Component({
  moduleId: 'app/',
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: 'login', component: LoginPage},
  {path: 'addcandidate', component: AddCandidatePage}
])
export class AppComponent { 
    
}
