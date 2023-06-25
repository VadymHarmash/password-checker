import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IDifficulty } from 'src/app/interfaces/difficulty';
import { passwordDiff } from 'src/app/validators/password-validator';

@Component({
  selector: 'app-password-messages',
  templateUrl: './password-messages.component.html',
  styleUrls: ['./password-messages.component.scss']
})
export class PasswordMessagesComponent implements OnInit, OnDestroy {

  public level: IDifficulty = passwordDiff

  @Input() public passwordValue: string
  @Input() public passwordInput: FormControl

  private _subscription: Subscription

  ngOnInit(): void {
    this._subscription = this.passwordInput.valueChanges.subscribe((value) => {
      this.passwordValue = value
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
