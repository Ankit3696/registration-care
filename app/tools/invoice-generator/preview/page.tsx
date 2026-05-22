"use client"

import InvoicePreview from "@/features/invoice-generator/components/invoice-preview"

export default function InvoicePreviewPage() {
  return (
    <div className="min-h-screen bg-[#eef3f8] p-6">
      <div className="mx-auto max-w-[1200px] rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div className="overflow-auto rounded-[30px] bg-[#f8fafc]">
          <InvoicePreview />
        </div>
      </div>
    </div>
  )
}