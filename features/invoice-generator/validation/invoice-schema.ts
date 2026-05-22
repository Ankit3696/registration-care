import { z } from "zod"

export const invoiceSchema = z.object({
  invoiceNumber: z.string(),

  customerName: z.string(),

  customerEmail: z.string().email(),

  customerPhone: z.string(),

  items: z.array(
    z.object({
      id: z.number(),

      name: z.string(),

      quantity: z.number(),

      price: z.number(),

      gst: z.number(),
    })
  ),
})


