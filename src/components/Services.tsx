import { content } from "../content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        {/* Title styled as per uploaded image */}
        <h2 className="text-3xl font-bold text-navy-900" data-aos="fade-down">
          Services
        </h2>
        <h4
          className="text-2xl font-semibold text-grey-100  uppercase tracking-wide"
          data-aos="fade-down"
        >
          What I Offer
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
            >
              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
