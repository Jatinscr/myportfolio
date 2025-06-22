import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-normal text-gray-800 mb-4 ml-20">
        Projects
      </h1>
      <p className="text-gray-500 leading-relaxed text-2xl mb-4 ml-20">
        Some of my spare time tinkering.
      </p>

      <div className="p-8 flex flex-col md:flex-row">
        {/* LEFT IMAGE - Purani style same, bas left aligned */}
        <div className="md:w-3/4 pr-2">
          <div className="h-[750px]">
            <img
              src="/image/project1.png"
              alt="Handicraft project screenshot"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT DETAILS - Bas description 2 line me aur baki sab same */}
        <div className="md:w-1/4 pl-10 flex flex-col justify-end">
          <h2 className="text-5xl font-normal text-gray-800 mb-4">
            Handicraft
          </h2>
          <p className="text-gray-500 leading-relaxed text-2xl mb-4 max-w-xs">
            A visual project management app built for DIYers to organise and
            share their creative work.
          </p>
          <ul className="text-gray-700 space-y-2 mb-4">
            <li>
              <input type="checkbox" checked readOnly className="mr-2" /> Web
              App Design
            </li>
            <li>
              <input type="checkbox" checked readOnly className="mr-2" />{" "}
              Laravel
            </li>
            <li>
              <input type="checkbox" checked readOnly className="mr-2" />{" "}
              Filament (Laravel)
            </li>
            <li>
              <input type="checkbox" checked readOnly className="mr-2" />{" "}
              Tailwind CSS
            </li>
          </ul>
          <Link
              to="/projects/projecthandicraft" // Yeh tumhare app ke andar ka path hai
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              View Details
            </Link>
        </div>
      </div>

     
    </div>
  );
}

export default Project;
