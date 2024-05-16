import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  status: boolean = false;
  message : String =  "";

  constructor(formBuilder: FormBuilder, private client: HttpClient)
  {
    this.form = formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get username()
  {
    return this.form.get('username');
  }

  get password()
  {
    return this.form.get('password');
  }
  
  login()
  {
    this.client.post<any>('http://localhost:9090/admin/login',
                          this.form.value).subscribe(
                          r1=>{
                           this.status = r1.status;
                           this.message = r1.message;
                           if(this.status)
                            {
                              sessionStorage.setItem('login', 'sucess');
                              sessionStorage.setItem('username', this.form.value.username);
                              sessionStorage.setItem('password', this.form.value.password);
                            }
                          });
  }
}
