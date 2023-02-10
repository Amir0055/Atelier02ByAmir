import { Component } from '@angular/core';
import { Emploi } from '../Models/Emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {
  ListeEmploi =[{reference: "1", titre: "Titre 1", entreprise: "ACTIA", etat: true},
  {reference: "2", titre: "Titre  2", entreprise: "RIATICA", etat: true},
  {reference: "3", titre: "Titre 3", entreprise: "ESPRIT", etat: false}
]
nb=0;
ent="nothing";
emploi={reference: "00", titre: "NotFound", entreprise: "NotFound", etat: false};
Bilan(){
   var jj=0;
  for (var i = 0; i < this.ListeEmploi.length; i++) {
    if (this.ListeEmploi[i].etat==false) {
      jj=jj+1;
    }
  }
  this.nb=jj;
}
affichage(ent:string){
  var test={reference: "00", titre: "NotFound", entreprise: "NotFound", etat: false}
  for (var i = 0; i < this.ListeEmploi.length; i++) {
    if (this.ListeEmploi[i].entreprise === ent) {
      
      test=this.ListeEmploi[i];
    }
   
  }
  this.emploi=test;
  alert( this.emploi.titre)
}

}
