export function toCompanyContribution (contribution, match) {
  if (match && contribution) {
    return Number.parseFloat((match * contribution)/100);
  }
  return 0;
}

export function calculateInterest (total, rate) {
  if (total && rate) {
    return Number.parseFloat(total * rate);
  }
  return 0;
}

export function calculate401K (yourContribution, companyContribution, interest) {
  return yourContribution + companyContribution + interest;
}

export function calculation (age, contribution, companyMatch, interest = 0.08, retirementAge = 59.5) {
  let prevAmount = 0;
  let userCalculationDetails = [];

  while (age <= Math.floor(retirementAge)) {
    let companyContribution = toCompanyContribution(contribution, companyMatch);
    let totalContribution = Number.parseFloat(contribution + companyContribution + prevAmount);
    let interestAmount = calculateInterest(totalContribution, interest);
    let finalValue = calculate401K(contribution, companyContribution, interestAmount);

    userCalculationDetails.push({
      age,
      contribution,
      companyContribution,
      interest: interestAmount,
      value401K: finalValue
    });
    prevAmount = finalValue;
    age += 1;
  }

  return userCalculationDetails;
}
