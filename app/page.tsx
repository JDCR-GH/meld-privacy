const providerLinks = [
  ["OpenAI", "https://openai.com/policies/privacy-policy/"],
  ["Supabase", "https://supabase.com/privacy"],
  ["Apple", "https://www.apple.com/legal/privacy/"],
  ["WHOOP", "https://www.whoop.com/us/en/full-privacy-policy/"],
] as const;

/** Renders Meld's complete public privacy policy. */
export default function Home() {
  return (
    <main>
      <header className="hero">
        <a className="brand" href="#top" aria-label="Meld home">
          <span className="mark" aria-hidden="true">m</span>
          <span>Meld</span>
        </a>

        <div id="top">
          <p className="eyebrow">Privacy policy</p>
          <h1>Privacy, without the fine-print maze.</h1>
          <p className="lede">
            Meld uses the information you choose to share to remember your
            training and coach you. We do not sell your personal information or
            use health and fitness data for advertising.
          </p>
          <p className="effective"><strong>Effective:</strong> September 6, 2026</p>
        </div>
      </header>

      <article>
        <aside className="summary" aria-label="Privacy summary">
          <span className="summary-number">In plain English</span>
          <p>
            You control what Meld can access. Your information is used to
            operate your account, understand your training, provide personalized
            coaching, and improve the reliability and safety of the service. You
            choose whether OpenAI may process your personal data for AI features.
            You can withdraw that permission, disconnect WHOOP, change Apple
            Health access, or delete your Meld account from the available controls.
          </p>
        </aside>

        <PolicySection number="01" title="Information Meld collects">
          <p>Depending on how you use Meld and the permissions you grant, we may collect:</p>
          <ul>
            <li><strong>Account and profile information:</strong> an internal account identifier, your name, goals, preferences, experience, availability, equipment, limitations, and information received when you choose Sign in with Apple.</li>
            <li><strong>Training information:</strong> plans, workouts, exercises, sets, repetitions, weights, pace, distance, duration, progress, readiness, and your edits or confirmations.</li>
            <li><strong>Apple Health information:</strong> only the categories you approve: workouts, sleep analysis, heart-rate variability, resting heart rate, heart rate, walking and running distance, and active energy burned. Meld may write workouts you complete with Meld back to Apple Health when you approve that access.</li>
            <li><strong>WHOOP information:</strong> when you connect WHOOP, Meld may import the categories you approve, including profile, cycles, recovery, sleep, workouts, height, weight, and maximum heart rate.</li>
            <li><strong>Conversations and content:</strong> live voice microphone audio, message-dictation audio, voice transcripts, typed messages, coaching responses, and structured facts needed for coaching memory. After you allow OpenAI processing, live voice audio is sent to OpenAI for the active conversation. Message dictation is processed on-device where available or by Apple Speech. The editable transcript is sent to Meld and OpenAI only after you tap Send. Microphone audio is processed for the requested voice feature and is not saved to your Meld account.</li>
            <li><strong>Photos and nutrition information:</strong> equipment, machine, or food photos you choose to submit for analysis, plus nutrition estimates and optional details you provide, such as portion size, ingredients, cooking oil, meal type, and notes. Submitted photos are processed to answer your request but are not stored by Meld. A nutrition estimate is saved to your history only after you confirm it.</li>
            <li><strong>Purchase information:</strong> subscription status and transaction identifiers made available through Apple. Meld does not receive your full payment-card details.</li>
            <li><strong>Technical information:</strong> limited request, error, device, and security information needed to operate, protect, and troubleshoot the service.</li>
          </ul>
        </PolicySection>

        <PolicySection number="02" title="How Meld uses information">
          <p>We use information to:</p>
          <ul>
            <li>provide voice and text coaching, remember prior training, build and adjust plans, recognize equipment, estimate food nutrition, and log workouts or meals you confirm;</li>
            <li>connect and synchronize Apple Health and WHOOP when you ask us to;</li>
            <li>operate authentication, subscriptions, support, safety, fraud prevention, and account deletion;</li>
            <li>maintain and improve the reliability, quality, and safety of Meld; and</li>
            <li>comply with legal obligations and protect users, Meld, and others.</li>
          </ul>
          <p>Health, fitness, and body-measurement information is used to provide fitness and coaching features to you. It is not used for targeted advertising, sold, or provided to data brokers.</p>
        </PolicySection>

        <PolicySection number="03" title="AI processing">
          <p>Before Meld sends personal data to OpenAI, Meld identifies OpenAI, describes the relevant data categories and purposes, and asks you to choose Allow and continue. This permission is stored for your Meld account. If you choose Not now, AI coaching, live voice, equipment recognition, and food-photo analysis remain paused. Today, Progress, account controls, and manual workout logging remain available.</p>
          <p>When you allow processing, Meld uses OpenAI services to provide coaching, live speech, equipment recognition, and food-photo nutrition estimates. Live voice audio and its transcript are sent to OpenAI for the active conversation. Message dictation is processed on-device where available or by Apple Speech. Meld sends the editable dictation transcript to OpenAI only after you tap Send. To produce a response, relevant parts of your prompt, conversation, photo, profile, training history, nutrition history, and approved health or fitness context may also be sent to OpenAI. Meld limits this context to what is reasonably needed for the feature you requested.</p>
          <p>AI output can be incomplete or wrong. Food-photo calories and macronutrients are estimates, especially when ingredients, cooking methods, or portions are not visible. Meld is a fitness coaching tool, not a medical provider, and it does not diagnose or treat medical conditions. Stop exercising and seek qualified medical help when appropriate.</p>
        </PolicySection>

        <PolicySection number="04" title="When information is shared">
          <p>Meld does not sell your personal information. We share information only as needed with:</p>
          <ul>
            <li><strong>Service providers:</strong> Supabase for authentication, database, and backend infrastructure; OpenAI for AI features; and Apple for app distribution, HealthKit permissions, Sign in with Apple, and subscriptions.</li>
            <li><strong>Connected services:</strong> WHOOP and Apple Health when you direct Meld to connect, read, synchronize, or write approved information.</li>
            <li><strong>Legal and safety recipients:</strong> when reasonably necessary to comply with law, enforce our terms, protect rights or safety, or respond to valid legal process.</li>
            <li><strong>A successor:</strong> if Meld is involved in a merger, financing, acquisition, reorganization, or sale of assets, subject to appropriate confidentiality and notice where required.</li>
          </ul>
          <p>
            These providers process information under their own terms and privacy commitments. Read the {providerLinks.map(([name, href], index) => (
              <span key={name}>
                <a href={href} target="_blank" rel="noreferrer">{name} Privacy Policy</a>
                {index < providerLinks.length - 2 ? ", " : index === providerLinks.length - 2 ? ", and " : "."}
              </span>
            ))}
          </p>
        </PolicySection>

        <PolicySection number="05" title="Retention and deletion">
          <p>We retain account, coaching, training, and confirmed nutrition information while your account is active and as needed to provide Meld. Food and equipment photos are processed for the requested analysis and are not stored by Meld. You can delete individual nutrition entries in the app. We may retain limited records longer when reasonably necessary for security, dispute resolution, legal compliance, or enforcement. Backup copies may remain for a limited period before they are overwritten.</p>
          <p>You can delete your account from Meld&apos;s profile settings. Account deletion removes your Meld account and associated server-side product data, subject to the limited exceptions above. Disconnecting WHOOP revokes Meld&apos;s connection and deletes its stored access credentials, stopping future WHOOP synchronization. Information already imported into your Meld history remains until you delete it or delete your account.</p>
        </PolicySection>

        <PolicySection number="06" title="Your choices and rights">
          <ul>
            <li>Allow or decline OpenAI processing when Meld first asks, and withdraw or grant that permission later from Profile &gt; Privacy &amp; Safety.</li>
            <li>Choose which Apple Health categories to approve, and change access later in the Health app.</li>
            <li>Connect or disconnect WHOOP from Meld&apos;s profile settings.</li>
            <li>Correct profile and workout information, or delete saved nutrition entries, through Meld.</li>
            <li>Delete your Meld account and associated server-side product data in the app.</li>
            <li>Contact us to ask about access, correction, deletion, restriction, portability, or objection rights available where you live.</li>
          </ul>
          <p>We may need to verify your request. Some rights may be limited by applicable law.</p>
        </PolicySection>

        <PolicySection number="07" title="Security and international processing">
          <p>We use reasonable technical and organizational safeguards, including authenticated access controls and keeping sensitive service credentials on the server. No system is completely secure, so we cannot guarantee absolute security.</p>
          <p>Meld and its service providers may process information in the United States and other countries. Those countries may have privacy laws that differ from the laws where you live.</p>
        </PolicySection>

        <PolicySection number="08" title="Children">
          <p>Meld is not directed to children under 13, or a higher minimum age where required by local law. If you believe a child has provided personal information without appropriate permission, contact us so we can investigate and delete it.</p>
        </PolicySection>

        <PolicySection number="09" title="Changes to this policy">
          <p>We may update this policy as Meld changes. We will post the updated policy here, change the effective date, and provide additional notice when required by law.</p>
        </PolicySection>

        <PolicySection number="10" title="Contact">
          <p>Questions or privacy requests can be sent to <a href="mailto:diagszer@gmail.com">diagszer@gmail.com</a>.</p>
        </PolicySection>
      </article>

      <footer>
        <span className="footer-mark" aria-hidden="true">m</span>
        <p>© 2026 Meld. Your training is personal. We treat it that way.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}

/** Renders one numbered section of the public Meld privacy policy. */
function PolicySection({
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
