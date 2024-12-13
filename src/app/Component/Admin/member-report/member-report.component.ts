import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ReportService } from '../../../Services/report.service';
import { memberReport } from '../../../Interfaces/report';

@Component({
  selector: 'app-member-report',
  templateUrl: './member-report.component.html',
  styleUrl: './member-report.component.css'
})
export class MemberReportComponent {
  memberReportDetails: memberReport[] = [];
  age: string[] = [];
  males: number[] = [];
  females: number[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    setTimeout(() => {
      //charts data  here
      this.reportService.memberReport().subscribe(
        (data: memberReport[]) => {
          // Clear existing data (if any)
          this.age = [];
          this.males = [];
          this.females = [];
  
          // Assign the data to the memberReportDetails array
          this.memberReportDetails = data;
  
          // Populate the age, males, and females arrays
          this.memberReportDetails.forEach((element) => {
            this.age.push(element.age);
            this.males.push(element.males);
            this.females.push(element.females);
          });
  
          // After populating the arrays, update the chart data
          this.updateChart();
        },
        (error) => {
          console.error('Error fetching member report:', error);
        }
      );
     }, 1000);
  }

  // Data for the side-by-side bar chart
  public barChartData: ChartData<'bar'> = {
    labels: [], // Age ranges will be populated dynamically
    datasets: [
      {
        label: 'Male',
        data: [], // Data for male members in each age range
        backgroundColor: 'rgba(75,192,192,0.6)', // Color for male bars
        barPercentage: 0.4, // Controls the width of the bars (to ensure they are side by side)
      },
      {
        label: 'Female',
        data: [], // Data for female members in each age range
        backgroundColor: 'rgba(255,99,132,0.6)', // Color for female bars
        barPercentage: 0.4, // Controls the width of the bars (to ensure they are side by side)
      },
    ],
  };

  // Chart options for side-by-side bar chart
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age Range',
        },
        grid: {
          offset: true, // Adjust the grid to make space between bars
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Members',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top', // Position the legend at the top
      },
    },
  };

  // Chart type
  public barChartType: 'bar' = 'bar';

  // Method to update chart data after fetching data
  private updateChart(): void {
    
    this.barChartData.labels = this.age; // Assign dynamic age labels
    this.barChartData.datasets[0].data = this.males; // Male data
    this.barChartData.datasets[1].data = this.females; // Female data
  }
}
