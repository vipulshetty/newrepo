import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import aboutimg from "../assets/aboutus.png";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
import dev3 from "../assets/dev3.jpg";

const AboutUs = () => {
  const devs = [
    {
      id: 1,
      src: dev1,
      name: "Abdul Rehman Butt",
      skill: "Frontend Developer",
      link1: "https://www.linkedin.com/in/abdul-rehman-butt-b73946206/",
      link2: "https://github.com/Abdul-Rehmanpk",
    },
    {
      id: 2,
      src: dev2,
      name: "Yasir Mukhtar",
      skill: "BackEnd Developer",
      link1: "https://www.linkedin.com/in/yasir-mukhtar-85b590228/",
      link2: "https://github.com/Yasir-Mukthar",
    },
    {
      id: 3,
      src: dev3,
      name: "Hassaan Ali",
      skill: "Frontend Developer",
      link1: "https://www.linkedin.com/in/hassaanvfx/",
      link2: "https://github.com/hassaancode",
    },
  ];

  return (
    <>
      <div className="text-white flex items-center justify-center flex-col h-[280px] bg-cover bg-hero-img">
        <h1 id="home" className="text-center font-bold text-3xl">
          About Us
        </h1>
        <div className="flex gap-2 font-medium pt-2">
          <Link
            to={"/"}
            className=" no-underline hover:text-theme-color transition-all"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-theme-color">About Us</span>
        </div>
      </div>
      {/* About US PARENT */}
      <div className="text-white flex flex-col gap-8 pt-20 px-6 lg:px-11 ">
        {/* ABOUT US Section */}
        <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
          <img className="min-w-48 " src={aboutimg} alt="aboutusimage" />
          <div className="flex flex-col gap-4 lg:min-w-[50%] lg:w-1/2">
            <div className="mb-4">
              <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
                About Us
              </span>
              <h2 className="mt-2 text-4xl font-medium">
                Largest Marketplace To Collect, Buy And Sell Creative Digital
                Assets
              </h2>
            </div>
            <div className="text-body-text-color">
              <p className="mb-2">
                We are an online auction platform dedicated to creative
                digital assets. Here, artists, designers, and creators from all
                corners of the globe come together to find, buy, and sell
                exceptional digital works in a dynamic bidding environment.
              </p>
              <p className="mb-2">
                Need that perfect stock video clip to elevate your production?
                Or maybe a one-of-a-kind logo design to launch your brand? Our
                ever-expanding library boasts a vast collection of fonts,
                graphics, 3D models, sound effects, and more – all waiting to be
                discovered through the thrill of the auction.
              </p>
              <p>
                Become a seller and showcase your talents! Auction off your
                creations and connect with a global audience eager to fuel their
                projects with your innovative spirit.
              </p>
            </div>
          </div>
        </div>
        {/* OUR TEAM SECTION*/}
        <div className="m-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
              Our Team
            </span>
            <h2 className="mt-2 text-4xl font-medium">Meet With Our Experts</h2>
          </div>
          <div className=" grid  md:grid-cols-3 items-center justify-center gap-5 max-w-[1500px]">
            {/* dev component */}
            {devs.map(({ id, src, name, skill, link1, link2 }) => (
              <div
                key={id}
                className="border border-border-info-color bg-theme-bg p-5 flex flex-col items-center gap-3 text-center rounded-[20px]"
              >
                <div className="rounded-[20px] overflow-hidden">
                  <img
                    className="rounded-[20px] hover:scale-105 transition-all duration-300"
                    src={src}
                    alt="creatorimg"
                  />
                </div>
                <div>
                  <span className="text-xl font-medium">{name}</span>
                  <br />
                  <span className="text-body-text-color">{skill}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    className="rounded-full bg-theme-color p-2 hover:bg-hover transition-all duration-300"
                    href={link2}
                    target="_blank"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    className="rounded-full bg-theme-color p-2 hover:bg-hover transition-all duration-300"
                    href={link1}
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-10 px-11 py-20 mt-20 justify-center bg-theme-bg rounded-[20px]  bg-cover bg-hero-img">
          <div>
            <h2 className="mb-2 text-4xl font-medium">
              Create, Sell & Earn at AuctionZ
            </h2>
            <span>Start Selling your Amazing Products now!</span>
          </div>
          <Link
            className="hover:scale-105 bg-theme-color px-5 py-3 rounded-xl text-white cursor-pointer font-bold tracking-wide hover:bg-hover transition-all duration-200  w-fit"
            to="/create-auction"
          >
            <div className="flex items-center gap-2">
              <span>Get Started </span>
              <FaArrowRightLong />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
