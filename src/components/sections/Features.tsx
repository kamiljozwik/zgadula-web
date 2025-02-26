import {
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Interactive Chat with an AI Host",
    description:
      "Engage in a dynamic conversation with our advanced AI host. Ask questions and receive guided hints powered by cutting-edge LLM technology.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Story-Driven Challenges",
    description:
      "Immerse yourself in intriguing narratives where each story presents unique mysteries to solve. Use your detective skills to uncover key plot points and guess the story's checkpoints.",
    icon: BookOpenIcon,
  },
  {
    name: "Progress & Flexibility",
    description:
      "Your game progress is automatically saved on your device, allowing you to take breaks and resume your detective work at any time. Never lose track of your discoveries and revelations.",
    icon: ArrowPathIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Game Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for an engaging mystery-solving experience
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Zgadula combines interactive storytelling with intuitive gameplay to
            create a unique guessing game experience that challenges your
            deductive skills.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
