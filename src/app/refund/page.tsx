import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16">
            <h1 className="text-[38px] font-bold tracking-tight text-black mb-4">Refund Policy</h1>
            <p className="text-base text-gray-500 font-medium whitespace-nowrap">Last Updated: March 12, 2026</p>
          </header>

          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            <section>
              <p className="mb-6">
                This Refund Policy explains the circumstances under which refunds may be issued for purchases made through the Synq service (&quot;Service&quot;) operated by Synq (&quot;Synq&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p className="mb-6">
                By purchasing a subscription or paid feature of the Service, you agree to the terms of this Refund Policy.
              </p>
            </section>

            <hr className="border-gray-100" />

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">A. Overview</h2>
              <p className="mb-4">
                Synq offers subscription-based plans that provide access to additional features within the Service.
              </p>
              <p className="mb-4">
                Payments for subscriptions are processed by <span className="font-bold">Paddle.com Market Ltd.</span>, which acts as the Merchant of Record for Synq. Paddle is responsible for billing, tax handling, and payment processing.
              </p>
              <p>Refunds are subject to the terms outlined below.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">B. Refund Eligibility</h2>
              <p className="mb-4">
                Synq may provide refunds for subscription purchases within a limited period after the initial purchase.
              </p>
              <p className="mb-4">
                Unless otherwise specified, Synq may offer a <span className="font-bold">7-day money-back guarantee</span> for new subscription purchases.
              </p>
              <p className="mb-4">To be eligible for a refund:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The request must be made within <span className="font-bold">7 days of the initial purchase</span></li>
                <li>The purchase must have been made directly through Synq or its payment provider</li>
                <li>The request must comply with this Refund Policy</li>
              </ul>
              <p>Refund eligibility may be evaluated on a case-by-case basis.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">C. Non-Refundable Situations</h2>
              <p className="mb-4">Refunds may not be provided in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Requests submitted after the refund window has expired</li>
                <li>Partially used subscription periods after the refund window</li>
                <li>Subscription renewals that were not canceled before the renewal date</li>
                <li>Violations of the Synq Terms of Service</li>
                <li>Abuse of the refund policy</li>
                <li>Free plan users are not eligible for refunds as no payment is made</li>
              </ul>
              <p>Synq reserves the right to decline refund requests that do not meet the eligibility criteria.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">D. Subscription Cancellations</h2>
              <p className="mb-4">Users may cancel their subscription at any time through the account settings or billing interface.</p>
              <p className="mb-4">When a subscription is canceled:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access to paid features continues until the end of the current billing period</li>
                <li>No further charges will be applied after cancellation</li>
              </ul>
              <p>Canceling a subscription does <span className="font-bold">not automatically trigger a refund</span> for the current billing period.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">E. Payment Processing and Refund Handling</h2>
              <p className="mb-4">
                All payments and refunds are processed through <span className="font-bold">Paddle.com Market Ltd.</span>
              </p>
              <p className="mb-4">If a refund is approved:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The refund will be issued through Paddle</li>
                <li>The amount will be returned to the original payment method used for the purchase</li>
                <li>Processing times may vary depending on the payment provider or financial institution</li>
              </ul>
              <p className="mt-4">
                More information about Paddle&apos;s policies can be found at: <a href="https://www.paddle.com/legal" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.paddle.com/legal</a>
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">F. Billing Errors</h2>
              <p className="mb-4">If you believe you have been incorrectly charged or billed in error, please contact Synq support as soon as possible.</p>
              <p>Synq will review billing concerns and may issue refunds where appropriate.</p>
            </section>

            <section>
              <h2 className="text-[26px] font-bold text-black mb-6 italic">G. Policy Updates</h2>
              <p className="mb-4">Synq may update this Refund Policy from time to time to reflect changes in the Service, billing systems, or legal requirements.</p>
              <p>When updates occur, the <span className="font-bold">Last Updated</span> date at the top of this document will be revised.</p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-[26px] font-bold text-black mb-4 italic">Contact Information</h2>
              <p className="mb-2 text-lg text-gray-600 italic">If you have questions about this Refund Policy or would like to request a refund, please contact:</p>
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
