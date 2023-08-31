import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputLabelComponent),
      multi: true,
    },
  ],
})
export class InputLabelComponent implements ControlValueAccessor {
  @Input() label: string = 'Label';
  @Input() formControlName!: string;
  @Input() placeholder: string = 'Placeholder';

  innerValue: any = '';

  onChange: any = () => {};

  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched() {}

  writeValue(value: any): void {
    if (value !== undefined) {
      this.innerValue = value;
    }
  }

  updateValue(event: any): void {
    this.innerValue = event.target.value;
    this.onChange(this.innerValue);
  }
}
