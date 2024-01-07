import { Component, OnInit, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { SearchComponent } from './search/search.component';
import products from './products-new.json';
import { Product } from './product.dto';
import { ProductComponent } from './product/product.component';
import { InStockFilterComponent } from './in-stock-filter/in-stock-filter.component';
import { FilterOptionsNamesEnum } from './in-stock-filter/filterOptionsNamesEnum';
@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [NgIf, SearchComponent, ProductComponent, NgForOf, InStockFilterComponent],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  protected readonly products: Product[] = products;
  protected readonly length = length;

  filterValue: FilterOptionsNamesEnum = FilterOptionsNamesEnum.ALL;

  searchString: string;

  onSearchChanged(val: string) {
    this.searchString = val;
  }

  onFilterChanged(filterValue: FilterOptionsNamesEnum) {
    this.filterValue = filterValue;
  }

  countExisting(products: Product[]): {
    all: number;
    inStock: number;
    outOfStock: number;
  } {
    const all = products.length;
    const inStock = products.filter(el => el.inStock > 0).length;
    return { all, inStock, outOfStock: all - inStock };
  }

  protected readonly FilterOptionsNamesEnum = FilterOptionsNamesEnum;
}
