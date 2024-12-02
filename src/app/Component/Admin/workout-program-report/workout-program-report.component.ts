import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js'; // Import Chart.js types
import { ChartType } from 'chart.js'; // Import Chart.js types

@Component({
  selector: 'app-workout-program-report',
  templateUrl: './workout-program-report.component.html',
  styleUrls: ['./workout-program-report.component.css']
})
export class WorkoutProgramReportComponent {
  // Define the chart data
  public barChartData: ChartData<'bar'> = {
    labels: ['Yoga', 'Crossfit', 'Pilates', 'Zumba', 'HIIT'], // Program names
    datasets: [
      {
        data: [50, 120, 75, 90, 110], // Number of enrollments
        label: 'Enrollments',
        backgroundColor: '#42A5F5', // Bar color
        borderColor: '#1E88E5', // Border color
        borderWidth: 1,
      },
    ],
  };

  // Define the chart options
  public barChartOptions: ChartOptions = {
    responsive: true, // Make the chart responsive
    scales: {
      x: {
        beginAtZero: true, // Start the X-axis from zero
      },
      y: {
        beginAtZero: true, // Start the Y-axis from zero
      },
    },
  };

  // Define the chart type
  public barChartType: ChartType = 'bar'; // Bar chart type
}

