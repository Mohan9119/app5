import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [];
  addProduct: FormGroup;
  updateProduct: FormGroup;
  addForm: boolean = true;
  updateForm: boolean = false;
  message: String = "";
  status: boolean = false;
 

  constructor(formBuilder: FormBuilder, private client: HttpClient)
  {
    this.addProduct = formBuilder.group({
    
      productName: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      productSpecifications: new FormControl('', Validators.required),
      supplier: new FormControl('', Validators.required)
    });
    this.updateProduct = formBuilder.group({
      id: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      productSpecifications: new FormControl('', Validators.required),
      supplier: new FormControl('', Validators.required)
    });
    this.readAll();
  }
 
 
  
  readAll()
  {
    this.client.get<any>('http://localhost:9090/product/all',
        ).subscribe(
        r1=>{
          this.products = r1;

          }
        
      );
    
  }
  save()
  {
    this.client.post<any>('http://localhost:9090/product',this.addProduct.value).subscribe(
        r1=>{
          this.status = r1.status;
          this.message = r1.message;
          this.readAll();
          this.addProduct.reset();
          }
        
      );
    
  }
  update()
  {
    this.client.put<any>('http://localhost:9090/product',this.updateProduct.value).subscribe(
        r1=>{
          this.status = r1.status;
          this.message = r1.message;
          this.readAll();
          this.updateProduct.reset();
          this.addForm = true;
          this.updateForm = false;
          }
        
      );
    
  }
  delete(id: any)
  {
    this.client.delete<any>('http://localhost:9090/product/' + id).subscribe(

    r1=>{
    console.log(r1) ;
    this.readAll();

    });

  }
  readForUpdate(id: any)
  {
    this.client.get<any>('http://localhost:9090/product/' + id).subscribe(

    r1=>{
        console.log(r1) ;
        this.updateProduct.setValue(r1);
        this.updateForm = true;
        this.addForm = false;

    });

  }
 

}
