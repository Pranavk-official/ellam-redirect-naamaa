import { Hero } from "@/components/hero";
import { contact, newSiteUrl, siteUrl } from "@/lib/site";

// Tells search engines the site moved, and who runs the new one.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ellam → Naamaa",
  url: siteUrl,
  description:
    "Ellam is now part of Parinaamaa. Every temple and service on ellam.in is moving to naamaa.in — find yours.",
  publisher: {
    "@type": "Organization",
    name: "Parinaamaa",
    url: newSiteUrl,
    email: contact.email,
    telephone: contact.phone,
  },
};

const Home = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />

    <Hero />

    <section
      id="find"
      className="flex scroll-mt-10 justify-center px-6 pb-20 sm:px-10"
    >
      <div className="w-full max-w-2xl text-left">
        {/* <Directory /> */}

        {/* Contact — mirrors naamaa.in/contact */}
        <section id="contact" className="scroll-mt-10">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
            Need help moving?
          </h2>
          <p className="mt-2 text-muted">
            Onboarding, billing, or partnership enquiries — the Parinaamaa team
            answers most messages within one business day.
          </p>

          <dl className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted">
                General support
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-foreground transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  {contact.email}
                </a>
                <p className="mt-1.5 text-sm text-muted">
                  Onboarding help, billing questions, and platform support.
                </p>
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={contact.phoneHref}
                  className="font-medium text-foreground transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  {contact.phone}
                </a>
                <p className="mt-1.5 text-sm text-muted">{contact.hours}</p>
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted">
                Register your business
              </dt>
              <dd className="mt-2">
                <a
                  href={contact.enterpriseUrl}
                  className="font-medium text-foreground transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  enterprise.naamaa.in
                </a>
                <p className="mt-1.5 text-sm text-muted">
                  Sign up with basic details — no paperwork, no waiting.
                </p>
              </dd>
            </div>
          </dl>
        </section>

        {/* Footer */}
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
            />
            <span>
              Parinaamaa — the new home for Ellam temples &amp; services.
            </span>
          </span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              {contact.email}
            </a>
            <a
              href={contact.phoneHref}
              className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              {contact.phone}
            </a>
          </span>
        </div>
      </div>
    </section>
  </>
);

export default Home;
