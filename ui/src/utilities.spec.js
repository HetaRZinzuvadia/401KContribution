import test from 'tape'
import { toCompanyContribution, calculateInterest, calculate401K } from './utilities'

test('toCompanyContribution does calculation perfectly from given percentage and user\'s contrinution correctly',
  (tape) => {
    let actualResult = toCompanyContribution(8000, 50)
    let expectedResult = 4000
    tape.deepEqual(actualResult, expectedResult)

    actualResult = toCompanyContribution()
    expectedResult = 0
    tape.deepEqual(actualResult, expectedResult)
})

test('calculateInterest does calculation perfectly from given total amount and rate correctly',
  (tape) => {
    let actualResult = calculateInterest(12000, 8)
    let expectedResult = 960
    tape.deepEqual(actualResult, expectedResult)

    actualResult = toCompanyContribution()
    expectedResult = 0
    tape.deepEqual(actualResult, expectedResult)
})

test('calculate401K does calculation perfectly from given aamounts correctly',
  (tape) => {
    let actualResult = calculate401K(8000, 4000, 960)
    let expectedResult = 12960
    tape.deepEqual(actualResult, expectedResult)
})
