import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminComponent } from './Component/admin/admin.component';
import { DashboardComponent } from './Component/Admin/dashboard/dashboard.component';
import { MemberComponent } from './Component/Admin/member/member.component';
import { ProgramComponent } from './Component/Admin/program/program.component';
import { SubscriptionComponent } from './Component/Admin/subscription/subscription.component';
import { PaymentComponent } from './Component/Admin/payment/payment.component';
import { MessageComponent } from './Component/Admin/message/message.component';
import { ReportComponent } from './Component/Admin/report/report.component';
import { ViewMemberComponent } from './Component/Admin/view-member/view-member.component';
import { EnrollmentComponent } from './Component/Admin/enrollment/enrollment.component';
import { ViewProgramComponent } from './Component/Admin/view-program/view-program.component';
import { AddEditMemberComponent } from './Component/Admin/add-edit-member/add-edit-member.component';
import { AddEditProgramComponent } from './Component/Admin/add-edit-program/add-edit-program.component';
import { AddEditSubscriptionComponent } from './Component/Admin/add-edit-subscription/add-edit-subscription.component';
import { ViewSubscriptionComponent } from './Component/Admin/view-subscription/view-subscription.component';
import { OverdueComponent } from './Component/Admin/overdue/overdue.component';
import { AddPaymentComponent } from './Component/Admin/add-payment/add-payment.component';
import { ViewPaymentComponent } from './Component/Admin/view-payment/view-payment.component';
import { RefundComponent } from './Component/Admin/refund/refund.component';
import { SkippedPaymentComponent } from './Component/Admin/skipped-payment/skipped-payment.component';
import { AdminMessageComponent } from './Component/Admin/admin-message/admin-message.component';
import { ViewUserMessageComponent } from './Component/Admin/view-user-message/view-user-message.component';
import { SendEmailComponent } from './Component/Admin/send-email/send-email.component';
import { ProgramReportComponent } from './Component/Admin/program-report/program-report.component';
import { FinancialReportComponent } from './Component/Admin/financial-report/financial-report.component';
import { EarlyFinancialReportComponent } from './Component/Admin/early-financial-report/early-financial-report.component';
import { MonthlyFinancialReportComponent } from './Component/Admin/monthly-financial-report/monthly-financial-report.component';
import { MemberReportComponent } from './Component/Admin/member-report/member-report.component';
import { RiviewReportComponent } from './Component/Admin/riview-report/riview-report.component';
import { AgeGenderReportComponent } from './Component/Admin/age-gender-report/age-gender-report.component';
import { ProfileComponent } from './Component/Admin/profile/profile.component';
import { AdminHomeComponent } from './Component/Admin/admin-home/admin-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FilterMemberPipe } from './Pipes/filter-member.pipe';
import { FilterProgramPipe } from './Pipes/filter-program.pipe';
import { WebsiteComponent } from './Component/Main/website/website.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { ViewAllProgramComponent } from './Component/Main/view-all-program/view-all-program.component';
import { ViewAllSubscribtionsComponent } from './Component/Main/view-all-subscribtions/view-all-subscribtions.component';
import { BMIComponent } from './Component/Main/bmi/bmi.component';
import { ViewReviewComponent } from './Component/Main/view-review/view-review.component';
import { GalleryComponent } from './Component/Main/gallery/gallery.component';
import { ContactUsComponent } from './Component/Main/contact-us/contact-us.component';
import { LoginComponent } from './Component/Main/login/login.component';
import { UserHomeComponent } from './Component/User/user-home/user-home.component';
import { MemberDetailsComponent } from './Component/User/member-details/member-details.component';
import { AddReviewComponent } from './Component/User/add-review/add-review.component';
import { NavigationComponent } from './Component/User/navigation/navigation.component';
import { EnrolledProgramsComponent } from './Component/User/enrolled-programs/enrolled-programs.component';
import { ChangePasswordComponent } from './Component/User/change-password/change-password.component';
import { MemberPaymentComponent } from './Component/User/member-payment/member-payment.component';
import { MemberPayComponent } from './Component/User/member-pay/member-pay.component';
import { MemberSkippedPaymentComponent } from './Component/User/member-skipped-payment/member-skipped-payment.component';
import { UserComponent } from './Component/User/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    DashboardComponent,
    MemberComponent,
    ProgramComponent,
    SubscriptionComponent,
    PaymentComponent,
    MessageComponent,
    ReportComponent,
    ViewMemberComponent,
    EnrollmentComponent, 
    ViewProgramComponent,
    AddEditMemberComponent,
    AddEditProgramComponent,
    AddEditSubscriptionComponent,
    ViewSubscriptionComponent,
    OverdueComponent,
    AddPaymentComponent,
    ViewPaymentComponent,
    RefundComponent,
    SkippedPaymentComponent,
    AdminMessageComponent,
    ViewUserMessageComponent,
    SendEmailComponent,
    ProgramReportComponent,
    FinancialReportComponent,
    EarlyFinancialReportComponent,
    MonthlyFinancialReportComponent,
    MemberReportComponent,
    RiviewReportComponent,
    AgeGenderReportComponent,
    ProfileComponent,
    AdminHomeComponent,
    FilterMemberPipe,
    FilterProgramPipe,
 
    WebsiteComponent,
    HomeComponent,
    ViewAllProgramComponent,
    ViewAllSubscribtionsComponent,
    BMIComponent,
    ViewReviewComponent,
    GalleryComponent,
    ContactUsComponent,
    LoginComponent,
    UserHomeComponent,
    MemberDetailsComponent,

    AddReviewComponent,
      NavigationComponent,
      EnrolledProgramsComponent,
      ChangePasswordComponent,
      MemberPaymentComponent,
      MemberPayComponent,
      MemberSkippedPaymentComponent,
      UserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
