import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;
  passwordMismatch: boolean = false;
  userId:any;

  constructor(private fb: FormBuilder,private router:Router) {
    // Create the form group with validation rules
    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],  // old password is required
      newPassword: ['', [Validators.required, Validators.minLength(6)]],  // new password, min length 6
      confirmPassword: ['', [Validators.required]]  // confirm password is required
    });

    // Watch for changes to the confirmPassword field
    this.passwordForm.get('confirmPassword')?.valueChanges.subscribe(value => {
      this.passwordMismatch = value !== this.passwordForm.get('newPassword')?.value;
    });
  }

  // On form submit
  onSubmit(): void {
    if (this.passwordForm.invalid || this.passwordMismatch) {
      return;  // Don't submit if form is invalid or passwords do not match
    }
    // alert('Password changed successfully!');
    this.passwordForm.reset();
    this.userId=localStorage.getItem('Id');
    if(this.userId=="Admin"){
      this.router.navigate(['/admin']).catch((error) => {
        console.error("Navigation error: ", error);
      })
      console.log("Admin")
    }else{
      this.router.navigate([`/user/:`+this.userId]).catch((error) => {
        console.error("Navigation error: ", error);
      })
      console.log("User")
      location.reload();

    }

  }
}
