import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredientee.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredient[] = [
    new ingredient ('apples',5),new ingredient ('mango',1)
  ];

  constructor() { }

  ngOnInit() {
  }

}