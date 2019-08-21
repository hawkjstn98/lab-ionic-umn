import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService{

  constructor() {
  }

  private recipes: Recipe[] =
      [{
        id: '0',
        title: 'Gado - gado',
        imageUrl : 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/hayo-ini-gado-gado-lotek-karedok-pecel-atau-ketoprak_20180602_134533.jpg',
        ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
      },{
        id: '1',
        title: 'Ketupat',
        imageUrl : 'https://i0.wp.com/api.jatimnet.com/jinet/assets/media/news/news/image_front/Ketupat-Fia.jpeg',
        ingredients: ['Sayur', 'Kacang', 'Kecap']
      }, {
        id: '2',
        title: 'Pizza Margerita',
        imageUrl : 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F03%2F55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg',
        ingredients: ['Sosis', 'Keju', 'Tepung', 'Paprika']
      },{
        id: '3',
        title: 'Babi Kecap',
        imageUrl : 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F03%2F55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg',
        ingredients: ['Sosis', 'Keju', 'Tepung', 'Paprika']
      }
      ];

  getAllRecipes(){
    return [...this.recipes];
  }

  getDetail(id: string){
    let recipe = this.recipes.find(recipe => recipe.id === id);

    console.log(recipe);
  }
  
  deleteRecipe(id: string){
    let index: number = this.recipes.map(function (recipe) {
      return recipe.id
    }).indexOf(id);
    if(index > -1 && index != null){
      this.recipes.splice(index, 1);
      this.recipes = [...this.recipes];
      this.updateArray(this.recipes);
      this.recipes.splice(index, 1);
    }
  }

  updateArray(recipes: Recipe[]){
    this.recipes = recipes;
  }

}
