import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    user: any;

    constructor() {

    }

    setUser(user) {
      console.log(user);
    }
}
