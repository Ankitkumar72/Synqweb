import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16">
            <h1 className="text-[38px] font-bold tracking-tight text-black mb-4">Privacy Policy</h1>
            <p className="text-base text-gray-500 font-medium whitespace-nowrap">Last Updated: March 12, 2026</p>
          </header>

          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            <section>
              <p className="mb-6">
                Synq operates the Synq application and related services (&quot;Synq&quot;, &quot;the Service&quot;). This Privacy Policy explains how Synq collects, uses, and protects information when users access or use the Synq service.
              </p>
              <p className="mb-6">
                By using Synq, you agree to the practices described in this Privacy Policy. Synq aims to ensure that users understand what information is collected and how it is used.
              </p>
            </section>

            <hr className="border-gray-100" />

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">1. Information Synq Collects</h2>
              <p className="mb-4">Synq collects several types of information when users interact with the Synq service.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">1.1 Personal Information</h3>
                  <p className="mb-4">This includes information users provide directly when creating or using an account, such as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email address</li>
                    <li>Login credentials</li>
                    <li>Profile details</li>
                    <li>Communications with support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-2">1.2 Usage Data</h3>
                  <p className="mb-4">Synq automatically collects information about how the service is used, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Interactions with the Synq application</li>
                    <li>Features accessed by users</li>
                    <li>Log data</li>
                    <li>Error or crash reports</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-2">1.3 Device Information</h3>
                  <p className="mb-4">Information about the device used to access the service may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>Browser type</li>
                    <li>IP address</li>
                    <li>Device identifiers</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">2. Creation of Personal Data</h2>
              <p className="mb-4 font-bold">Summary: Synq may create Personal Data about users based on interactions with the Service.</p>
              <p className="mb-4">
                Synq may generate Personal Data in certain circumstances, including records of user interactions with the Synq platform, communications with support, and details about previous activity within the Service.
              </p>
              <p>
                Synq may also combine Personal Data collected from different sources, including different parts of the Synq platform, services, or features in order to improve functionality and provide a better user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">3. How Synq Uses Information</h2>
              <p className="mb-4">Synq uses collected information for purposes including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Managing user accounts</li>
                <li>Authenticating users</li>
                <li>Maintaining and operating the Synq service</li>
                <li>Synchronizing user data across devices</li>
                <li>Improving reliability and performance</li>
                <li>Understanding how the service is used</li>
                <li>Providing customer support</li>
                <li>Processing subscription payments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">4. Payment Processing</h2>
              <p className="mb-4">The Synq service offers subscription-based features.</p>
              <p className="mb-4">
                Payments are processed by <span className="font-bold">Paddle.com Market Ltd.</span>, which acts as the Merchant of Record for Synq. Paddle handles:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Payment processing</li>
                <li>Billing and invoicing</li>
                <li>Tax compliance</li>
                <li>Payment security</li>
              </ul>
              <p className="mb-4">Payment details are processed directly by Paddle. Synq does not store full payment card information.</p>
              <p>
                Paddle Privacy Policy: <a href="https://www.paddle.com/legal/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.paddle.com/legal/privacy</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">5. Third-Party Services</h2>
              <p className="mb-4">Synq relies on trusted third-party services to operate its infrastructure and features.</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">5.1 Firebase (Google LLC)</h3>
                  <p className="mb-2">Synq may use Firebase services for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Authentication, Database storage, Infrastructure, Application hosting</li>
                  </ul>
                  <p className="mt-2">
                    Firebase Privacy: <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">5.2 Paddle</h3>
                  <p>Paddle manages subscription billing and payment processing.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">6. Data Storage and Security</h2>
              <p className="mb-4">Synq implements reasonable technical and organizational safeguards designed to protect user information.</p>
              <p className="mb-4">These safeguards may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure authentication systems</li>
                <li>Encrypted communication protocols</li>
                <li>Cloud infrastructure protections</li>
                <li>Access control mechanisms</li>
              </ul>
              <p className="mt-4 italic">While Synq works to protect user information, no internet-based service can guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">7. Data Retention</h2>
              <p className="mb-4">Synq retains information only for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain active user accounts</li>
                <li>Provide services to users</li>
                <li>Resolve disputes</li>
                <li>Comply with legal or financial obligations</li>
              </ul>
              <p className="mt-4">When data is no longer required, Synq may delete or anonymize it.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6">8. Account Deletion and Data Requests</h2>
              <p className="mb-4 text-lg">Users may request deletion of their Synq account and associated data.</p>
              <p className="mb-4 text-lg">Requests can be submitted by contacting Synq at:</p>
              <p className="font-bold mb-4 text-xl">
                <a href="mailto:synq.app.labs@gmail.com" className="text-blue-600 hover:underline">synq.app.labs@gmail.com</a>
              </p>
              <p className="text-lg">Synq will delete or anonymize user data unless retention is required for legal, security, or billing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">9. Your Rights</h2>
              <p className="mb-4">Depending on applicable laws, users may have rights regarding their personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Requesting access, correction, or deletion of personal data</li>
                <li>Withdrawing consent for certain processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">10. Cookies and Tracking Technologies</h2>
              <p className="mb-4">Synq may use cookies or similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain authentication sessions</li>
                <li>Store user preferences</li>
                <li>Analyze service usage</li>
                <li>Improve platform functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">11. Children&apos;s Privacy</h2>
              <p className="mb-4">Synq is not intended for children under the age of 13.</p>
              <p>Synq does not knowingly collect personal information from children under 13. If such information is discovered, Synq will take steps to remove it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">12. International Data Transfers</h2>
              <p className="mb-4">Because Synq relies on cloud service providers, user information may be processed or stored in data centers located outside a user&apos;s country.</p>
              <p>By using Synq, users acknowledge that their information may be transferred and processed in other jurisdictions where privacy laws may differ.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">13. Policy Updates</h2>
              <p className="mb-4">This Privacy Policy may be amended or updated from time to time to reflect changes in Synq&apos;s practices regarding the processing of personal data, or changes in applicable laws.</p>
              <p className="mb-4">Continued use of Synq after updates indicates acceptance of the revised Privacy Policy.</p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-[26px] font-bold text-black mb-4">14. Contact Information</h2>
              <p className="mb-2 text-lg italic text-gray-600">If you have questions about this Privacy Policy or Synq&apos;s data practices, contact:</p>
              <p className="font-bold text-xl text-black">
                Email: <a href="mailto:synq.app.labs@gmail.com" className="text-blue-600 hover:underline">synq.app.labs@gmail.com</a>
              </p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
