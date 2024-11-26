import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { User } from '../../../Interfaces/member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup ;
    constructor(private fb: FormBuilder){
      this.loginForm = this.fb.group({

        userId: ['', [Validators.required]],
        password: ['',[Validators.required]],
 
      });
    }
    OnSubmit(){
      let user=this.loginForm.value;
      console.log(user)
    }
}
