import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientClicked = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {  
    this.ingredientClicked.emit({name: nameInput.value, amount: Number(amountInput.value)}); 
  }

}
