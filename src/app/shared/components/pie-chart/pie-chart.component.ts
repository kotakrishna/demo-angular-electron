import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  eChartOption: any
  @Input("pieData") pieData
  constructor() { }

  private initChart(data): void {
    this.eChartOption = {
      title: {
        text: 'Pie Chart',
        subtext: 'Ages',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: {
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: data
      },
      calculable: true,
      animation: false,
    }
  }
  ngOnInit(): void {
    this.initChart(this.pieData)
  }

}
