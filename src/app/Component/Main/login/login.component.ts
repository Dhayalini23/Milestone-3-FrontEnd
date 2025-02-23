import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../Services/login.service';
import { User } from '../../../Interfaces/user';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { Member } from '../../../Interfaces/member';
import { ReportService } from '../../../Services/report.service';
import { annualFinancialReport, memberReport, programReport } from '../../../Interfaces/report';
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

    programReportDetails:programReport[]=[];
    programNames :string[]=[];
    enrollments :number[]=[];

      memberReportDetails: memberReport[] = [];
      age: string[] = [];
      males: number[] = [];
      females: number[] = [];
    

        months:string[]=[];
        income:number[]=[];
        financialDetails:annualFinancialReport[]=[];
    constructor(private fb: FormBuilder,private reportService:ReportService,private loginService:LoginService,private route:Router,private userService:UserService){
      
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
        this.Navigate(this.UserDetails.role,this.UserDetails.userId)
      });
    }
    Navigate(Role:string,id:string){
      
      console.log(id)
        if(Role=="Admin"){
          this.reportService.programReport().subscribe(data =>{
            console.log(data);       
            this.programReportDetails = data;
            console.log(this.programReportDetails)
            this.programReportDetails.forEach(element => {
              this.programNames.push(element.programName);
              this.enrollments.push(element.enrollments)
            });
            localStorage.setItem('programNames', JSON.stringify(this.programNames));
            localStorage.setItem('enrollments', JSON.stringify(this.enrollments));

               
      this.reportService.memberReport().subscribe(
        (data: memberReport[]) => {

          this.memberReportDetails = data;
  
          // Populate the age, males, and females arrays
          this.memberReportDetails.forEach((element) => {
            this.age.push(element.age);
            this.males.push(element.males);
            this.females.push(element.females);
          })
          localStorage.setItem('age', JSON.stringify(this.age));
          localStorage.setItem('males', JSON.stringify(this.males));
          localStorage.setItem('females', JSON.stringify(this.females));
        })
          
        this.reportService.annualFinancialReport().subscribe(data =>{
          console.log(data);       
          this.financialDetails = data;
          console.log(this.financialDetails)
          this.financialDetails.forEach(element => {
            this.income.push(element.income);
            this.months.push(element.month)
          });
          localStorage.setItem('income', JSON.stringify(this.income));
          localStorage.setItem('month', JSON.stringify(this.months));
      });

        });
          localStorage.setItem('Id',id.toString())
          this.route.navigate(['/admin']).catch((error) => {
            console.error("Navigation error: ", error);
          })
        }else if(Role="Member"){
          localStorage.setItem('Id',id.toString())
          this.userService.getUserDetails(id).subscribe(data => {
            this.member=data;
            localStorage.setItem('UserId',this.member.id.toString())
          });
          this.route.navigate([`/user/:`+id]).catch((error) => {
            console.error("Navigation error: ", error);
          })
        }
    }
}
