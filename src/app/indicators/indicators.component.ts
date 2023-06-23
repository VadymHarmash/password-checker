import { Component, Input } from '@angular/core';
import { IDifficulty } from '../interfaces/difficulty';
import { Subscription } from 'rxjs';
import { DifficulyCheckService } from '../services/difficuly-check.service';
import { IPattern } from '../interfaces/pattern';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent {

  public firstLevelColor: string = "#999999";
  public secondLevelColor: string = "#999999";
  public thirdLevelColor: string = "#999999";

  @Input() passwordLevel: IDifficulty
  @Input() passwordValue: string
  @Input() passwordPatterns: IPattern[]
  @Input() passwordInput: FormControl

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
