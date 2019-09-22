import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { recipe } from '../../recipe.model'
@Component({
  selector: 'app-recipesitem',
  templateUrl: './recipesitem.component.html',
  styleUrls: ['./recipesitem.component.css']
})
export class RecipesitemComponent implements OnInit {
 @Input() recipe: recipe;
 @Output() recipeselected = new EventEmitter<void>();
  constructor() { }
  ngOnInit() {
  }
onselected()
{
this.recipeselected.emit();
}
}