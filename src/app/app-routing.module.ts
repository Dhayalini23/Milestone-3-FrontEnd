import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './Component/Admin/member/member.component';
import { ProgramComponent } from './Component/Admin/program/program.component';
import { SubscriptionComponent } from './Component/Admin/subscription/subscription.component';
import { PaymentComponent } from './Component/Admin/payment/payment.component';
import { DashboardComponent } from './Component/Admin/dashboard/dashboard.component';
import { AddEditMemberComponent } from './Component/Admin/add-edit-member/add-edit-member.component';
import { AddEditProgramComponent } from './Component/Admin/add-edit-program/add-edit-program.component';
import { RefundComponent } from './Component/Admin/refund/refund.component';
import { SkippedPaymentComponent } from './Component/Admin/skipped-payment/skipped-payment.component';
import { OverdueComponent } from './Component/Admin/overdue/overdue.component';
import { AddEditSubscriptionComponent } from './Component/Admin/add-edit-subscription/add-edit-subscription.component';
import { ViewMemberComponent } from './Component/Admin/view-member/view-member.component';
import { WebsiteComponent } from './Component/Main/website/website.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { GalleryComponent } from './Component/Main/gallery/gallery.component';
import { ContactUsComponent } from './Component/Main/contact-us/contact-us.component';
import { LoginComponent } from './Component/Main/login/login.component';

const routes: Routes = [
  {
    path:'GrandeurGym',
    component:WebsiteComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'contactUs',component:ContactUsComponent},
      // {path:'',component:HomeComponent},
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'admin', 
  component:DashboardComponent,
  children:[
    {path:'member',component:MemberComponent},
    {path: 'program', component:ProgramComponent},
    {path: 'subscription', component: SubscriptionComponent },
    {path: 'payment', component: PaymentComponent}
]},
{path:'viewMember/:id', component:ViewMemberComponent},
{path:'editMember/:id',component:AddEditMemberComponent},


  {path: 'member', 
  component: MemberComponent ,
  children:[
    {path:'addMember',component:AddEditMemberComponent},
    {path:'editMember/:id',component:AddEditMemberComponent},
    {path:'viewMember/:id', component:ViewMemberComponent}
  ]
},
  {path: 'program', 
  component:ProgramComponent,
  children:[
    {path:'add-edit-program',component:AddEditProgramComponent}
  ]
},
  {path: 'subscription',
   component: SubscriptionComponent,
   children:[
    {path:'add-edit-subscription',component:AddEditSubscriptionComponent}
   ]

   },

  {path: 'payment',
   component: PaymentComponent,
    children:[
      {path:'refund',component:RefundComponent},
      {path:'skipped-payment',component:SkippedPaymentComponent},
      {path:'overdue',component:OverdueComponent}
    ]
  },
  { path: '', redirectTo: '/GrandeurGym', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


