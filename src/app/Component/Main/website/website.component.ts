import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  constructor(private router:Router){}
  Login(){
    console.log("df");
    
    this.router.navigate(['login']).catch((error) => {
      console.error("Navigation error: ", error);
    })
  }
}
