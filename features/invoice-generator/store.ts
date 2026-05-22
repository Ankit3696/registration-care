"use client"

import { create } from "zustand"

import { persist } from "zustand/middleware"

export interface InvoiceItem {
  id: number

  name: string

  hsn: string

  quantity: number

  unit: string

  price: number

  discount: number

  gst: number
}

export type TaxMode =
  | "cgst_sgst"
  | "igst"

interface InvoiceState {
  // Business Details
  businessName: string
  businessGST: string
  businessPAN: string
  businessTAN: string
  businessCIN: string
  businessAddress: string
  businessState: string
  businessPhone: string
  businessEmail: string
  businessWebsite: string
  businessLogo: string

  // Customer Details
  customerName: string
  customerEmail: string
  customerPhone: string
  customerAddress: string
  customerGST: string
  customerState: string

  // Invoice Details
  invoiceNumber: string
  invoiceDate: string
  paymentTerms: string

  // Tax Mode
  taxMode: TaxMode

  // Banking
  bankName: string
  bankAccount: string
  bankIFSC: string
  bankBranch: string

  // Items
  items: InvoiceItem[]

  // Actions
  addItem: () => void

  removeItem: (
    id: number
  ) => void

  updateItem: (
    id: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => void

  updateField: (
    field: keyof Omit<
      InvoiceState,
      | "items"
      | "addItem"
      | "removeItem"
      | "updateItem"
      | "updateField"
      | "resetInvoice"
    >,
    value: string
  ) => void

  setTaxMode: (
    mode: TaxMode
  ) => void

  resetInvoice: () => void
}

const initialItems: InvoiceItem[] =
  [
    {
      id: 1,
      name: "",
      hsn: "",
      quantity: 1,
      unit: "pcs",
      price: 0,
      discount: 0,
      gst: 18,
    },
  ]

export const useInvoiceStore =
  create<InvoiceState>()(
    persist(
      (set) => ({
        // Business
        businessName: "",
        businessGST: "",
        businessPAN: "",
        businessTAN: "",
        businessCIN: "",
        businessAddress: "",
        businessState: "",
        businessPhone: "",
        businessEmail: "",
        businessWebsite: "",
        businessLogo: "",

        // Customer
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        customerAddress: "",
        customerGST: "",
        customerState: "",

        // Invoice
        invoiceNumber: "",
        invoiceDate: "",
        paymentTerms:
          "Due on Receipt",

        // Tax Mode
        taxMode:
          "cgst_sgst",

        // Banking
        bankName: "",
        bankAccount: "",
        bankIFSC: "",
        bankBranch: "",

        // Items
        items: initialItems,

        // Add Item
        addItem: () =>
          set((state) => ({
            items: [
              ...state.items,
              {
                id: Date.now(),
                name: "",
                hsn: "",
                quantity: 1,
                unit: "pcs",
                price: 0,
                discount: 0,
                gst: 18,
              },
            ],
          })),

        // Remove Item
        removeItem: (
          id
        ) =>
          set((state) => ({
            items:
              state.items.filter(
                (item) =>
                  item.id !== id
              ),
          })),

        // Update Item
        updateItem: (
          id,
          field,
          value
        ) =>
          set((state) => ({
            items:
              state.items.map(
                (item) =>
                  item.id === id
                    ? {
                        ...item,
                        [field]:
                          value,
                      }
                    : item
              ),
          })),

        // Update Fields
        updateField: (
          field,
          value
        ) =>
          set(() => ({
            [field]: value,
          })),

        // Set Tax Mode
        setTaxMode: (
          mode
        ) =>
          set(() => ({
            taxMode: mode,
          })),

        // Reset Invoice
        resetInvoice: () =>
          set(() => ({
            businessName: "",
            businessGST: "",
            businessPAN: "",
            businessTAN: "",
            businessCIN: "",
            businessAddress: "",
            businessState: "",
            businessPhone: "",
            businessEmail: "",
            businessWebsite: "",
            businessLogo: "",

            customerName: "",
            customerEmail: "",
            customerPhone: "",
            customerAddress: "",
            customerGST: "",
            customerState: "",

            invoiceNumber: "",
            invoiceDate: "",
            paymentTerms:
              "Due on Receipt",

            taxMode:
              "cgst_sgst",

            bankName: "",
            bankAccount: "",
            bankIFSC: "",
            bankBranch: "",

            items: initialItems,
          })),
      }),
      {
        name: "invoice-storage",
      }
    )
  )


