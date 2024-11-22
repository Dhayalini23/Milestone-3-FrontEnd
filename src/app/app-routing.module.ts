import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './Component/Admin/member/member.component';
import { ProgramComponent } from './Component/Admin/program/program.component';
import { SubscriptionComponent } from './Component/Admin/subscription/subscription.component';
import { PaymentComponent } from './Component/Admin/payment/payment.component';
import { DashboardComponent } from './Component/Admin/dashboard/dashboard.component';
import { AddEditMemberComponent } from './Component/Admin/add-edit-member/add-edit-member.component';
import { AddEditProgramComponent } from './Component/Admin/add-edit-program/add-edit-program.component';

const routes: Routes = [
  {path:'', 
  component:DashboardComponent,
  children:[
    {path:'member',component:MemberComponent},
    {path: 'program', component:ProgramComponent},
    {path: 'subscription', component: SubscriptionComponent },
     {path: 'payment', component: PaymentComponent}
]},
  {path: 'member', 
  component: MemberComponent ,
  children:[
    {path:'addMember',component:AddEditMemberComponent}
  ]
},
  {path: 'program', 
  component:ProgramComponent,children:[
    {path:'add-edit-program',component:AddEditProgramComponent}
  ]
},
  {path: 'subscription', component: SubscriptionComponent },
  {path: 'payment', component: PaymentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


