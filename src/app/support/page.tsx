import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16">
            <h1 className="text-[38px] font-bold tracking-tight text-black mb-4">Synq Support</h1>
            <p className="text-base text-gray-500 font-medium whitespace-nowrap">Last Updated: March 12, 2026</p>
          </header>

          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            <section>
              <p className="mb-6">
                Welcome to Synq Support. This page provides information on how to get help with your Synq account, subscriptions, and general usage of the Service.
              </p>
              <p className="mb-6">
                If you cannot find the answer you need below, please contact our support team.
              </p>
            </section>

            <hr className="border-gray-100" />

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">A. Contacting Support</h2>
              <p className="mb-4">
                If you need help with Synq, you can reach our support team at:
              </p>
              <p className="font-bold mb-4 text-xl">
                <a href="mailto:synq.app.labs@gmail.com" className="text-blue-600 hover:underline">synq.app.labs@gmail.com</a>
              </p>
              <p className="mb-4">When contacting support, please include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The email address associated with your Synq account</li>
                <li>A description of the issue</li>
                <li>Any relevant screenshots or error messages</li>
              </ul>
              <p className="mt-4">Providing this information helps us resolve your request more quickly.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">B. Account Issues</h2>
              <p className="mb-4">If you experience problems with your Synq account, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>login issues</li>
                <li>password problems</li>
                <li>account access errors</li>
              </ul>
              <p className="mb-4">please contact support using the email above.</p>
              <p className="italic text-gray-600 text-base">For security reasons, we may ask you to verify your account before assisting with certain requests.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">C. Subscription and Billing Support</h2>
              <p className="mb-4">Synq subscriptions are processed through <span className="font-bold">Paddle.com Market Ltd.</span>, our payment provider and Merchant of Record.</p>
              <p className="mb-4">If you experience issues related to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>subscription billing</li>
                <li>payment failures</li>
                <li>invoices</li>
                <li>refund requests</li>
              </ul>
              <p className="mb-4">please contact Synq support.</p>
              <p>Where necessary, we may coordinate with Paddle to resolve billing issues.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">D. Refund Requests</h2>
              <p className="mb-4 font-bold">Refund requests must follow the conditions outlined in our Refund Policy.</p>
              <p className="mb-4">If you would like to request a refund:</p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Contact support at <span className="font-bold text-blue-600">synq.app.labs@gmail.com</span></li>
                <li>Include your purchase details</li>
                <li>Submit the request within the refund eligibility window</li>
              </ol>
              <p>Approved refunds will be processed through Paddle and returned to your original payment method.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">E. Account Deletion Requests</h2>
              <p className="mb-4">If you would like to delete your Synq account and associated data, please contact:</p>
              <p className="font-bold mb-4 text-xl">
                <a href="mailto:synq.app.labs@gmail.com" className="text-blue-600 hover:underline">synq.app.labs@gmail.com</a>
              </p>
              <p className="mb-4">Please include the email address associated with your account.</p>
              <p>Once your request is verified, your account and associated data may be deleted according to our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">F. Feature Requests and Feedback</h2>
              <p className="mb-4">We welcome suggestions that help improve Synq.</p>
              <p className="mb-4 text-lg">If you have ideas for new features, improvements, or bug reports, please send your feedback to:</p>
              <p className="font-bold text-xl">
                <a href="mailto:synq.app.labs@gmail.com" className="text-blue-600 hover:underline">synq.app.labs@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">G. Service Status</h2>
              <p className="mb-4">Synq strives to provide reliable service. However, occasional maintenance or technical issues may affect availability.</p>
              <p>If you believe the Service is experiencing an outage, please contact support.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">H. Related Policies</h2>
              <p className="mb-4">For more information about how Synq operates, please review the following pages:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a></li>
                <li><a href="/refund" className="text-blue-600 hover:underline">Refund Policy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">I. Response Time</h2>
              <p className="mb-4">Synq aims to respond to support inquiries as soon as possible.</p>
              <p>Response times may vary depending on the complexity of the request and the volume of inquiries.</p>
            </section>

            <div className="pt-12 border-t border-gray-100">
              <p className="text-xl font-bold text-black text-center italic tracking-tight">
                Thank you for using Synq.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
