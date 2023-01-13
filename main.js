import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const t = 100000
const latitude = 38.9072*t
const longitude = -77.0369*t

console.log(latitude, longitude)
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    })
  ],
  view: new View({
    center: [longitude, latitude],
    zoom: 5
  })
});