import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../context/DTO';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private fb:FormBuilder ,  private- _service:LoginService , private _rout:Router , private _toastr:ToastrService) { }
  logInForm !:FormGroup
  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.logInForm= this.fb.group({
      email:["",[Validators.required,Validators.email]],
      passward :["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      role: ["admin"]
    })
  }
  logIn(){

    this._service.logIn(this.logInForm.value).subscribe(res => {

      
    }, error => {
      console.log(error);
      
    }
    )
    
  }
}
