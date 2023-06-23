import { AbstractControl } from '@angular/forms';
import { IDifficulty } from '../interfaces/difficulty';
import { IPattern } from '../interfaces/pattern';

export const passwordDiff: IDifficulty = { easy: false, medium: false, strong: false }

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;

    const patterns: IPattern[] = [
        { pattern: /^[A-Za-z]+$/, name: 'letters' },
        { pattern: /^[0-9]+$/, name: 'digits' },
        { pattern: /^[ `'",~!@#\$%\^\&*\)\(+=._-]+$/, name: 'symbols' },
        { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/u, name: 'lettersAndDigits' },
        { pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+{}\[\]|\:;"'<>,.?\/`~])[^0-9]*$/, name: 'lettersAndSymbols' },
        { pattern: /^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}\[\]|\:;"'<>,.?\/`~])[^a-zA-Z]*$/, name: 'digitsAndSymbols' },
        { pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+{}\[\]|\:;"'<>,.?\/`~]).*$/, name: 'lettersAndDigitsAndSymbols' }
    ];

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
            return { passwordValidator: { pattern: name } }
        }
    }
    return null;
}
