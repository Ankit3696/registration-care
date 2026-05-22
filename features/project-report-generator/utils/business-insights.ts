type InsightInput = {
  businessScore: number
  roi: number
  dscr: number
  monthlyRevenue: number
  monthlyExpenses: number
  estimatedProfit: number
  selectedScheme: string
}

export function generateBusinessInsights({
  businessScore,
  roi,
  dscr,
  monthlyRevenue,
  monthlyExpenses,
  estimatedProfit,
  selectedScheme,
}: InsightInput) {
  const insights: string[] = []

  /* BUSINESS SCORE */
  if (businessScore >= 80) {
    insights.push(
      "Strong business feasibility detected with high funding potential."
    )
  } else if (
    businessScore >= 60
  ) {
    insights.push(
      "Business profile appears stable with moderate growth potential."
    )
  } else {
    insights.push(
      "Business profile needs improvement for stronger funding confidence."
    )
  }

  /* ROI */
  if (roi >= 25) {
    insights.push(
      "Projected ROI indicates strong profitability potential."
    )
  } else if (roi >= 15) {
    insights.push(
      "Projected ROI appears moderate and sustainable."
    )
  } else {
    insights.push(
      "Low ROI detected. Consider reducing operational expenses."
    )
  }

  /* DSCR */
  if (dscr >= 1.5) {
    insights.push(
      "Healthy DSCR detected with good repayment capability."
    )
  } else {
    insights.push(
      "Loan repayment capacity may need improvement."
    )
  }

  /* PROFIT */
  if (
    estimatedProfit > 0
  ) {
    insights.push(
      "Monthly profitability projection is positive."
    )
  } else {
    insights.push(
      "Business expenses currently exceed projected revenue."
    )
  }

  /* SCHEME */
  if (
    selectedScheme ===
    "PMEGP"
  ) {
    insights.push(
      "PMEGP scheme alignment detected for small business funding."
    )
  }

  if (
    selectedScheme ===
    "MUDRA"
  ) {
    insights.push(
      "MUDRA scheme appears suitable for micro business financing."
    )
  }

  /* REVENUE */
  if (
    monthlyRevenue >=
    monthlyExpenses * 2
  ) {
    insights.push(
      "Strong revenue-to-expense ratio detected."
    )
  }

  return insights
}