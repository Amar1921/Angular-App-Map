import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import Ecole from "../Ecole";
import {EcoleService} from "../ecole.service";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
@Injectable()
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;


  /*Informations école*/
  label: string
  zoom = 6;
  nom: string
  adresse: string
  type: string
  statut: string


  ecole: EcoleService
/*
* Tableau des ecoles
* */
  ecoles: Ecole[] = []
/*
* Options de configuration du map
* */
  mapOptions: google.maps.MapOptions = {
    center: {lat: 46.15209152066102, lng: -2.8095439060156},
    zoom: 12,
  };
 /*
 * Tableau des marqueurs
 * */
  markerPositions: google.maps.LatLngLiteral[] = [];



  constructor(private _ecole: EcoleService) {
    this.ecole = _ecole
  }

  ngOnInit() {
    /*
    * Recuperation des donnees de l'API e remplissage du
    * tableau 'ecoles'
    * */
    console.log('mapcomponent ngOnInit')
    this.ecole.getData().subscribe((rs) => {
      this.ecoles = rs['results']
      console.log('mapcomponent ngOnInit', 'Les écoles sont chargées');
      console.log('mapcomponent ngOnInit', this.ecoles);
      console.log(this.ecoles)
      this.getMark()

    });

  }


/*
* Rècupèration des positions des écoles et remplissage du
* tableau des marqueurs
* */
  getMark(){
      this.ecoles.map((ec)=>{
      let marker:google.maps.LatLngLiteral =
        {
          lat:null,
          lng:null
        }
       marker.lng = ec.longitude
       marker.lat = ec.latitude
       this.markerPositions.push(marker)
     //  console.log(this.markerPositions)

     })

  }
  /*
* Fonctions pour afficher les information d'une école
* filtres l'ecole correspondants au marqueur en parametre
* */
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
      }
    })


  }

}
