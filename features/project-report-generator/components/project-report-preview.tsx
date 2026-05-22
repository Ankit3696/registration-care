"use client"

import { useProjectReportStore } from "../store/store"

import {
  calculateAnnualProfit,
  calculateAnnualRevenue,
  calculateBreakEvenMonths,
  calculateBusinessScore,
  calculateDSCR,
  calculateEMI,
  calculateMonthlyProfit,
  calculateROI,
  formatCurrency,
  generateWarnings,
  getBusinessHealthStatus,
} from "../utils/calculations"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { generateExecutiveSummary } from "../utils/executive-summary"

export default function ProjectReportPreview() {
  const {
    currentStep,

    businessName,
    ownerName,
    businessType,
    businessLocation,
    businessDescription,

    selectedScheme,

    projectCost,
    ownInvestment,
    loanAmount,
    workingCapital,

    monthlyRevenue,
    monthlyExpenses,
    monthlyRent,
    monthlySalary,
    electricityExpense,
    marketingExpense,
    miscExpense,

    businessSize,
  } = useProjectReportStore()

 const estimatedProfit =
  calculateMonthlyProfit(
    monthlyRevenue,
    monthlyExpenses
  )

const annualRevenue =
  calculateAnnualRevenue(
    monthlyRevenue
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

const annualEMI =
  emi * 12

const dscr =
  calculateDSCR(
    annualProfit,
    annualEMI
  )

const breakEven =
  calculateBreakEvenMonths(
    projectCost,
    estimatedProfit
  )

const businessScore =
  calculateBusinessScore({
    monthlyRevenue,
    monthlyExpenses,
    projectCost,
    ownInvestment,
  })

const warnings =
  generateWarnings({
    monthlyRevenue,
    monthlyExpenses,
    projectCost,
    loanAmount,
    ownInvestment,
  })

const businessHealth =
  getBusinessHealthStatus(
    businessScore
  )

  const executiveSummary =
  generateExecutiveSummary({
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
  })
  const revenueChartData = [
  {
    name: "Revenue",
    value: monthlyRevenue,
  },
  {
    name: "Expenses",
    value: monthlyExpenses,
  },
  {
    name: "Profit",
    value: estimatedProfit,
  },
]

const expenseDistribution = [
  {
    name: "Rent",
    value: monthlyRent,
  },
  {
    name: "Salary",
    value: monthlySalary,
  },
  {
    name: "Electricity",
    value: electricityExpense,
  },
  {
    name: "Marketing",
    value: marketingExpense,
  },
  {
    name: "Misc",
    value: miscExpense,
  },
]

const fundingData = [
  {
    name: "Loan",
    value: loanAmount,
  },
  {
    name: "Own",
    value: ownInvestment,
  },
]

  return (
    <div className="mx-auto w-full max-w-[860px]">
      {/* MOBILE SCALE WRAPPER */}
      <div className="overflow-x-auto pb-4">
        {/* DOCUMENT */}
        <div className="min-w-[760px] rounded-[28px] border border-slate-200 bg-[#f8fafc] shadow-[0_30px_100px_rgba(15,23,42,0.12)]">
          {/* HEADER */}
          <div className="rounded-t-[36px] bg-gradient-to-r from-[#071b44] via-[#0b2864] to-[#12357d] px-10 py-10">
            <div className="flex items-start justify-between gap-8">
              {/* LEFT */}
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full bg-white/10 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur">
                  Registration Care
                </div>

                <h1 className="mt-6 text-3xl font-bold tracking-tight text-white">
                  Business Project Report
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-blue-100">
                  Professional AI-assisted project report for MSME, government schemes and bank loan applications.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Badge
                    label={
                      selectedScheme
                    }
                  />

                  <Badge
                    label={
                      businessType
                    }
                  />

                  <Badge
                    label={
                      businessSize
                    }
                  />
                </div>
              </div>

              {/* SCORE */}
              <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                  Business Score
                </p>

                <div className="mt-4 text-4xl font-bold text-white">
                  {businessScore}
                </div>

                <p className="mt-2 text-sm text-blue-100">
                  Feasibility Score
                </p>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="space-y-6 p-6 sm:p-6 xl:p-10">
            {/* COVER SECTION */}
            <DocumentSection
              title="Business Overview"
              visible={true}
            >
              <div className="grid grid-cols-[1.4fr_420px] gap-6">
                {/* LEFT */}
                <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#12357d]">
                    Proposed Business
                  </p>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                    {businessName ||
                      "Your Business Name"}
                  </h2>

                 <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
  <div className="mb-4 flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#081f4d] text-lg text-white">
      ✨
    </div>

    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#12357d]">
        AI Executive Summary
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Consultant-style business feasibility overview
      </p>
    </div>
  </div>

  <p className="text-sm leading-8 text-slate-600">
    {executiveSummary}
  </p>
</div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <InfoCard
                      label="Business Type"
                      value={
                        businessType
                      }
                    />

                    <InfoCard
                      label="Scheme"
                      value={
                        selectedScheme
                      }
                    />

                    <InfoCard
                      label="Location"
                      value={
                        businessLocation ||
                        "Not Added"
                      }
                    />

                    <InfoCard
                      label="Owner"
                      value={
                        ownerName ||
                        "Not Added"
                      }
                    />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="space-y-5">
                  <InsightCard
                    title="Report Status"
                    value="Live Preview"
                    description="Your project report updates automatically."
                  />

                  <InsightCard
                    title="Scheme Type"
                    value={
                      selectedScheme
                    }
                    description="Government/business loan scheme selected."
                  />

                  <InsightCard
                    title="Estimated Profit"
                    value={`₹ ${estimatedProfit.toLocaleString()}`}
                    description="Based on current revenue and expense inputs."
                  />
                </div>
              </div>
            </DocumentSection>

            {/* STEP 2 */}
            {currentStep >= 2 && (
              <DocumentSection
                title="Project Cost & Means of Finance"
                visible={
                  currentStep >= 2
                }
              >
                <div className="grid grid-cols-2 gap-5">
                  <AmountCard
                    label="Project Cost"
                    value={
                      projectCost
                    }
                  />

                  <AmountCard
                    label="Own Investment"
                    value={
                      ownInvestment
                    }
                  />

                  <AmountCard
                    label="Loan Amount"
                    value={
                      loanAmount
                    }
                  />

                  <AmountCard
                    label="Working Capital"
                    value={
                      workingCapital
                    }
                  />
                </div>

                {/* FUNDING BAR */}
                <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900">
                      Funding Structure
                    </h4>

                    <span className="text-sm text-slate-500">
                      Loan vs Own Contribution
                    </span>
                  </div>

                  <div className="mt-5 flex h-5 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="bg-gradient-to-r from-[#081f4d] to-[#12357d]"
                      style={{
                        width: `${
                          (loanAmount /
                            projectCost) *
                          100
                        }%`,
                      }}
                    />

                    <div
                      className="bg-emerald-500"
                      style={{
                        width: `${
                          (ownInvestment /
                            projectCost) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </DocumentSection>
            )}

            {/* STEP 3 */}
            {currentStep >= 3 && (
              <DocumentSection
                title="Revenue & Financial Projection"
                visible={
                  currentStep >= 3
                }
              >
                <div className="grid grid-cols-3 gap-5">
                  <AmountCard
                    label="Monthly Revenue"
                    value={
                      monthlyRevenue
                    }
                  />

                  <AmountCard
                    label="Monthly Expenses"
                    value={
                      monthlyExpenses
                    }
                  />

                  <AmountCard
                    label="Estimated Profit"
                    value={
                      estimatedProfit
                    }
                  />
                </div>

                {/* EXPENSE BREAKDOWN */}
                <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <h4 className="text-base font-semibold text-slate-900">
                      Expense Analysis
                    </h4>

                    <div className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-[#12357d]">
                      Monthly Projection
                    </div>
                  </div>

                  <div className="space-y-5">
                    <ProgressRow
                      label="Rent"
                      value={
                        monthlyRent
                      }
                      total={
                        monthlyExpenses
                      }
                    />

                    <ProgressRow
                      label="Salary"
                      value={
                        monthlySalary
                      }
                      total={
                        monthlyExpenses
                      }
                    />

                    <ProgressRow
                      label="Electricity"
                      value={
                        electricityExpense
                      }
                      total={
                        monthlyExpenses
                      }
                    />

                    <ProgressRow
                      label="Marketing"
                      value={
                        marketingExpense
                      }
                      total={
                        monthlyExpenses
                      }
                    />

                    <ProgressRow
                      label="Miscellaneous"
                      value={
                        miscExpense
                      }
                      total={
                        monthlyExpenses
                      }
                    />
                  </div>
                </div>

                {/* FINANCIAL INSIGHTS */}
                <div className="mt-8 grid grid-cols-3 gap-5">
                  <InsightStat
                    label="Projected Annual Revenue"
                    value={`₹ ${(
                      monthlyRevenue *
                      12
                    ).toLocaleString()}`}
                  />

                  <InsightStat
                    label="Projected Annual Profit"
                    value={`₹ ${(
                      estimatedProfit *
                      12
                    ).toLocaleString()}`}
                  />

                  <InsightStat
                    label="Business Stability"
                    value={
                      estimatedProfit >
                      50000
                        ? "Strong"
                        : "Moderate"
                    }
                  />
                </div>
              </DocumentSection>
            )}

            {/* ADVANCED FINANCIAL METRICS */}
<div className="mt-8 grid grid-cols-2 gap-5">
  <InsightStat
    label="ROI"
    value={`${roi}%`}
  />

  <InsightStat
    label="DSCR"
    value={dscr.toString()}
  />

  <InsightStat
    label="Estimated EMI"
    value={formatCurrency(
      Math.round(emi)
    )}
  />

  <InsightStat
    label="Break-even"
    value={`${breakEven} Months`}
  />
</div>

{/* BUSINESS HEALTH */}
<div className="mt-8 rounded-[28px] border border-slate-200 bg-gradient-to-r from-[#081f4d] to-[#12357d] p-7 text-white">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
        Business Health
      </p>

      <h3 className="mt-3 text-3xl font-bold">
        {businessHealth}
      </h3>

      <p className="mt-4 max-w-2xl text-sm leading-8 text-blue-100">
        AI-powered business feasibility analysis based on revenue, profitability, investment contribution and financial sustainability.
      </p>
    </div>

    <div className="rounded-[28px] border border-white/10 bg-white/10 px-8 py-6 text-center backdrop-blur">
      <div className="text-5xl font-bold">
        {businessScore}
      </div>

      <p className="mt-2 text-sm text-blue-100">
        Feasibility Score
      </p>
    </div>
  </div>
</div>

{/* WARNINGS */}
{warnings.length > 0 && (
  <div className="mt-8 rounded-[28px] border border-amber-200 bg-amber-50 p-6">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-lg">
        ⚠️
      </div>

      <div>
        <h3 className="text-lg font-semibold text-amber-900">
          Financial Warnings
        </h3>

        <p className="text-sm text-amber-700">
          Some financial indicators may need improvement.
        </p>
      </div>
    </div>

    <div className="mt-6 space-y-4">
      {warnings.map(
        (warning) => (
          <div
            key={warning}
            className="rounded-2xl border border-amber-200 bg-white px-5 py-4 text-sm text-amber-900"
          >
            {warning}
          </div>
        )
      )}
    </div>
  </div>
)}
{/* ANALYTICS DASHBOARD */}
<DocumentSection
  title="Financial Analytics Dashboard"
  visible={currentStep >= 3}
>
  <div className="space-y-8">
    {/* BAR CHART */}
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-slate-900">
          Revenue vs Expenses
        </h4>

        <p className="mt-2 text-sm text-slate-500">
          Monthly financial comparison overview.
        </p>
      </div>

      <div className="h-[250px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={
              revenueChartData
            }
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value">
              {revenueChartData.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={index}
                    fill={
                      index === 0
                        ? "#12357d"
                        : index === 1
                        ? "#ef4444"
                        : "#10b981"
                    }
                  />
                )
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* PIE CHARTS */}
    <div className="grid grid-cols-2 gap-6">
      {/* EXPENSE PIE */}
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-slate-900">
            Expense Distribution
          </h4>

          <p className="mt-2 text-sm text-slate-500">
            Operational expense structure.
          </p>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={
                  expenseDistribution
                }
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {expenseDistribution.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        [
                          "#12357d",
                          "#10b981",
                          "#f59e0b",
                          "#ef4444",
                          "#8b5cf6",
                        ][
                          index %
                            5
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* FUNDING PIE */}
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-slate-900">
            Funding Structure
          </h4>

          <p className="mt-2 text-sm text-slate-500">
            Loan vs own contribution analysis.
          </p>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={fundingData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {fundingData.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        index === 0
                          ? "#12357d"
                          : "#10b981"
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
</DocumentSection>

            {/* STEP 4 */}
            {currentStep >= 4 && (
              <DocumentSection
                title="Infrastructure & Assets"
                visible={
                  currentStep >= 4
                }
              >
                <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-8 py-12 text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Assets & Machinery Section
                  </h3>

                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-500">
                    Dynamic machinery, operational assets, staffing and infrastructure system will appear here based on selected business type.
                  </p>
                </div>
              </DocumentSection>
            )}

            {/* STEP 5 */}
            {currentStep >= 5 && (
              <>
                <DocumentSection
                  title="SWOT Analysis"
                  visible={
                    currentStep >= 5
                  }
                >
                  <div className="grid grid-cols-2 gap-5">
                    <SwotBox
                      title="Strengths"
                      points={[
                        "Strong business potential",
                        "Growing market demand",
                        "Government support opportunity",
                      ]}
                    />

                    <SwotBox
                      title="Weaknesses"
                      points={[
                        "Initial investment dependency",
                        "Competitive market environment",
                      ]}
                    />

                    <SwotBox
                      title="Opportunities"
                      points={[
                        "Expansion possibilities",
                        "Digital growth opportunities",
                        "Increasing customer demand",
                      ]}
                    />

                    <SwotBox
                      title="Threats"
                      points={[
                        "Market competition",
                        "Operational risks",
                      ]}
                    />
                  </div>
                </DocumentSection>

                <DocumentSection
                  title="Final Conclusion"
                  visible={
                    currentStep >= 5
                  }
                >
                  <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6">
                    <h3 className="text-2xl font-bold text-emerald-900">
                      Business Appears Financially Viable
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-emerald-800">
                      Based on the current business projections, revenue structure and funding pattern, this project demonstrates sustainable profitability and long-term growth potential under the selected scheme.
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <FinalStat
                        label="Business Score"
                        value={`${businessScore}/100`}
                      />

                      <FinalStat
                        label="Scheme"
                        value={
                          selectedScheme
                        }
                      />

                      <FinalStat
                        label="Profitability"
                        value={
                          estimatedProfit >
                          50000
                            ? "High"
                            : "Moderate"
                        }
                      />
                    </div>
                  </div>
                </DocumentSection>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function DocumentSection({
  title,
  children,
}: {
  title: string
  visible: boolean
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12357d]">
            Report Section
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h3>
        </div>

        <div className="h-3 w-3 rounded-full bg-emerald-500" />
      </div>

      {children}
    </section>
  )
}

function Badge({
  label,
}: {
  label: string
}) {
  return (
    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
      {label}
    </div>
  )
}

function InsightCard({
  title,
  value,
  description,
}: {
  title: string
  value: string
  description: string
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>

      <h3 className="mt-4 text-2xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  )
}

function InfoCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-900">
        {value}
      </p>
    </div>
  )
}

function AmountCard({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-5 break-all text-3xl font-bold tracking-tight text-slate-900">
        ₹ {value.toLocaleString()}
      </p>
    </div>
  )
}

function ProgressRow({
  label,
  value,
  total,
}: {
  label: string
  value: number
  total: number
}) {
  const width =
    total > 0
      ? (value / total) * 100
      : 0

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">
          {label}
        </span>

        <span className="text-sm text-slate-500">
          ₹ {value.toLocaleString()}
        </span>
      </div>

      <div className="h-4 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#081f4d] to-[#12357d]"
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  )
}

function InsightStat({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-4 text-xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  )
}

function SwotBox({
  title,
  points,
}: {
  title: string
  points: string[]
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
      <h4 className="text-lg font-semibold text-slate-900">
        {title}
      </h4>

      <ul className="mt-5 space-y-4">
        {points.map(
          (point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm leading-7 text-slate-600"
            >
              <div className="mt-3 h-1.5 w-1.5 rounded-full bg-[#12357d]" />

              <span>{point}</span>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

function FinalStat({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
        {label}
      </p>

      <p className="mt-3 text-lg font-bold text-emerald-900">
        {value}
      </p>
    </div>
  )
}