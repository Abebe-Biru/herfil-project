import styles from '../style';
import { Stats, Products, About, Contact, Clients, Testimonials, CTA, Hero } from '../components/Home';
const Home = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Products />
          <About />
          <Contact />
          <Clients />
          <Testimonials />
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default Home