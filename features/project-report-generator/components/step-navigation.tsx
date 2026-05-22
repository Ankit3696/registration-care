"use client"

import { useProjectReportStore } from "../store/store"

const steps = [
  {
    id: 1,
    title: "Business Details",
    description:
      "Business profile & overview",
  },
  {
    id: 2,
    title: "Investment & Loan",
    description:
      "Funding & scheme details",
  },
  {
    id: 3,
    title: "Revenue & Expenses",
    description:
      "Financial projections",
  },
  {
    id: 4,
    title: "Assets & Machinery",
    description:
      "Infrastructure & staffing",
  },
  {
    id: 5,
    title: "Review & Generate",
    description:
      "Final report generation",
  },
]

export default function StepNavigation() {
  const {
    currentStep,
    setCurrentStep,
  } = useProjectReportStore()

  const progress =
    ((currentStep - 1) / 4) * 100

  return (
    <div>
      {/* TOP */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* LEFT */}
        <div>
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#12357d]">
            Guided Report Builder
          </div>

          <h2 className="mt-3 text-xl font-bold text-slate-900">
            Create Your Business Report
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            Fill your business and financial details step-by-step to generate a professional government scheme and bank-ready project report.
          </p>
        </div>

        {/* RIGHT */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Progress
          </p>

          <div className="mt-2 flex items-end gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              {currentStep}
            </span>

            <span className="pb-1 text-sm text-slate-500">
              / 5 Steps
            </span>
          </div>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#081f4d] to-[#12357d] transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* STEP CARDS */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step) => {
          const isActive =
            currentStep === step.id

          const isCompleted =
            currentStep >
            step.id

          return (
            <button
              key={step.id}
              type="button"
              onClick={() =>
                setCurrentStep(
                  step.id
                )
              }
              className={`group rounded-[26px] border p-5 text-left transition-all duration-300 ${
                isActive
                  ? "border-[#081f4d] bg-[#081f4d] text-white shadow-[0_20px_40px_rgba(8,31,77,0.25)]"
                  : isCompleted
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {/* STEP NUMBER */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold transition ${
                  isActive
                    ? "bg-white text-[#081f4d]"
                    : isCompleted
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {isCompleted
                  ? "✓"
                  : step.id}
              </div>

              {/* TEXT */}
              <div className="mt-5">
                <h3
                  className={`text-sm font-semibold ${
                    isActive
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-2 text-xs leading-6 ${
                    isActive
                      ? "text-blue-100"
                      : "text-slate-500"
                  }`}
                >
                  {
                    step.description
                  }
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}