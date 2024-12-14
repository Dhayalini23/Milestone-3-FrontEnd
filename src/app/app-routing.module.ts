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
import { UserHomeComponent } from './Component/User/user-home/user-home.component';
import { UserComponent } from './Component/User/user/user.component';
import { ViewProgramComponent } from './Component/Admin/view-program/view-program.component';
import { ViewSubscriptionComponent } from './Component/Admin/view-subscription/view-subscription.component';
import { MemberPaymentComponent } from './Component/User/member-payment/member-payment.component';
import { ReportComponent } from './Component/Admin/report/report.component';
import { MemberReportComponent } from './Component/Admin/member-report/member-report.component';
import { ProgramReportComponent } from './Component/Admin/program-report/program-report.component';
import { AnnualFinancialReportComponent } from './Component/Admin/annual-financial-report/annual-financial-report.component';

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
  {
    path:'admin', 
    component:DashboardComponent,
    children:[
      {path:'member' , children:[
         {path:'',component:MemberComponent },
        {path :'editMember/:id',component:AddEditMemberComponent},
        {path:'viewMember/:id',component:ViewMemberComponent}
      ] },
       {path:'program',children:[
        {path:'',component:ProgramComponent },
        {path :'editProgram/:id',component:AddEditProgramComponent},
        {path:'viewProgram/:id',component:ViewProgramComponent}
       ]},
       {path: 'subscription',children:[
        {path:'',component:SubscriptionComponent },
        {path :'editSubscription/:id',component:AddEditSubscriptionComponent},
        {path:'viewSubscription/:id',component:ViewSubscriptionComponent}
      ]},
      {path: 'payment', component: PaymentComponent,
        children:[
          {path:'refund',component:RefundComponent}
        ]
      },
      {path:'Reports',
         component:ReportComponent,
         children:[
           {path:'member-report', component:MemberReportComponent},
           {path:'program-report', component:ProgramReportComponent},
           {path:'annual-financial-report', component:AnnualFinancialReportComponent},          
        ]
      },
    
]},

  {
    path:'user/:id',
    component:UserComponent,
    children:[
      {path:'',component:UserHomeComponent},
      {path:'home',component:UserHomeComponent},
      {path:'userPayment',component:MemberPaymentComponent},
    ]
  },

  // {path: 'payment',
  //  component: PaymentComponent,
  //   children:[
  //     {path:'refund',component:RefundComponent},
  //     {path:'skipped-payment',component:SkippedPaymentComponent},
  //     {path:'overdue',component:OverdueComponent}
  //   ]
  // },
  { path: '', redirectTo: '/GrandeurGym', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


