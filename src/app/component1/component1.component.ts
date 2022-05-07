import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  parentdata:any = "";
  title = 'assign-input-output-deco';
  formdata:any;
  data:any;
  name:string="";
  email:string="";
  mobileno:string="";
  gender:string="";
  topic:string="";
  ngOnInit(): void {
    this.formdata = new FormGroup(
      {
         name: new FormControl("", Validators.compose([Validators.required])),
        email:new FormControl("", Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}") ])),
      mobileno: new FormControl("",Validators.compose([Validators.required])),
      gender:new FormControl(),
      topic:new FormControl()
      }
    );

  }
  parentFunction()
  {

 this.data={name:this.name,email:this.email,mobileno:this.mobileno,gender:this.gender,topic:this.topic}
 console.log(this.data);

}

}
