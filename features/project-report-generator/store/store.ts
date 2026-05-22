import { create } from "zustand"

export type BusinessType =
  | "Mobile Shop"
  | "Restaurant"
  | "Medical Store"
  | "Dairy Farm"
  | "Coaching Center"
  | "Beauty Parlour"
  | "Gym"
  | "Bakery"
  | "Clothing Store"
  | "Manufacturing Unit"

export type SchemeType =
  | "PMEGP"
  | "MUDRA"
  | "CGTMSE"
  | "Stand-Up India"
  | "Startup India"
  | "PM Vishwakarma"
  | "PMFME"
  | "Bank Loan"

interface ProjectReportStore {
  /* =========================
     STEP CONTROL
  ========================= */

  currentStep: number

  setCurrentStep: (
    step: number
  ) => void

  nextStep: () => void

  previousStep: () => void

  /* =========================
     BUSINESS DETAILS
  ========================= */

  businessName: string

  ownerName: string

  businessType: BusinessType

  businessLocation: string

  businessDescription: string

  businessExperience: string

  businessSize: string

  setBusinessName: (
    value: string
  ) => void

  setOwnerName: (
    value: string
  ) => void

  setBusinessType: (
    value: BusinessType
  ) => void

  setBusinessLocation: (
    value: string
  ) => void

  setBusinessDescription: (
    value: string
  ) => void

  setBusinessExperience: (
    value: string
  ) => void

  setBusinessSize: (
    value: string
  ) => void

  /* =========================
     LOAN & INVESTMENT
  ========================= */

  selectedScheme: SchemeType

  projectCost: number

  ownInvestment: number

  loanAmount: number

  workingCapital: number

  subsidyAmount: number

  setSelectedScheme: (
    value: SchemeType
  ) => void

  setProjectCost: (
    value: number
  ) => void

  setOwnInvestment: (
    value: number
  ) => void

  setLoanAmount: (
    value: number
  ) => void

  setWorkingCapital: (
    value: number
  ) => void

  setSubsidyAmount: (
    value: number
  ) => void

  /* =========================
     REVENUE & EXPENSES
  ========================= */

  monthlyRevenue: number

  monthlyExpenses: number

  monthlyRent: number

  monthlySalary: number

  electricityExpense: number

  marketingExpense: number

  miscExpense: number

  setMonthlyRevenue: (
    value: number
  ) => void

  setMonthlyExpenses: (
    value: number
  ) => void

  setMonthlyRent: (
    value: number
  ) => void

  setMonthlySalary: (
    value: number
  ) => void

  setElectricityExpense: (
    value: number
  ) => void

  setMarketingExpense: (
    value: number
  ) => void

  setMiscExpense: (
    value: number
  ) => void

  /* =========================
     MACHINERY & EMPLOYMENT
  ========================= */

  machineryCost: number

  furnitureCost: number

  staffCount: number

  setMachineryCost: (
    value: number
  ) => void

  setFurnitureCost: (
    value: number
  ) => void

  setStaffCount: (
    value: number
  ) => void

  /* =========================
     AI GENERATED CONTENT
  ========================= */

  executiveSummary: string

  marketAnalysis: string

  swotAnalysis: string

  conclusion: string

  setExecutiveSummary: (
    value: string
  ) => void

  setMarketAnalysis: (
    value: string
  ) => void

  setSwotAnalysis: (
    value: string
  ) => void

  setConclusion: (
    value: string
  ) => void
}

