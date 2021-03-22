import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  styleUrls: ['./square.component.scss'],
  template: `
    <button class="fill" nbButton *ngIf="!value">{{ value }}</button>
    <button class="fill" nbButton hero status="danger" *ngIf="value == 'X'">{{ value }}</button>
    <button class="fill" nbButton hero status="success" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
