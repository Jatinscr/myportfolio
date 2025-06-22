function CodeSection() {
  return (
    <section id="projects" className="py-12 px-6 mb-5">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl mb-11 text-left ml-10 px-6 font-normal">
          Code
        </h2>

        <div className="flex flex-wrap justify-center gap-[20px]">
          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl h-[15rem] w-[21rem] transition transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:opacity-65 flex flex-col flex-nowrap justify-between">
            <CardContent
              borderClass="-mx-6 my-8"
              tags={[
                { color: "bg-blue-500", label: "PHP" },
                { color: "bg-green-500", label: "Vue" },
                { color: "bg-yellow-500", label: "JavaScript" },
                { color: "bg-pink-500", label: "SCSS" },
                { color: "bg-red-500", label: "Blade" },
              ]}
            />
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl h-[15rem] w-[21rem] transition transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:opacity-65 flex flex-col flex-nowrap justify-between">
            <CardContent
              borderClass="-mx-6 mt-16 mb-5"
              tags={[{ color: "bg-blue-500", label: "PHP" }]}
            />
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl h-[15rem] w-[21rem] transition transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:opacity-65 flex flex-col flex-nowrap justify-between">
            <CardContent
              borderClass="-mx-6 mt-16 mb-5"
              tags={[{ color: "bg-blue-500", label: "PHP" }]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardContent({ tags, borderClass }) {
  return (
    <>
      <div>
        <p className="flex items-center font-bold">
          <img
            src="/image/profile.png"
            alt="SebKay Icon"
            className="w-6 h-6 mr-1"
          />
          <span className="text-sm font-medium">
            SebKay / laravel-inertia-vue-starter-kit
          </span>
        </p>

        <p className="text-gray-700 mt-2 font-light text-sm">
          A starter kit for Laravel apps using Inertia.js and Vue.js.
        </p>

        <a
          href="https://github.com/SebKay/laravel-inertia-vue-starter-kit"
          className="text-blue-600 mt-2 inline-block font-light text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repo →
        </a>
      </div>

      {/* FULL WIDTH BORDER */}
      <div className={`${borderClass} border-t border-gray-300`}></div>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <TechTag key={index} color={tag.color} label={tag.label} />
        ))}
      </div>
    </>
  );
}

function TechTag({ color, label }) {
  return (
    <div className="flex items-center space-x-0.5">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span className="text-sm text-gray-700 font-light">{label}</span>
    </div>
  );
}

export default CodeSection;
