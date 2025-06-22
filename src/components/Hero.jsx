import Underline from "./Underline";

function Hero() {
  return (
    <div className="bg-white p-10 sm:p-0 md:p-0 lg:p-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
      <h2
        className="text-xl sm:text-5xl font-normal text-gray-900 mb-8 -mt-0  ml-0"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        👨‍💻 Web & Software Developer
      </h2>

      <p
        className="text-lg sm:text-2xl text-gray-700 mb-8"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        I build web apps with
        <Underline lineColor={'red'}>
          Laravel
        </Underline>
        ,
        <Underline lineColor={'pink'}>
          Livewire
        </Underline>
        ,
        <Underline lineColor={'purple'}>
          Inertia.js
        </Underline>
        ,
        <Underline lineColor={'green'}>
          Vue.js
        </Underline>
        &
        <Underline lineColor={'blue'}>
          Tailwind CSS
        </Underline>
        .
      </p>

      <p
        className="text-lg text-slate-600 mt-3 mb-5 sm:text-xl text-left"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        I'm from Southampton, UK and am currently lead developer at a local
        agency.
      </p>

      <p
        className="text-lg text-slate-600 mt-4 mb-5"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Find me on
        <a
          href="https://twitter.com/"
          className="text-blue-500 hover:underline mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        and
        <a
          href="https://github.com/"
          className="text-blue-500 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

export default Hero;
