export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="rounded-full border px-4 py-1 text-sm font-medium text-muted-foreground">
          Trusted Business Compliance Platform
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Business Registration,
          Compliance & Billing
          Tools For India
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          GST registration, MSME services, invoice generation,
          project reports, compliance tools, and business support —
          all in one modern platform.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-md bg-black px-8 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Get Started
          </button>

          <button className="rounded-md border px-8 py-4 text-sm font-medium transition hover:bg-muted">
            Explore Tools
          </button>
        </div>

        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 text-left">
            <h3 className="text-lg font-semibold">
              GST & MSME Services
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Business registrations and compliance assistance.
            </p>
          </div>

          <div className="rounded-2xl border p-6 text-left">
            <h3 className="text-lg font-semibold">
              Invoice Generator
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Create professional GST invoices instantly.
            </p>
          </div>

          <div className="rounded-2xl border p-6 text-left">
            <h3 className="text-lg font-semibold">
              Project Reports
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Generate business reports for loans and startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


