import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-user-details',
  templateUrl: './app-user-details.component.html',
  styleUrl: './app-user-details.component.css'
})
export class AppUserDetailsComponent {

  appUserForm: FormGroup;
  status: boolean = false;
  message: string = "";
  constructor(formBuilder: FormBuilder, private client: HttpClient)
  {
   
      this.appUserForm = formBuilder.group({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
       address: formBuilder.group({
        id: new FormControl(),
        houseNo: new FormControl(),
        streetNo: new FormControl()
       })
      });

       var username = sessionStorage.getItem('username');
       client.get<any>('http://localhost:9090/admin/getUser/' + username).subscribe(
        r1 => {
        
          this.appUserForm.patchValue(r1);
        }
       );
 
      }
 
      save()
      {
        this.client.post<any>('http://localhost:9090/admin/saveAppUserDetails', this.appUserForm.value).subscribe(
          r1 => {
            this.status = r1.status;
            this.message = r1.message;
            console.log(this.message);
            console.log(this.status);
          }
        );
      }
  }

