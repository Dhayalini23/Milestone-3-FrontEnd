import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportService } from '../../../Services/report.service';
import { programReport } from '../../../Interfaces/report';

@Component({
  selector: 'app-program-report',
  templateUrl: './program-report.component.html',
  styleUrl: './program-report.component.css'
})
export class ProgramReportComponent implements OnInit {
  programReportDetails:programReport[]=[];
  programNames :string[]=[];
  enrollments :number[]=[];
  ngOnInit(): void {
    this.reportService.programReport().subscribe(data =>{
      console.log(data);       
      this.programReportDetails = data;
      console.log(this.programReportDetails)
      this.programReportDetails.forEach(element => {
        this.programNames.push(element.programName);
        this.enrollments.push(element.enrollments)
      });
  });
    console.log(this.programNames)
    console.log(this.enrollments)
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: string[] = JSON.parse(localStorage.getItem('programNames') || '[]'); // X-axis labels
  public barChartType: ChartType = 'bar';  // Chart type
  public barChartLegend: boolean = true;  // Display legend

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: JSON.parse(localStorage.getItem('enrollments') || '[]'),  // Enrollment data for each program
        label: 'Enrollment',
        backgroundColor: 'rgba(0, 123, 255, 0.7)',  // Bar color
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  constructor(private reportService:ReportService) {

  }
}
// programReportDetails: programReport[] = [];
// programNames: string[] = [];
// enrollments: number[] = [];

// public barChartOptions: ChartOptions = {
//   responsive: true,
// };

// public barChartLabels: string[] = []; // Initially empty
// public barChartType: ChartType = 'bar';
// public barChartLegend: boolean = true;

// public barChartData: ChartData<'bar'> = {
//   labels: this.barChartLabels,
//   datasets: [
//     {
//       data: [], // Initially empty
//       label: 'Enrollment',
//       backgroundColor: 'rgba(0, 123, 255, 0.7)',
//       borderColor: 'rgba(0, 123, 255, 1)',
//       borderWidth: 1
//     }
//   ]
// };

// constructor(private reportService: ReportService) {}

// ngOnInit(): void {
//   this.reportService.programReport().subscribe(data => {
//     console.log(data);
//     this.programReportDetails = data;

//     // Populate program names and enrollments
//       this.programReportDetails.forEach(element => {
//         this.programNames.push(element.programName);
//         this.enrollments.push(element.enrollments);
//       });

//       console.log(this.programNames);
//       console.log(this.enrollments);

//       // Update chart labels and data dynamically
//       this.barChartLabels = [...this.programNames]; // Update labels
//       this.barChartData.datasets[0].data = [...this.enrollments]; // Update data
//     });
//   }
// }
