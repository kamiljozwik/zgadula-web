import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions or feedback? We'd love to hear from you. Drop us a
            message and we'll get back to you soon.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <div className="mt-10 text-center">
            <div className="flex items-center justify-center gap-2 text-indigo-600">
              <EnvelopeIcon className="h-5 w-5" />
              <a href="mailto:hi@zgadula.app">hi@zgadula.app</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
