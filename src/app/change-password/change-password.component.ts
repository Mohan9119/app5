import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  form: FormGroup;
  status: boolean = false;
  message: String = "";
  constructor(formBuilder: FormBuilder, private client: HttpClient)
  {
    this.form = formBuilder.group({
      
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

    get password()
    {
      return this.form.get('password');
    }
    get confirmPassword()
    {
      return this.form.get('confirmPassword');

    }

    save()
    {
      if(this.form.value.password != this.form.value.confirmPassword)
      {
     
        this.message = "Passwords do not match";
        return;
      }
      else
        {
             this.message = "";
        }
      
      var usernameValue = sessionStorage.getItem('username');
      this.form.value.username = usernameValue;
      this.client.post<any>('http://localhost:9090/admin/changePassword', this.form.value).subscribe(
      r1 => {
        this.status = r1.status;
        this.message = r1.message;
       
      });
    }
  }


