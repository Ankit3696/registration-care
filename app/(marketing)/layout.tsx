import { ReactNode } from "react"

interface MarketingLayoutProps {
  children: ReactNode
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {children}
    </div>
  )
}


