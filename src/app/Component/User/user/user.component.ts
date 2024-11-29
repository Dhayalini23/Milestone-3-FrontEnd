import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  Id:string='';
constructor(private userService:UserService,private route: ActivatedRoute){
  const uId = this.route.snapshot.paramMap.get("id");
  this.Id = String(uId);
}
ngOnInit(): void {
  // console.log(this.Id);
  // this.userService.getUserDetails(this.Id).subscribe(data => {
  //   console.log(data)
  // });
  
}
}
