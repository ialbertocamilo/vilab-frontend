<template>
  <q-page padding>
    <highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>

    <highcharts :constructorType="'ganttChart'" class="hc" :options="chartOptions2" ref="chart"></highcharts>

  </q-page>
</template>

<script>
import { Chart } from 'highcharts-vue'
import Highcharts from 'highcharts'

export default {
  name: 'chart',
  data () {
    return {
      hcInstance: Highcharts,
      chartOptions: {
        series: [{
          data: [1, 2, 3]
        }]
      },
      chartOptions2: {
        title: {
          text: 'Gantt Chart with Progress Indicators'
        },
        xAxis: {
          min: Date.UTC(2014, 10, 17),
          max: Date.UTC(2014, 10, 30)
        },

        series: [
          {
            name: 'Project 1',
            data: [
              {
                name: 'Start prototype',
                start: Date.UTC(2014, 10, 18),
                end: Date.UTC(2014, 10, 25),
                completed: 0.25
              },
              {
                name: 'Test prototype',
                start: Date.UTC(2014, 10, 27),
                end: Date.UTC(2014, 10, 29)
              },
              {
                name: 'Develop',
                start: Date.UTC(2014, 10, 20),
                end: Date.UTC(2014, 10, 25),
                completed: {
                  amount: 0.12,
                  fill: '#fa0'
                }
              },
              {
                name: 'Run acceptance tests',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26)
              }
            ]
          }
        ]
      }
    }
  },
  components: {

    highcharts: Chart
  },
  setup () {

  }
}
</script>
