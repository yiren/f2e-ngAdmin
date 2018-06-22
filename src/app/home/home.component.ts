import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'f2e-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  multi = [
    {
      "name": "Revenue",
      "series": [
        {
          "name": "6 JUN",
          "value": 7250
        },
        {
          "name": "7 JUN",
          "value": 7000
        },
        {
          "name": "8 JUN",
          "value": 5500
        },
        {
          "name": "9 JUN",
          "value": 7200
        },
        {
          "name": "10 JUN",
          "value": 5800
        },
        {
          "name": "11 JUN",
          "value": 6200
        },
        {
          "name": "12 JUN",
          "value": 7650
        },
        {
          "name": "13 JUN",
          "value": 7150
        }
      ]
    },
    {
      "name": "Cost",
      "series": [
        {
          "name": "6 JUN",
          "value": 800
        },
        {
          "name": "7 JUN",
          "value": 800
        },
        {
          "name": "8 JUN",
          "value": 2800
        },
        {
          "name": "9 JUN",
          "value": 2950
        },
        {
          "name": "10 JUN",
          "value": 2500
        },
        {
          "name": "11 JUN",
          "value": 810
        },
        {
          "name": "12 JUN",
          "value": 960
        },
        {
          "name": "13 JUN",
          "value": 1990
        }
      ]
    },
    {
      "name": "Income",
      "series": [
        {
          "name": "6 JUN",
          "value": 6050
        },
        {
          "name": "7 JUN",
          "value": 5300
        },
        {
          "name": "8 JUN",
          "value": 2000
        },
        {
          "name": "9 JUN",
          "value": 4000
        },
        {
          "name": "10 JUN",
          "value": 3850
        },
        {
          "name": "11 JUN",
          "value": 5200
        },
        {
          "name": "12 JUN",
          "value": 6500
        },
        {
          "name": "13 JUN",
          "value": 5000
        }
      ]
    },
  
    
  ];
  
  view: any[] = [850, 320];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme = {
    domain: ['#7ED321', '#D0021B', '#4A90E2', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() { }

  ngOnInit() {
  }

}
