import { Injectable } from '@angular/core';
import { IDifficulty } from '../interfaces/difficulty';
import { IPattern } from '../interfaces/pattern';

@Injectable({
    providedIn: 'root'
})
export class DifficulyCheckService {

    constructor() { }

    checkLevel(patterns: IPattern[], passwordDiff: IDifficulty, value: string): void {
        for (const { pattern, name } of patterns) {
            if (pattern.test(value)) {
                if (name === 'letters' || name === 'digits' || name === 'symbols') {
                    passwordDiff.medium = passwordDiff.strong = false
                    passwordDiff.easy = true
                } else if (name === 'lettersAndDigits' || name === 'lettersAndSymbols' || name === 'digitsAndSymbols') {
                    passwordDiff.easy = passwordDiff.strong = false
                    passwordDiff.medium = true
                } else if (name === 'lettersAndDigitsAndSymbols') {
                    passwordDiff.easy = passwordDiff.medium = false
                    passwordDiff.strong = true
                } else {
                    passwordDiff.easy = passwordDiff.medium = passwordDiff.strong = false
                }
            }
        }
    }
}
