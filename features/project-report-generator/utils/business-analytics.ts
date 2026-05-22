import {
  calculateAnnualProfit,
  calculateBusinessScore,
  calculateDSCR,
  calculateEMI,
  calculateMonthlyProfit,
  calculateROI,
  getBusinessHealthStatus,
} from "./calculations"

import { generateBusinessInsights } from "./business-insights"

type AnalyticsInput = {
  selectedScheme: string

  projectCost: number
  ownInvestment: number
  loanAmount: number

  monthlyRevenue: number
  monthlyExpenses: number
}

export function generateBusinessAnalytics({
  selectedScheme,

  projectCost,
  ownInvestment,
  loanAmount,

  monthlyRevenue,
  monthlyExpenses,
}: AnalyticsInput) {
  /* CORE */
  const estimatedProfit =
    calculateMonthlyProfit(
      monthlyRevenue,
      monthlyExpenses
    )

  const annualProfit =
    calculateAnnualProfit(
      monthlyRevenue,
      monthlyExpenses
    )

  const roi = calculateROI(
    annualProfit,
    projectCost
  )

  const emi = calculateEMI(
    loanAmount,
    12,
    5
  )

  const dscr = calculateDSCR(
    annualProfit,
    emi * 12
  )

  const businessScore =
    calculateBusinessScore({
      monthlyRevenue,
      monthlyExpenses,
      projectCost,
      ownInvestment,
    })

  const businessHealth =
    getBusinessHealthStatus(
      businessScore
    )

  /* EXTRA ANALYTICS */
  const profitMargin =
    monthlyRevenue > 0
      ? Math.round(
          (estimatedProfit /
            monthlyRevenue) *
            100
        )
      : 0

  const breakEvenMonths =
    estimatedProfit > 0
      ? Math.ceil(
          projectCost /
            estimatedProfit
        )
      : 0

  const loanReadiness =
    businessScore >= 80
      ? "High"
      : businessScore >= 60
      ? "Moderate"
      : "Low"

  const riskLevel =
    dscr >= 1.5 &&
    profitMargin >= 25
      ? "Low"
      : dscr >= 1.2
      ? "Moderate"
      : "High"

  /* AI INSIGHTS */
  const aiInsights =
    generateBusinessInsights({
      businessScore,
      roi,
      dscr,
      monthlyRevenue,
      monthlyExpenses,
      estimatedProfit,
      selectedScheme,
    })

  return {
    estimatedProfit,
    annualProfit,

    roi,
    emi,
    dscr,

    businessScore,
    businessHealth,

    profitMargin,
    breakEvenMonths,

    loanReadiness,
    riskLevel,

    aiInsights,
  }
}