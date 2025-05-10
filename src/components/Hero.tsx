import { content } from "../content";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { hero } = content as any;

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left: Content */}
      <div className="flex-1 bg-white flex flex-col justify-center px-[6vw] py-8 md:pl-[8vw] md:py-0">
        <div className="mt-[10vh] md:mt-0">
          <h1 className="text-[8vw] md:text-[3.5vw] font-bold text-navy-900 mb-4">
            {hero.title}
          </h1>

          {/* Typewriter effect */}
          <h2 className="text-[4.5vw] md:text-[1.5vw] text-gray-600 mb-8">
            <Typewriter
              words={[
                "Also I am",
                "AI Developer.",
                "Graphic Designer.",
                "Python Developer.",
                "Technical Content Creator.",
                "Freelancer.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <button
            className="border-2 border-navy-900 rounded-lg px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-medium hover:bg-navy-900 hover:text-white transition mb-12 md:mb-16"
            onClick={() => {
              const contact = document.getElementById("contact");
              if (contact) contact.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {hero.btnText}
          </button>

          <div className="mt-10 md:mt-16 flex flex-col gap-8">
            <div className="flex items-center flex-col md:flex-row gap-2 md:gap-4">
              <div>
                <span className="text-[7vw] md:text-[3vw] font-bold text-navy-900">
                  {hero.hero_content[0].count}
                </span>
                <span className="text-[4vw] md:text-[1.5vw] font-bold text-navy-900 align-super">
                  +
                </span>
              </div>
              <div className="text-sm md:text-lg text-navy-900 text-center md:text-left">
                Years of Experience in Web
                <br />
                development
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-2 md:gap-4">
              <div className="text-sm md:text-lg text-navy-900 text-center md:text-left">
                Projects Worked in my
                <br />
                career
              </div>
              <div>
                <span className="text-[7vw] md:text-[3vw] font-bold text-navy-900">
                  {hero.hero_content[1].count}
                </span>
                <span className="text-[4vw] md:text-[1.5vw] font-bold text-navy-900 align-super">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Blue gradient with vertical/horizontal name and image */}
      <div className="relative w-full md:w-[40vw] min-w-[320px] flex flex-col items-center justify-end bg-gradient-to-b from-[#b7d2f7] to-[#cfe0fa]">
        {/* Name (responsive orientation) */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-0 md:right-0 md:h-full md:left-auto md:transform-none flex items-center justify-center md:justify-end md:items-center pr-0 md:pr-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="text-[6vw] md:text-[4rem] font-extrabold text-white tracking-wider md:rotate-0"
            style={{
              writingMode: window.innerWidth >= 768 ? 'vertical-rl' : 'horizontal-tb',
              textOrientation: window.innerWidth >= 768 ? 'mixed' : 'initial',
              marginRight: window.innerWidth >= 768 ? "60px" : "0px",
              letterSpacing: "2px",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            Shovidhyan <span className="text-navy-900">D</span>
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.img
          src={hero.image}
          alt="hero"
          className="w-auto max-h-[100vh] object-contain z-10 mb-4"
          style={{ marginTop: "70px" }}
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1.65, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
        />
      </div>
    </section>
  );
};

export default Hero;
