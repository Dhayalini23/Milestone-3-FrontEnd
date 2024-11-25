import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../../Services/member.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrl: './view-member.component.css'
})
export class ViewMemberComponent implements OnInit{
  memberid:string|undefined;
constructor(private route: ActivatedRoute, private router: Router,private memberService :MemberService,private toastr:ToastrService){
  const id = this.route.snapshot.paramMap.get('id');
  console.log(id);
  this.memberid = String(id);
}
ngOnInit(): void {
  if(this.memberid != undefined){
    this.memberService.getMemberById(this.memberid).subscribe(data => {
      data.dob = new Date(data.dob).toISOString().slice(0, 10);
      console.log(data)
    }, (error) => {
      this.toastr.warning("Member is not found!: " + error.error.title);
    });
  }
}
}
