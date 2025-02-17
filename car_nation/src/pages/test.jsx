import React from "react";

function test() {
  return (
    <div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="{vector1}" alt="car nation" />
        </div>
      </div>

      <section className="max-w-screen-xl mx-auto px-6 py-12 grid gap-6 lg:grid-cols-2">
        {/* Left Column: Text Block + Image */}
        <div className="flex flex-col gap-4">
          {/* Text Block */}
          <div className="bg-orange-500 text-white p-6 flex items-center justify-center min-h-[180px]">
            <div>
              <h3 className="text-sm font-semibold uppercase">Paint Mastery</h3>
              <h2 className="text-2xl font-bold mt-2">
                Precision auto parts painting services
              </h2>
            </div>
          </div>

          {/* Bottom Image in Left Column */}
          <img
            src={pic11} // Replace with actual image
            alt="Painted auto part"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Column: Image on Top + Text Content */}
        <div className="flex flex-col gap-4">
          {/* Top Image in Right Column */}
          <img
            src={pic11} // Replace with actual image
            alt="Auto painting process"
            className="w-full h-auto rounded-lg"
          />

          {/* Text Content */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500">
              Color Perfection
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              Professional auto painting work
            </h2>
            <p className="text-gray-600 mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>

            {/* Features List */}
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <span className="text-orange-500 text-xl mr-3">🛠</span>
                <div>
                  <h3 className="font-semibold text-lg">
                    Cleaning and disassembly
                  </h3>
                  <p className="text-gray-600">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque perspiciatis.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-orange-500 text-xl mr-3">📦</span>
                <div>
                  <h3 className="font-semibold text-lg">
                    Priming and preparation
                  </h3>
                  <p className="text-gray-600">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque perspiciatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default test;
