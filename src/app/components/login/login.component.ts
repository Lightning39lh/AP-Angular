import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SingInService } from 'src/app/services/sing-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  user:User = new User("","");
  username:string;
  users:User[] = [];
  constructor(private formBuilder:FormBuilder, private sS:SingInService, private authenticationService:AuthenticationService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
        username:["",[Validators.required]],
        password:["",[Validators.required, Validators.minLength(3)]]
      }
    ) 
    this.form=this.formBuilder.group(
      {
        username:["",[Validators.required]],
        password:["",[Validators.required, Validators.minLength(3)]]
      }
    ) 

  }
  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.user);
  }
  //para acceder a los form
  get Username()
  {
    return this.form.get('username');
  }
  get Password(){
    return this.form.get('password');
  }

  getAllUsers() {
    (this.sS.getAllUsers()).subscribe(data => {
      this.users = data;
     })
    }

  toPortfoil(username:String){
    console.log(username);
    this.ruta.navigate(['/'+username]);
  }

  onSend(event:Event)
  {
    //cuando clickeo salgo de lo esperado en el form
    event.preventDefault;
    console.log(this.form.value);
    this.authenticationService.Login(this.form.value).subscribe(data =>{
      console.log(this.form.value.username);
      //this.ruta.navigate(['/'+this.form.value.username]);
      this.ruta.navigate(['/edit']);
    })
  }
  addUser(user:User){
    console.log(user);
    this.sS.addUser(user).subscribe(data => {
      console.log(data);
      console.log("se agrego bien")});
  }

}