import {HttpClient} from "@angular/common/http";
import {AfterViewInit, Component, Injectable, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import Ecole from "../Ecole";
import {EcoleService} from "../ecole.service";
import Marker from "../marker";
import {Router} from "@angular/router";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
    title: string


  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
@Injectable()
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()
  ecole: EcoleService
  ecoles: Ecole[] = []
  mapOptions: google.maps.MapOptions = {
    center: {lat: 46.15209152066102, lng: -2.8095439060156},
    zoom: 12,
  };



  marker:[]
  @Input()
  title: string
  center: google.maps.LatLngLiteral
  @Input()
  postion: {
    lat: number,
    lng: number
  }
  @Input()
  label: string
  zoom = 6;
  display: any;
  markerPositions: google.maps.LatLngLiteral[] = [];
  private router: any;
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  openInfoWindow() {
    console.log('AMAR')
  }


  constructor(private _ecole: EcoleService, private http: HttpClient, router: Router) {
    this.ecole = _ecole
  }

  ngOnInit() {
    console.log('mapcomponent ngOnInit')
    this.ecole.getData().subscribe((rs) => {
      this.ecoles = rs['results']
      console.log('mapcomponent ngOnInit', 'Les écoles sont chargées');
      console.log('mapcomponent ngOnInit', this.ecoles);
      console.log(this.ecoles)
      this.getMark()

    });

  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  ngAfterViewInit(): void {
      console.log(this.marker)
  }

  // addMarker(event: google.maps.MapMouseEvent) {
  //   this.markerPositions.push(event.latLng.toJSON());
  // }

  /*------------------------------------------

  --------------------------------------------

  moveMap()

  --------------------------------------------

  --------------------------------------------*/

  moveMap(event: google.maps.MapMouseEvent) {

    if (event.latLng != null) this.center = (event.latLng.toJSON());

  }


  /*------------------------------------------

  --------------------------------------------

  move()

  --------------------------------------------

  --------------------------------------------*/

  move(event: google.maps.MapMouseEvent) {

    if (event.latLng != null) this.display = event.latLng.toJSON();

  }
 getInfos(){
    console.log('MARQUEUR')
 }
  getMark(){
     this.ecoles.map((ec)=>{

      let mar2:google.maps.LatLngLiteral ={lat:null,
      lng:null}
       mar2.lng = ec.longitude
       mar2.lat = ec.latitude
       this.markerPositions.push(mar2)
       console.log(this.markerPositions)

     })

  }
  openInfoWindow2(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}
