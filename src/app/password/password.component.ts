import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { passwordValidator, curDiff } from './password-validator';
import { IDifficulty } from '../interfaces/difficulty';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit, OnDestroy {
  public inputValue: string
  public form: FormGroup
  public password: FormControl
  public level: IDifficulty = curDiff

  public firstLevelColor: string = "#999999";
  public secondLevelColor: string = "#999999";
  public thirdLevelColor: string = "#999999";

  private _subscription: Subscription

  ngOnInit(): void {
    this.createFormControls()
    this.createForm()
    this._subscription = this.password.valueChanges.subscribe((value) => {
      if (!value) {
        this.firstLevelColor = this.secondLevelColor = this.thirdLevelColor = '#999999'
      } else if (value.length < 8) {
        this.firstLevelColor = this.secondLevelColor = this.thirdLevelColor = '#ff0000'
      } else {
        if (this.level.easy) {
          this.firstLevelColor = '#ff0000'
          this.secondLevelColor = this.thirdLevelColor = '#999999'
        } else if (this.level.medium) {
          this.firstLevelColor = this.secondLevelColor = '#ffff00'
          this.thirdLevelColor = '#999999'
        } else if (this.level.strong) {
          this.firstLevelColor = this.secondLevelColor = this.thirdLevelColor = '#00ff00'
        }
      }
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
