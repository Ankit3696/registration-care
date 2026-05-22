export type TaxMode =
  | "cgst_sgst"
  | "igst"

export interface InvoiceTotals {
  subtotal: number
  cgst: number
  sgst: number
  igst: number
  totalGST: number
  grandTotal: number
}

export function calculateInvoiceTotals(
  items: any[],
  gstRate: number,
  taxMode: TaxMode
): InvoiceTotals {
  const subtotal = items.reduce(
    (acc, item) => {
      const qty = Number(
        item.quantity || 0
      )

      const price = Number(
        item.price || 0
      )

      return acc + qty * price
    },
    0
  )

  const totalGST =
    (subtotal *
      Number(gstRate || 0)) /
    100

  let cgst = 0
  let sgst = 0
  let igst = 0

  if (taxMode === "igst") {
    igst = totalGST
  } else {
    cgst = totalGST / 2
    sgst = totalGST / 2
  }

  return {
    subtotal,
    cgst,
    sgst,
    igst,
    totalGST,
    grandTotal:
      subtotal + totalGST,
  }
}


