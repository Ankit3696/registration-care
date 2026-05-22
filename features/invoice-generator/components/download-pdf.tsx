"use client"

import { PDFDownloadLink } from "@react-pdf/renderer"

import InvoicePDF from "./invoice-pdf"

import { useInvoiceStore } from "../store"

export default function DownloadPDF() {
  const {
    businessName,
    businessGST,
    businessPAN,
    businessTAN,
    businessCIN,
    businessAddress,
    businessState,
    businessPhone,
    businessEmail,
    businessWebsite,
    businessLogo,

    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
    customerGST,
    customerState,

    invoiceNumber,
    invoiceDate,
    paymentTerms,

    taxMode,

    bankName,
    bankAccount,
    bankIFSC,
    bankBranch,

    items,
  } = useInvoiceStore()

  return (
    <PDFDownloadLink
      document={
        <InvoicePDF
          businessName={
            businessName
          }
          businessGST={
            businessGST
          }
          businessPAN={
            businessPAN
          }
          businessTAN={
            businessTAN
          }
          businessCIN={
            businessCIN
          }
          businessAddress={
            businessAddress
          }
          businessState={
            businessState
          }
          businessPhone={
            businessPhone
          }
          businessEmail={
            businessEmail
          }
          businessWebsite={
            businessWebsite
          }
          businessLogo={
            businessLogo
          }

          customerName={
            customerName
          }
          customerEmail={
            customerEmail
          }
          customerPhone={
            customerPhone
          }
          customerAddress={
            customerAddress
          }
          customerGST={
            customerGST
          }
          customerState={
            customerState
          }

          invoiceNumber={
            invoiceNumber
          }
          invoiceDate={
            invoiceDate
          }
          paymentTerms={
            paymentTerms
          }

          taxMode={taxMode}

          bankName={bankName}
          bankAccount={
            bankAccount
          }
          bankIFSC={bankIFSC}
          bankBranch={
            bankBranch
          }

          items={items}
        />
      }
      fileName={`invoice-${invoiceNumber}.pdf`}
      className="flex w-full items-center justify-center rounded-xl bg-[#081f4d] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2d6b] hover:shadow-md sm:w-auto"
    >
      {({ loading }) => (
        <span className="flex items-center gap-2">
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

              <span>
                Generating PDF...
              </span>
            </>
          ) : (
            <span>
              Download PDF
            </span>
          )}
        </span>
      )}
    </PDFDownloadLink>
  )
}


