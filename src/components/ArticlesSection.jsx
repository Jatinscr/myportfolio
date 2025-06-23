function ArticlesSection() {
  return (
    <section className="max-w-5xl px-4 sm:px-6 md:px-8 py-8 mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-8 sm:mb-12 text-gray-700">
        Articles
      </h2>

      {/* CARD 1 */}
      <ArticleCard
        title="Case Study: Project Management for DIY Enthusiasts"
        titleClass="text-xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-4 sm:mb-5"
        category="Side Projects"
        categoryStyle="border border-gray-700 text-gray-700 h-6 sm:h-8 flex items-center justify-center mb-2 sm:mb-3"
        date="16 February 2025"
        dateClass="text-slate-500 text-sm sm:text-base mb-1 sm:mb-3"
        time="3 minute read"
        timeClass="text-slate-500 text-sm sm:text-base mb-1 sm:mb-3"
        description="Handicraft is a project management app designed to simplify home DIY projects. This case study explores the Laravel app's development, highlighting key features and challenges. Find out how I made a user-friendly web app that empowers homeowners to effectively plan, track, and execute their DIY projects from start to finish."
        descriptionClass="text-gray-500 leading-relaxed text-sm sm:text-base md:text-lg"
        link="#"
        linkText="Read Article"
        linkClass="text-sky-600 text-sm sm:text-base md:text-lg"
      />

      <hr className="my-6 sm:my-10 border-gray-300" />

      {/* CARD 2 */}
      <ArticleCard
        title="I'm a Dad!"
        titleClass="text-xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-4 sm:mb-5"
        category="Life"
        categoryStyle="border border-gray-700 text-gray-700 h-6 sm:h-7"
        date="31 August 2024"
        dateClass="text-slate-500 text-sm sm:text-base mb-1"
        time="1 minute read"
        timeClass="text-slate-500 text-sm sm:text-base mb-1"
        description="I've begun living the next stage of my life. Being a dad to my daughter!"
        descriptionClass="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg"
        link="#"
        linkText="Read Article"
        linkClass="text-sky-600 text-sm sm:text-base md:text-lg font-light"
      />

      <hr className="my-6 sm:my-10 border-gray-300" />

      {/* CARD 3 */}
      <ArticleCard
        title="Laravel Security: Understanding Policies & Gates"
        titleClass="text-xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-4 sm:mb-5"
        category="Laravel"
        categoryStyle="border border-red-400 text-red-500 h-6 sm:h-7"
        date="15 January 2024"
        dateClass="text-slate-500 text-sm sm:text-base mb-1"
        time="2 minute read"
        timeClass="text-slate-500 text-sm sm:text-base mb-1"
        description="What's a policy? What's a gate? It can be difficult understanding the difference between the two. Let's go over which does what and how to apply them to your Laravel app."
        descriptionClass="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg"
        link="#"
        linkText="Read Article"
        linkClass="text-sky-600 text-sm sm:text-base md:text-lg font-light"
      />
    </section>
  );
}

function ArticleCard({
  title,
  titleClass = "text-2xl font-normal text-gray-800",
  category,
  categoryStyle = "border border-gray-400 text-gray-700",
  date,
  dateClass = "text-gray-500",
  time,
  timeClass = "text-gray-500",
  description,
  descriptionClass = "text-gray-600",
  link,
  linkText = "Read Article",
  linkClass = "text-blue-600",
}) {
  return (
    <div>
      <h3 className={`${titleClass}`}>{title}</h3>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mb-2 sm:mb-3">
        <span className={`rounded-full px-2 sm:px-3 py-0.5 ${categoryStyle}`}>
          {category}
        </span>
        <span className={`${dateClass}`}>{date}</span>
        <span className={`${timeClass}`}>{time}</span>
      </div>

      <p className={`${descriptionClass} mb-2 sm:mb-3`}>{description}</p>

      <a
        href={link}
        className={`${linkClass} font-normal inline-flex items-center gap-1`}
      >
        {linkText} <span className="text-base sm:text-lg">›</span>
      </a>
    </div>
  );
}

export default ArticlesSection;
