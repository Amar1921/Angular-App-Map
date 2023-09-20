import {HttpClient} from "@angular/common/http";
import {AfterViewInit, Component, Injectable, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Ecole from "../Ecole";
import {EcoleService} from "../ecole.service";
import Marker from "../marker";
import {Router} from "@angular/router";

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
    center: {lat: 47.15209152066102, lng: -3.8095439060156},
    zoom: 12,
  };
  markers: MarkerProperties[] = [];
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
  zoom = 8;
  display: any;
  markerPositions: google.maps.LatLngLiteral[] = [];
  private router: any;


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
  navigateToContact(){
    this.router.navigate(['/contact']);
  }
  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

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
      let mark ={
        position:{
          lat:null,
          lng:null,
          title:null
        }
      }
       mark.position.lat = ec.latitude
       mark.position.lng = ec.longitude
       mark.position.title = ec.nom_etablissement
      // mark.position.title.adresse = ec.adresse_1
       this.markers.push(mark)
       console.log(mark)


     })

  }
   contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

   infowindow = new google.maps.InfoWindow({
    content: this.contentString,
    ariaLabel: "Uluru",
  });

   getInfoMarker(marker: MarkerProperties){
   let  infowindow = new google.maps.InfoWindow({
       content: marker.position.title,
       ariaLabel: marker.position.title,
     });
   infowindow.open({

   })
   }

}
