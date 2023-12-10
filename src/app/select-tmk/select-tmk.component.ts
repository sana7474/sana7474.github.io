import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {SelectTmkItem} from "./select-tmk-item";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-select-tmk',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    FormsModule,
    NgIf
  ],
  templateUrl: './select-tmk.component.html',
  styleUrl: './select-tmk.component.css'
})
export class SelectTmkComponent {
  @Input() items!: SelectTmkItem[] | undefined;
  @Output() selected = new EventEmitter<SelectTmkItem>();

  data: SelectTmkItem[] | undefined;
  isShow: boolean = false;
  inputText: string = '';

  search = () => {
    this.data = this.items?.filter((obj => obj.name.toLowerCase().indexOf(this.inputText.toLowerCase()) !== -1))
  }

  inputClick = () => {
    this.isShow = true

    if (this.inputText == '') this.data = this.items
    else this.search()
  };
  
  changeInput(e: any) {
    this.inputText = e.target.value.toString()
    this.search()
  }

  select(item: SelectTmkItem) {
    this.inputText = item.name
    this.isShow = false
    this.selected.emit(item)
  }
}
