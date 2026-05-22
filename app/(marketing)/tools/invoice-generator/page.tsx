"use client"
import InvoiceForm from "@/features/invoice-generator/components/invoice-form"
import InvoicePreview from "@/features/invoice-generator/components/invoice-preview"
import PDFClientButton from "@/features/invoice-generator/components/pdf-client-button"
import InvoiceDashboard from "@/features/invoice-generator/components/invoice-dashboard"

export default function InvoiceGeneratorPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f7fb]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="w-full bg-gradient-to-r from-[#081f4d] via-[#0b2864] to-[#12357d]">
          <div className="mx-auto flex w-full flex-col gap-6 px-6 py-7 xl:flex-row xl:items-center xl:justify-between">
            {/* LEFT */}
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-2xl font-bold text-white shadow-lg backdrop-blur-xl">
                ₹
              </div>

              <div>
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium tracking-wide text-blue-100 backdrop-blur-xl">
                  PROFESSIONAL GST BILLING TOOL
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  Professional GST Invoice Generator
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                  Create premium GST-compliant invoices with live preview,
                  auto-calculations, instant PDF export, and modern
                  business-ready invoice management.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-100">
                    ✓ Live Preview
                  </div>

                  <div className="rounded-full border border-blue-300/20 bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100">
                    ✓ Auto GST Calculation
                  </div>

                  <div className="rounded-full border border-blue-300/20 bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100">
                    ✓ Instant PDF Export
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-blue-100">
                  Status
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Auto Sync Enabled
                </div>
              </div>

              <div className="rounded-2xl bg-white p-2 shadow-2xl">
                <PDFClientButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[60%_40%]">
          {/* FORM SIDE */}
          <div className="border-b border-slate-200 bg-[#f8fafc] xl:border-b-0 xl:border-r">
            {/* FORM HEADER */}
            <div className="sticky top-[180px] z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Invoice Workspace
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Fill invoice details with real-time GST invoice generation
                  </p>
                </div>

                <div className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 lg:flex">
                  LIVE FORM EDITING
                </div>
              </div>
            </div>

            {/* FORM CONTENT */}
            <div className="p-4 sm:p-6 xl:p-8">
              <InvoiceForm />
            </div>
          </div>

          {/* PREVIEW SIDE */}
          <div className="bg-[#eef3f8]">
            {/* PREVIEW HEADER */}
            <div className="sticky top-[180px] z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Live Invoice Preview
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Real-time professional GST invoice rendering
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 lg:flex">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Auto Synced
                </div>
              </div>
            </div>

            {/* PREVIEW */}
            <div className="p-4 xl:p-6">
              <div className="rounded-[36px] border border-slate-200 bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
                <div className="overflow-auto rounded-[30px] bg-[#f8fafc]">
                  <InvoicePreview />
                </div>
              </div>
            </div>

            {/* DASHBOARD */}
            <div className="px-4 pb-5 xl:px-6">
              <InvoiceDashboard />
            </div>

            {/* QUICK ACTIONS */}
            <div className="px-4 pb-6 xl:px-6">
              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Quick Actions
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      Download professional GST invoices instantly and manage
                      billing workflow efficiently with live sync enabled.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* PDF ACTION */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-base font-semibold text-slate-900">
                        PDF Export
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Generate and download print-ready GST invoices instantly.
                      </p>

                      <div className="mt-5">
                        <PDFClientButton />
                      </div>
                    </div>

                    {/* LIVE PREVIEW */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-base font-semibold text-slate-900">
                        Live Preview
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Invoice preview updates automatically while editing the
                        form.
                      </p>
<button
  type="button"
  onClick={() =>
    window.open(
      "/tools/invoice-generator/preview",
      "_blank"
    )
  }
  className="mt-5 inline-flex items-center rounded-xl bg-[#081f4d] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
>
  Open Preview
</button>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="pb-6 text-center text-xs text-slate-400">
              Live invoice preview updates automatically while editing the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


