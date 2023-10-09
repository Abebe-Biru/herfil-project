import { abouts } from "../../constants";
import styles, { layout } from "../../style";
import AboutButton from "./AboutButton";

const AboutCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== abouts.length - 1 ? "mb-6" : "mb-0"
      } about-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You know HerFil, <br className="sm:block hidden" /> you get
        machineries.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We excel in importing, supplying, and renting machinery, equipment, and construction materials.
      </p>

      <AboutButton styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {abouts.map((about, index) => (
        <AboutCard key={about.id} {...about} index={index} />
      ))}
    </div>
  </section>
);

export default About;
