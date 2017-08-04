import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/primeng';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {

  oChartData: any;

  constructor() {

    this.oChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Third Dataset',
          data: [2, 4, 6, 8, 10, 12, 14, 16]
        }
      ]
    }

  }

  ngOnInit() {
  }

}
