"use client"

import { useEffect, useState } from "react"

import PDFDownloadButton from "./pdf-download-button"

import { useProjectReportStore } from "../store/store"

const businessTypes = [
  "Mobile Shop",
  "Restaurant",
  "Medical Store",
  "Dairy Farm",
  "Coaching Center",
  "Beauty Parlour",
  "Gym",
  "Bakery",
  "Clothing Store",
  "Manufacturing Unit",
]

const schemes = [
  "PMEGP",
  "MUDRA",
  "CGTMSE",
  "Stand-Up India",
  "Startup India",
  "PM Vishwakarma",
  "PMFME",
  "Bank Loan",
]

export default function ProjectReportForm() {
    const [mounted, setMounted] =
  useState(false)
  
  const {
    currentStep,
    nextStep,
    previousStep,

    businessName,
    ownerName,
    businessType,
    businessLocation,
    businessDescription,
    businessExperience,
    businessSize,

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

    setBusinessName,
    setOwnerName,
    setBusinessType,
    setBusinessLocation,
    setBusinessDescription,
    setBusinessExperience,
    setBusinessSize,

    setSelectedScheme,

    setProjectCost,
    setOwnInvestment,
    setLoanAmount,
    setWorkingCapital,

    setMonthlyRevenue,
    setMonthlyExpenses,
    setMonthlyRent,
    setMonthlySalary,
    setElectricityExpense,
    setMarketingExpense,
    setMiscExpense,
  } = useProjectReportStore()

  useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) {
  return null
}

  const estimatedProfit =
    monthlyRevenue -
    monthlyExpenses

  return (
    <div className="space-y-6">
      {/* STEP HEADER */}
      <div className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-[#081f4d] to-[#12357d] p-5 text-white sm:p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="inline-flex rounded-full bg-white/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100 sm:text-[11px]">
              Step {currentStep} of 5
            </div>

            <h2 className="mt-4 text-xl font-bold sm:text-2xl">
              {currentStep === 1 &&
                "Business Details"}

              {currentStep === 2 &&
                "Investment & Loan"}

              {currentStep === 3 &&
                "Revenue & Expenses"}

              {currentStep === 4 &&
                "Assets & Machinery"}

              {currentStep === 5 &&
                "Review & Generate"}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
              Complete this section carefully to generate a more accurate and professional business project report.
            </p>
          </div>

          <div className="hidden rounded-3xl border border-white/10 bg-white/10 px-5 py-4 text-center backdrop-blur lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
              Progress
            </p>

            <div className="mt-2 text-3xl font-bold">
              {currentStep * 20}%
            </div>
          </div>
        </div>
      </div>

      {/* LIVE SUMMARY */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <MiniSummaryCard
          label="Business"
          value={
            businessName ||
            "Not Added"
          }
        />

        <MiniSummaryCard
          label="Scheme"
          value={
            selectedScheme
          }
        />

        <MiniSummaryCard
          label="Project Cost"
          value={`₹ ${projectCost.toLocaleString()}`}
        />

        <MiniSummaryCard
          label="Profit"
          value={`₹ ${estimatedProfit.toLocaleString()}`}
        />
      </div>

      {/* STEP 1 */}
      {currentStep === 1 && (
        <SectionCard
          title="Business Details"
          description="Tell us about your business and operations."
        >
          <div className="grid grid-cols-1 gap-5">
            <InputField
              label="Business Name"
              placeholder="Enter business name"
              value={businessName}
              onChange={(e) =>
                setBusinessName(
                  e.target.value
                )
              }
            />

            <InputField
              label="Owner Name"
              placeholder="Enter owner name"
              value={ownerName}
              onChange={(e) =>
                setOwnerName(
                  e.target.value
                )
              }
            />

            <InputField
              label="Business Location"
              placeholder="City, State"
              value={
                businessLocation
              }
              onChange={(e) =>
                setBusinessLocation(
                  e.target.value
                )
              }
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Business Type
              </label>

              <div className="grid grid-cols-2 gap-3">
                {businessTypes.map(
                  (type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setBusinessType(
                          type as any
                        )
                      }
                      className={`rounded-2xl border px-3 py-3 text-left text-sm font-medium transition ${
                        businessType ===
                        type
                          ? "border-[#081f4d] bg-[#081f4d] text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Business Description
              </label>

              <textarea
                rows={5}
                placeholder="Describe your business..."
                value={
                  businessDescription
                }
                onChange={(e) =>
                  setBusinessDescription(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#12357d]"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InputField
                label="Business Experience"
                placeholder="2 years"
                value={
                  businessExperience
                }
                onChange={(e) =>
                  setBusinessExperience(
                    e.target.value
                  )
                }
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Business Size
                </label>

                <select
                  value={businessSize}
                  onChange={(e) =>
                    setBusinessSize(
                      e.target.value
                    )
                  }
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-[#12357d]"
                >
                  <option>
                    Small
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    Large
                  </option>
                </select>
              </div>
            </div>
          </div>
        </SectionCard>
      )}

      {/* STEP 2 */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <SectionCard
            title="Government Scheme"
            description="Choose the scheme or loan type for your report."
          >
            <div className="grid grid-cols-2 gap-3">
              {schemes.map(
                (scheme) => (
                  <button
                    key={scheme}
                    type="button"
                    onClick={() =>
                      setSelectedScheme(
                        scheme as any
                      )
                    }
                    className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                      selectedScheme ===
                      scheme
                        ? "border-[#081f4d] bg-[#081f4d] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {scheme}
                  </button>
                )
              )}
            </div>
          </SectionCard>

          <SectionCard
            title="Investment & Loan"
            description="Provide your investment and funding details."
          >
            <div className="grid grid-cols-1 gap-5">
              <NumberField
                label="Project Cost"
                value={projectCost}
                onChange={(
                  value
                ) =>
                  setProjectCost(
                    value
                  )
                }
              />

              <NumberField
                label="Own Investment"
                value={
                  ownInvestment
                }
                onChange={(
                  value
                ) =>
                  setOwnInvestment(
                    value
                  )
                }
              />

              <NumberField
                label="Loan Amount"
                value={loanAmount}
                onChange={(
                  value
                ) =>
                  setLoanAmount(
                    value
                  )
                }
              />

              <NumberField
                label="Working Capital"
                value={
                  workingCapital
                }
                onChange={(
                  value
                ) =>
                  setWorkingCapital(
                    value
                  )
                }
              />
            </div>
          </SectionCard>
        </div>
      )}

      {/* STEP 3 */}
      {currentStep === 3 && (
        <SectionCard
          title="Revenue & Expenses"
          description="Add expected monthly revenue and operational expenses."
        >
          <div className="grid grid-cols-1 gap-5">
            <NumberField
              label="Monthly Revenue"
              value={
                monthlyRevenue
              }
              onChange={(
                value
              ) =>
                setMonthlyRevenue(
                  value
                )
              }
            />

            <NumberField
              label="Monthly Expenses"
              value={
                monthlyExpenses
              }
              onChange={(
                value
              ) =>
                setMonthlyExpenses(
                  value
                )
              }
            />

            <NumberField
              label="Monthly Rent"
              value={monthlyRent}
              onChange={(
                value
              ) =>
                setMonthlyRent(
                  value
                )
              }
            />

            <NumberField
              label="Salary Expense"
              value={
                monthlySalary
              }
              onChange={(
                value
              ) =>
                setMonthlySalary(
                  value
                )
              }
            />

            <NumberField
              label="Electricity Expense"
              value={
                electricityExpense
              }
              onChange={(
                value
              ) =>
                setElectricityExpense(
                  value
                )
              }
            />

            <NumberField
              label="Marketing Expense"
              value={
                marketingExpense
              }
              onChange={(
                value
              ) =>
                setMarketingExpense(
                  value
                )
              }
            />

            <NumberField
              label="Misc Expense"
              value={miscExpense}
              onChange={(
                value
              ) =>
                setMiscExpense(
                  value
                )
              }
            />
          </div>
        </SectionCard>
      )}

      {/* STEP 4 */}
      {currentStep === 4 && (
        <SectionCard
          title="Assets & Machinery"
          description="Machinery, equipment and infrastructure details."
        >
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              Assets & Machinery
            </h3>

            <p className="mt-4 text-sm leading-8 text-slate-500">
              Dynamic infrastructure and machinery management system will be added next.
            </p>
          </div>
        </SectionCard>
      )}

      {/* STEP 5 */}
      {currentStep === 5 && (
        <SectionCard
          title="Review & Generate"
          description="Review all information before generating final report."
        >
          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-lg font-semibold text-emerald-900">
                Report Ready
              </h3>

              <p className="mt-2 text-sm leading-7 text-emerald-800">
                Your business report structure and financial analysis are ready for PDF generation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ReviewCard
                label="Business"
                value={
                  businessName ||
                  "Not Added"
                }
              />

              <ReviewCard
                label="Scheme"
                value={
                  selectedScheme
                }
              />

              <ReviewCard
                label="Project Cost"
                value={`₹ ${projectCost.toLocaleString()}`}
              />

              <ReviewCard
                label="Loan Amount"
                value={`₹ ${loanAmount.toLocaleString()}`}
              />
            </div>

            {/* PDF DOWNLOAD */}
            <div className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-[#081f4d] via-[#0b2864] to-[#12357d] p-5 text-white shadow-[0_20px_60px_rgba(8,31,77,0.25)] sm:p-6">
              <div className="flex flex-col gap-6">
                {/* LEFT */}
                <div className="max-w-2xl">
                  <div className="inline-flex rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                    Final Report
                  </div>

                  <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                    Download Professional Business PDF
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-blue-100">
                    Generate a bank-ready AI-powered business project report with financial analysis, funding structure, ROI insights, profitability projections and professional formatting.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <FeaturePill text="AI Generated" />

                    <FeaturePill text="Govt Scheme Ready" />

                    <FeaturePill text="Bank Loan Format" />

                    <FeaturePill text="Financial Analysis" />
                  </div>
                </div>

                {/* DOWNLOAD */}
                <div className="w-full">
                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-4 backdrop-blur sm:p-5">
                    <div className="mb-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                        Export Report
                      </p>

                      <h4 className="mt-2 text-lg font-semibold text-white">
                        Professional PDF
                      </h4>
                    </div>

                    <PDFDownloadButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      )}

      {/* BOTTOM ACTIONS */}
      <div className="rounded-b-[28px] border-t border-slate-200 bg-white pt-5">
        <div className="flex flex-col gap-4 px-1 pb-1 sm:flex-row sm:items-center sm:justify-between">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Step {currentStep} of 5
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Continue completing your business report information.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={
                previousStep
              }
              disabled={
                currentStep === 1
              }
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={nextStep}
              disabled={
                currentStep === 5
              }
              className="rounded-2xl bg-gradient-to-r from-[#081f4d] to-[#12357d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {currentStep === 5
                ? "Review Complete"
                : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* COMPONENTS */

function SectionCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50/60 p-5 sm:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      {children}
    </div>
  )
}

function MiniSummaryCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 truncate text-sm font-semibold text-slate-900">
        {value}
      </p>
    </div>
  )
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string
  placeholder: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-[#12357d]"
      />
    </div>
  )
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (
    value: number
  ) => void
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
          ₹
        </span>

        <input
          type="number"
          value={value}
          onChange={(e) =>
            onChange(
              Number(
                e.target.value
              )
            )
          }
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-8 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#12357d]"
        />
      </div>
    </div>
  )
}

function ReviewCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-3 text-base font-semibold text-slate-900">
        {value}
      </p>
    </div>
  )
}

function FeaturePill({
  text,
}: {
  text: string
}) {
  return (
    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
      {text}
    </div>
  )
}