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
constructor(private userService:UserService,private route: ActivatedRoute){
}
ngOnInit(): void { 
}
}
