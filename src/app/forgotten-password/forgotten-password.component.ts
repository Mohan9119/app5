import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrl: './forgotten-password.component.css'
})
export class ForgottenPasswordComponent {
  form: FormGroup;
  status: boolean = false;
  message: string = "";

  constructor(formBuilder: FormBuilder, private client: HttpClient)
  {
    this.form = formBuilder.group({
      username: new FormControl,
    });
  }

  save()
  {
    this.client.post<any>('http://localhost:9090/admin/forgottenPassword', this.form.value).subscribe
    (
      r1 =>{
        this.status = r1.status;
        this.message = r1.message;
      }
    );
  }
}
