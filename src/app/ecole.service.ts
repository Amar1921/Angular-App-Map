import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import Ecole from "./Ecole";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class EcoleService
{
   http: HttpClient;

  APIURL = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=*&where=code_region%3D75&limit=20"

  constructor(private _http: HttpClient)
  {
    this.http = _http;
  }

  getData() {

    console.log("ecole.service getData() Chargement des données ... ")
    return this.http.get<Ecole[]>(this.APIURL);

  }
}
