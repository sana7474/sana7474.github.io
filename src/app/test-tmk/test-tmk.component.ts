import {Component, Input} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {TestTmkItem} from "./test-tmk-item";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {ICountAnswer} from "./ICountAnswer";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-test-tmk',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatRadioModule,
    NgForOf,
    MatInputModule,
    MatListModule,
    NgStyle,
    NgIf,
    MatCardModule
  ],
  templateUrl: './test-tmk.component.html',
  styleUrl: './test-tmk.component.css'
})
export class TestTmkComponent {
  @Input() items!: TestTmkItem[] | undefined;
  countAnswer: ICountAnswer = {Right: 0, Wrong: 0}
  showDialog: boolean = false;
  percent: number = 0;


  setColor(id: number, index: number, isCheck: boolean | undefined) {
    this.items?.map(value => {
      if (value.id == id) {
        value.disabled = true;
        value.answers[index].color = "red"
        value.answers.map(v => {
          if (v.right) v.color = 'green'
        })

        if (isCheck) this.countAnswer.Right += 1
        else this.countAnswer.Wrong += 1
      }
    })

    if (this.countAnswer.Right + this.countAnswer.Wrong == this.items?.length) {
      this.percent = 100 / (this.items?.length / this.countAnswer.Right);
      this.showDialog = true;
    }
  }
}
