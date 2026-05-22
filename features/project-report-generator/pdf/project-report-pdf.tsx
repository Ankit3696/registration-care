import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 40,
    paddingHorizontal: 38,
    backgroundColor: "#ffffff",
    fontSize: 10,
    color: "#1e293b",
    fontFamily: "Helvetica",
    lineHeight: 1.45,
  },

  /* COVER */
  cover: {
    flex: 1,
    justifyContent: "space-between",
  },

  brandBadge: {
    alignSelf: "flex-start",
    border: "1 solid #cbd5e1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 18,
  },

  brandBadgeText: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 1,
    color: "#12357d",
    textTransform: "uppercase",
  },

  reportTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 8,
    lineHeight: 1.2,
  },

  reportSubtitle: {
    fontSize: 11,
    color: "#475569",
    lineHeight: 1.6,
    marginBottom: 20,
  },

  businessName: {
    fontSize: 18,
    fontWeight: 700,
    color: "#081f4d",
    marginBottom: 8,
  },

  metaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  metaCard: {
    width: "50%",
    paddingRight: 10,
    marginBottom: 12,
  },

  metaLabel: {
    fontSize: 8,
    color: "#64748b",
    textTransform: "uppercase",
    marginBottom: 3,
    letterSpacing: 0.8,
  },

  metaValue: {
    fontSize: 10,
    fontWeight: 700,
    color: "#0f172a",
  },

  footerBox: {
    borderTop: "1 solid #cbd5e1",
    paddingTop: 12,
    marginTop: 24,
  },

  footerText: {
    fontSize: 8,
    color: "#64748b",
    lineHeight: 1.5,
  },

  /* SECTION */
  section: {
    marginBottom: 22,
  },

  sectionHeader: {
    marginBottom: 8,
  },

  sectionBadge: {
    fontSize: 7,
    textTransform: "uppercase",
    color: "#12357d",
    letterSpacing: 1,
    marginBottom: 2,
    fontWeight: 700,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0f172a",
  },

  paragraph: {
    fontSize: 10,
    lineHeight: 1.7,
    color: "#334155",
  },

  /* TABLES */
  table: {
    marginTop: 12,
    border: "1 solid #cbd5e1",
  },

  tableRow: {
    flexDirection: "row",
  },

  tableHeader: {
    backgroundColor: "#0f172a",
  },

  tableHeaderCell: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 9,
    color: "#ffffff",
    fontWeight: 700,
  },

  tableCell: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 9,
    color: "#334155",
    borderBottom: "1 solid #e2e8f0",
  },

  /* STATS */
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
    marginBottom: 6,
  },

  statCard: {
    width: "50%",
    paddingRight: 10,
    marginBottom: 12,
  },

  statLabel: {
    fontSize: 8,
    color: "#64748b",
    textTransform: "uppercase",
    marginBottom: 2,
    letterSpacing: 0.8,
  },

  statValue: {
    fontSize: 13,
    fontWeight: 700,
    color: "#081f4d",
  },

  /* SWOT */
  swotGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  swotCard: {
    width: "48%",
    marginBottom: 12,
    paddingRight: 12,
  },

  swotTitle: {
    fontSize: 10,
    fontWeight: 700,
    marginBottom: 6,
    color: "#0f172a",
  },

  bullet: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#475569",
    marginBottom: 3,
  },

  /* FINAL */
  conclusionBox: {
    marginTop: 10,
    borderTop: "2 solid #16a34a",
    paddingTop: 12,
  },

  conclusionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#166534",
    marginBottom: 6,
  },

  conclusionText: {
    fontSize: 10,
    lineHeight: 1.7,
    color: "#166534",
  },
})

type Props = {
  businessName: string
  ownerName: string
  businessType: string
  businessLocation: string
  businessDescription: string

  selectedScheme: string

  projectCost: number
  ownInvestment: number
  loanAmount: number
  workingCapital: number

  monthlyRevenue: number
  monthlyExpenses: number
  estimatedProfit: number

  businessScore: number
  businessHealth: string
  roi: number
  dscr: number
}

