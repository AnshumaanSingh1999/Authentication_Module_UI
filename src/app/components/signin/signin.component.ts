import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 public signinform!:FormGroup;
 userdata:any


  constructor(private formbuilder: FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signinform=this.formbuilder.group({
      username:[''],
      password:['']
    })
  }
  signup(){
    this.http.post<any>("http://localhost:8800/signin/",this.signinform.value)
    .subscribe(res=>{
      if(res.length!=0){
        console.log(res.length);
        this.userdata=res
        console.log(this.userdata)
        localStorage.setItem("usernamels",this.userdata[0].username)
        this.signinform.reset()
        this.router.navigate(["home"])
      }
      else{
        alert("Invalid Details")
      }
      
    },
      err=>{
        alert("Something Went Wrong!")
      }
    )
  }
}