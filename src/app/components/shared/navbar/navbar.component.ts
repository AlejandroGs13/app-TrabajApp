import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) {
      auth.handleAuthentication();
   }

  ngOnInit() {
  }


  login(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
    this.router.navigate(['home']);
  }

}
