import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../models/user.model";


@Injectable()

export class UserService {

  userData = new Subject<User>()

  private user: User = new User('Alex G',3000,85,)
  
  getUser(){
    return this.user
  }

  calculateAbbreviation(): string {
    const initials = this.user.name.split(' ').map(word => word.charAt(0)).join('');
    return initials.toUpperCase();
  }

}