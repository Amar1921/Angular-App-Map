import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import Ecole from "../Ecole";
import {EcoleService} from "../ecole.service";
import {HttpClient} from "@angular/common/http";
import * as L from "leaflet";

@Component({
  selector: 'app-ecole-list',
  templateUrl: './ecole-list.component.html',
  styleUrls: ['./ecole-list.component.css']
})
export class EcoleListComponent implements OnInit {

  ecoles: Ecole[]


  constructor(private http: HttpClient, private ecole: EcoleService) {
  }

  ngOnInit() {



  }


}
