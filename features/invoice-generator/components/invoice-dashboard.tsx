"use client"

import { useInvoiceStore } from "../store"
import { calculateInvoiceTotals } from "@/lib/invoice-calculations"

export default function InvoiceDashboard() {
  const {
    items,
    taxMode,
    customerName,
    businessName,
  } = useInvoiceStore()

  const subtotal = items.reduce(
    (acc, item) =>
      acc +
      Number(item.quantity) *
        Number(item.price),
    0
  )

  const avgGST =
    items.length > 0
      ? items.reduce(
          (acc, item) =>
            acc + Number(item.gst),
          0
        ) / items.length
      : 0

  const totals =
    calculateInvoiceTotals(
      items,
      avgGST,
      taxMode
    )

  return (
    <>
      {/* DASHBOARD SECTION */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <DashboardCard
          title="Invoice Items"
          value={`${items.length}`}
        />

        <DashboardCard
          title="Tax Mode"
          value={
            taxMode === "igst"
              ? "IGST"
              : "CGST + SGST"
          }
        />

        <DashboardCard
          title="Subtotal"
          value={`₹ ${subtotal.toFixed(
            2
          )}`}
        />

        <DashboardCard
          title="Grand Total"
          value={`₹ ${totals.grandTotal.toFixed(
            2
          )}`}
        />
      </div>

      {/* GST INSIGHTS */}
      <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              GST Insights
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Invoice tax and compliance overview
            </p>
          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
            ACTIVE
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <InsightRow
            label="Business"
            value={businessName || "-"}
          />

          <InsightRow
            label="Customer"
            value={customerName || "-"}
          />

          <InsightRow
            label="Invoice Type"
            value={
              taxMode === "igst"
                ? "Interstate Supply"
                : "Intrastate Supply"
            }
          />

          <InsightRow
            label="Tax Calculation"
            value="Automatic"
          />
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Quick Actions
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Export and manage your invoice instantly
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">
              PDF Export
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Download print-ready GST invoice
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">
              Live Sync
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Preview updates instantly while editing
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function DashboardCard({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  )
}

function InsightRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-6">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="text-sm font-semibold text-slate-900">
        {value}
      </span>
    </div>
  )
}