export const useProjectReportStore =
  create<ProjectReportStore>(
    (set, get) => ({
      /* =========================
         STEP CONTROL
      ========================= */

      currentStep: 1,

      setCurrentStep: (
        step
      ) =>
        set({
          currentStep: step,
        }),

      nextStep: () =>
        set({
          currentStep:
            get().currentStep < 5
              ? get().currentStep +
                1
              : 5,
        }),

      previousStep: () =>
        set({
          currentStep:
            get().currentStep > 1
              ? get().currentStep -
                1
              : 1,
        }),

      /* =========================
         BUSINESS DETAILS
      ========================= */

      businessName: "",

      ownerName: "",

      businessType:
        "Mobile Shop",

      businessLocation: "",

      businessDescription:
        "",

      businessExperience: "",

      businessSize: "Small",

      setBusinessName: (
        value
      ) =>
        set({
          businessName: value,
        }),

      setOwnerName: (
        value
      ) =>
        set({
          ownerName: value,
        }),

      setBusinessType: (
        value
      ) =>
        set({
          businessType: value,
        }),

      setBusinessLocation: (
        value
      ) =>
        set({
          businessLocation:
            value,
        }),

      setBusinessDescription:
        (value) =>
          set({
            businessDescription:
              value,
          }),

      setBusinessExperience:
        (value) =>
          set({
            businessExperience:
              value,
          }),

      setBusinessSize: (
        value
      ) =>
        set({
          businessSize: value,
        }),

      /* =========================
         LOAN & INVESTMENT
      ========================= */

      selectedScheme:
        "PMEGP",

      projectCost: 1200000,

      ownInvestment: 300000,

      loanAmount: 900000,

      workingCapital: 200000,

      subsidyAmount: 0,

      setSelectedScheme: (
        value
      ) =>
        set({
          selectedScheme:
            value,
        }),

      setProjectCost: (
        value
      ) =>
        set({
          projectCost: value,
        }),

      setOwnInvestment: (
        value
      ) =>
        set({
          ownInvestment:
            value,
        }),

      setLoanAmount: (
        value
      ) =>
        set({
          loanAmount: value,
        }),

      setWorkingCapital:
        (value) =>
          set({
            workingCapital:
              value,
          }),

      setSubsidyAmount: (
        value
      ) =>
        set({
          subsidyAmount:
            value,
          }),

      /* =========================
         REVENUE & EXPENSES
      ========================= */

      monthlyRevenue:
        750000,

      monthlyExpenses:
        120000,

      monthlyRent: 25000,

      monthlySalary:
        35000,

      electricityExpense:
        6000,

      marketingExpense:
        8000,

      miscExpense: 5000,

      setMonthlyRevenue: (
        value
      ) =>
        set({
          monthlyRevenue:
            value,
        }),

      setMonthlyExpenses:
        (value) =>
          set({
            monthlyExpenses:
              value,
          }),

      setMonthlyRent: (
        value
      ) =>
        set({
          monthlyRent:
            value,
        }),

      setMonthlySalary: (
        value
      ) =>
        set({
          monthlySalary:
            value,
        }),

      setElectricityExpense:
        (value) =>
          set({
            electricityExpense:
              value,
          }),

      setMarketingExpense:
        (value) =>
          set({
            marketingExpense:
              value,
          }),

      setMiscExpense: (
        value
      ) =>
        set({
          miscExpense:
            value,
        }),

      /* =========================
         MACHINERY & EMPLOYMENT
      ========================= */

      machineryCost:
        250000,

      furnitureCost:
        100000,

      staffCount: 5,

      setMachineryCost: (
        value
      ) =>
        set({
          machineryCost:
            value,
        }),

      setFurnitureCost: (
        value
      ) =>
        set({
          furnitureCost:
            value,
        }),

      setStaffCount: (
        value
      ) =>
        set({
          staffCount: value,
        }),

      /* =========================
         AI GENERATED CONTENT
      ========================= */

      executiveSummary:
        "",

      marketAnalysis: "",

      swotAnalysis: "",

      conclusion: "",

      setExecutiveSummary:
        (value) =>
          set({
            executiveSummary:
              value,
          }),

      setMarketAnalysis: (
        value
      ) =>
        set({
          marketAnalysis:
            value,
        }),

      setSwotAnalysis: (
        value
      ) =>
        set({
          swotAnalysis:
            value,
        }),

      setConclusion: (
        value
      ) =>
        set({
          conclusion: value,
        }),
    })
  )