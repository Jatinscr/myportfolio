import React, { useState } from "react";

const articlesData = [
  {
    id: 1,
    title: "Case Study: Project Management for DIY Enthusiasts",
    tag: "Side Projects",
    date: "16 February 2025",
    readTime: "3 minute read",
    desc: "Handicraft is a project management app designed to simplify home DIY projects."
  },
  {
    id: 2,
    title: "I'm a Dad!",
    tag: "Life",
    date: "31 August 2024",
    readTime: "1 minute read",
    desc: "I've begun living the next stage of my life. Being a dad to my daughter!"
  },
  {
    id: 3,
    title: "Laravel Security: Understanding Policies & Gates",
    tag: "Laravel",
    date: "15 January 2024",
    readTime: "2 minute read",
    desc: "What’s a policy? What’s a gate? It can be difficult understanding the difference between the two."
  },
  {
    id: 4,
    title: "Converting a Laravel Inertia App from Mix to Vite",
    tag: "Laravel",
    date: "02 September 2022",
    readTime: "4 minute read",
    desc: "I recently converted my Inertia app from Laravel Mix to using Vite."
  },
  {
    id: 5,
    title: "Using Ziggy with Laravel, Inertia (Vue) and Vite",
    tag: "Laravel",
    date: "08 July 2022",
    readTime: "2 minute read",
    desc: "Converted app from Laravel Mix (Webpack) to Vite and solved Ziggy issue."
  },
  {
    id: 6,
    title: "Multi-Image Uploader with Laravel, JavaScript & Tailwind",
    tag: "Laravel",
    date: "02 May 2022",
    readTime: "7 minute read",
    desc: "A step-by-step guide on creating a multi-image uploader using Laravel, JavaScript & Tailwind."
  },
  {
    id: 7,
    title: "Touchstone — WordPress Unit & Integration Tests",
    tag: "WordPress",
    date: "02 February 2022",
    readTime: "3 minute read",
    desc: "Touchstone fixes issues of WordPress test suite making creating and running tests easy."
  }
];

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredArticles = articlesData.filter((article) => {
    const matchSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTag = selectedTag ? article.tag === selectedTag : true;
    return matchSearch && matchTag;
  });

  const handleReadArticle = () => {
    setSearchTerm("");
    setSelectedTag("");
    window.location.reload();
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-16 py-10 pt-0 lg:ml-52">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 lg:pr-10 mb-10 lg:mb-0">
        <div className="relative mb-14">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="PHP, WordPress, Freelancing..."
            className="w-full border rounded-lg px-6 py-4"
          />
          <span className="absolute right-3 top-4 text-gray-400">🔍</span>
        </div>

        <p className="font-normal text-lg mb-4 ml-2">Filter By</p>
        <div className="flex flex-wrap gap-2">
          {["WordPress", "Life", "Laravel", "Freelancing", "Advice", "Tips", "Copywriting", "Assorted", "Side Projects"].map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`border border-black rounded-full px-3 py-1 text-sm ${
                selectedTag === tag ? "bg-blue-100 text-blue-700" : "text-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag("")}
              className="text-xs text-red-500 underline ml-2"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Articles */}
      <div className="w-full lg:w-3/4">
        <h1 className="text-5xl font-normal mb-8">Articles</h1>
        <p className="text-xl text-gray-600 mb-24">
          My thoughts on web development and a look at my personal life.
        </p>

        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <div key={article.id} className="border-b pb-12 mb-24">
              <h2 className="text-3xl font-normal mb-5">{article.title}</h2>
              <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-3 mb-5">
                <span className="border rounded-full px-2 py-0.5">{article.tag}</span>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <p className="text-gray-700 mb-8">{article.desc}</p>
              <button
                onClick={handleReadArticle}
                className="text-sky-600 hover:underline flex items-center text-xl font-normal"
              >
                Read Article <span className="ml-1">→</span>
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No articles found</p>
        )}
      </div>
    </div>
  );
}
