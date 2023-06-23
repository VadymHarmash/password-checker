import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { passwordValidator, passwordDiff, patterns } from './password-validator';
import { IDifficulty } from '../interfaces/difficulty';
import { Subscription } from 'rxjs';
import { IPattern } from '../interfaces/pattern';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit, OnDestroy {
  public form: FormGroup
  public password: FormControl

  public level: IDifficulty = passwordDiff
  public patternsCollection: IPattern[] = patterns;

  public inputValue: string

  private _subscription: Subscription

  constructor(){}

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
