import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import Ecole from "./Ecole";
import Marker from "./marker";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class EcoleService
{
   http: HttpClient;
   Mark :Marker[]

   //ecoles: Observable<Ecole[]> |null = null
   APIURL = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=*&where=code_region%3D75&limit=20"

  constructor(private _http: HttpClient)
  {
    this.http = _http;
  }

  getData() {

    console.log("ecole.service getData() Chargement des données ... ")
    return this.http.get<Ecole[]>(this.APIURL);

  }
getMarKer(){
 let ecoles
  this.getData().subscribe((e)=>{
   ecoles = e
 })
  return ecoles;

}
  Marquer(ecole: Ecole) {

    let marker : Marker = {
      title : ecole.ecole_elementaire,
      label :ecole.nom_etablissement,
      draggable: false,
      name: ecole.ecole_elementaire,
      position :{
        lat: ecole.latitude,
        lng: ecole.longitude
      }

    }
    //console.log(marker)
    return marker

  }
}
