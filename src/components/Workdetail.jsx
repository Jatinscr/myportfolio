import Header from './Header';
import Newsletterfooter from './Newsletterfooter';

function Workdetail() {
  return (
    <div>
      <Header />

      <div className="max-w-[1284px] mx-auto px-4">
        {/* TEXT SECTION */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-normal text-gray-800 mb-4">
            Cazz Photography
          </h1>
          <p className="text-gray-700 leading-relaxed font-light text-lg sm:text-2xl mb-6">
            Portfolio showcasing the different aspects of Cazz as a photographer.
          </p>
          <div className="flex justify-center gap-3 sm:gap-6 flex-wrap text-gray-700 leading-relaxed font-light text-lg sm:text-2xl mb-16 sm:mb-24">
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
        <div className="w-full mt-8 mb-16">
          <div className="w-full bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/image/work1.png"
              alt="Cazz Photography"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-4 sm:pl-[404px] sm:pr-[420px] pt-8 pb-16 text-gray-800 leading-relaxed text-base sm:text-lg">
        {/* The Brief */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal mb-4">The Brief</h2>
          <p className="mb-4 text-gray-700 leading-relaxed font-normal font-sans">
            Cazz is an amateur photographer and needed something to showcase her new found love of taking pictures and making the most of every scene.
          </p>
        </section>

        {/* The Result */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal mb-4">The Result</h2>
          <p className="mb-4 text-gray-700 leading-relaxed font-normal font-sans">
            I created a simple design that wouldn't get in the way of showcasing her photos. A photography site should be about the pictures, so I made sure her new website focused on that by focusing on her work first and foremost.
          </p>
        </section>
      </div>

      <Newsletterfooter />
    </div>
  );
}

export default Workdetail;
