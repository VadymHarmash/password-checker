import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IDifficulty } from 'src/app/interfaces/difficulty';
import { IPattern } from 'src/app/interfaces/pattern';
import { DifficulyCheckService } from 'src/app/services/difficuly-check.service';

@Component({
  selector: 'app-password-indicators',
  templateUrl: './password-indicators.component.html',
  styleUrls: ['./password-indicators.component.scss']
})
export class PasswordIndicatorsComponent implements OnInit, OnDestroy {
  public firstLevelColor: string = "#999999";
  public secondLevelColor: string = "#999999";
  public thirdLevelColor: string = "#999999";

  @Input() public passwordLevel: IDifficulty
  @Input() public passwordValue: string
  @Input() public passwordPatterns: IPattern[]
  @Input() public passwordInput: FormControl

  private _subscription: Subscription

  constructor(private difficultyCheckService: DifficulyCheckService) { }

  ngOnInit() {
    this._subscription = this.passwordInput.valueChanges.subscribe((passwordValue) => {
      this.difficultyCheckService.checkLevel(this.passwordPatterns, this.passwordLevel, passwordValue)

      if (!passwordValue) {
        this.firstLevelColor = this.secondLevelColor = this.thirdLevelColor = '#999999'
      } else if (passwordValue.length < 8) {
        this.firstLevelColor = this.secondLevelColor = this.thirdLevelColor = '#ff0000'
      } else {
        if (this.passwordLevel.easy) {
          this.firstLevelColor = '#ff0000'
          this.secondLevelColor = this.thirdLevelColor = '#999999'
        } else if (this.passwordLevel.medium) {
          this.firstLevelColor = this.secondLevelColor = '#ffff00'
          this.thirdLevelColor = '#999999'
        } else if (this.passwordLevel.strong) {
          this.firstLevelColor = this.secondLevelColor = this.thirdLevelColor = '#00ff00'
        }
      }
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
