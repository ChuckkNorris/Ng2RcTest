import {Component} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {FirebaseService} from '../../services/firebase.service';
import {  UserModel } from '../../export';


@Component({
    moduleId: 'app/PAGES/login-page/',
    selector: 'login-page',
    templateUrl: 'login-page.html',
    styleUrls: ['login-page.css'],
    providers: [ UserService]
})
export class LoginPage {
    constructor(private userService: UserService) {}
    user:UserModel = new UserModel();
    hello: string = "You got yourself a login page, sir";

    dostuff() {
        
        console.log(this.user);
      //  this.userService.createUser(this.user);
    }
}