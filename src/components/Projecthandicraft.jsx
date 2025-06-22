import Header from "./Header";
import Newsletterfooter from "./Newsletterfooter";

function Projecthandicraft() {
  return (
    <div>
      <Header />

      <div className="max-w-[1284px] mx-auto ">
        {/* TEXT SECTION */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-normal text-gray-800 mb-4">
            Handicraft
          </h1>
          <p className="text-gray-700 leading-relaxed font-light text-2xl mb-6">
            A visual project management app built for DIYers to organise and
            share<br></br> their creative work.
          </p>
          <div className="flex justify-center gap-6 flex-wrap text-gray-700 leading-relaxed font-light text-2xl mb-24">
            <div className="flex items-center">
              <span className="mr-2">✔</span> Web App Design
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔</span> Laravel
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔</span> Filament (Laravel)
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔</span> Tailwind CSS
            </div>
          </div>
        </div>

        {/* IMAGE SECTION (completely independent of text) */}
        <div className="w-full mt-8 mb-16">
          <div className="w-full h-[1350px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/image/project1.png"
              alt="Handicraft Project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pl-[404px] pr-[420px] pt-8 pb-16 text-gray-800 leading-relaxed text-lg">
        {/* Overview Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-normal mb-4">Overview</h2>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed font-normal font-sans">
            After my wife and I bought our first house over five years ago, I
            became deeply involved in various DIY projects around our home.
            While not all of them were successful, each one taught me valuable
            lessons about working outside the digital world.
          </p>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed font-normal font-sans">
            Seeing how much of my time and energy was spent organizing these
            projects, I realized there was a need for a tool that could help
            hobbyists and DIY enthusiasts like me manage their creative
            endeavors more effectively.
          </p>
          <p>
            That's why I decided to create{" "}
            <a href="#" className="text-blue-600 underline">
              Handicraft
            </a>{" "}
            — a web app designed to help DIYers plan, track, and share their
            projects in an organized and visually engaging way.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-10">
          <h2 className="text-3xl font-normal mb-4">The Problem</h2>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed font-normal font-sans">
            Existing project management tools were either too complex or too
            generic for casual DIYers. The average DIYer doesn't need a
            heavy-duty, business-oriented tool like Trello or Asana; they just
            need something simple, visual, and tailored to their creative
            process.
          </p>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed font-normal font-sans">
            Many hobbyists juggle multiple projects at once — home renovations,
            woodworking, crafting, and more — but rely on a mishmash of
            notebooks, camera rolls, and mental checklists to keep track of
            everything. This results in:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Disorganization:</strong> Important steps or ideas get
              lost, especially on long-term projects.
            </li>
            <li>
              <strong>Lack of visual structure:</strong> DIY projects often
              require more than just written instructions — they need images,
              sketches, and visual cues.
            </li>
            <li>
              <strong>No motivation loop:</strong> Without a clear, visual sense
              of progress, people are more likely to abandon projects halfway
              through.
            </li>
            <li>
              <strong>Sharing limitations:</strong> DIYers often want to share
              their work with others, but traditional tools aren't built to
              foster community or feedback.
            </li>
          </ul>
        </section>

        {/* The Solution */}
        <section className="mb-10">
          <h2 className="text-3xl font-normal mb-4">The Solution</h2>
          <p>
            I built{" "}
            <a href="#" className="text-blue-600 underline">
              Handicraft
            </a>{" "}
            to address these gaps. By using a simple, visual approach to project
            management, Handicraft enables users to break down their DIY
            projects into manageable steps, attach images and notes, and track
            progress with ease. The app empowers hobbyists to stay organized,
            motivated, and connected.
          </p>
        </section>

        {/* The Technology */}
        <section className="mb-10">
          <h2 className="text-3xl font-normal mb-4">The Technology</h2>
          <p className="mb-4  text-gray-700 text-lg leading-relaxed font-normal font-sans">
            To build Handicraft, I relied on a modern and efficient tech stack
            that would offer both scalability and an intuitive user experience:
          </p>
          <ul className="list-disc list-inside mb-4 ">
            <li>
              <strong>Backend:</strong> I chose{" "}
              <a href="#" className="text-blue-600 underline">
                Laravel
              </a>{" "}
              for its robustness and ease of use. Laravel's built-in features,
              like authentication and data validation, saved me a lot of
              development time. It also provided a secure and flexible
              foundation for building the app’s API and managing user data.
            </li>
          </ul>
        </section>

        {/* The Result */}
        <section className="mb-10">
          <h2 className="text-3xl font-normal mb-4">The Result</h2>
          <p className="mb-4  text-gray-700 text-lg leading-relaxed font-normal font-sans">
            Early feedback from users has been overwhelmingly positive,
            particularly around how Handicraft helps with project completion and
            organization. Key results include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Improved project completion rates:</strong> The
              step-by-step breakdown and visual progress tracking has helped
              users stay motivated and finish more projects.
            </li>
            <li>
              <strong>Stronger sense of organization:</strong> The ability to
              attach images, notes, and statuses to individual steps has made it
              easier for users to keep track of multi-phase projects.
            </li>
            <li>
              <strong>Increased shareability:</strong> Users love the option to
              share polished project outlines with friends, family, or online
              communities, fostering engagement and feedback.
            </li>
            <li>
              <strong>Low learning curve:</strong> New users have been able to
              get started without needing tutorials, thanks to the intuitive
              design.
            </li>
          </ul>
          <p className="mb-6  text-gray-700 text-lg leading-relaxed font-normal font-sans">
            Built with Laravel for scalability, Vue.js and Inertia.js for
            dynamic interactivity, and Tailwind CSS for responsive design,{" "}
            <a href="#" className="text-blue-600 underline">
              Handicraft
            </a>{" "}
            is already evolving with features like AI-driven step generation,
            which is currently in development.
          </p>
          <p className="mb-24 text-gray-700 text-lg leading-relaxed font-normal font-sans">
            The app’s success so far proves that even casual creators benefit
            from thoughtful tools that support their specific workflows.
          </p>
          <div className="text-center ">
            <a
              href="https://handicraft-app.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold text-white"
              style={{ backgroundColor: "#2980B9 " }} // exact color
            >
              Visit Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-7 w-7"
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
