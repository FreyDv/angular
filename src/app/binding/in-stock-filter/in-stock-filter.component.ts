import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterOptionsNamesEnum } from './filterOptionsNamesEnum';

@Component({
  selector: 'app-in-stock-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './in-stock-filter.component.html',
  styleUrl: './in-stock-filter.component.scss',
})
export class InStockFilterComponent {
  selectedFilteredButton: FilterOptionsNamesEnum = FilterOptionsNamesEnum.ALL;

  @Input()
  countInCategory: { all: number; inStock: number; outOfStock: number } = {
    all: 0,
    inStock: 0,
    outOfStock: 0,
  };

  @Output()
  selectedButtonFilterChanged: EventEmitter<FilterOptionsNamesEnum> =
    new EventEmitter<FilterOptionsNamesEnum>();

  onSelectedButtonFilterChanged() {
    this.selectedButtonFilterChanged.emit(this.selectedFilteredButton);
  }

  protected readonly FilterOptionsNamesEnum = FilterOptionsNamesEnum;
}
