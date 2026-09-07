import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Meld",
  description: "Terms governing use of the Meld fitness coaching service.",
  openGraph: {
    title: "Terms of Use | Meld",
    description: "Terms governing use of the Meld fitness coaching service.",
  },
  twitter: {
    title: "Terms of Use | Meld",
    description: "Terms governing use of the Meld fitness coaching service.",
  },
};

const standardEula =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

/** Renders Meld's public Terms of Use. */
export default function Terms() {
  return (
    <main>
      <header className="hero terms-hero">
        <a className="brand" href="/meld-privacy/" aria-label="Meld privacy policy">
          <span className="mark" aria-hidden="true">m</span>
          <span>Meld</span>
        </a>

        <div id="top">
          <p className="eyebrow">Terms of use</p>
          <h1>Train informed. Stay in control.</h1>
          <p className="lede">
            These Terms explain your responsibilities and the important limits
            of Meld&apos;s AI-powered fitness and nutrition features.
          </p>
          <p className="effective"><strong>Effective:</strong> September 7, 2026. <strong>Version:</strong> 1</p>
          <p className="version-record">
            <a href="/meld-privacy/legal/document-manifest-v1.json">
              Version record: meld.terms.v1
            </a>
          </p>
        </div>
      </header>

      <article>
        <aside className="summary" aria-label="Important safety summary">
          <span className="summary-number">Please read this first</span>
          <p>
            Meld can make mistakes. Its workout guidance, machine recognition,
            nutrition estimates, and wearable insights may be incomplete,
            delayed, or inaccurate. Use your judgment, verify important
            information, and consult a qualified professional when appropriate.
            Meld does not provide medical care or emergency services.
          </p>
        </aside>

        <TermsSection number="01" title="Agreement and eligibility">
          <p>
            These Terms of Use govern your access to and use of the Meld mobile
            application, AI coaching, websites, and related services
            (collectively, the &quot;Service&quot;). Meld is operated by Diaguili Diagana,
            the individual developer identified as the seller on Meld&apos;s App Store
            product page (&quot;Meld,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p>
            By selecting the in-app option indicating that you agree, or by
            continuing to use the Service after being presented with these Terms,
            you agree to these Terms and acknowledge the <a href="/meld-privacy/">Privacy Policy</a>.
            If you do not agree, do not use the Service.
          </p>
          <p>
            You must be at least 18 years old and legally capable of entering into
            this agreement to access or use the Service. The Service is intended
            for personal, noncommercial use.
          </p>
          <p>
            Your license to the iOS application is governed by Apple&apos;s <a href={standardEula} target="_blank" rel="noreferrer">Standard Licensed Application End User License Agreement</a>.
            These Terms supplement and do not replace Apple&apos;s Standard EULA.
            Apple&apos;s Standard EULA governs the license to and use of the iOS
            application, together with content, materials, subscriptions, and
            services accessed from or purchased within it, to the extent that the
            Standard EULA applies. These Terms provide additional rules for your
            Meld account and Service use. If the agreements conflict concerning the
            iOS application, an App Store subscription, or an in-app service,
            Apple&apos;s Standard EULA controls to the extent of that conflict. These
            Terms otherwise control.
          </p>
        </TermsSection>

        <TermsSection number="02" title="AI output and estimates">
          <p>
            Meld uses artificial intelligence and automated systems to generate
            responses, plans, recommendations, summaries, recognition results,
            and estimates. These systems are probabilistic. Output may be wrong,
            incomplete, inconsistent, outdated, or unsuitable for your individual
            circumstances, even when it sounds confident.
          </p>
          <ul>
            <li><strong>Training:</strong> exercise selection, form cues, loads, pace, volume, recovery guidance, and plan adjustments require your review.</li>
            <li><strong>Nutrition:</strong> calories, macronutrients, ingredients, portions, and cooking methods inferred from photos or descriptions are estimates.</li>
            <li><strong>Equipment:</strong> machine identification, settings, movements, and detected weights may be incorrect or unavailable.</li>
            <li><strong>Data interpretation:</strong> summaries based on Apple Health, WHOOP, your history, or your messages can omit, duplicate, or misinterpret information.</li>
          </ul>
          <p>
            Verify important output before relying on it. Do not use Meld as the
            sole basis for a decision that could create a risk of injury, illness,
            or other harm. You remain responsible for deciding whether and how to
            act on any output.
          </p>
        </TermsSection>

        <TermsSection number="03" title="Health and exercise safety">
          <p>
            Meld provides general fitness and wellness information. Meld is not a
            physician, registered dietitian, physical therapist, certified medical
            provider, or emergency service. Use of Meld does not create a
            doctor-patient, dietitian-client, trainer-client, or other professional
            relationship. Meld does not diagnose, treat, cure, or prevent any
            disease, injury, or medical condition.
          </p>
          <p>
            Consult a qualified healthcare professional before starting or changing
            an exercise, nutrition, or recovery program, especially if you have a
            medical condition, injury, symptoms, take medication, are pregnant, or
            have been advised to limit physical activity. Use equipment according
            to its instructions and obtain qualified, in-person supervision when
            needed.
          </p>
          <p>
            Stop exercising and seek appropriate medical help if you experience
            chest pain, faintness, severe shortness of breath, sudden weakness,
            unusual pain, or other concerning symptoms. Call your local emergency
            number for an emergency. Meld does not monitor communications or health
            data for emergencies and cannot contact emergency services for you.
          </p>
        </TermsSection>

        <TermsSection number="04" title="Your account and information">
          <p>
            You are responsible for information submitted through your account,
            for maintaining the security of your device and credentials, and for
            activity under your account. Provide information you have the right to
            use, and review logged workouts, meals, measurements, and other records
            for accuracy. Contact <a href="/meld-privacy/support/">Support</a> promptly
            if you suspect unauthorized access.
          </p>
          <p>
            You retain ownership of messages, photos, workout details, meal details,
            and other content you submit. You grant Meld a limited, worldwide,
            nonexclusive license to host, process, reproduce, and transmit that
            content only as reasonably necessary to operate, secure, and improve
            the Service, provide requested features, comply with law, and enforce
            these Terms. Our collection and use of personal information is described
            in the <a href="/meld-privacy/">Privacy Policy</a>.
          </p>
        </TermsSection>

        <TermsSection number="05" title="Wearables and connected data">
          <p>
            Apple Health, WHOOP, and other connected sources control the data they
            collect and make available. Synchronization can be delayed, interrupted,
            duplicated, incomplete, revoked, or affected by device settings,
            permissions, network conditions, third-party outages, and changes to
            external services. Meld does not guarantee continuous availability or
            accuracy of connected data.
          </p>
          <p>
            Review source data and permissions when accuracy matters. Disconnecting
            a service stops future synchronization as described in the Privacy Policy,
            but it may not remove records previously imported into Meld. You must
            comply with the terms that apply to each connected service.
          </p>
        </TermsSection>

        <TermsSection number="06" title="Subscriptions and billing">
          <p>
            Meld may offer auto-renewable monthly or annual subscriptions through
            Apple&apos;s App Store. The price, billing period, included features, and any
            introductory offer or free-trial terms are displayed before purchase.
            Payment is charged to your Apple Account when you confirm the purchase.
          </p>
          <p>
            A subscription renews automatically unless you cancel it through your
            Apple Account settings at least 24 hours before the end of the current
            billing period. Apple charges renewal to your Apple Account. Deleting
            Meld or your Meld account does not cancel a subscription. You can manage
            or cancel a subscription in Settings &gt; Apple Account &gt; Subscriptions.
          </p>
          <p>
            Free trials and promotional offers are limited to eligible users under
            the terms shown by Apple. Unless applicable law requires otherwise,
            Apple administers billing, cancellation, and refund requests under its
            policies. Prices and features may change prospectively with the notice
            or consent required by Apple and applicable law.
          </p>
        </TermsSection>

        <TermsSection number="07" title="Acceptable use">
          <p>You agree that you will not:</p>
          <ul>
            <li>use the Service unlawfully, fraudulently, or to harm, threaten, harass, or exploit another person;</li>
            <li>submit content that infringes another person&apos;s privacy, intellectual property, or other rights;</li>
            <li>attempt to bypass access controls, probe vulnerabilities, disrupt the Service, introduce malicious code, or obtain unauthorized access;</li>
            <li>scrape, resell, sublicense, or commercially exploit the Service or its output without written permission;</li>
            <li>reverse engineer or attempt to extract source code or underlying models, except where applicable law expressly permits it; or</li>
            <li>misrepresent AI output as professional medical advice or use the Service to provide regulated services for which you lack required qualifications.</li>
          </ul>
        </TermsSection>

        <TermsSection number="08" title="Meld intellectual property">
          <p>
            Meld and its licensors own the Service, including its software, design,
            branding, interfaces, and original content, excluding content you submit.
            These Terms provide only the limited right to use the Service. No other
            license or ownership interest is transferred to you. Feedback you choose
            to provide may be used without restriction or compensation, provided we
            handle associated personal information under the Privacy Policy.
          </p>
        </TermsSection>

        <TermsSection number="09" title="Third-party services">
          <p>
            The Service relies on or links to third-party services, including Apple,
            Apple Health, WHOOP, OpenAI, and Supabase. Their own terms and privacy
            policies may apply. Meld does not control third-party services and is not
            responsible for their availability, security, content, or actions. Your
            use of a third-party service is subject to your agreement with that provider.
          </p>
        </TermsSection>

        <TermsSection number="10" title="Changes and availability">
          <p>
            We may update, improve, limit, suspend, or discontinue features to operate
            the Service, address safety or security concerns, comply with law, or respond
            to third-party changes. We do not promise that every feature or integration
            will always be available. Where required, we will provide notice and honor
            rights available under applicable law.
          </p>
        </TermsSection>

        <TermsSection number="11" title="Suspension and termination">
          <p>
            You may stop using Meld at any time and may delete your account using the
            controls described in the Privacy Policy. Subscription cancellation is a
            separate action managed through Apple.
          </p>
          <p>
            We may suspend or terminate access when reasonably necessary to protect
            users or the Service, investigate misuse, address a material or repeated
            violation of these Terms, comply with law, or respond to security risks.
            When practical, we will provide notice and an opportunity to address the
            issue. Provisions that by their nature should survive termination will
            survive, including intellectual property, disclaimers, liability limits,
            and dispute provisions.
          </p>
        </TermsSection>

        <TermsSection number="12" title="Warranty disclaimer">
          <p className="legal-emphasis">
            To the maximum extent permitted by applicable law, the Service and all
            output are provided &quot;as is&quot; and &quot;as available.&quot; Meld disclaims all
            express, implied, and statutory warranties, including warranties of
            merchantability, fitness for a particular purpose, title,
            noninfringement, accuracy, availability, and results. Meld does not
            warrant that the Service will be uninterrupted, secure, or error-free,
            or that any output or connected data will be accurate or complete.
          </p>
          <p>
            Some jurisdictions do not allow certain warranty exclusions. Rights that
            cannot legally be waived remain in effect.
          </p>
        </TermsSection>

        <TermsSection number="13" title="Limitation of liability">
          <p className="legal-emphasis">
            To the maximum extent permitted by applicable law, Meld will not be liable
            for indirect, incidental, special, consequential, exemplary, or punitive
            damages, or for loss of data, profits, revenue, goodwill, or opportunities,
            arising from or related to the Service, even if advised that such damages
            were possible.
          </p>
          <p className="legal-emphasis">
            To the maximum extent permitted by applicable law, Meld&apos;s total liability
            for claims arising from or related to the Service will not exceed the greater
            of the amount you paid for Meld during the 12 months before the event giving
            rise to the claim or US $100.
          </p>
          <p>
            These limits do not apply to liability that cannot legally be limited,
            including liability for fraud, willful misconduct, or personal injury caused
            by negligence where applicable law prohibits that limitation. Your local law
            may provide additional rights.
          </p>
          <p>
            For a claim governed by Apple&apos;s Standard EULA, its limitation of
            liability controls to the extent it conflicts with this section.
          </p>
        </TermsSection>

        <TermsSection number="14" title="Responsibility for misuse">
          <p>
            To the extent permitted by applicable law, you are responsible for reasonable
            losses, claims, and expenses arising directly from your intentional misuse of
            the Service, your unlawful conduct, or content you submit in violation of
            another person&apos;s rights. This provision does not make you responsible for
            Meld&apos;s own conduct and does not limit rights that cannot be waived.
          </p>
        </TermsSection>

        <TermsSection number="15" title="Disputes and applicable law">
          <p>
            Before beginning a formal claim, you and Meld agree to make a good-faith
            effort to resolve it informally. Send a description of the issue and the
            requested resolution to <a href="mailto:diagszer@gmail.com">diagszer@gmail.com</a>.
            Either party may proceed after 30 days, or sooner when necessary to preserve
            a legal right. This informal process does not prevent either party from
            seeking urgent relief.
          </p>
          <p>
            Applicable law, including mandatory consumer-protection law where you live,
            governs these Terms. Any claim may be brought in a court that has jurisdiction
            under applicable law. These Terms do not require arbitration and do not waive
            any right to participate in a class or representative action.
          </p>
        </TermsSection>

        <TermsSection number="16" title="Changes to these Terms">
          <p>
            We may update these Terms as Meld changes. We will post the updated Terms,
            change the effective date, and provide additional notice or request renewed
            acceptance when required. Changes apply prospectively. If you do not agree
            to updated Terms, stop using the Service and cancel any subscription before
            its next renewal.
          </p>
        </TermsSection>

        <TermsSection number="17" title="General terms">
          <p>
            If a provision of these Terms is found unenforceable, it will be limited or
            removed only to the extent necessary, and the remaining provisions will
            continue in effect. A failure to enforce a provision is not a waiver. You
            may not transfer these Terms without our consent. We may transfer them as
            part of a reorganization, financing, acquisition, or sale of the Service,
            subject to applicable law. These Terms, the Privacy Policy, Apple&apos;s Standard
            EULA, and terms presented at purchase form the agreement governing the Service.
          </p>
        </TermsSection>

        <TermsSection number="18" title="Contact">
          <p>
            Questions, complaints, or claims about Meld can be sent to
            <a href="mailto:diagszer@gmail.com"> diagszer@gmail.com</a>. Visit
            <a href="/meld-privacy/support/"> Meld Support</a> for account,
            subscription, privacy, or technical help.
          </p>
        </TermsSection>
      </article>

      <footer>
        <span className="footer-mark" aria-hidden="true">m</span>
        <p>© 2026 Meld.</p>
        <nav className="footer-links" aria-label="Legal and support">
          <a href="/meld-privacy/">Privacy</a>
          <a href="/meld-privacy/support/">Support</a>
          <a href="#top">Back to top</a>
        </nav>
      </footer>
    </main>
  );
}

function TermsSection({
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
