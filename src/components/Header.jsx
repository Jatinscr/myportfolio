import { Link } from "react-router-dom";
// import font from "../../public/Font"

function Header() {
  return (
    <header className="px-4 py-10 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-10">
        {/* Profile Image */}
        <Link to="/">
          <img
            src="/image/profile.png"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full"
          />
        </Link>

        {/* Name + nav */}
        <div className="mt-4 md:mt-8">
          <h1
          
            className=" font-myfont text-3xl font-normal text-black tracking-wide"
            style={{ fontFamily: "Montserrat" }}
          >
            SEB KAY
          </h1>
          <div className="h-1.5 w-12 bg-blue-500 mt-1 mb-7 rounded-full"></div>

          <nav
            className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-600 text-lg font-medium"
            style={{ fontFamily: "sans-serif" }}
          >
            <Link to="/projects" className="hover:text-blue-600">
              PROJECTS
            </Link>
            <Link to="/work" className="hover:text-blue-600">
              WORK
            </Link>
            <Link to="/ArticalPage" className="hover:text-blue-600">
              ARTICLES
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
