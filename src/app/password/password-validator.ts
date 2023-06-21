import { AbstractControl } from '@angular/forms';
import { IDifficulty } from '../interfaces/difficulty';
import { IPattern } from '../interfaces/pattern';

const passwordDiff: IDifficulty = {
    easy: false,
    medium: false,
    strong: false
}

export const curDiff: IDifficulty = Object.assign({}, passwordDiff)

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;

    // RegExps for easy password
    const letters: RegExp = /^[A-Za-z]+$/;
    const digits: RegExp = /^[0-9]+$/;
    const symbols: RegExp = /^[ `'",~!@#\$%\^\&*\)\(+=._-]+$/;

    // RegExps for medium password
    const lettersAndDigits: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/u;
    const lettersAndSymbols: RegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+{}\[\]|\:;"'<>,.?\/`~])[^0-9]*$/;
    const digitsAndSymbols: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}\[\]|\:;"'<>,.?\/`~])[^a-zA-Z]*$/;

    // RegExps for hard password
    const lettersAndDigitsAndSymbols: RegExp = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+{}\[\]|\:;"'<>,.?\/`~]).*$/;

    const patterns: IPattern[] = [
        { pattern: letters, name: 'letters' },
        { pattern: digits, name: 'digits' },
        { pattern: symbols, name: 'symbols' },
        { pattern: lettersAndDigits, name: 'lettersAndDigits' },
        { pattern: lettersAndSymbols, name: 'lettersAndSymbols' },
        { pattern: digitsAndSymbols, name: 'digitsAndSymbols' },
        { pattern: lettersAndDigitsAndSymbols, name: 'lettersAndDigitsAndSymbols' }
    ];

    for (const { pattern, name } of patterns) {
        if (pattern.test(value)) {
            if (name === 'letters' || name === 'digits' || name === 'symbols') {
                curDiff.medium = curDiff.strong = false
                curDiff.easy = true
            } else if (name === 'lettersAndDigits' || name === 'lettersAndSymbols' || name === 'digitsAndSymbols') {
                curDiff.easy = curDiff.strong = false
                curDiff.medium = true
            } else if (name === 'lettersAndDigitsAndSymbols') {
                curDiff.easy = curDiff.medium = false
                curDiff.strong = true
            } else {
                curDiff.easy = curDiff.medium = curDiff.strong = false
                console.log('1')
            }

            return { passwordValidator: { pattern: name } }
        }
    }
    return null;
}
