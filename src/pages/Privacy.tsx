import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <SEO title="Privacy Policy — SCI Pub Tools" description="Privacy policy for SCI Pub Tools. All image processing happens locally in your browser. We respect your data privacy." />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: March 1, 2026</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Overview</h2>
          <p>SCI Pub Tools ("we", "us", "our") operates the website scipubtools.com. This Privacy Policy explains how we collect, use, and protect information when you use our services.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">2. Image Processing — 100% Local</h2>
          <p>All image processing (figure checking, format conversion, DPI analysis) happens entirely in your browser using client-side JavaScript. Your images are never uploaded to our servers or any third-party servers. We have zero access to your image data.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">3. Information We Collect</h2>
          <p>We may collect the following non-personal information:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Language preference</li>
            <li>Approximate geographic location (country/region level, via IP address)</li>
          </ul>
          <p className="mt-2">We do not collect any personally identifiable information (PII) unless you voluntarily provide it (e.g., contacting us via email).</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Cookies and Local Storage</h2>
          <p>We use browser local storage to remember your preferences (language selection, visit count for bookmark hints). These are stored only on your device and are not transmitted to our servers.</p>
          <p className="mt-2">Third-party services we use may set their own cookies:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Google Analytics — for anonymous usage statistics</li>
            <li>Google AdSense — for displaying relevant advertisements</li>
          </ul>
          <p className="mt-2">You can disable cookies in your browser settings at any time.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Third-Party Advertising</h2>
          <p>We use Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</p>
          <p className="mt-2">You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Analytics</h2>
          <p>We use Google Analytics to understand how visitors use our website. This helps us improve our tools and content. Google Analytics collects anonymous data such as page views, session duration, and device information. No personally identifiable information is collected.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Data Security</h2>
          <p>Since all image processing is performed locally in your browser, your sensitive research data never leaves your device. Our website is served over HTTPS to ensure secure communication. We do not store, process, or have access to any images you use with our tools.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">8. Children's Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">10. Contact</h2>
          <p>If you have questions about this Privacy Policy, please contact us at: <span className="text-blue-600">privacy@scipubtools.com</span></p>
        </section>
      </div>
    </div>
  );
}
