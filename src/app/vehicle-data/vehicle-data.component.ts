import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-vehicle-data',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './vehicle-data.component.html',
  styleUrl: './vehicle-data.component.scss'
})
export class VehicleDataComponent {

  formData:FormGroup | any ;
  
  city:any[]=[] ;

  constructor (public http:HttpClient , public formgrp:FormBuilder){
    this.formData=this.formgrp.group({
      vehicleName: ['', Validators.required],
      vehicleType: ['', Validators.required],
      insurance: ['', Validators.required],
      license: ['', [Validators.required,]],
      city: ['', Validators.required],
      licenseNumber: ['', [Validators.required,Validators.pattern..{'^[0 - 9]'}]]
    });
  }

  ngOnInit(){
   this.http.get('https://dummyjson.com/users').subscribe((response:any)=>{
 
    this.city=response.users.address;
 
    console.log(this.city);
    
  });
  }
  onSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
      this.formData.reset();
    }
  }
}
  