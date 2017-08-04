import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/primeng';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {

  oLineChartData: any;
  oBarChartData: any;
  oRadarChartData: any;
  oDonutChartData: any;
  oPieChartData: any;
  oPolarChartData: any;
  oBubbleChartData: any;
  
  oBarChartOptions: any;
  oRadarChartOptions: any;
  oDonutChartOptions: any;
  oPieChartOptions: any;
  oPolarChartOptions: any;
  oBubbleChartOptions: any;

  constructor() {

    /**
     * Estructuras de datos de puntos para gráficas
     */

    this.oLineChartData = {
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
    };


    

    /**
     * La estructura de datos funciona de la siguiente forma:
     * label: Array de elementos
     * datasets.data: Array de valores, correspondiente a los elementos de label
     * 
     */
    this.oBarChartData = {
      labels: ['2012', '2013', '2014', '2015', '2016'],
      datasets: [
        {
          label: 'Ventas',
          data: [30, 35, 40, 45, 50],
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "magenta",
          borderWidth: 2
        },
        {
          label: 'Ingresos',
          data: [50, 40, 30, 20, 25],
          backgroundColor: "rgba(255, 0, 0, 1)",
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 2

        },
        {
          label: 'Pérdidas',
          data: [15, 30, 45, 60, 75],
          backgroundColor: "rgba(0, 0, 255, 1)",
          borderColor: "rgba(255, 0, 0, 1)",
          borderWidth: 2
        },
        {
          label: 'Robos',
          data: [65, 55, 45, 35, 25],
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "rgba(200, 150, 50, 1)",
          borderWidth: 2
        },
        {
          label: 'Desgaste',
          data: [45, 30, 15, 15, 30],
          backgroundColor: "rgba(255, 255, 0, 1)",
          borderColor: "rgba(0, 0, 255, 1)",
          borderWidth: 2
        }
      ]
    };

    this.oRadarChartData = this.oBarChartData;

    this.oPieChartData = {
      labels: ['España', 'Francia', 'Alemania', 'UK', 'Polonia', 'Hungría'],
      datasets: [
        {
          label: 'Ventas',
          data: [100, 50, 75, 150, 60, 45],
          backgroundColor: [
            "rgba(255, 0, 0, 0.5)",
            "rgba(0, 255, 0, 0.5)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(255, 255, 0, 0.5)",
            "rgba(0, 255, 255, 0.5)",
            "rgba(120, 120, 120, 0.5)"
          ]
        }
      ]
    };

    this.oDonutChartData = this.oPieChartData;
    this.oPolarChartData = this.oPieChartData;

    //@todo: Implementar la gráfica y que se vean los valores.
    //@todo: Revisar documentación de Chart.js
    this.oBubbleChartData = {     
      datasets: [
        {
          label: 'Valor 1',
          backgroundColor: "red",
          x: 0.2,
          y: 0.5,
          r: 5          
        },
        {
          label: 'Valor 2',
          backgroundColor: "magenta",
          x: 20,
          y: 25,
          r: 10
        },
        {
          label: 'Valor 3',
          backgroundColor: "green",
          x: 40,
          y: 10,
          r: 15
        },
        {
          label: 'Valor 4',
          backgroundColor: "blue",
          x: 35,
          y: 35,
          r: 8
        }
      ]
    };


    /**
     * Estructuras de datos de opciones para las gráficas
     */


    this.oBarChartOptions = {
      title: {
        display: true,
        text: 'Gráfico de barras',
        fontSize: 16
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]  
      }
    };
  }

  ngOnInit() {
  }

  getColorArraySchemeBars() {
    return [
      "rgba(255, 0, 0, 0.75)",
      "rgba(0, 255, 0, 0.75)",
      "rgba(0, 0, 255, 0.75)",
      "rgba(175, 175, 175, 0.75)",
      "rgba(15, 15, 15, 0.75)"
    ]
  }

}
