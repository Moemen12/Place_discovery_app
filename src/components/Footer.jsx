import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { navbarLink } from "../utils";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="hidden md:block mt-8">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Pages</header>
          {navbarLink.map((link) => {
            const { id, text, url } = link;
            return (
              <Link key={id} to={url}>
                {text}
              </Link>
            );
          })}
        </nav>
        <nav>
          <header className="footer-title">Services</header>
          <p>Place Discovery</p>
          <p>Featured Photography</p>
          <p>Tribe Connections</p>
          <p>Enhanced Ratings</p>
          <p>Easy Search</p>
        </nav>

        <nav>
          <header className="footer-title">
            Information about the developers
          </header>
          <div className="flex flex-col gap-1">
            Full-Stack developer{" "}
            <div className="flex items-center self-end">
              <IoIosArrowForward /> Moemen Saade
            </div>
          </div>
          <div className="flex flex-col w-28">
            UI/UX{" "}
            <div className="flex items-center self-end">
              <IoIosArrowForward />{" "}
              <a href="https://behance.net/alaaalejel">Alaa Al-Ejel</a>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            Wanderwise Ventures <br />
            Guiding Your Journeys with Innovative Solutions since {currentYear}
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/Moemen12/">
              <FaGithub size={"1.6rem"} />
            </a>

            <a href="https://www.linkedin.com/in/moemen-saadeh-1763441ab/">
              <FaLinkedin size={"1.6rem"} />
            </a>

            <a href="https://www.facebook.com/moemen.saadeh.9/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
