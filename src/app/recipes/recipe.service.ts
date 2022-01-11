import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService) { }

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Tasty Schnitzel', 
    //         'A super-tasty Schintzel - just awesome!', 
    //         'https://www.earthfoodandfire.com/wp-content/uploads/2021/03/authentic-german-pork-schnitzel.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20),     
    //         ]),
    //     new Recipe(
    //         'Big Fat Burger', 
    //         'What else you need to say?', 
    //         'https://www.mashed.com/img/gallery/fast-food-hamburgers-ranked-worst-to-best/intro-1540401194.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Salad', 1),
    //             new Ingredient('Tomatoes', 2),
    //             new Ingredient('Cheese', 1),
    //             new Ingredient('Meat', 1),
    //         ]),
    // ];

    private recipes: Recipe[] = [];

    getRecipes() {
        return [...this.recipes];
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}