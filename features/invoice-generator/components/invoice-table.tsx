"use client"

import { Trash2 } from "lucide-react"

import { useInvoiceStore } from "../store"

export default function InvoiceTable() {
  const {
    items,
    addItem,
    removeItem,
    updateItem,
  } = useInvoiceStore()

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          Invoice Items
        </h3>

        <button
          onClick={addItem}
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Add Item
        </button>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[1200px] border-collapse">
          <thead className="bg-muted/50">
            <tr className="border-b">
              <th className="p-3 text-left">
                Item
              </th>

              <th className="p-3 text-left">
                HSN/SAC
              </th>

              <th className="p-3 text-left">
                Qty
              </th>

              <th className="p-3 text-left">
                Unit
              </th>

              <th className="p-3 text-left">
                Price
              </th>

              <th className="p-3 text-left">
                Discount
              </th>

              <th className="p-3 text-left">
                GST %
              </th>

              <th className="p-3 text-right">
                Total
              </th>

              <th className="p-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              const taxable =
                item.quantity * item.price

              const discountAmount =
                (taxable *
                  item.discount) /
                100

              const afterDiscount =
                taxable - discountAmount

              const gstAmount =
                (afterDiscount *
                  item.gst) /
                100

              const total =
                afterDiscount + gstAmount

              return (
                <tr
                  key={item.id}
                  className="border-b align-top"
                >
                  {/* Item */}
                  <td className="p-3">
                    <input
                      placeholder="Item Name"
                      value={item.name}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "name",
                          e.target.value
                        )
                      }
                      className="w-full rounded-md border p-2"
                    />
                  </td>

                  {/* HSN */}
                  <td className="p-3">
                    <input
                      placeholder="HSN"
                      value={item.hsn}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "hsn",
                          e.target.value
                        )
                      }
                      className="w-28 rounded-md border p-2"
                    />
                  </td>

                  {/* Qty */}
                  <td className="p-3">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "quantity",
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-20 rounded-md border p-2"
                    />
                  </td>

                  {/* Unit */}
                  <td className="p-3">
                    <input
                      placeholder="pcs"
                      value={item.unit}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "unit",
                          e.target.value
                        )
                      }
                      className="w-24 rounded-md border p-2"
                    />
                  </td>

                  {/* Price */}
                  <td className="p-3">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "price",
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-28 rounded-md border p-2"
                    />
                  </td>

                  {/* Discount */}
                  <td className="p-3">
                    <input
                      type="number"
                      value={item.discount}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "discount",
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-24 rounded-md border p-2"
                    />
                  </td>

                  {/* GST */}
                  <td className="p-3">
                    <input
                      type="number"
                      value={item.gst}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "gst",
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-20 rounded-md border p-2"
                    />
                  </td>

                  {/* Total */}
                  <td className="p-3 text-right font-medium">
                    ₹ {total.toFixed(2)}
                  </td>

                  {/* Delete */}
                  <td className="p-3 text-center">
                    <button
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="rounded-md p-2 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}


