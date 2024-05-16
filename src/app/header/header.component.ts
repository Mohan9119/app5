import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isLoggedIn(): boolean
  {
    var status = sessionStorage.getItem("login");
    return status == 'sucess';
  }

}
