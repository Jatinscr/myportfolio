function NewsletterSection() {
  return (
    <div className="w-full flex flex-col items-center p-16">
      <section className="w-full flex justify-center">
        <div className="bg-[#25364b] rounded-3xl shadow-lg w-[1035px] h-[490px] p-12 flex flex-col items-center">
          <p className="text-gray-300 mb-2 text-lg">Newsletter</p>

          <h2 className="text-5xl text-white font-light mb-6">Stay Up To Date</h2>

          <p className="text-gray-300 mb-10 text-2xl">
            <span className="border-b-2 border-red-500">Laravel</span>, 
            <span className="border-b-2 border-pink-500 ml-1">Livewire</span> & 
            <span className="border-b-2 border-purple-500 ml-1">Inertia.js</span>
          </p>

          <div className="w-full max-w-4xl flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow p-4 rounded-l-md text-base"
            />
            <button className="bg-[#007acc] text-white text-lg font-semibold px-6 rounded-r-md">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6 text-center font-medium max-w-xl">
            I write about web development. I share what I'm working on and what I'm learning.
            No spam and unsubscribe at any time.
          </p>
        </div>
      </section>

      <hr className="my-14 border-gray-300 w-[1035px]" />

      <div className="w-[1035px] flex justify-between text-lg text-gray-600 font-normal">
        <span>© 2025 Seb Kay.</span>
        <span>
          Built with <span className="text-red-500">Laravel</span> & <span className="text-blue-500">Tailwind</span>.
        </span>
      </div>
    </div>
  );
}

export default NewsletterSection;
