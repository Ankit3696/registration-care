"use client"

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer"

import {
  InvoiceItem,
  TaxMode,
} from "../store"

import { numberToWords } from "../utils/number-to-words"

import { calculateInvoiceTotals } from "@/lib/invoice-calculations"

const styles = StyleSheet.create({
  page: {
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 18,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: 8,
  },

  topBar: {
    height: 8,
    backgroundColor: "#081f4d",
    marginBottom: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1 solid #dbe2ea",
    paddingBottom: 12,
    marginBottom: 16,
  },

  companySection: {
    width: "68%",
  },

  invoiceSection: {
    width: "28%",
    alignItems: "flex-end",
  },

  companyTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  logo: {
    width: 52,
    height: 52,
    objectFit: "contain",
    marginRight: 12,
  },

  companyInfo: {
    flex: 1,
  },

  companyName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#081f4d",
    marginBottom: 4,
    lineHeight: 1.15,
    maxWidth: 330,
  },

  companyAddress: {
    fontSize: 7,
    color: "#64748b",
    lineHeight: 1.5,
    maxWidth: 330,
  },

  infoGrid: {
    borderTop: "1 solid #e2e8f0",
    paddingTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  infoItem: {
    width: "50%",
    flexDirection: "row",
    marginBottom: 5,
  },

  infoLabel: {
    width: 70,
    fontSize: 7,
    fontWeight: "bold",
    color: "#081f4d",
  },

  infoValue: {
    fontSize: 7,
    color: "#475569",
  },

  invoiceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#081f4d",
    marginBottom: 12,
  },

  invoiceMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  invoiceMetaLabel: {
    fontSize: 7.3,
    fontWeight: "bold",
    color: "#081f4d",
  },

  invoiceMetaValue: {
    fontSize: 7.3,
    color: "#475569",
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  card: {
    width: "48.5%",
    border: "1 solid #dbe2ea",
  },

  cardHeader: {
    backgroundColor: "#081f4d",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  cardHeaderText: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "bold",
  },

  cardBody: {
    padding: 10,
  },

  customerName: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 7,
  },

  cardText: {
    fontSize: 7.2,
    color: "#475569",
    marginBottom: 5,
    lineHeight: 1.5,
  },

  table: {
    border: "1 solid #dbe2ea",
    marginBottom: 14,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#081f4d",
    color: "#ffffff",
    paddingVertical: 6,
    paddingHorizontal: 4,
    fontSize: 6.8,
    fontWeight: "bold",
  },

  tableRow: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 4,
    borderBottom: "1 solid #eef2f7",
    fontSize: 6.8,
    alignItems: "center",
  },

  evenRow: {
    backgroundColor: "#fafbfd",
  },

  col1: {
    width: "16%",
  },

  col2: {
    width: "8%",
    textAlign: "center",
  },

  col3: {
    width: "6%",
    textAlign: "center",
  },

  col4: {
    width: "8%",
    textAlign: "center",
  },

  col5: {
    width: "13%",
    textAlign: "right",
  },

  col6: {
    width: "13%",
    textAlign: "right",
  },

  col7: {
    width: "8%",
    textAlign: "center",
  },

  col8: {
    width: "13%",
    textAlign: "right",
  },

  col9: {
    width: "15%",
    textAlign: "right",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  wordsCard: {
    width: "45%",
    border: "1 solid #dbe2ea",
  },

  summaryCard: {
    width: "51%",
    border: "1 solid #dbe2ea",
  },

  summaryBody: {
    padding: 9,
  },

  wordsText: {
    fontSize: 7.4,
    color: "#334155",
    lineHeight: 1.6,
  },

  summaryLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    fontSize: 7.4,
    color: "#334155",
  },

  dashed: {
    borderBottom: "1 dashed #cbd5e1",
    marginVertical: 7,
  },

  grandTotal: {
    backgroundColor: "#f1f5f9",
    padding: 8,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: 9,
    color: "#081f4d",
  },

  declaration: {
    border: "1 solid #dbe2ea",
    padding: 10,
    marginBottom: 18,
  },

  declarationTitle: {
    fontWeight: "bold",
    fontSize: 8,
    color: "#081f4d",
    marginBottom: 5,
  },

  declarationText: {
    fontSize: 7.2,
    color: "#475569",
    lineHeight: 1.5,
  },

  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  signatureBox: {
    width: "35%",
    alignItems: "center",
  },

  signatureLine: {
    width: "100%",
    borderTop: "1 solid #0f172a",
    paddingTop: 5,
    textAlign: "center",
    fontSize: 7.2,
    color: "#475569",
  },

  footer: {
    borderTop: "1 solid #dbe2ea",
    marginTop: 16,
    paddingTop: 6,
    textAlign: "center",
    fontSize: 6.8,
    color: "#64748b",
  },
})

interface InvoicePDFProps {
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

  customerName: string
  customerEmail: string
  customerPhone: string
  customerAddress: string
  customerGST: string
  customerState: string

  invoiceNumber: string
  invoiceDate: string
  paymentTerms: string

  taxMode: TaxMode

