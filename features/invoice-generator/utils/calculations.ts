import { InvoiceItem } from "../types/invoice"

export function calculateInvoice(items: InvoiceItem[]) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  const gstTotal = items.reduce(
    (acc, item) =>
      acc +
      (item.quantity * item.price * item.gst) / 100,
    0
  )

  const grandTotal = subtotal + gstTotal

  return {
    subtotal,
    gstTotal,
    grandTotal,
  }
}


