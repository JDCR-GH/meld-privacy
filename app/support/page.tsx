import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Meld",
  description: "Get help with Meld accounts, subscriptions, connections, and app features.",
};

/** Renders Meld's public customer support page. */
export default function Support() {
  return (
    <main>
      <header className="hero support-hero">
        <a className="brand" href="/meld-privacy/" aria-label="Meld privacy policy">
          <span className="mark" aria-hidden="true">m</span>
          <span>Meld</span>
        </a>

        <div id="top">
          <p className="eyebrow">Support</p>
          <h1>How can we help?</h1>
          <p className="lede">
            Email <a href="mailto:diagszer@gmail.com">diagszer@gmail.com</a> with
            your question. Include your Meld app version and iOS version when
            reporting a problem.
          </p>
        </div>
      </header>

      <article>
        <aside className="summary" aria-label="Support contact">
          <span className="summary-number">Contact Meld</span>
          <p>
            For account, subscription, privacy, accessibility, or technical help,
            contact <a href="mailto:diagszer@gmail.com">diagszer@gmail.com</a>.
            Avoid sending passwords, payment details, or sensitive health records.
          </p>
        </aside>

        <SupportSection number="01" title="Subscriptions">
          <p>
            Open Meld, go to Profile, then select Meld Pro to view plans or restore
            an existing purchase. Apple manages billing and cancellation through
            Settings &gt; Apple Account &gt; Subscriptions.
          </p>
        </SupportSection>

        <SupportSection number="02" title="Apple Health and WHOOP">
          <p>
            Apple Health permissions can be reviewed in the Health app under
            Sharing &gt; Apps &gt; Meld. WHOOP can be connected, refreshed, or
            disconnected from Meld&apos;s Profile screen.
          </p>
        </SupportSection>

        <SupportSection number="03" title="Account and data">
          <p>
            You can update your name and coaching preferences from Profile. To
            permanently remove your Meld account and associated server-side data,
            choose Delete account in Profile. Deleting Meld does not cancel an
            Apple subscription.
          </p>
        </SupportSection>

        <SupportSection number="04" title="Safety and privacy">
          <p>
            Meld provides fitness coaching and nutrition estimates. It does not
            provide medical diagnosis or emergency care. Read the complete
            <a href="/meld-privacy/"> Meld Privacy Policy</a> for details about
            data handling and your choices.
          </p>
        </SupportSection>
      </article>

      <footer>
        <span className="footer-mark" aria-hidden="true">m</span>
        <p>© 2026 Meld.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}

function SupportSection({
  number,
  title,
  children,
}: Readonly<{
  number: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="policy-section">
      <div className="section-heading">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
