import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from '../../../Services/subscription.service';
import { Subscription } from '../../../Interfaces/subscription';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit{
  
  subscriptionData!: Subscription[];
  filteredSubscription: Subscription[] = []; 
  searchText: string = '';  
  constructor(
    private subscriptionService: SubscriptionService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSubscription();
  }


  loadSubscription() {
    this.subscriptionService.getSubscription().subscribe({
      next:(response:any) => {
        this.subscriptionData = response
      },
      complete:() => {
        
      },
      error:(err:any)=>{
        this.toastr.error("Failed to load subscriptions", "Error");
      }
    })
  }


  onDelete(subscriptionId: string) {
    if (confirm("Do you want to delete this subscription?")) {
      this.subscriptionService.deleteSubscription(subscriptionId).subscribe(data => {
        this.toastr.success('Subscription is deleted', "Deleted", {
          timeOut: 3000,
          closeButton: true
        });
        this.loadSubscription();  
      }, error => {
        this.toastr.error("Failed to delete subscription", "Error");
      });
    }
  }

  onEdit(subscriptionId: string) {
    console.log("Editing Subscription with ID: ", subscriptionId);
    this.router.navigate(['/editSubscription', subscriptionId]);
  }

  
  onSearch() {
    if (this.searchText) {
      this.filteredSubscription = this.subscriptionData.filter(subscriptions =>
        subscriptions.title.toLowerCase().includes(this.searchText.toLowerCase()) 
  
      );
    } else {
      this.filteredSubscription = [...this.subscriptionData]; 
    }
  }
  
}
