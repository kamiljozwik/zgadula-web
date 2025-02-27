const PrivacyPolicy = () => {
  return (
    <div className="bg-white mt-16">
      <div className="container mx-auto px-4 py-16">
        <article className="prose prose-slate mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Privacy Policy for Zgadula Android App
          </h1>

          <p className="text-gray-600 mb-8">
            This Privacy Policy explains how the Zgadula mobile app collects,
            uses, and safeguards your personal data. This policy is designed to
            comply with Google's requirements for apps using Google services,
            including Google Sign-In.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Data Controller</h2>
            <p className="text-gray-600">
              The data controller responsible for your personal data is Zgadula.
              If you have any questions regarding this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:hi@zgadula.app"
                className="text-blue-600 hover:text-blue-800"
              >
                hi@zgadula.app
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-600">
              When you use our app, we collect the following personal
              information:
            </p>
            <p className="text-gray-600 font-semibold mt-4">Email Address:</p>
            <p className="text-gray-600">
              We collect your email address solely for authentication purposes
              via Google Sign-In or email - password flow. This is the only
              personal information requested during the login process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-4">
                <strong>Authentication and Account Management:</strong>
                <br />
                Your email address is used exclusively to verify your identity,
                authenticate your account, and enable you to access the app's
                features.
              </li>
              <li>
                <strong>Limited Use:</strong>
                <br />
                We do not use your email address for purposes other than
                providing and managing your account. Your data is not used for
                advertising, analytics, or shared with third parties without
                your consent.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-4">
                We do not sell, rent, or share your personal data with third
                parties.
              </li>
              <li>
                Your email address is only shared with Google as necessary for
                the authentication process, in accordance with Google's API
                Services User Data Policy. For further details, please review
                <a
                  href="https://support.google.com/cloud/answer/13806988"
                  className="text-blue-600 hover:text-blue-800 ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google's Documentation
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-4">
                We employ modern security measures, including encryption and
                secure storage, to protect your personal information from
                unauthorized access.
              </li>
              <li>
                Our security practices are regularly reviewed to ensure the
                continued protection of your data.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-4">
                <strong>Access and Correction:</strong>
                <br />
                You have the right to access and update your personal
                information at any time.
              </li>
              <li className="mb-4">
                <strong>Data Deletion:</strong>
                <br />
                You may request the deletion of your personal data. To do so,
                please contact us at
                <a
                  href="mailto:hi@zgadula.app"
                  className="text-blue-600 hover:text-blue-800 mx-1"
                >
                  hi@zgadula.app
                </a>
                .
              </li>
              <li>
                <strong>Privacy Inquiries:</strong>
                <br />
                For any questions or concerns regarding your privacy, please
                reach out to
                <a
                  href="mailto:hi@zgadula.app"
                  className="text-blue-600 hover:text-blue-800 mx-1"
                >
                  hi@zgadula.app
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-4">
                We may update this Privacy Policy periodically. The most current
                version will always be available within the app and on our
                website.
              </li>
              <li>
                We encourage you to review this policy regularly to stay
                informed about any changes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Compliance with Google Policies
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-4">
                This Privacy Policy complies with Google's requirements for apps
                using Google services.
              </li>
              <li className="mb-4">
                We request only your email address during the login process and
                do not collect additional sensitive information.
              </li>
              <li>
                By using the app, you agree to the terms outlined in this
                Privacy Policy.
              </li>
            </ul>
          </section>

          <p className="text-gray-600 mt-8">
            If you have any questions or require further clarification, please
            contact us at
            <a
              href="mailto:hi@zgadula.app"
              className="text-blue-600 hover:text-blue-800 mx-1"
            >
              hi@zgadula.app
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
