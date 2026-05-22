"use client"

import { ChangeEvent } from "react"

import { useInvoiceStore } from "../store"

export default function LogoUpload() {
  const { updateField } =
    useInvoiceStore()

  const handleLogoUpload = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    // Limit image size
    if (file.size > 2 * 1024 * 1024) {
      alert("Logo size must be under 2MB")
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      updateField(
        "businessLogo",
        reader.result as string
      )
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="w-full">
      <label className="group flex cursor-pointer flex-col overflow-hidden rounded-[28px] border border-dashed border-slate-300 bg-white transition-all duration-300 hover:border-[#081f4d]/40 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
        {/* TOP AREA */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#081f4d] via-[#0b2864] to-[#12357d] px-6 py-8">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-blue-300/20 blur-2xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 014-4h.586A1 1 0 008.293 10.293l1.414-1.414A1 1 0 0110.414 8H11a4 4 0 014 4v1m-3 4h6m-3-3v6"
                />
              </svg>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Upload Business Logo
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-blue-100">
              Add your business branding for professional invoice PDFs.
            </p>

            <div className="mt-6 inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#081f4d] shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
              Choose Logo File
            </div>

            <div className="mt-3 text-xs text-blue-100/90">
              PNG, JPG • Maximum 2MB
            </div>
          </div>
        </div>

        {/* BOTTOM AREA */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 px-6 py-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Recommended Size
            </div>

            <div className="mt-1 text-xs text-slate-500">
              512×512 PNG transparent logo
            </div>
          </div>

          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            Secure Upload
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleLogoUpload}
          className="hidden"
        />
      </label>
    </div>
  )
}


