"use client"

import { useMemo, useState } from "react"

import ProjectReportForm from "@/features/project-report-generator/components/project-report-form"
import ProjectReportPreview from "@/features/project-report-generator/components/project-report-preview"
import StepNavigation from "@/features/project-report-generator/components/step-navigation"
import { useProjectReportStore } from "@/features/project-report-generator/store/store"

import {
  calculateAnnualProfit,
  calculateBusinessScore,
  calculateDSCR,
  calculateEMI,
  calculateMonthlyProfit,
  calculateROI,
  getBusinessHealthStatus,
} from "@/features/project-report-generator/utils/calculations"

import { generateBusinessInsights } from "@/features/project-report-generator/utils/business-insights"

export default function ProjectReportGeneratorPage() {
  const [showMobilePreview, setShowMobilePreview] =
    useState(false)

    const {
  selectedScheme,

  projectCost,
  ownInvestment,
  loanAmount,

  monthlyRevenue,
  monthlyExpenses,
} = useProjectReportStore()

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

const aiInsights = useMemo(
  () =>
    generateBusinessInsights({
      businessScore,
      roi,
      dscr,
      monthlyRevenue,
      monthlyExpenses,
      estimatedProfit,
      selectedScheme,
    }),
  [
    businessScore,
    roi,
    dscr,
    monthlyRevenue,
    monthlyExpenses,
    estimatedProfit,
    selectedScheme,
  ]
)

  return (
    <main className="min-h-screen bg-[#f3f6fb]">
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">
  <div className="mx-auto max-w-[1700px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
    <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
      {/* LEFT */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#12357d] sm:px-4 sm:py-1.5 sm:text-[11px]">
          Registration Care • AI Business Suite
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-4xl">
          AI Business Project Report Generator
        </h1>

        <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-8">
          Create professional MSME, PMEGP, MUDRA and bank-loan-ready project reports with AI-powered financial analysis and intelligent business insights.
        </p>
      </div>

      {/* DESKTOP FEATURES */}
      <div className="hidden grid-cols-2 gap-4 sm:grid-cols-4 xl:grid">
        <TopFeatureCard
          title="AI Assisted"
          subtitle="Smart report generation"
        />

        <TopFeatureCard
          title="Govt Schemes"
          subtitle="PMEGP, Mudra & more"
        />

        <TopFeatureCard
          title="Financial AI"
          subtitle="ROI, DSCR & analytics"
        />

        <TopFeatureCard
          title="PDF Reports"
          subtitle="Bank-ready exports"
        />
      </div>
    </div>
  </div>
</section>

      {/* MAIN */}
      <section className="mx-auto max-w-[1700px] px-3 py-4 pb-32 sm:px-6 sm:py-6 lg:px-8">
        {/* STEP NAV */}
        <div className="mb-4 rounded-[28px] border border-slate-200 bg-white p-3 sm:mb-6 sm:rounded-[32px] sm:p-5 shadow-sm">
          <StepNavigation />
        </div>

       
        {/* DESKTOP WORKSPACE */}
        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[520px_minmax(0,1fr)]">
          {/* LEFT PANEL */}
          <div className="space-y-6">
            {/* FORM CARD */}
            <div className="rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
              {/* HEADER */}
              <div className="border-b border-slate-200 px-6 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#12357d]">
                      Guided Workflow
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-slate-900">
                      Build Your Report
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      Fill your business, financial and loan details step-by-step to generate a professional project report.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#081f4d] px-4 py-3 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                      Status
                    </p>

                    <p className="mt-2 text-sm font-bold text-white">
                      In Progress
                    </p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="p-4 sm:p-6">
                <ProjectReportForm />
              </div>
            </div>

            {/* AI INSIGHTS PANEL */}
           {/* AI INSIGHTS PANEL */}
<div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#081f4d] via-[#0b2864] to-[#12357d] p-6 text-white shadow-[0_20px_70px_rgba(8,31,77,0.25)]">
  {/* HEADER */}
  <div className="flex items-start justify-between gap-4">
    <div>
      <div className="inline-flex rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
        AI Intelligence
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        Live Business Insights
      </h3>

      <p className="mt-3 text-sm leading-8 text-blue-100">
        Real-time financial analysis and business feasibility insights powered by your live project data.
      </p>
    </div>

    <div className="hidden h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-3xl backdrop-blur lg:flex">
      🧠
    </div>
  </div>

  {/* SCORE */}
  <div className="mt-8 rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
          Business Health Score
        </p>

        <h4 className="mt-3 text-4xl font-bold">
          {businessScore}/100
        </h4>

        <p className="mt-2 text-sm text-blue-100">
          {businessHealth}
        </p>
      </div>

      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-emerald-400 text-xl font-bold text-white">
        {businessScore >= 80
          ? "A+"
          : businessScore >= 60
          ? "B+"
          : "C"}
      </div>
    </div>

    <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-emerald-400"
        style={{
          width: `${businessScore}%`,
        }}
      />
    </div>
  </div>

  {/* METRICS */}
  <div className="mt-6 grid grid-cols-2 gap-4">
    <InsightCard
      title="ROI"
      value={`${roi}%`}
      subtitle="Return on investment"
    />

    <InsightCard
      title="DSCR"
      value={dscr.toFixed(1)}
      subtitle="Loan repayment strength"
    />

    <InsightCard
      title="EMI"
      value={`₹${Math.round(
        emi
      ).toLocaleString()}`}
      subtitle="Estimated monthly EMI"
    />

    <InsightCard
      title="Profit"
      value={`₹${estimatedProfit.toLocaleString()}`}
      subtitle="Projected monthly profit"
    />
  </div>

  {/* AI INSIGHTS */}
  <div className="mt-6 rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/20 text-xl">
        ✨
      </div>

      <div>
        <h4 className="text-lg font-semibold">
          AI Recommendations
        </h4>

        <p className="mt-1 text-sm text-blue-100">
          Dynamic feasibility analysis
        </p>
      </div>
    </div>

    <div className="mt-6 space-y-4">
      {aiInsights.map(
        (insight) => (
          <InsightItem
            key={insight}
            text={insight}
          />
        )
      )}
    </div>
  </div>
</div>
            {/* HELP PANEL */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-2xl">
                  💡
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Pro Tips
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Add realistic revenue and expense projections for better business feasibility analysis and stronger loan approval probability.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <HelpItem text="Maintain realistic profit margins." />

                <HelpItem text="Higher owner contribution improves credibility." />

                <HelpItem text="Accurate expenses improve DSCR analysis." />

                <HelpItem text="Detailed business descriptions create stronger reports." />
              </div>
            </div>
          </div>
{/* MOBILE PREVIEW */}
<div className="xl:hidden">
  <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
    <button
      type="button"
      onClick={() =>
        setShowMobilePreview(
          !showMobilePreview
        )
      }
      className="flex w-full items-center justify-between px-5 py-4"
    >
      <div className="text-left">
        <p className="text-sm font-semibold text-slate-900">
          Live Report Preview
        </p>

        <p className="mt-1 text-xs text-slate-500">
          View intelligent business report
        </p>
      </div>

      <div className="rounded-xl bg-[#081f4d] px-4 py-2 text-sm font-semibold text-white">
        {showMobilePreview
          ? "Hide"
          : "Show"}
      </div>
    </button>

    {showMobilePreview && (
      <div className="border-t border-slate-200 bg-[#eef3f9] p-2">
        <div className="overflow-hidden rounded-[20px]">
          <div className="origin-top scale-[0.68] sm:scale-[0.82]">
            <ProjectReportPreview />
          </div>
        </div>
      </div>
    )}
  </div>
</div>
          {/* DESKTOP PREVIEW */}
          <div className="hidden 2xl:block">
            <div className="sticky top-6">
              <div className="rounded-[36px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
                <div className="border-b border-slate-200 px-6 py-6">
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <div className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        Live Preview
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-slate-900">
                        Intelligent Report Preview
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        Real-time AI-powered business report preview.
                      </p>
                    </div>

                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Preview Status
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-emerald-500" />

                        <span className="text-sm font-semibold text-slate-900">
                          Auto Updating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#eef3f9] p-5">
                  <ProjectReportPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function TopFeatureCard({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
      <p className="text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-2 text-[11px] leading-5 text-slate-500">
        {subtitle}
      </p>
    </div>
  )
}

function InsightMiniCard({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-2 text-xs leading-6 text-blue-100">
        {subtitle}
      </p>
    </div>
  )
}

function HelpItem({
  text,
}: {
  text: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
      <div className="mt-1 h-2 w-2 rounded-full bg-[#12357d]" />

      <p className="text-sm leading-7 text-slate-600">
        {text}
      </p>
    </div>
  )
}
function InsightCard({
  title,
  value,
  subtitle,
}: {
  title: string
  value: string
  subtitle: string
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
        {title}
      </p>

      <h4 className="mt-3 text-2xl font-bold text-white">
        {value}
      </h4>

      <p className="mt-2 text-xs leading-6 text-blue-100">
        {subtitle}
      </p>
    </div>
  )
}

function InsightItem({
  text,
}: {
  text: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />

      <p className="text-sm leading-7 text-blue-100">
        {text}
      </p>
    </div>
  )
}