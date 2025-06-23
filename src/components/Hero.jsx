import Underline from "./Underline";

function Hero() {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-normal text-gray-900 mb-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        👨‍💻 FRONTEND TEAM LEAD
      </h2>

      <p
        className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        A highly driven Frontend Team Lead and Technical Manager with 7+ years of experience in building scalable, high-performance web applications using{" "}
        <Underline lineColor={"red"}>React.js</Underline>,{" "}
        <Underline lineColor={"pink"}>TypeScript</Underline>,{" "}
        <Underline lineColor={"purple"}>Inertia.js</Underline>,{" "}
        <Underline lineColor={"green"}>Vue.js</Underline> &{" "}
        <Underline lineColor={"blue"}>Tailwind CSS</Underline>.
      </p>

      <p
        className="text-base sm:text-lg md:text-xl text-slate-600 mt-3 mb-4 text-left"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        I'm from Gurugram, India and am currently lead developer at a Programimng.com
      </p>

      <p
        className="text-base sm:text-lg md:text-xl text-slate-600 mt-3 mb-4"
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
        </a>
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
