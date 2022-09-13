import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import Icon from 'ol/style/Icon';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Overlay from 'ol/Overlay';
import { toLonLat } from 'ol/proj';
import { toStringHDMS } from 'ol/coordinate';
import GeoJSON from 'ol/format/GeoJSON';
import { bridges } from "./tempBridges";
import { Bridge } from './bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  map: Map;
  text: string;
  container;
  content;
  overlay: Overlay;
  closer;
  bridges: Bridge[];

  ngOnInit(): void {
    this.bridges = bridges;
    this.container = document.getElementById('popup');
    this.content = document.getElementById('popup-content');
    this.closer = document.getElementById('popup-closer');
    this.overlay = new Overlay({
      element: this.container, // this makes it not want to show up anymore, even when it's never touched afterwards
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // new VectorLayer({
        //   source: new VectorSource({
        //     format: new GeoJSON(),
        //     url: 'https://test-safetynav.safetyconnect.nl/Bridge/GetBridges',
        //   }),
        // }),
      ],
      target: 'map',
      overlays: [this.overlay]
    });

    this.map.on('singleclick', (evt) => {
      var coordinate = evt['coordinate'];
      var hdms = toStringHDMS(toLonLat(coordinate));
      this.text = 'You clicked here: ' + hdms;
      this.overlay.setPosition(coordinate);
    });
    this.map.on('dblclick', (evt) => {
      var coordinate = evt['coordinate'];
      var layer = new VectorLayer({
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            scale: 0.1,
            src: 'https://www.iconpacks.net/icons/2/free-location-pointer-icon-2961-thumb.png',
          }),
        }),
        source: new VectorSource({
          features: [
            new Feature({
              geometry: new Point(coordinate)
            })
          ]
        })
      });
      this.map.addLayer(layer);
    });


    var coordinatesList = [];
    bridges.forEach((bridge) => {
      coordinatesList.push(new Feature({
        geometry: new Point([bridge['location']['coordinates'][0] * 100000, bridge['location']['coordinates'][1] * 100000])
      }));
      console.log(bridge['location']['coordinates'])
    });

    console.log(coordinatesList)
    var markerLayer = new VectorLayer({
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          scale: 0.1,
          src: 'https://www.iconpacks.net/icons/2/free-location-pointer-icon-2961-thumb.png',
        }),
      }),
      source: new VectorSource({
        features: coordinatesList
      })
    });
    this.map.addLayer(markerLayer);

  }
  onClick() {
    this.overlay.setPosition(undefined);
    this.closer.blur();
    return false;
  }

}



