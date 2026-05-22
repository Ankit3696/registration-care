"use client"

import dynamic from "next/dynamic"

const DownloadPDF = dynamic(
  () => import("./download-pdf"),
  {
    ssr: false,
  }
)

export default function PDFClientButton() {
  return <DownloadPDF />
}


