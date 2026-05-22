type ExecutiveSummaryInput = {
  businessName: string
  businessType: string
  businessLocation: string

  selectedScheme: string

  monthlyRevenue: number
  monthlyExpenses: number
  estimatedProfit: number

  roi: number
  dscr: number

  businessScore: number
  businessHealth: string
}

export function generateExecutiveSummary({
  businessName,
  businessType,
  businessLocation,

  selectedScheme,

  monthlyRevenue,
  monthlyExpenses,
  estimatedProfit,

  roi,
  dscr,

  businessScore,
  businessHealth,
}: ExecutiveSummaryInput) {
  const profitability =
    estimatedProfit >= 100000
      ? "strong"
      : estimatedProfit >= 50000
      ? "moderate"
      : "developing"

  const repaymentStrength =
    dscr >= 1.5
      ? "healthy"
      : dscr >= 1.2
      ? "stable"
      : "sensitive"

  const growthPotential =
    roi >= 25
      ? "high"
      : roi >= 15
      ? "promising"
      : "moderate"

  return `
${businessName || "The proposed business"} is a ${businessType.toLowerCase()} business proposed under the ${selectedScheme} scheme in ${businessLocation || "the selected region"}.

Based on the current financial projections, the business demonstrates ${profitability} profitability potential with an estimated monthly revenue of ₹${monthlyRevenue.toLocaleString()} and projected monthly profit of ₹${estimatedProfit.toLocaleString()}.

The project reflects ${growthPotential} long-term growth potential supported by projected ROI performance and market feasibility assumptions. Financial analysis indicates a ${repaymentStrength} repayment structure with a DSCR of ${dscr.toFixed(1)}, supporting the business's ability to manage future financial obligations effectively.

Overall business feasibility has been assessed as ${businessHealth.toLowerCase()} with a calculated business score of ${businessScore}/100. The project appears commercially sustainable and suitable for bank funding consideration under the selected business scheme.

The proposed enterprise also demonstrates potential for employment generation, regional business development and long-term operational sustainability subject to effective execution and financial discipline.
`
}