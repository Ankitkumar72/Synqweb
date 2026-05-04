import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SecurityPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16">
            <h1 className="text-[38px] font-bold tracking-tight text-black mb-4">Security</h1>
            <p className="text-base text-gray-500 font-medium">Last Updated: May 4, 2026</p>
          </header>

          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            <section>
              <p className="mb-6">
                We take the security of your data seriously and implement industry-standard safeguards designed to protect your information from unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <hr className="border-gray-100" />

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">1. Security Measures</h2>
              <p className="mb-4">We implement a combination of administrative, technical, and organizational measures, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit using HTTPS (TLS protocols)</li>
                <li>Secure authentication mechanisms and access controls</li>
                <li>Role-based access restrictions for internal systems</li>
                <li>Regular monitoring of systems for suspicious activity</li>
                <li>Secure cloud infrastructure with industry-standard providers</li>
                <li>Periodic updates and patching of software dependencies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">2. Data Storage and Infrastructure</h2>
              <p className="mb-4">
                Your data is stored on secure cloud infrastructure provided by trusted third-party providers (e.g., Firebase, cloud hosting platforms).
              </p>
              <p className="mb-4">We ensure that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>data is logically isolated between users</li>
                <li>access is restricted to authorized personnel only</li>
                <li>infrastructure follows best practices for security and reliability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">3. Access Control</h2>
              <p className="mb-4">We follow the principle of <span className="font-bold">least privilege</span>, meaning:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>employees and systems only access data necessary for their role</li>
                <li>administrative access is restricted and monitored</li>
                <li>authentication systems are designed to prevent unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">4. Encryption</h2>
              <p className="mb-4">We protect your data using encryption technologies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">Data in transit:</span> secured using HTTPS/TLS</li>
                <li><span className="font-bold">Data at rest:</span> protected using encryption mechanisms provided by our infrastructure providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">5. Monitoring and Incident Detection</h2>
              <p className="mb-4">We continuously monitor our systems to detect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>unauthorized access attempts</li>
                <li>unusual usage patterns</li>
                <li>potential security vulnerabilities</li>
              </ul>
              <p className="mt-4">In the event of a suspected breach, we take immediate steps to investigate and mitigate risks.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">6. Data Breach Response (India Compliance)</h2>
              <p className="mb-4">In the event of a personal data breach, we will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>take prompt action to contain and mitigate the breach</li>
                <li>assess the impact and risks to affected users</li>
                <li>notify relevant authorities and affected users, where required under the <span className="font-bold">Digital Personal Data Protection Act, 2023</span></li>
                <li>implement corrective measures to prevent recurrence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">7. Third-Party Security</h2>
              <p className="mb-4">We rely on trusted third-party service providers (such as Firebase and payment processors like Paddle).</p>
              <p className="mb-4">While we select providers with strong security practices, we are not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>independent security practices of third-party services</li>
                <li>outages or breaches originating from those providers</li>
              </ul>
              <p className="mt-4">Users are encouraged to review third-party privacy and security policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">8. User Responsibilities</h2>
              <p className="mb-4">You play an important role in keeping your account secure. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>keep your login credentials confidential</li>
                <li>use strong and unique passwords</li>
                <li>not share your account with others</li>
                <li>notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">9. Limitations of Security</h2>
              <p className="mb-4">While we strive to protect your data, no system is completely secure.</p>
              <p className="mb-4 font-bold italic">Therefore:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>we cannot guarantee absolute security</li>
                <li>you acknowledge that use of the Service is at your own risk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6 italic">10. Security Updates</h2>
              <p className="mb-4">We continuously improve our security practices to align with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>evolving industry standards</li>
                <li>emerging threats</li>
                <li>regulatory requirements under Indian law</li>
              </ul>
              <p className="mt-4">We may update our security measures without prior notice to maintain system integrity.</p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-[26px] font-bold text-black mb-4 italic">11. Contact for Security Issues</h2>
              <p className="mb-2 text-lg text-gray-600">If you discover a security vulnerability or have concerns, please contact us immediately:</p>
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
