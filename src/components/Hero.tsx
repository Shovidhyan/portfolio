import { content } from "../content";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { hero } = content as any;

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* Left: Content */}
      <div className="flex-1 bg-white flex flex-col justify-center pl-[8vw]">
        <div>
          <h1 className="text-[3.5vw] font-bold text-navy-900 mb-4">
            {hero.title}
          </h1>

          {/* Typewriter effect */}
          <h2 className="text-[1.5vw] text-gray-600 mb-8">
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
            className="border-2 border-navy-900 rounded-lg px-8 py-3 text-lg font-medium hover:bg-navy-900 hover:text-white transition mb-16"
            onClick={() => {
              const contact = document.getElementById("contact");
              if (contact) contact.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {hero.btnText}
          </button>

          <div className="mt-16 flex flex-col gap-10">
            <div className="flex items-center flex-col md:flex-row gap-6 md:gap-4">
              <div>
                <span className="text-[3vw] font-bold text-navy-900">
                  {hero.hero_content[0].count}
                </span>
                <span className="text-[1.5vw] font-bold text-navy-900 align-super">+</span>
              </div>
              <div className="text-lg text-navy-900">
                Years of Experience in Web<br />development
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-6 md:gap-4">
              <div className="text-lg text-navy-900">
                Projects Worked in my<br />career
              </div>
              <div>
                <span className="text-[3vw] font-bold text-navy-900">
                  {hero.hero_content[1].count}
                </span>
                <span className="text-[1.5vw] font-bold text-navy-900 align-super">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Blue gradient with vertical name and image */}
      <div className="relative w-[40vw] min-w-[320px] flex flex-col items-center justify-end bg-gradient-to-b from-[#b7d2f7] to-[#cfe0fa]">
        {/* Vertical Name */}
        <motion.div
          className="absolute top-0 right-0 h-full flex items-center pr-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="text-[3rem] md:text-[4rem] font-extrabold text-white tracking-wider"
            style={{
              marginRight: "60px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              letterSpacing: "2px",
              lineHeight: 1,
            }}
          >
            Shovidhyan <span className="text-navy-900">D</span>
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.img
          src={hero.image}
          alt="hero"
          className="w-auto h-[100vh] object-contain z-10 mb-4"
          style={{ marginLeft: "-500px", marginTop: "70px" }}
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1.65, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
        />
      </div>
    </section>
  );
};

export default Hero;
