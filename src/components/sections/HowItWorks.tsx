import React from "react";
import {
  QuestionMarkCircleIcon,
  LightBulbIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    name: "Select and Start",
    description:
      "Choose from a variety of intriguing stories and begin your detective journey. Each story has multiple checkpoints for you to discover.",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Ask and Analyze",
    description:
      "Use your intuition to ask yes/no questions. Our AI host will guide you with clear responses, helping you piece together the story's puzzle.",
    icon: LightBulbIcon,
  },
  {
    name: "Solve and Progress",
    description:
      "Identify story checkpoints as you uncover them. Each correct guess brings you closer to solving the complete narrative.",
    icon: FlagIcon,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start Your Mystery-Solving Adventure
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Embark on an exciting journey of discovery where your curiosity and
            deductive reasoning are your greatest tools.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {steps.map((step) => (
              <div key={step.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <step.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 flex items-center justify-center">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Try It Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
