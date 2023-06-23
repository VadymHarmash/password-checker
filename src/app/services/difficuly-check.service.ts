// import { Injectable } from '@angular/core';
// import { IDifficulty } from '../interfaces/difficulty';

// @Injectable({
//   providedIn: 'root'
// })
// export class DifficulyCheckService {

//   constructor() { }

//   checkLevel(patternName: string, passwordDiff: IDifficulty): void {
//     if (patternName === 'letters' || patternName === 'digits' || patternName === 'symbols') {
//       passwordDiff.medium = passwordDiff.strong = false
//       passwordDiff.easy = true
//     } else if (patternName === 'lettersAndDigits' || patternName === 'lettersAndSymbols' || patternName === 'digitsAndSymbols') {
//       passwordDiff.easy = passwordDiff.strong = false
//       passwordDiff.medium = true
//     } else if (patternName === 'lettersAndDigitsAndSymbols') {
//       passwordDiff.easy = passwordDiff.medium = false
//       passwordDiff.strong = true
//     } else {
//       passwordDiff.easy = passwordDiff.medium = passwordDiff.strong = false
//     }
//   }
// }
