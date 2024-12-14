import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent implements OnInit{
  isCollapsed = false;
  id:any;
  constructor(private router:Router){}
  ngOnInit(): void {
    this.id=localStorage.getItem('Id');
    if(this.id!="Admin"){
      this.router.navigate(['/'])
    }
  }
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  logOut(){
    localStorage.removeItem('UserId');
    this.router.navigate(['/'])
  }
  
}
