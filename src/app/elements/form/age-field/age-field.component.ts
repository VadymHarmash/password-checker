import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-age-field',
  templateUrl: './age-field.component.html',
  styleUrls: ['./age-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AgeFieldComponent),
    multi: true,
  }],
})
export class AgeFieldComponent implements ControlValueAccessor{
  public value: number = 0;

  public valueChanges: Subject<number> = new Subject<number>();
  public touches: Subject<number> = new Subject();

  registerOnChange(fn: any) {
    this.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  writeValue(value: number) {
    this.value = value;
  }

  updateValue(value: number) {
    this.value = value;
    this.value < 0 ? this.value = 0 : this.value
    this.valueChanges.next(value);
  }

  touch() {
    this.touches.next(this.value);
  }
}
