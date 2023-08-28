import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css'],
})
export class InputLabelComponent implements OnInit {
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'Placeholder';

  constructor() {}

  ngOnInit(): void {}
}
