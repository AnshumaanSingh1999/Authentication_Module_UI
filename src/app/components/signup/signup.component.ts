import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupform!:FormGroup;


  constructor(private formbuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group({
      username:[''],
      password:['']
    })
  }
  signup(){
    alert(this.signupform.value.username+this.signupform.value.password)
    this.signupform.reset()
    

  }

}
