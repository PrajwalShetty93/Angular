import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userName='admin';
	password='password';
	errorMsg="Invalid Credentials";
	invalidLogin=false;
	
	//You just need to add this in the constructor arguement and import and this below inside the method jst write this.router.navigate
  constructor(private router: Router,private service: AuthenticationService) { }

  ngOnInit() {

  }

	handleLogin()
		{
			if(this.service.authenticate(this.userName,this.password))
			{
				this.invalidLogin=false;
				this.router.navigate(['welcome',this.userName]);
			}
			else
			{
				this.invalidLogin=true;
			}
}
}
