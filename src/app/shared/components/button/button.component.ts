import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() name: string = 'Button';
  @Input() backgroundColor: string = '#2196f3';
  @Input() color: string = 'white';
  @Input() borderColor: string = '#2196f3';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  get buttonStyle() {
    return {
      'background-color': this.backgroundColor,
      color: this.color,
      border: `1px solid ${this.borderColor}`,
    };
  }

  onClick() {
    this.buttonClick.emit();
  }
}
