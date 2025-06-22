/* eslint-disable jsx-a11y/anchor-is-valid */
const ImageSection = () => (
  <div className=" p-6 flex justify-center">
    <img
      src="/image/work1.png"
      alt="Cazz Photography"
      className="w-[1300px] h-[1200px] mr-44 shadow-lg "
    />
  </div>
);

const TextSection = () => (
  <div className="flex flex-col justify-center">
    <h2 className="text-4xl font-normal text-gray-800 mb-4">
      Cazz Photography
    </h2>
    <p className="text-gray-600 mb-10 text-xl font-light">
      Portfolio showcasing the different aspects of Cazz as a photographer.
    </p>
    <ul className="text-gray-600  font-light text-xl space-y-2 mb-4">
      <li>
        <input type="checkbox" checked readOnly className="mr-2" /> Web Design
      </li>
      <li>
        <input type="checkbox" checked readOnly className="mr-2" /> Laravel
        Development
      </li>
      <li>
        <input type="checkbox" checked readOnly className="mr-2" /> Filament
        (Laravel)
      </li>
      <li>
        <input type="checkbox" checked readOnly className="mr-2" /> SEO
      </li>
    </ul>
    <a
      href="/Workpage/Workdetail"
      className="bg-sky-500 text-white py-2 rounded-full hover:bg-sky-600"
      style={{ width: "110px", height:"50px",  textAlign: "center" }}
    >
      View Details
    </a>
  </div>
);

function WorkCard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 ml-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-normal  text-gray-800 mb-10">Work</h1>
        <p className="text-gray-600 mb-10 text-xl">
          Client projects and other professional work.
        </p>
        <div className="flex">
          <ImageSection />
          <TextSection />
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
