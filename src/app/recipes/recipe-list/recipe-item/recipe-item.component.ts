import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeService } from 'app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() selectedItem = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onSelectedItem() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
