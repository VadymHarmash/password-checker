import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IDifficulty } from 'src/app/interfaces/difficulty';
import { IPattern } from 'src/app/interfaces/pattern';
import { passwordDiff, passwordValidator, patterns } from 'src/app/validators/password-validator';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent implements OnInit, OnDestroy {
  public form: FormGroup
  public password: FormControl

  public level: IDifficulty = passwordDiff
  public patternsCollection: IPattern[] = patterns;

  public inputValue: string

  private _subscription: Subscription

  constructor() { }

  ngOnInit(): void {
    this.createFormControls()
    this.createForm()
    this._subscription = this.password.valueChanges.subscribe((value) => {
      this.inputValue = value
    })
  }

  createFormControls() {
    this.password = new FormControl("", [passwordValidator])
  }

  createForm() {
    this.form = new FormGroup({
      password: this.password
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
