import {HttpClient} from "@angular/common/http";
import {AfterViewInit, Component, Injectable, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import Ecole from "../Ecole";
import {EcoleService} from "../ecole.service";
import Marker from "../marker";
import {Router} from "@angular/router";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";


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
  nom: string
  adresse: string
  type: string
  statut: string
  markerPositions: google.maps.LatLngLiteral[] = [];
  private router: any;
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  openInfoWindow(marker :MapMarker ) {

    this.ecoles.forEach(ecole=>{
       let lat = marker.getPosition().lat()
      let lng = marker.getPosition().lng()
         if (ecole.latitude === lat && ecole.longitude===lng){
           this.infoWindow.open(marker);
           this.nom = ecole.nom_etablissement
           this.adresse = ecole.adresse_1
           this.type = ecole.type_etablissement
           this.statut = ecole.libelle_nature
           // console.log(ecole)
           // console.log(marker.getPosition().lat())
           // console.log(marker.getPosition().lng())
         }

    })


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



  getMark(){
     this.ecoles.map((ec)=>{

      let marker:google.maps.LatLngLiteral ={lat:null,
      lng:null}
       marker.lng = ec.longitude
       marker.lat = ec.latitude
       this.markerPositions.push(marker)
       console.log(this.markerPositions)

     })

  }

}
