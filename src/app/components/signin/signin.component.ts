import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 public signinform!:FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signinform=this.formbuilder.group({
      username:[''],
      password:['']
    })
  }
  signup(){
    alert(this.signinform.value.username+this.signinform.value.password)
    this.signinform.reset()

  }

}
