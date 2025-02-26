export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
            Unravel the Mystery with Zgadula!
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-8">
            Challenge your intuition in our interactive guessing game where
            every question brings you closer to the hidden story. Experience the
            thrill of discovery one clue at a time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Start Your Game
            </a>
            <a
              href="#how-it-works"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
