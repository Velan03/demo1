import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.scss']
})
export class VehicleDataComponent implements OnInit {

  formData: FormGroup; 
  // cities: any[] = [];  

  constructor(public http: HttpClient, public formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      vehicleName: ['', Validators.required],
      vehicleType: ['', Validators.required],
      insurance: ['', Validators.required],
      license: ['', [Validators.required,Validators.pattern('[^A-Z0-9]+$')]],
      city: ['', Validators.required],
      licenseNumber: ['', [Validators.required,Validators.maxLength(9),Validators.pattern('[^A-Z0-9]+$')]]  
    });
  }

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/users').subscribe(response => { 
      // this.cities = response.users;//.map(users => ({ city: users.address.city }))
      // console.log(this.cities);
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
      this.formData.reset();
    }
  }
}
