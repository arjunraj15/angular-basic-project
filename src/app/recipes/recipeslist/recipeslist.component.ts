import { Component, OnInit } from '@angular/core';
import { recipie } from  '../recipes.model';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements 
OnInit {
  recipes: recipie[] = [];

  constructor() { }

  ngOnInit() {
  }

}