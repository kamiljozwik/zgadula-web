import React from "react";

export default function About() {
  return (
    <div id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            About Zgadula
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your AI-Powered Mystery Companion
          </p>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                At Zgadula, we're passionate about creating engaging experiences
                that challenge minds and spark curiosity. Our mission is to
                blend storytelling with interactive gameplay, making each
                session a unique journey of discovery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why Zgadula?
              </h3>
              <p className="text-gray-600">
                We created Zgadula to revolutionize the way people interact with
                stories. By combining advanced AI technology with intuitive
                gameplay, we've crafted an experience that adapts to each
                player's approach to problem-solving.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Our Approach
              </h3>
              <p className="text-gray-600">
                Every aspect of Zgadula is designed with our players in mind.
                From the carefully crafted narratives to the intelligent
                response system, we focus on creating an immersive and rewarding
                experience for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Join Our Community
              </h3>
              <p className="text-gray-600">
                Become part of a growing community of mystery enthusiasts and
                story lovers. Share your experiences, compete with friends, and
                discover new ways to unravel our ever-expanding collection of
                narratives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
