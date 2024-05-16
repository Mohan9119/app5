import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(router: Router)
  {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('userName');

    router.navigate(['login']);
  }

}
