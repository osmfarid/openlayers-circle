import Draw from 'ol/interaction/Draw.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';

const raster = new TileLayer({
  source: new OSM(),
});

const source = new VectorSource({ wrapX: false });

const vector = new VectorLayer({
  source: source,
});

const map = new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: [5315040.084259, 4913032.550756],
    zoom: 6.8,
  }),
});

const typeSelect = document.getElementById('type');

let draw;
function addDrawCircleInteraction() {
  draw = new Draw({
    source: source,
    type: 'Circle',
  });
  map.addInteraction(draw);

  draw.on('drawend', (feature) => {
    console.log(feature)
  })
}

addDrawCircleInteraction();
