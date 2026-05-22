"use client"

import { useEffect } from "react"

import LogoUpload from "./logo-upload"
import InvoiceTable from "./invoice-table"

import { useInvoiceStore } from "../store"

export default function InvoiceForm() {
  const {
    // Business
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

    // Customer
    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
    customerGST,
    customerState,

    // Invoice
    invoiceNumber,
    invoiceDate,
    paymentTerms,

    // Tax
    taxMode,
    setTaxMode,

    // Banking
    bankName,
    bankAccount,
    bankIFSC,
    bankBranch,

    updateField,
  } = useInvoiceStore()

  useEffect(() => {
    const business = businessState
      ?.trim()
      .toLowerCase()

    const customer = customerState
      ?.trim()
      .toLowerCase()

    if (
      !business ||
      !customer
    ) {
      setTaxMode(
        "cgst_sgst"
      )

      return
    }

    if (
      business === customer
    ) {
      setTaxMode(
        "cgst_sgst"
      )
    } else {
      setTaxMode("igst")
    }
  }, [
    businessState,
    customerState,
    setTaxMode,
  ])

  const inputClass =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-[#fcfdff] px-4 py-3 text-sm text-slate-900 shadow-sm transition-all outline-none placeholder:text-slate-400 focus:border-[#081f4d] focus:bg-white focus:ring-4 focus:ring-blue-100"

  const labelClass =
    "text-sm font-semibold text-slate-700"

  const cardClass =
    "rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)]"

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Invoice Form
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Fill business, customer, and billing information to generate a
          professional GST invoice instantly.
        </p>
      </div>

      <div className="space-y-6">
        {/* BUSINESS DETAILS */}
        <div className={cardClass}>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Business Details
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Enter your registered business information
              </p>
            </div>

            <div className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-700">
              Tax Mode :{" "}
              <span className="font-semibold text-[#081f4d]">
                {taxMode ===
                "igst"
                  ? "IGST"
                  : "CGST + SGST"}
              </span>
            </div>
          </div>

          {/* LOGO SECTION */}
          <div className="mb-8 grid gap-4 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-slate-900">
                    Business Logo
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Upload logo for invoice branding
                  </p>
                </div>

                <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#081f4d]">
                  Optional
                </div>
              </div>

              <div className="mt-5">
                <LogoUpload />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-slate-900">
                    Uploaded Logo
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Appears on invoice preview & PDF
                  </p>
                </div>

                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Live
                </div>
              </div>

              <div className="mt-5 flex h-[340px] items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6">
                {businessLogo ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="flex h-[220px] w-[220px] items-center justify-center rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
                      <img
                        src={businessLogo}
                        alt="Business Logo"
                        className="max-h-[180px] max-w-[180px] object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-sm font-medium text-slate-600">
                      No logo uploaded
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Upload logo to preview it here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* BUSINESS INPUTS */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>
                Business Name
              </label>

              <input
                value={businessName}
                onChange={(e) =>
                  updateField(
                    "businessName",
                    e.target.value
                  )
                }
                placeholder="Enter business name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                GST Number
              </label>

              <input
                value={businessGST}
                onChange={(e) =>
                  updateField(
                    "businessGST",
                    e.target.value
                  )
                }
                placeholder="Enter GST number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                PAN Number
              </label>

              <input
                value={businessPAN}
                onChange={(e) =>
                  updateField(
                    "businessPAN",
                    e.target.value
                  )
                }
                placeholder="Enter PAN number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                TAN Number
              </label>

              <input
                value={businessTAN}
                onChange={(e) =>
                  updateField(
                    "businessTAN",
                    e.target.value
                  )
                }
                placeholder="Enter TAN number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                CIN Number
              </label>

              <input
                value={businessCIN}
                onChange={(e) =>
                  updateField(
                    "businessCIN",
                    e.target.value
                  )
                }
                placeholder="Enter CIN number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Business State
              </label>

              <input
                value={businessState}
                onChange={(e) =>
                  updateField(
                    "businessState",
                    e.target.value
                  )
                }
                placeholder="Enter business state"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Business Phone
              </label>

              <input
                value={businessPhone}
                onChange={(e) =>
                  updateField(
                    "businessPhone",
                    e.target.value
                  )
                }
                placeholder="Enter phone number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Business Email
              </label>

              <input
                value={businessEmail}
                onChange={(e) =>
                  updateField(
                    "businessEmail",
                    e.target.value
                  )
                }
                placeholder="Enter business email"
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Business Website
              </label>

              <input
                value={businessWebsite}
                onChange={(e) =>
                  updateField(
                    "businessWebsite",
                    e.target.value
                  )
                }
                placeholder="Enter website URL"
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Business Address
              </label>

              <textarea
                value={businessAddress}
                onChange={(e) =>
                  updateField(
                    "businessAddress",
                    e.target.value
                  )
                }
                placeholder="Enter complete business address"
                className={`${inputClass} min-h-[110px] resize-none`}
              />
            </div>
          </div>
        </div>

        {/* CUSTOMER DETAILS */}
        <div className={cardClass}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Customer Details
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add customer billing information
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>
                Customer Name
              </label>

              <input
                value={customerName}
                onChange={(e) =>
                  updateField(
                    "customerName",
                    e.target.value
                  )
                }
                placeholder="Enter customer name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Customer GSTIN
              </label>

              <input
                value={customerGST}
                onChange={(e) =>
                  updateField(
                    "customerGST",
                    e.target.value
                  )
                }
                placeholder="Enter customer GSTIN"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Customer Email
              </label>

              <input
                value={customerEmail}
                onChange={(e) =>
                  updateField(
                    "customerEmail",
                    e.target.value
                  )
                }
                placeholder="Enter customer email"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Customer Phone
              </label>

              <input
                value={customerPhone}
                onChange={(e) =>
                  updateField(
                    "customerPhone",
                    e.target.value
                  )
                }
                placeholder="Enter customer phone"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Customer State
              </label>

              <input
                value={customerState}
                onChange={(e) =>
                  updateField(
                    "customerState",
                    e.target.value
                  )
                }
                placeholder="Enter customer state"
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Customer Address
              </label>

              <textarea
                value={customerAddress}
                onChange={(e) =>
                  updateField(
                    "customerAddress",
                    e.target.value
                  )
                }
                placeholder="Enter complete customer address"
                className={`${inputClass} min-h-[110px] resize-none`}
              />
            </div>
          </div>
        </div>

        {/* INVOICE DETAILS */}
        <div className={cardClass}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Invoice Details
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Configure invoice information and payment terms
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>
                Invoice Number
              </label>

              <input
                value={invoiceNumber}
                onChange={(e) =>
                  updateField(
                    "invoiceNumber",
                    e.target.value
                  )
                }
                placeholder="Enter invoice number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Invoice Date
              </label>

              <input
                type="date"
                value={invoiceDate}
                onChange={(e) =>
                  updateField(
                    "invoiceDate",
                    e.target.value
                  )
                }
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Payment Terms
              </label>

              <input
                value={paymentTerms}
                onChange={(e) =>
                  updateField(
                    "paymentTerms",
                    e.target.value
                  )
                }
                placeholder="Enter payment terms"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* BANK DETAILS */}
        <div className={cardClass}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Bank Details
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add banking details for payment collection
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>
                Bank Name
              </label>

              <input
                value={bankName}
                onChange={(e) =>
                  updateField(
                    "bankName",
                    e.target.value
                  )
                }
                placeholder="Enter bank name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Account Number
              </label>

              <input
                value={bankAccount}
                onChange={(e) =>
                  updateField(
                    "bankAccount",
                    e.target.value
                  )
                }
                placeholder="Enter account number"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                IFSC Code
              </label>

              <input
                value={bankIFSC}
                onChange={(e) =>
                  updateField(
                    "bankIFSC",
                    e.target.value
                  )
                }
                placeholder="Enter IFSC code"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Branch Name
              </label>

              <input
                value={bankBranch}
                onChange={(e) =>
                  updateField(
                    "bankBranch",
                    e.target.value
                  )
                }
                placeholder="Enter branch name"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* ITEMS */}
        <div className={cardClass}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Invoice Items
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add products or services included in the invoice
            </p>
          </div>

          <InvoiceTable />
        </div>
      </div>
    </div>
  )
}


