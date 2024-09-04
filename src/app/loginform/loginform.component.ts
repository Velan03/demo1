// import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  mydata: any;
  passmatch:boolean=true;

  constructor(public formUser: FormBuilder) {
    this.mydata = this.formUser.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      cpass: ['', [Validators.required, Validators.minLength(6)]],
    }),{Validators : this.passinvalid};
  }
  passinvalid(details:FormGroup){

    let pass =details.get('pass');
    let cpass =details.get('cpass');

    if (pass && cpass && pass !== cpass) {
      return {passMismatch:false}
    }
    return true; 

  }
  get passMismatch() {
    return this.mydata.hasError('passwordsMismatch');
  }
  
  onSubmit() {
    if (this.mydata.valid) {
      console.log(this.mydata.value);
      this.mydata.reset();
    }
  }
}
