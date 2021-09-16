<template>
  <l-map style="height:500px" :zoom="5" :center="[-33.4430, -70.6538]">
    <l-tile-layer url='https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}' :attribution="attribution"
                  :max-zoom="18"></l-tile-layer>
    <l-geo-json :geojson="geojson" :options="geojsonOptions"/>
    <l-polyline :options="{ position: 'bottomright' }"></l-polyline>
    <l-control position="bottomleft">
      <button @click="clickHandler">
        I am a useless button!
      </button>
    </l-control>
    <l-marker :lat-lng="[-33.4430, -70.6538]"></l-marker>
    <l-circle-marker :lat-lng="[-33.4430, -70.6538]" :radius="50" color="red"/>
  </l-map>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import { LCircleMarker, LControl, LGeoJson, LMap, LMarker, LPolyline, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LGeoJson,
    LTileLayer,
    LPolyline,
    LControl,
    LCircleMarker,
    LMarker
  },
  data () {
    return {
      geojson: {
        type: 'FeatureCollection',
        features: []
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      }
    }
  },
  async beforeMount () {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import('leaflet/dist/leaflet-src.esm')

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 })
    this.mapIsReady = true
  }
}
</script>