export default function ProjectReportPDF({
  businessName,
  ownerName,
  businessType,
  businessLocation,
  businessDescription,

  selectedScheme,

  projectCost,
  ownInvestment,
  loanAmount,
  workingCapital,

  monthlyRevenue,
  monthlyExpenses,
  estimatedProfit,

  businessScore,
  businessHealth,
  roi,
  dscr,
}: Props) {
  return (
    <Document>
      {/* COVER PAGE */}
      <Page
        size="A4"
        style={styles.page}
      >
        <View style={styles.cover}>
          <View>
            <View
              style={
                styles.brandBadge
              }
            >
              <Text
                style={
                  styles.brandBadgeText
                }
              >
                Registration Care
              </Text>
            </View>

            <Text
              style={
                styles.reportTitle
              }
            >
              Business Project Report
            </Text>

            <Text
              style={
                styles.reportSubtitle
              }
            >
              AI-powered professional business report prepared for government schemes, MSME funding and bank loan applications.
            </Text>

            <Text
              style={
                styles.businessName
              }
            >
              {businessName}
            </Text>

            <Text
              style={
                styles.paragraph
              }
            >
              {businessDescription}
            </Text>

            {/* META */}
            <View
              style={
                styles.metaGrid
              }
            >
              <MetaCard
                label="Owner"
                value={
                  ownerName
                }
              />

              <MetaCard
                label="Business Type"
                value={
                  businessType
                }
              />

              <MetaCard
                label="Location"
                value={
                  businessLocation
                }
              />

              <MetaCard
                label="Scheme"
                value={
                  selectedScheme
                }
              />
            </View>
          </View>

          <View
            style={
              styles.footerBox
            }
          >
            <Text
              style={
                styles.footerText
              }
            >
              Prepared by Registration Care AI Business Suite. This report contains financial analysis, funding structure, profitability projections and business feasibility insights.
            </Text>
          </View>
        </View>
      </Page>

      {/* MAIN REPORT */}
      <Page
        size="A4"
        style={styles.page}
      >
        {/* EXECUTIVE SUMMARY */}
        <SectionHeader
          title="Executive Summary"
        />

        <Text
          style={
            styles.paragraph
          }
        >
          This project report has been prepared for{" "}
          {businessName} under the{" "}
          {selectedScheme} scheme. The proposed business demonstrates viable revenue potential, operational sustainability and long-term profitability based on projected financial assumptions and business analysis.
        </Text>

        {/* FINANCIAL STATS */}
        <View
          style={
            styles.statsGrid
          }
        >
          <StatCard
            label="Business Score"
            value={`${businessScore}/100`}
          />

          <StatCard
            label="Business Health"
            value={
              businessHealth
            }
          />

          <StatCard
            label="ROI"
            value={`${roi}%`}
          />

          <StatCard
            label="DSCR"
            value={dscr.toString()}
          />
        </View>

        {/* PROJECT COST */}
        <View
  wrap={false}
  style={
    styles.section
  }
>
          <SectionHeader
            title="Project Cost & Means of Finance"
          />

          <View
            style={
              styles.table
            }
          >
            <View
              style={[
                styles.tableRow,
                styles.tableHeader,
              ]}
            >
              <Text
                style={
                  styles.tableHeaderCell
                }
              >
                Particulars
              </Text>

              <Text
                style={
                  styles.tableHeaderCell
                }
              >
                Amount
              </Text>
            </View>

            <TableRow
              label="Project Cost"
              value={projectCost}
            />

            <TableRow
              label="Own Investment"
              value={
                ownInvestment
              }
            />

            <TableRow
              label="Loan Amount"
              value={loanAmount}
            />

            <TableRow
              label="Working Capital"
              value={
                workingCapital
              }
            />
          </View>
        </View>

        {/* REVENUE */}
       <View
  wrap={false}
  style={
    styles.section
  }
>
          <SectionHeader
            title="Revenue & Profitability"
          />

          <View
  wrap={false}
  style={
    styles.table
  }
>
            <View
              style={[
                styles.tableRow,
                styles.tableHeader,
              ]}
            >
              <Text
                style={
                  styles.tableHeaderCell
                }
              >
                Financial Metric
              </Text>

              <Text
                style={
                  styles.tableHeaderCell
                }
              >
                Monthly Value
              </Text>
            </View>

            <TableRow
              label="Monthly Revenue"
              value={
                monthlyRevenue
              }
            />

            <TableRow
              label="Monthly Expenses"
              value={
                monthlyExpenses
              }
            />

            <TableRow
              label="Estimated Profit"
              value={
                estimatedProfit
              }
            />
          </View>
        </View>

        {/* SWOT */}
        <View
          style={
            styles.section
          }
        >
          <SectionHeader
            title="SWOT Analysis"
          />

          <View
            style={
              styles.swotGrid
            }
          >
            <SwotCard
              title="Strengths"
              points={[
                "Strong business opportunity",
                "Growing market demand",
                "Scalable business structure",
              ]}
            />

            <SwotCard
              title="Weaknesses"
              points={[
                "Initial investment dependency",
                "Operational competition",
              ]}
            />

            <SwotCard
              title="Opportunities"
              points={[
                "Future expansion possibilities",
                "Government scheme support",
              ]}
            />

            <SwotCard
              title="Threats"
              points={[
                "Market fluctuations",
                "Competitive pressure",
              ]}
            />
          </View>
        </View>

        {/* CONCLUSION */}
        <View
          style={
            styles.conclusionBox
          }
        >
          <Text
            style={
              styles.conclusionTitle
            }
          >
            Final Conclusion
          </Text>

          <Text
            style={
              styles.conclusionText
            }
          >
            Based on the projected revenue, investment structure and profitability analysis, the proposed business appears financially feasible and suitable for loan consideration under the selected scheme.
          </Text>
        </View>
      </Page>
    </Document>
  )
}

function SectionHeader({
  title,
}: {
  title: string
}) {
  return (
    <View
      style={
        styles.sectionHeader
      }
    >
      <Text
        style={
          styles.sectionBadge
        }
      >
        REPORT SECTION
      </Text>

      <Text
        style={
          styles.sectionTitle
        }
      >
        {title}
      </Text>
    </View>
  )
}

function MetaCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <View
      style={styles.metaCard}
    >
      <Text
        style={
          styles.metaLabel
        }
      >
        {label}
      </Text>

      <Text
        style={
          styles.metaValue
        }
      >
        {value}
      </Text>
    </View>
  )
}

function StatCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <View
      style={styles.statCard}
    >
      <Text
        style={
          styles.statLabel
        }
      >
        {label}
      </Text>

      <Text
        style={
          styles.statValue
        }
      >
        {value}
      </Text>
    </View>
  )
}

function TableRow({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <View
      style={styles.tableRow}
    >
      <Text
        style={styles.tableCell}
      >
        {label}
      </Text>

      <Text
        style={styles.tableCell}
      >
        ₹ {value.toLocaleString()}
      </Text>
    </View>
  )
}

function SwotCard({
  title,
  points,
}: {
  title: string
  points: string[]
}) {
  return (
    <View
      style={styles.swotCard}
    >
      <Text
        style={
          styles.swotTitle
        }
      >
        {title}
      </Text>

      {points.map((point) => (
        <Text
          key={point}
          style={
            styles.bullet
          }
        >
          • {point}
        </Text>
      ))}
    </View>
  )
}