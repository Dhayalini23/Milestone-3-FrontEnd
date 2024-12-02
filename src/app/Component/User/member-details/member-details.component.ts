import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { Member } from '../../../Interfaces/member';
import { MemberService } from '../../../Services/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent implements OnInit{
  member:any;
  userId:string;
constructor(private userService:UserService,private memberService:MemberService,private route:ActivatedRoute){
  const id = this.route.snapshot.paramMap.get('id');
  this.userId = id ? id.replace(':', '') : '';
}
ngOnInit(): void {
  console.log(this.userId)
  this.userService.getUserDetails(this.userId).subscribe(data => {
    this.member=data;
    console.log(this.member)
  });
  
}
}
