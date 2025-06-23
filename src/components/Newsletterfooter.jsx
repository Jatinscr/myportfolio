function NewsletterSection() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 py-10 sm:py-16">
      <section className="w-full flex justify-center">
        <div className="bg-[#25364b] rounded-3xl shadow-lg w-full max-w-[1035px] h-auto sm:h-[490px] p-6 sm:p-10 md:p-12 flex flex-col items-center">
          <p className="text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">
            Newsletter
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light mb-4 sm:mb-6 text-center">
            Stay Up To Date
          </h2>

          <p className="text-gray-300 mb-6 sm:mb-10 text-lg sm:text-xl md:text-2xl text-center">
            <span className="border-b-2 border-red-500">Laravel</span>, 
            <span className="border-b-2 border-pink-500 ml-1">Livewire</span> & 
            <span className="border-b-2 border-purple-500 ml-1">Inertia.js</span>
          </p>

          <div className="w-full max-w-xl flex flex-col sm:flex-row gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow p-3 sm:p-4 rounded-md sm:rounded-l-md sm:rounded-r-none text-sm sm:text-base"
            />
            <button className="bg-[#007acc] text-white text-base sm:text-lg font-semibold px-4 sm:px-6 rounded-md sm:rounded-r-md sm:rounded-l-none">
              Subscribe
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 text-center font-medium max-w-xl">
            I write about web development. I share what I'm working on and what I'm learning.
            No spam and unsubscribe at any time.
          </p>
        </div>
      </section>

      <hr className="my-8 sm:my-14 border-gray-300 w-full max-w-[1035px]" />

      <div className="w-full max-w-[1035px] flex flex-col sm:flex-row justify-between text-sm sm:text-lg text-gray-600 font-normal gap-2 sm:gap-0 text-center sm:text-left">
        <span>© 2025 Seb Kay.</span>
        <span>
          Built with <span className="text-red-500">Laravel</span> & <span className="text-blue-500">Tailwind</span>.
        </span>
      </div>
    </div>
  );
}

export default NewsletterSection;
