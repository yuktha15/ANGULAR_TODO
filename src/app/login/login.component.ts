import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ADMIN'
  password = 'ADMIN'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  handleLogin(){
    // console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome']);
    } else {
    this.invalidLogin = true
    }
    
  }
  constructor(private router:Router,private hardcodedAuthenticationService: HardcodedAuthenticationService) { 
  
    }

  ngOnInit(): void {
  }

}