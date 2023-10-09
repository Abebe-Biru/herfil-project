import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Products, Product, Error } from './pages';
import { Navbar, Footer, } from "./components";
import styles from "./style";

const App = () => (
  <>
    <Router>
      <div className="bg-primary w-full overflow-hidden font-poppins">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  </>
);

export default App;
