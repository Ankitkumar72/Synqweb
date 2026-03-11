import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16">
            <h1 className="text-[38px] font-bold tracking-tight text-black mb-4">Terms of Service</h1>
            <p className="text-base text-gray-500 font-medium">Last Updated: March 12, 2026</p>
          </header>

          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            <section>
              <p className="mb-6">
                Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Synq application and services operated by Synq (&quot;Synq&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p className="mb-6">
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms and our Privacy Policy. By accessing or using the Service, you agree to be bound by these Terms.
              </p>
            </section>

            <hr className="border-gray-100" />

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">1. Content</h2>
              <div className="space-y-4">
                <p>
                  <span className="font-bold">Synq Content:</span> software, branding, documentation, design, and other materials provided by Synq.
                </p>
                <p>
                  <span className="font-bold">User Content:</span> any notes, tasks, files, or data you create or store using the Service.
                </p>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Content Ownership</h3>
                  <p>You retain ownership of your User Content. Nothing in these Terms transfers ownership of your content to Synq. However, you grant Synq a <span className="font-bold">limited license</span> to host, store, process, and display your content solely for the purpose of operating and providing the Service.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">2. Acceptable Use</h2>
              <p className="mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>violate any applicable law or regulation</li>
                <li>upload malicious software or harmful code</li>
                <li>attempt unauthorized access to the Service</li>
                <li>reverse engineer or copy the platform</li>
                <li>disrupt or interfere with the Service or other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">3. Automated Access and Data Scraping</h2>
              <p className="mb-4">You may not access or use the Service through automated means except as explicitly permitted by Synq. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>use bots, crawlers, scrapers, or automated tools to access the Service</li>
                <li>extract or collect data for training machine learning or artificial intelligence models</li>
                <li>systematically download or archive data from the Service</li>
                <li>bypass technical protections intended to prevent automated access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">4. Accounts</h2>
              <p className="mb-4">Certain features of the Service require creating an account. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>maintaining the confidentiality of your account credentials</li>
                <li>all activity under your account</li>
                <li>notifying Synq of unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">5. Workspaces and Data</h2>
              <p className="mb-4">Synq allows users to organize information within personal workspaces. Your workspace data remains your responsibility. You may export or delete your data through features provided within the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">6. Subscriptions and Billing</h2>
              <p className="mb-4">Some features of Synq may require a paid subscription offered on monthly or yearly billing cycles. Subscriptions automatically renew unless canceled before the renewal date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">7. Payment Processing</h2>
              <p className="mb-4">
                Payments are processed by <span className="font-bold">Paddle.com Market Ltd.</span>, which acts as the Merchant of Record for Synq.
              </p>
              <p className="mb-4">Paddle handles payment processing, billing, tax collection, and payment compliance.</p>
              <p>
                Paddle Privacy Policy: <a href="https://www.paddle.com/legal/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.paddle.com/legal/privacy</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">8. Refunds</h2>
              <p className="mb-4">Refunds may be available for subscription purchases within a limited period. Unless otherwise stated, Synq may offer a <span className="font-bold">7-day refund window</span> for eligible purchases.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">9. Third-Party Services</h2>
              <p className="mb-4">Synq may rely on third-party services like Firebase (Google LLC) for authentication and infrastructure, and Paddle for subscription billing.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">10. Intellectual Property</h2>
              <p className="mb-4">The Synq platform, including software, branding, trademarks, and design, is owned by Synq. You may not copy, distribute, modify, sell, or reverse engineer any part of the Service without permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">11. Feedback</h2>
              <p className="mb-4">By submitting feedback or suggestions regarding the Service, you grant Synq permission to use and incorporate such feedback without restriction or compensation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">12. Fair Use Limits</h2>
              <p className="mb-4">Synq may apply reasonable limits on storage, usage, or access to maintain platform stability and ensure fair use of the Service for all users.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">13. Service Availability</h2>
              <p className="mb-4">Synq strives to provide reliable access but does not guarantee uninterrupted availability. Interruptions may occur due to maintenance, infrastructure issues, or updates.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">14. Termination</h2>
              <p className="mb-4">Synq may suspend or terminate accounts if these Terms are violated, misuse occurs, or security risks are detected. Users may delete their account at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">15. Limitation of Liability</h2>
              <p className="mb-4 text-sm uppercase">To the maximum extent permitted by law, Synq shall not be liable for indirect damages, loss of data, loss of profits, or service interruptions arising from the use of the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">16. Disclaimer</h2>
              <p className="mb-4 font-bold italic">The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">17. Changes to Terms</h2>
              <p className="mb-4">Synq may update these Terms periodically. Continued use of the Service after updates indicates acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">18. Governing Law</h2>
              <p className="mb-4">These Terms shall be governed by the laws of <span className="font-bold">India</span>.</p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-[26px] font-bold text-black mb-4 italic">19. Contact Information</h2>
              <p className="mb-2 text-lg text-gray-600">If you have questions about these Terms of Service, please contact:</p>
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
