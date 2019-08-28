import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService, 
    private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMapper => {
        if(!paramMapper.has('recipeId')){return ;}
        this.loadedRecipe = this.recipeService.getDetail(paramMapper.get('recipeId'));
        this.id = paramMapper.get('recipeId');
        console.log(this.loadedRecipe);
      }
    );
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    this.recipeService.presentToast();
  }

  async presentAlert(){
      const alert = await this.alertController.create({
          header: 'Delete Recipe',
          message: 'Are you sure you want to delete this recipe ?',
          buttons: [
              {
                  text: 'YES',
                  handler: () => this.deleteRecipe()
              },
              {
                  text: 'Cancel',
                  role: 'cancel'
              }
          ]
      });
      await alert.present();
  }

}
