import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-800 mb-3 sm:mb-4 ml-0 sm:ml-10 md:ml-20">
        Projects
      </h1>
      <p className="text-gray-500 leading-relaxed text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 ml-0 sm:ml-10 md:ml-20">
        Some of my spare time tinkering.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        {/* LEFT IMAGE */}
        <div className="md:w-3/4">
          <div className="h-64 sm:h-96 md:h-[750px]">
            <img
              src="/image/project1.png"
              alt="Handicraft project screenshot"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="md:w-1/4 md:pl-10 flex flex-col justify-end mt-4 md:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-800 mb-3 sm:mb-4">
            Handicraft
          </h2>
          <p className="text-gray-500 leading-relaxed text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 max-w-xs">
            A visual project management app built for DIYers to organise and
            share their creative work.
          </p>
          <ul className="text-gray-700 space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
            <li>
              <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> Web
              App Design
            </li>
            <li>
              <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> Laravel
            </li>
            <li>
              <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> Filament (Laravel)
            </li>
            <li>
              <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> Tailwind CSS
            </li>
          </ul>
          <Link
            to="/projects/projecthandicraft"
            className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-blue-700 text-sm sm:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