  bankName: string
  bankAccount: string
  bankIFSC: string
  bankBranch: string

  items: InvoiceItem[]
}

export default function InvoicePDF({
  businessName,
  businessGST,
  businessPAN,
  businessTAN,
  businessCIN,
  businessAddress,
  businessState,
  businessPhone,
  businessEmail,
  businessWebsite,
  businessLogo,

  customerName,
  customerEmail,
  customerPhone,
  customerAddress,
  customerGST,
  customerState,

  invoiceNumber,
  invoiceDate,
  paymentTerms,

  taxMode,

  bankName,
  bankAccount,
  bankIFSC,
  bankBranch,

  items,
}: InvoicePDFProps) {
  const subtotal = items.reduce(
    (acc, item) =>
      acc +
      Number(item.quantity) *
        Number(item.price),
    0
  )

  const discountTotal = items.reduce(
    (acc, item) =>
      acc +
      (Number(item.quantity) *
        Number(item.price) *
        Number(item.discount)) /
        100,
    0
  )

  const taxableAmount =
    subtotal - discountTotal

  const averageGST =
    items.length > 0
      ? items.reduce(
          (acc, item) =>
            acc + Number(item.gst),
          0
        ) / items.length
      : 0

  const totals =
    calculateInvoiceTotals(
      [
        {
          quantity: 1,
          price: taxableAmount,
        },
      ],
      averageGST,
      taxMode
    )

  const grandTotal =
    totals.grandTotal

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.topBar} />

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.companySection}>
            <View style={styles.companyTop}>
              {businessLogo ? (
                <Image
                  src={businessLogo}
                  style={styles.logo}
                />
              ) : null}

              <View style={styles.companyInfo}>
                <Text style={styles.companyName}>
                  {businessName}
                </Text>

                <Text
                  style={styles.companyAddress}
                >
                  {businessAddress}
                </Text>
              </View>
            </View>

            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>
                  GSTIN
                </Text>

                <Text style={styles.infoValue}>
                  : {businessGST}
                </Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>
                  Email
                </Text>

                <Text style={styles.infoValue}>
                  : {businessEmail}
                </Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>
                  PAN
                </Text>

                <Text style={styles.infoValue}>
                  : {businessPAN}
                </Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>
                  Website
                </Text>

                <Text style={styles.infoValue}>
                  : {businessWebsite}
                </Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>
                  Phone
                </Text>

                <Text style={styles.infoValue}>
                  : {businessPhone}
                </Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>
                  State
                </Text>

                <Text style={styles.infoValue}>
                  : {businessState}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.invoiceSection}>
            <Text style={styles.invoiceTitle}>
              TAX INVOICE
            </Text>

            <View
              style={styles.invoiceMetaRow}
            >
              <Text
                style={
                  styles.invoiceMetaLabel
                }
              >
                Invoice No.
              </Text>

              <Text
                style={
                  styles.invoiceMetaValue
                }
              >
                : {invoiceNumber}
              </Text>
            </View>

            <View
              style={styles.invoiceMetaRow}
            >
              <Text
                style={
                  styles.invoiceMetaLabel
                }
              >
                Invoice Date
              </Text>

              <Text
                style={
                  styles.invoiceMetaValue
                }
              >
                : {invoiceDate}
              </Text>
            </View>

            <View
              style={styles.invoiceMetaRow}
            >
              <Text
                style={
                  styles.invoiceMetaLabel
                }
              >
                Terms
              </Text>

              <Text
                style={
                  styles.invoiceMetaValue
                }
              >
                : {paymentTerms}
              </Text>
            </View>
          </View>
        </View>

        {/* BILL TO + BANK */}
        <View style={styles.sectionRow}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text
                style={
                  styles.cardHeaderText
                }
              >
                BILL TO
              </Text>
            </View>

            <View style={styles.cardBody}>
              <Text
                style={styles.customerName}
              >
                {customerName}
              </Text>

              <Text style={styles.cardText}>
                {customerPhone}
              </Text>

              <Text style={styles.cardText}>
                {customerEmail}
              </Text>

              <Text style={styles.cardText}>
                {customerAddress}
              </Text>

              <Text style={styles.cardText}>
                GSTIN : {customerGST}
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text
                style={
                  styles.cardHeaderText
                }
              >
                BANK DETAILS
              </Text>
            </View>

            <View style={styles.cardBody}>
              <Text
                style={styles.customerName}
              >
                {bankName}
              </Text>

              <Text style={styles.cardText}>
                A/C : {bankAccount}
              </Text>

              <Text style={styles.cardText}>
                IFSC : {bankIFSC}
              </Text>

              <Text style={styles.cardText}>
                Branch : {bankBranch}
              </Text>
            </View>
          </View>
        </View>

        {/* TABLE */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.col1}>
              Item
            </Text>

            <Text style={styles.col2}>
              HSN
            </Text>

            <Text style={styles.col3}>
              Qty
            </Text>

            <Text style={styles.col4}>
              Unit
            </Text>

            <Text style={styles.col5}>
              Rate
            </Text>

            <Text style={styles.col6}>
              Taxable
            </Text>

            <Text style={styles.col7}>
              GST
            </Text>

            <Text style={styles.col8}>
              GST Amt
            </Text>

            <Text style={styles.col9}>
              Total
            </Text>
          </View>

          {items.map((item, index) => {
            const taxable =
              item.quantity * item.price

            const discountAmount =
              (taxable *
                item.discount) /
              100

            const afterDiscount =
              taxable -
              discountAmount

            const gstAmount =
              (afterDiscount *
                item.gst) /
              100

            const total =
              afterDiscount +
              gstAmount

            return (
              <View
                key={item.id}
                style={[
                  styles.tableRow,
                  index % 2 === 0
                    ? styles.evenRow
                    : {},
                ]}
              >
                <Text style={styles.col1}>
                  {item.name}
                </Text>

                <Text style={styles.col2}>
                  {item.hsn}
                </Text>

                <Text style={styles.col3}>
                  {item.quantity}
                </Text>

                <Text style={styles.col4}>
                  {item.unit}
                </Text>

                <Text style={styles.col5}>
                  Rs.{" "}
                  {item.price.toFixed(
                    2
                  )}
                </Text>

                <Text style={styles.col6}>
                  Rs.{" "}
                  {afterDiscount.toFixed(
                    2
                  )}
                </Text>

                <Text style={styles.col7}>
                  {item.gst}%
                </Text>

                <Text style={styles.col8}>
                  Rs.{" "}
                  {gstAmount.toFixed(2)}
                </Text>

                <Text style={styles.col9}>
                  Rs.{" "}
                  {total.toFixed(2)}
                </Text>
              </View>
            )
          })}
        </View>

        {/* SUMMARY */}
        <View style={styles.summaryRow}>
          <View style={styles.wordsCard}>
            <View style={styles.cardHeader}>
              <Text
                style={
                  styles.cardHeaderText
                }
              >
                AMOUNT IN WORDS
              </Text>
            </View>

            <View style={styles.summaryBody}>
              <Text
                style={styles.wordsText}
              >
                Rupees{" "}
                {numberToWords(
                  Math.round(grandTotal)
                )}{" "}
                Only
              </Text>
            </View>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.cardHeader}>
              <Text
                style={
                  styles.cardHeaderText
                }
              >
                INVOICE SUMMARY
              </Text>
            </View>

            <View style={styles.summaryBody}>
              <View
                style={styles.summaryLine}
              >
                <Text>
                  Subtotal
                </Text>

                <Text>
                  Rs.{" "}
                  {subtotal.toFixed(2)}
                </Text>
              </View>

              <View
                style={styles.summaryLine}
              >
                <Text>
                  Discount
                </Text>

                <Text>
                  Rs.{" "}
                  {discountTotal.toFixed(
                    2
                  )}
                </Text>
              </View>

              <View
                style={styles.dashed}
              />

              <View
                style={styles.summaryLine}
              >
                <Text>
                  Taxable Amount
                </Text>

                <Text>
                  Rs.{" "}
                  {taxableAmount.toFixed(
                    2
                  )}
                </Text>
              </View>

              {taxMode ===
              "igst" ? (
                <View
                  style={
                    styles.summaryLine
                  }
                >
                  <Text>
                    IGST
                  </Text>

                  <Text>
                    Rs.{" "}
                    {totals.igst.toFixed(
                      2
                    )}
                  </Text>
                </View>
              ) : (
                <>
                  <View
                    style={
                      styles.summaryLine
                    }
                  >
                    <Text>
                      CGST
                    </Text>

                    <Text>
                      Rs.{" "}
                      {totals.cgst.toFixed(
                        2
                      )}
                    </Text>
                  </View>

                  <View
                    style={
                      styles.summaryLine
                    }
                  >
                    <Text>
                      SGST
                    </Text>

                    <Text>
                      Rs.{" "}
                      {totals.sgst.toFixed(
                        2
                      )}
                    </Text>
                  </View>
                </>
              )}

              <View
                style={styles.dashed}
              />

              <View
                style={styles.grandTotal}
              >
                <Text>
                  GRAND TOTAL
                </Text>

                <Text>
                  Rs.{" "}
                  {grandTotal.toFixed(
                    2
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* DECLARATION */}
        <View style={styles.declaration}>
          <Text
            style={
              styles.declarationTitle
            }
          >
            DECLARATION
          </Text>

          <Text
            style={
              styles.declarationText
            }
          >
            We declare that this
            invoice reflects actual
            goods/services supplied
            and all particulars are
            true and correct.
          </Text>
        </View>

        {/* SIGNATURE */}
        <View
          style={
            styles.signatureSection
          }
        >
          <View
            style={
              styles.signatureBox
            }
          >
            <Text
              style={
                styles.signatureLine
              }
            >
              Customer Signature
            </Text>
          </View>

          <View
            style={
              styles.signatureBox
            }
          >
            <Text
              style={
                styles.signatureLine
              }
            >
              Authorized Signatory
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text>
            This is a computer
            generated tax invoice.
          </Text>
        </View>
      </Page>
    </Document>
  )
}


