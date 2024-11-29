import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../Services/login.service';
import { User } from '../../../Interfaces/user';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { Member } from '../../../Interfaces/member';
// import { User } from '../../../Interfaces/member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup ;
  UserDetails:any;
  member:Member|undefined;
    constructor(private fb: FormBuilder,private loginService:LoginService,private route:Router,private userService:UserService){
      
      this.loginForm = this.fb.group({

        Id: ['', [Validators.required]],
        Password: ['',[Validators.required]],
 
      });
    }
    OnSubmit(){
      let user=this.loginForm.value;
      console.log(user)
      this.loginService.Login(user).subscribe(data =>{
        this.UserDetails=data;
        console.log(this.UserDetails);
        console.log(typeof this.UserDetails.Role)
        this.Navigate(this.UserDetails.role,this.UserDetails.userId)
      });
    }
    Navigate(Role:string,id:string){
      
        if(Role=="Admin"){
          this.route.navigate(['/admin']).catch((error) => {
            console.error("Navigation error: ", error);
          })
        }else if(Role="Member"){
          this.userService.getUserDetails(id).subscribe(data => {
            this.member=data;
            this.userService.memberId=this.member.id;
          });
          this.route.navigate([`/user/:`+id]).catch((error) => {
            console.error("Navigation error: ", error);
          })
        }
    }
}
