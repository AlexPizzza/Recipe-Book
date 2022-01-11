import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "app/shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService) { }

    @Output() featureSelected = new EventEmitter<string>();
    
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
}