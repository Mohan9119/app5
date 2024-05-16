import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;
  status: boolean = false;
  message: string = "";

  constructor(formBuilder: FormBuilder, private client: HttpClient)
  {
    this.form = formBuilder.group({
      firstName: new FormControl('' ,  Validators.required),
      lastName: new FormControl('', Validators.required),
       username: new FormControl('', Validators.required),
      password: new FormControl('' , Validators.required),

    })
  }

  get firstName() 
  {
    return this.form.get('firstName');
  }
  get lastName() 
  {
    return this.form.get('lastName');
  }
  get username() 
  {
    return this.form.get('username');
  }
  get password() 
  {
    return this.form.get('password');
  }
  save(){
    if(this.form.invalid)
      {
        this.form.markAllAsTouched();
        return ;
      }
    this.client.post<any>('http://localhost:9090/admin/signup', 
    this.form.value).subscribe(r1 => {
      this.status = r1.status;
      this.message = r1.message;
    });
  }
}
