import { boot } from 'quasar/wrappers'
import 'leaflet/dist/leaflet.css'
import exportingInit from 'highcharts/modules/exporting'

import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import Gantt from 'highcharts/modules/gantt'

exportingInit(Highcharts)

Gantt(Highcharts)
export default boot(({ app }) => {
  // app.component('l-map', LMap)
  app.use(HighchartsVue, {
    highcharts: Highcharts
  })
  app.use(HighchartsVue)
})
