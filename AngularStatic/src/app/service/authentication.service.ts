import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(userName,password)
  {
    if (userName=="admin" && password=="password")
    {
       // console.log(this.isUserLoggedIn());
        sessionStorage.setItem("AuthenticatedUser",userName);
        //console.log(this.isUserLoggedIn());
        return true;
    }
    return false;
  }

  isUserLoggedIn()
  {
      let user= sessionStorage.getItem("AuthenticatedUser");
        return !(user===null);
  }

  logoutUser()
  {
      sessionStorage.removeItem("AuthenticatedUser");
  }
}
