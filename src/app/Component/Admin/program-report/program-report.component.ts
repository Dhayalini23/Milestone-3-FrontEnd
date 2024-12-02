import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-program-report',
  templateUrl: './program-report.component.html',
  styleUrl: './program-report.component.css'
})
export class AppComponent {
  // Bar chart data
  public barChartData: ChartData<'bar'> = {
    labels: ['Yoga', 'Crossfit', 'Pilates', 'Zumba', 'HIIT'], // Workout program names
    datasets: [
      {
        data: [50, 120, 75, 90, 110], // Number of enrollments
        label: 'Enrollments',
        backgroundColor: '#42A5F5', // Bar color
        borderColor: '#1E88E5', // Border color
        borderWidth: 1,
      }
    ]
  };

  // Bar chart options
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true, // Start the X-axis from zero
      },
      y: {
        beginAtZero: true, // Start the Y-axis from zero
      },
    },
  };

  // Bar chart type
  public barChartType: ChartType = 'bar';
}

