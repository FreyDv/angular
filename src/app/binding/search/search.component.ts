import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  ngOnInit() {
    this.searchString = '';
  }

  searchString: string = '';

  onSearchChange(event: Event) {
    this.searchString = (event.target as HTMLInputElement).value;
  }

  isSearchDisabled(): boolean {
    return !this.searchString;
  }
  @Output()
  onSearchChanged: EventEmitter<string> = new EventEmitter<string>();
  searchChanged() {
    this.onSearchChanged.emit(this.searchString);
  }

  onButtonClick(el: HTMLInputElement) {
    this.searchString = el.value;
    this.searchChanged();
  }
}
