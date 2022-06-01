import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  @Input() item : Item;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { 

    console.log(this.item);
  }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
