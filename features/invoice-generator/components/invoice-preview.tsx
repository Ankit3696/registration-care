"use client"

import { useInvoiceStore } from "../store"
import { numberToWords } from "../utils/number-to-words"
import { calculateInvoiceTotals } from "@/lib/invoice-calculations"

export default function InvoicePreview() {
  const {
    businessName,
    businessGST,
    businessPAN,
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

    invoiceNumber,
    invoiceDate,
    paymentTerms,

    bankName,
    bankAccount,
    bankIFSC,
    bankBranch,

    items,

    taxMode,
  } = useInvoiceStore()

  const subtotal = items.reduce(
    (acc, item) =>
      acc +
      Number(item.quantity) *
        Number(item.price),
    0
  )

  const discountTotal = items.reduce(
    (acc, item) =>
      acc +
      (Number(item.quantity) *
        Number(item.price) *
        Number(item.discount)) /
        100,
    0
  )

  const taxableAmount =
    subtotal - discountTotal

  const averageGST =
    items.length > 0
      ? items.reduce(
          (acc, item) =>
            acc + Number(item.gst),
          0
        ) / items.length
      : 0

  const totals =
    calculateInvoiceTotals(
      [
        {
          quantity: 1,
          price: taxableAmount,
        },
      ],
      averageGST,
      taxMode
    )

  const grandTotal =
    totals.grandTotal

  return (
    <div className="w-full bg-[#f4f7fb] py-6">
    <div className="mx-auto w-full max-w-[1120px]">
        <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:rounded-[24px]">
          {/* TOP BAR */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#081f4d] via-[#0b2864] to-[#12357d] px-5 py-4">
            <div className="text-sm font-semibold tracking-[0.2em] text-white">
              GST INVOICE
            </div>

            <div className="text-xs text-blue-100">
              Professional Business Invoice
            </div>
          </div>

          <div
            id="invoice-preview"
            className="bg-white px-8 py-6 sm:px-10 sm:py-8 xl:px-12 xl:py-10"
          >
            {/* HEADER */}
            <div className="flex flex-col gap-5 border-b border-slate-200 pb-5 lg:flex-row lg:items-start lg:justify-between">
              {/* LEFT */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-4">
                  {businessLogo && (
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                      <img
                        src={businessLogo}
                        alt="Logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h1 className="line-clamp-2 break-words text-[18px] font-bold leading-tight text-slate-900 sm:text-[24px]">
                      {businessName ||
                        "Your Company"}
                    </h1>

                    <p className="mt-3 text-[13px] leading-6 text-slate-500">
                      {businessAddress}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <InfoItem
                    label="GSTIN"
                    value={businessGST}
                  />

                  <InfoItem
                    label="Email"
                    value={businessEmail}
                  />

                  <InfoItem
                    label="PAN"
                    value={businessPAN}
                  />

                  <InfoItem
                    label="Website"
                    value={businessWebsite}
                  />

                  <InfoItem
                    label="Phone"
                    value={businessPhone}
                  />

                  <InfoItem
                    label="State"
                    value={businessState}
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full lg:w-[260px] lg:flex-shrink-0">
                <div className="flex justify-end">
                  <div className="rounded-full bg-gradient-to-r from-[#081f4d] to-[#12357d] px-5 py-2 text-[11px] font-semibold tracking-[0.14em] text-white shadow-lg">
                    TAX INVOICE
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <MetaRow
                    label="Invoice No."
                    value={invoiceNumber}
                  />

                  <MetaRow
                    label="Invoice Date"
                    value={invoiceDate}
                  />

                  <MetaRow
                    label="Terms"
                    value={paymentTerms}
                  />
                </div>
              </div>
            </div>

            {/* CUSTOMER + BANK */}
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <BoxCard
                title="Bill To"
                heading={customerName}
                lines={[
                  customerPhone,
                  customerEmail,
                  customerAddress,
                  `GSTIN : ${customerGST}`,
                ]}
              />

              <BoxCard
                title="Bank Details"
                heading={bankName}
                lines={[
                  `A/C : ${bankAccount}`,
                  `IFSC : ${bankIFSC}`,
                  `Branch : ${bankBranch}`,
                ]}
              />
            </div>

            {/* TABLE */}
            <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200">
              <table className="min-w-[700px] w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#081f4d] via-[#0b2864] to-[#12357d] text-[12px] font-semibold text-white">
                    <th className="px-4 py-4 text-left">
                      Item
                    </th>

                    <th className="px-3 py-4 text-center">
                      HSN
                    </th>

                    <th className="px-3 py-4 text-center">
                      Qty
                    </th>

                    <th className="px-3 py-4 text-center">
                      Rate
                    </th>

                    <th className="px-3 py-4 text-center">
                      GST
                    </th>

                    <th className="px-4 py-4 text-right">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {items.map(
                    (item, index) => {
                      const taxable =
                        Number(
                          item.quantity
                        ) *
                        Number(item.price)

                      const discountAmount =
                        (taxable *
                          Number(
                            item.discount
                          )) /
                        100

                      const afterDiscount =
                        taxable -
                        discountAmount

                      const gstAmount =
                        (afterDiscount *
                          Number(item.gst)) /
                        100

                      const total =
                        afterDiscount +
                        gstAmount

                      return (
                        <tr
                          key={item.id}
                          className={
                            index % 2 === 0
                              ? "bg-slate-50/60"
                              : "bg-white"
                          }
                        >
                          <td className="px-4 py-4 text-[13px] font-medium text-slate-800">
                            {item.name}
                          </td>

                          <td className="px-3 py-4 text-center text-[13px] text-slate-600">
                            {item.hsn}
                          </td>

                          <td className="px-3 py-4 text-center text-[13px] text-slate-600">
                            {item.quantity}
                          </td>

                          <td className="px-3 py-4 text-center text-[13px] text-slate-600">
                            ₹
                            {Number(
                              item.price
                            ).toFixed(0)}
                          </td>

                          <td className="px-3 py-4 text-center text-[13px] text-slate-600">
                            {item.gst}%
                          </td>

                          <td className="px-4 py-4 text-right text-[13px] font-semibold text-slate-900">
                            ₹
                            {total.toFixed(0)}
                          </td>
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </table>
            </div>

            {/* SUMMARY */}
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Amount In Words
                </p>

                <p className="mt-4 text-[13px] leading-7 text-slate-700">
                  Rupees{" "}
                  {numberToWords(
                    Math.round(
                      grandTotal
                    )
                  )}{" "}
                  Only
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="space-y-4 text-[13px]">
                  <SummaryRow
                    label="Subtotal"
                    value={subtotal.toFixed(
                      2
                    )}
                  />

                  <SummaryRow
                    label="Discount"
                    value={discountTotal.toFixed(
                      2
                    )}
                  />

                  <SummaryRow
                    label="Taxable"
                    value={taxableAmount.toFixed(
                      2
                    )}
                  />

                  <div className="rounded-3xl bg-gradient-to-r from-[#081f4d] via-[#0b2864] to-[#12357d] px-5 py-6 shadow-[0_20px_60px_rgba(8,31,77,0.35)]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[14px] font-semibold text-white">
                        GRAND TOTAL
                      </span>

                      <span className="break-all text-right text-[18px] font-bold text-white sm:text-[26px]">
                        ₹
                        {grandTotal.toFixed(
                          0
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DECLARATION */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/60 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Declaration
              </p>

              <p className="mt-3 text-[13px] leading-6 text-slate-600">
                We declare that this invoice reflects actual goods/services supplied and all particulars are true and correct.
              </p>
            </div>

            {/* SIGN */}
            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <SignatureBox
                label="Customer Signature"
              />

              <SignatureBox
                label="Authorized Signatory"
              />
            </div>

            {/* FOOTER */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
              <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                <div>
                  <p className="text-[12px] font-semibold text-slate-700">
                    Thank you for your business
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    This is a computer generated GST invoice.
                  </p>
                </div>

                <div className="text-[11px] text-slate-400">
                  Generated via Registration Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="min-w-0 text-[13px]">
      <span className="font-semibold text-slate-800">
        {label}
      </span>

      <p className="mt-1 break-all text-slate-500">
        {value || "-"}
      </p>
    </div>
  )
}

function MetaRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3 text-[12px] last:mb-0">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="max-w-[120px] break-all text-right font-semibold text-slate-900">
        {value || "-"}
      </span>
    </div>
  )
}

function SummaryRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-slate-900">
        ₹ {value}
      </span>
    </div>
  )
}

function SignatureBox({
  label,
}: {
  label: string
}) {
  return (
    <div className="w-full lg:w-[42%] text-center">
      <div className="border-t border-slate-400 pt-3 text-[12px] text-slate-500">
        {label}
      </div>
    </div>
  )
}

function BoxCard({
  title,
  heading,
  lines,
}: {
  title: string
  heading: string
  lines: string[]
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 break-words text-[18px] font-semibold text-slate-900">
        {heading}
      </h3>

      <div className="mt-4 space-y-2 text-[13px] leading-6 text-slate-600">
        {lines.map((line, index) => (
          <p
            key={index}
            className="break-all"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}