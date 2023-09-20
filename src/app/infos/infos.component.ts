import { Component } from '@angular/core';

export interface EcoleData {
  nom: string;
  adresse: string;
  ville: string;
  telephone: number
}
@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent {

}
