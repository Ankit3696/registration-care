"use client"

import { PDFDownloadLink } from "@react-pdf/renderer"

import ProjectReportPDF from "../pdf/project-report-pdf"
import { useProjectReportStore } from "../store/store"

import {
  calculateAnnualProfit,
  calculateBusinessScore,
  calculateDSCR,
  calculateEMI,
  calculateMonthlyProfit,
  calculateROI,
  getBusinessHealthStatus,
} from "../utils/calculations"

export default function PDFDownloadButton() {
  const {
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
  } = useProjectReportStore()

  /* CALCULATIONS */
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

  const dscr =
    calculateDSCR(
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

  return (
    <PDFDownloadLink
      document={
        <ProjectReportPDF
          businessName={
            businessName ||
            "Business Name"
          }
          ownerName={
            ownerName ||
            "Owner Name"
          }
          businessType={
            businessType
          }
          businessLocation={
            businessLocation ||
            "Location"
          }
          businessDescription={
            businessDescription ||
            "Business description not provided."
          }
          selectedScheme={
            selectedScheme
          }
          projectCost={
            projectCost
          }
          ownInvestment={
            ownInvestment
          }
          loanAmount={
            loanAmount
          }
          workingCapital={
            workingCapital
          }
          monthlyRevenue={
            monthlyRevenue
          }
          monthlyExpenses={
            monthlyExpenses
          }
          estimatedProfit={
            estimatedProfit
          }
          businessScore={
            businessScore
          }
          businessHealth={
            businessHealth
          }
          roi={roi}
          dscr={dscr}
        />
      }
      fileName={`${businessName || "business"}-project-report.pdf`}
      className="w-full"
    >
      {({
        loading,
      }) => (
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-[24px] bg-gradient-to-r from-[#081f4d] to-[#12357d] px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-900/20 transition hover:opacity-95"
        >
          {loading ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

              Preparing PDF...
            </>
          ) : (
            <>
              <span className="text-lg">
                📄
              </span>

              Download Professional PDF Report
            </>
          )}
        </button>
      )}
    </PDFDownloadLink>
  )
}