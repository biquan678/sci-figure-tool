import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <SEO title="Terms of Service — SCI Pub Tools" description="Terms of service for SCI Pub Tools. Free online tools for scientific figure checking and image format conversion." />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: March 1, 2026</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
          <p>By accessing and using SCI Pub Tools (scipubtools.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">2. Description of Service</h2>
          <p>SCI Pub Tools provides free, browser-based tools for scientific publication, including:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Figure format checker — verify images against journal requirements</li>
            <li>Image format converter — convert between JPG, PNG, TIFF, and PDF</li>
            <li>Blog articles — guides and tips for scientific figure preparation</li>
          </ul>
          <p className="mt-2">All image processing is performed locally in your browser. No images are uploaded to our servers.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">3. Free Use</h2>
          <p>Our tools are provided free of charge. No registration or account is required. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Disclaimer of Warranties</h2>
          <p>Our tools are provided "as is" and "as available" without warranties of any kind, either express or implied. While we strive for accuracy, we do not guarantee that:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Journal requirements in our database are always up-to-date</li>
            <li>Converted images will be accepted by all journals</li>
            <li>The service will be uninterrupted or error-free</li>
          </ul>
          <p className="mt-2">Always verify your figures against the latest journal guidelines before submission.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
          <p>SCI Pub Tools shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to manuscript rejection due to figure formatting issues.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Intellectual Property</h2>
          <p>The content, design, and code of SCI Pub Tools are protected by copyright. You may use our tools freely for personal and commercial purposes. You may not copy, modify, or redistribute our website code without permission.</p>
          <p className="mt-2">Images you process using our tools remain entirely your property. We claim no rights over your content.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Third-Party Services</h2>
          <p>Our website may contain links to third-party websites and uses third-party services (Google Analytics, Google AdSense). We are not responsible for the content or practices of these third parties. Your use of third-party services is governed by their respective terms and privacy policies.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">8. Advertising</h2>
          <p>We display advertisements through Google AdSense to support the free operation of our tools. Ad content is determined by Google and may be personalized based on your browsing history. You can manage ad personalization through your Google account settings.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">9. Changes to Terms</h2>
          <p>We reserve the right to update these Terms of Service at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">10. Contact</h2>
          <p>For questions about these Terms, contact us at: <span className="text-blue-600">contact@scipubtools.com</span></p>
        </section>
      </div>
    </div>
  );
}
