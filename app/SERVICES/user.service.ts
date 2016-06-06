import { Injectable, Inject } from '@angular/core';
import {FirebaseService} from './firebase.service';
import { 
      // FirebaseService
     UserModel } from '../export';
 
@Injectable()
export class UserService {
    
    constructor(private firebaseService: FirebaseService ) {}
    
    public createUser(user: UserModel): any {
        console.log(user);
   //     this.firebaseService.set(user)
    }
    
    public getUser(username: string): any {
   //     return this.firebaseService.get("users/" + username);
    }
    
    
}