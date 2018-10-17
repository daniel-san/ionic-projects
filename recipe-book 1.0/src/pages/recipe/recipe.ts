import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Recipe } from '../../models/recipe';
import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { RecipesService } from '../../services/recipes';
import { ShoppingListService } from '../../services/shopping-list';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {

  ;
  recipe: Recipe;
  index: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public slService: ShoppingListService,
              public recipesService: RecipesService, 
              public toastCtrl: ToastController) {
  }

  ngOnInit(){
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onEditRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  onDeleteRecipe(){
    this.recipesService.removeRecipe(this.index);
    const toast = this.toastCtrl.create({
      message: 'Recipe Deleted!',
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
    this.navCtrl.popToRoot();
  }

  onAddIngredients(){
    this.slService.addItems(this.recipe.ingredients);
  }

}
