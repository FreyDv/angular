import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {

  data = {
    name: "IPnone",
    model: "XR",
    price: 5.67,
    quantity: 10
  }

  needBy = 0

  more(){
    this.needBy === this.data.quantity ? this.needBy : this.needBy++
  }

  less(){
    this.needBy !== 0 ? this.needBy-- : this.needBy
  }
}


