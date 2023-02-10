import { Component } from '@angular/core';
import { article } from '../Models/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {
  Articles:article[]=[];
  titre="Les articles du jour";
  i=0;
  calc(){
    this.Articles.forEach(element => {
      if(element.categorie != "Travail"){
        this.i++;
      }
    });
  }
  
  constructor() { }

  ngOnInit(): void {

    this.Articles=[
      {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'}, 
      {titre:'Les nouveauxparents',contenu:'Les nouveaux parents. ..',auteur:'AhmedSaid',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}
    ]
    this.calc();
      this.i=this.Articles.length

  }
}
