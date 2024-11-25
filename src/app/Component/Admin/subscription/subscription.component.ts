import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from '../../../Services/subscription.service';
import { Subscription } from '../../../Interfaces/subscription';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  
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
    this.subscriptionService.getSubscription().subscribe(data => {
      console.log(data);
      // this.subscriptionData = data;     

    }, error => {
      this.toastr.error("Failed to load subscriptions", "Error");
    });
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
    console.log("Editing Program with ID: ", subscriptionId);
    this.router.navigate(['/program-add-edit-program', subscriptionId]);
  }

  
  onSearch() {
    if (this.searchText) {
      this.filteredSubscription = this.subscriptionData.filter(subscriptions =>
        subscriptions.subscriptionName.toLowerCase().includes(this.searchText.toLowerCase()) 
  
      );
    } else {
      this.filteredSubscription = [...this.subscriptionData]; 
    }
  }
}
