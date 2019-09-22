import { Component, OnInit,Input } from '@angular/core';
import { recipe } from  '../recipe.model';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements 
OnInit {
  recipes: recipe[] = [
    new recipe ('test recipe','a test','https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFHRYF.img?h=350&w=624&m=6&q=60&u=t&o=t&l=f&f=jpg&x=648&y=595'),
    new recipe ('test recipe','a test','https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFHRYF.img?h=350&w=624&m=6&q=60&u=t&o=t&l=f&f=jpg&x=648&y=595')
    

  ];

  constructor() { }

  ngOnInit() {   
  }

}