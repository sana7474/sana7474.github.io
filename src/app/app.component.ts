import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SelectTmkComponent} from "./select-tmk/select-tmk.component";
import {SelectTmkItem} from "./select-tmk/select-tmk-item";
import {FormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {TestTmkComponent} from "./test-tmk/test-tmk.component";
import data from "../assets/data.json";
import test from "../assets/test.json";
import {TestTmkItem} from "./test-tmk/test-tmk-item";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SelectTmkComponent, FormsModule, MatTabsModule, TestTmkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: SelectTmkItem[] = data;
  // @ts-ignore
  answers: TestTmkItem[] = test;


  selected(e: SelectTmkItem) {
    console.log(e)
  }
}
