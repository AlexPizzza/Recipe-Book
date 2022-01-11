import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is a simply description', 'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg'),
  //   new Recipe('Another Test Recipe', 'This is a simply description for another test recipe', 'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg'),
  // ];
  // @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes(); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeSelected.emit(recipe);
  // }

}
