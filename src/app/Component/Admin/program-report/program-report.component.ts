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

  public barChartLabels: string[] = this.programNames; // X-axis labels
  public barChartType: ChartType = 'bar';  // Chart type
  public barChartLegend: boolean = true;  // Display legend

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: this.enrollments,  // Enrollment data for each program
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
