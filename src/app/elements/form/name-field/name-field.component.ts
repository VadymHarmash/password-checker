import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameFieldComponent),
      multi: true
    }
  ]
})
export class NameFieldComponent implements ControlValueAccessor {
  public name: string = '';

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  get value(): string {
    return this.name;
  }

  set value(val: string) {
    if (val !== this.name) {
      this.name = val;
      this.onChangeCallback(val);
    }
  }

  writeValue(value: any) {
    if (value !== this.name) {
      this.name = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
