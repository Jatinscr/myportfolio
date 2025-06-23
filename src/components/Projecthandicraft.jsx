import Header from "./Header";
import Newsletterfooter from "./Newsletterfooter";

function Projecthandicraft() {
  return (
    <div>
      <Header />

      <div className="max-w-[1284px] mx-auto px-4 sm:px-6 md:px-8">
        {/* TEXT SECTION */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-800 mb-3 sm:mb-4">
            Handicraft
          </h1>
          <p className="text-gray-700 leading-relaxed font-light text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
            A visual project management app built for DIYers to organise and
            share
            <br className="hidden sm:inline" /> their creative work.
          </p>
          <div className="flex justify-center gap-3 sm:gap-6 flex-wrap text-gray-700 leading-relaxed font-light text-base sm:text-lg md:text-2xl mb-12 sm:mb-24">
            <div className="flex items-center">
              <span className="mr-1 sm:mr-2">✔</span> Web App Design
            </div>
            <div className="flex items-center">
              <span className="mr-1 sm:mr-2">✔</span> Laravel
            </div>
            <div className="flex items-center">
              <span className="mr-1 sm:mr-2">✔</span> Filament (Laravel)
            </div>
            <div className="flex items-center">
              <span className="mr-1 sm:mr-2">✔</span> Tailwind CSS
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full mt-8 mb-12 sm:mb-16">
          <div className="w-full h-64 sm:h-[600px] md:h-[1350px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/image/project1.png"
              alt="Handicraft Project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-[404px] md:pr-[420px] pt-6 sm:pt-8 pb-12 sm:pb-16 text-gray-800 leading-relaxed text-base sm:text-lg">
        {/* Overview Section */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4">Overview</h2>
          <p className="mb-3 sm:mb-4 text-gray-700 leading-relaxed font-normal font-sans">
            After my wife and I bought our first house over five years ago, I
            became deeply involved in various DIY projects around our home...
          </p>
          <p className="mb-3 sm:mb-4 text-gray-700 leading-relaxed font-normal font-sans">
            Seeing how much of my time and energy was spent organizing these
            projects, I realized there was a need for a tool...
          </p>
          <p>
            That's why I decided to create{" "}
            <a href="#" className="text-blue-600 underline">
              Handicraft
            </a>{" "}
            — a web app designed to help DIYers plan, track, and share...
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4">The Problem</h2>
          <p className="mb-3 sm:mb-4 text-gray-700 leading-relaxed font-normal font-sans">
            Existing project management tools were either too complex...
          </p>
          <ul className="list-disc list-inside mb-3 sm:mb-4">
            <li><strong>Disorganization:</strong> Important steps or ideas get lost...</li>
            <li><strong>Lack of visual structure:</strong> DIY projects often require...</li>
            <li><strong>No motivation loop:</strong> Without a clear, visual sense of progress...</li>
            <li><strong>Sharing limitations:</strong> DIYers often want to share...</li>
          </ul>
        </section>

        {/* The Solution */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4">The Solution</h2>
          <p>
            I built{" "}
            <a href="#" className="text-blue-600 underline">
              Handicraft
            </a>{" "}
            to address these gaps...
          </p>
        </section>

        {/* The Technology */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4">The Technology</h2>
          <p className="mb-3 sm:mb-4 text-gray-700 leading-relaxed font-normal font-sans">
            To build Handicraft, I relied on a modern and efficient tech stack...
          </p>
          <ul className="list-disc list-inside mb-3 sm:mb-4">
            <li>
              <strong>Backend:</strong> I chose{" "}
              <a href="#" className="text-blue-600 underline">Laravel</a> for its robustness...
            </li>
          </ul>
        </section>

        {/* The Result */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4">The Result</h2>
          <ul className="list-disc list-inside mb-3 sm:mb-4">
            <li><strong>Improved project completion rates:</strong> The step-by-step breakdown...</li>
            <li><strong>Stronger sense of organization:</strong> The ability to attach images...</li>
            <li><strong>Increased shareability:</strong> Users love the option to share...</li>
            <li><strong>Low learning curve:</strong> New users have been able to get started...</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed font-normal font-sans">
            Built with Laravel for scalability, Vue.js and Inertia.js...
          </p>
          <p className="mb-12 sm:mb-24 text-gray-700 leading-relaxed font-normal font-sans">
            The app’s success so far proves that even casual creators benefit...
          </p>
          <div className="text-center">
            <a
              href="https://handicraft-app.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold text-white"
              style={{ backgroundColor: "#2980B9" }}
            >
              Visit Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3h7m0 0v7m0-7L10 14"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>

      <Newsletterfooter />
    </div>
  );
}

export default Projecthandicraft;
