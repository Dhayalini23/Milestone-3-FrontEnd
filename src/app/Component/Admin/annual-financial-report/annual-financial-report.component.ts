import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ReportService } from '../../../Services/report.service';
import { annualFinancialReport } from '../../../Interfaces/report';

@Component({
  selector: 'app-annual-financial-report',
  templateUrl: './annual-financial-report.component.html',
  styleUrl: './annual-financial-report.component.css'
})
export class AnnualFinancialReportComponent implements OnInit {

  months:string[]=[];
  income:number[]=[];
  financialDetails:annualFinancialReport[]=[];
  constructor(private reportService:ReportService){

  }
  ngOnInit(): void {
    this.reportService.annualFinancialReport().subscribe(data =>{
      console.log(data);       
      this.financialDetails = data;
      console.log(this.financialDetails)
      this.financialDetails.forEach(element => {
        this.income.push(element.income);
        this.months.push(element.month)
      });
  });
  }
  // Data for the line chart
  public lineChartData: ChartData<'line'> = {
    labels: this.months, // Monthly labels
    datasets: [
      {
        data:this.income, // Annual income for each month
        label: 'Income',
        borderColor: 'rgba(75,192,192,1)', // Line color
        fill: false, // Do not fill the area under the line
      },
    ],
  };

  // Chart options
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Income (Rs.)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Chart type
  public lineChartType: 'line' = 'line';
}
