import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.dto';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Input()
  searchString: string = '';

  currentPhoto: string = '';

  ngOnInit() {
    this.currentPhoto = this.product.imageSrc;
  }

  calculatePriseWithDiscount(): number | string {
    if (this.product.discount) {
      return this.product.price - (this.product.discount * this.product.price) / 100;
    } else {
      return this.product.price;
    }
  }

  count = 0;
  incrementOrderCount() {
    this.count === this.product.inStock ? this.count : this.count++;
  }

  decrementOrderCount() {
    this.count !== 0 ? this.count-- : this.count;
  }
}
