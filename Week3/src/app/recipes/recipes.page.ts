import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipesService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.recipes = this.recipeService.getAllRecipes();
  }

  getDetail(id: string){
    return this.recipeService.getDetail(id);
  }

  deleteRecipe(id: string){
    this.recipes =  this.recipeService.deleteRecipe(id);
  }

  ionViewWillEnter(){
    this.recipes = this.recipeService.getAllRecipes();
  }

}
