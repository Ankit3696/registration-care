export interface InvoiceItem {
  id: number
  name: string
  quantity: number
  price: number
  gst: number
}

export interface InvoiceData {
  invoiceNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string

  items: InvoiceItem[]

  subtotal: number
  gstTotal: number
  grandTotal: number
}


