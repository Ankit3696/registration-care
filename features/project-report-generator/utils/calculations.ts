export function calculateMonthlyProfit(
  revenue: number,
  expenses: number
) {
  return revenue - expenses
}

export function calculateAnnualRevenue(
  revenue: number
) {
  return revenue * 12
}

export function calculateAnnualProfit(
  revenue: number,
  expenses: number
) {
  return (
    (revenue - expenses) * 12
  )
}

export function calculateROI(
  annualProfit: number,
  investment: number
) {
  if (investment <= 0) {
    return 0
  }

  return Number(
    (
      (annualProfit /
        investment) *
      100
    ).toFixed(2)
  )
}

export function calculateBreakEvenMonths(
  investment: number,
  monthlyProfit: number
) {
  if (monthlyProfit <= 0) {
    return 0
  }

  return Number(
    (
      investment /
      monthlyProfit
    ).toFixed(1)
  )
}

export function calculateEMI(
  loanAmount: number,
  annualInterestRate: number,
  years: number
) {
  const monthlyRate =
    annualInterestRate /
    12 /
    100

  const months = years * 12

  if (
    loanAmount <= 0 ||
    monthlyRate <= 0 ||
    months <= 0
  ) {
    return 0
  }

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(
        1 + monthlyRate,
        months
      )) /
    (Math.pow(
      1 + monthlyRate,
      months
    ) -
      1)

  return Number(
    emi.toFixed(2)
  )
}

export function calculateDSCR(
  annualProfit: number,
  annualEMI: number
) {
  if (annualEMI <= 0) {
    return 0
  }

  return Number(
    (
      annualProfit /
      annualEMI
    ).toFixed(2)
  )
}

export function calculateBusinessScore({
  monthlyRevenue,
  monthlyExpenses,
  projectCost,
  ownInvestment,
}: {
  monthlyRevenue: number
  monthlyExpenses: number
  projectCost: number
  ownInvestment: number
}) {
  let score = 50

  const profit =
    monthlyRevenue -
    monthlyExpenses

  const margin =
    monthlyRevenue > 0
      ? (profit /
          monthlyRevenue) *
        100
      : 0

  const contribution =
    projectCost > 0
      ? (ownInvestment /
          projectCost) *
        100
      : 0

  /* PROFITABILITY */
  if (margin >= 40) {
    score += 20
  } else if (margin >= 25) {
    score += 15
  } else if (margin >= 10) {
    score += 10
  }

  /* OWNER CONTRIBUTION */
  if (contribution >= 35) {
    score += 15
  } else if (
    contribution >= 20
  ) {
    score += 10
  }

  /* REVENUE SCALE */
  if (
    monthlyRevenue >= 500000
  ) {
    score += 10
  } else if (
    monthlyRevenue >= 100000
  ) {
    score += 5
  }

  return Math.min(score, 100)
}

export function generateWarnings({
  monthlyRevenue,
  monthlyExpenses,
  projectCost,
  loanAmount,
  ownInvestment,
}: {
  monthlyRevenue: number
  monthlyExpenses: number
  projectCost: number
  loanAmount: number
  ownInvestment: number
}) {
  const warnings: string[] =
    []

  const profit =
    monthlyRevenue -
    monthlyExpenses

  /* LOW PROFIT */
  if (profit <= 10000) {
    warnings.push(
      "Projected monthly profit appears very low."
    )
  }

  /* HIGH EXPENSES */
  if (
    monthlyRevenue > 0 &&
    monthlyExpenses /
      monthlyRevenue >
      0.75
  ) {
    warnings.push(
      "Operational expenses appear too high compared to revenue."
    )
  }

  /* LOW CONTRIBUTION */
  if (
    projectCost > 0 &&
    ownInvestment /
      projectCost <
      0.1
  ) {
    warnings.push(
      "Own investment contribution is very low."
    )
  }

  /* HIGH LOAN */
  if (
    projectCost > 0 &&
    loanAmount /
      projectCost >
      0.9
  ) {
    warnings.push(
      "Loan dependency appears too high for this project."
    )
  }

  return warnings
}

export function getBusinessHealthStatus(
  score: number
) {
  if (score >= 85) {
    return "Excellent"
  }

  if (score >= 70) {
    return "Strong"
  }

  if (score >= 55) {
    return "Moderate"
  }

  return "Weak"
}

export function formatCurrency(
  amount: number
) {
  return `₹ ${amount.toLocaleString(
    "en-IN"
  )}`
}