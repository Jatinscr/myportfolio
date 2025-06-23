/* eslint-disable jsx-a11y/anchor-is-valid */
const ImageSection = () => (
  <div className="p-4 sm:p-6 flex justify-center">
    <img
      src="/image/work1.png"
      alt="Cazz Photography"
      className="w-full sm:w-[1000px] md:w-[1300px] h-auto shadow-lg"
    />
  </div>
);

const TextSection = () => (
  <div className="flex flex-col justify-center px-4 sm:px-0">
    <h2 className="text-3xl sm:text-4xl font-normal text-gray-800 mb-3 sm:mb-4">
      Cazz Photography
    </h2>
    <p className="text-gray-600 mb-6 sm:mb-10 text-lg sm:text-xl font-light">
      Portfolio showcasing the different aspects of Cazz as a photographer.
    </p>
    <ul className="text-gray-600 font-light text-base sm:text-xl space-y-1 sm:space-y-2 mb-4">
      <li>
        <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> Web
        Design
      </li>
      <li>
        <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> Laravel
        Development
      </li>
      <li>
        <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> Filament
        (Laravel)
      </li>
      <li>
        <input type="checkbox" checked readOnly className="mr-1 sm:mr-2" /> SEO
      </li>
    </ul>
    <a
      href="/Workpage/Workdetail"
      className="bg-sky-500 text-white py-2 rounded-full hover:bg-sky-600 inline-flex items-center justify-center"
      style={{ width: "110px", height: "50px" }}
    >
      View Details
    </a>
  </div>
);

function WorkCard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-normal text-gray-800 mb-6 sm:mb-10">
          Work
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-10 text-lg sm:text-xl">
          Client projects and other professional work.
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <ImageSection />
          <TextSection />
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
