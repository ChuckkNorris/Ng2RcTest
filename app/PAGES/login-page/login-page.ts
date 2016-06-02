import {Component} from '@angular/core';


@Component({
    moduleId: 'app/PAGES/login-page/',
    selector: 'login-page',
    templateUrl: 'login-page.html',
    styleUrls: ['login-page.css']
})
export class LoginPage {
    hello: string = "You got yourself a login page, sir";
    
    dostuff() {
        var t = 4;
        console.log('hello');
        console.log('yo');
    }
}