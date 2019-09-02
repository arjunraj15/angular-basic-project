import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeslistComponent } from './recipes/recipeslist/recipeslist.component';
import { RecipesdetailsComponent } from './recipes/recipesdetails/recipesdetails.component';
import { RecipesitemComponent } from './recipes/recipeslist/recipesitem/recipesitem.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent,  RecipesComponent, RecipeslistComponent, RecipesdetailsComponent,  RecipesitemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
