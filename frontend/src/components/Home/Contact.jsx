import { contact } from "../../assets";
import styles, { layout } from "../../style";
import ContactButton from "./ContactButton";

const Contact = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get in Contact<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        – Together, We Can Achieve More.
      </p>

      <ContactButton styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={contact} alt="product" className="w-[100%] h-[100%] object-cover rounded-lg" />
    </div>
  </section>
);

export default Contact;
