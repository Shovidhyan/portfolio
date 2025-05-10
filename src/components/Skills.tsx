import { useState } from "react";
import { content } from "../content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-5 py-14">
      <div className="text-center mb-10">
  <h2 className="text-3xl font-bold text-navy-900">{skills.title}</h2>
  <p className="text-lg uppercase text-slate-300 tracking-wider mt-2">{skills.subtitle}</p>
</div>

        <br />

        <div className="flex flex-wrap gap-6 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className="bg-white group w-full max-w-sm p-5 rounded-lg border-2 border-slate-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-150 ease-in-out cursor-pointer flex items-center gap-5"
              onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain transform transition-transform duration-150 ease-in-out group-hover:scale-110"
              />
              <div>
                <h6 className="font-semibold text-lg text-navy-900">{skill.name}</h6>
                <p className="italic text-gray-600 text-sm">{skill.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Skills;
