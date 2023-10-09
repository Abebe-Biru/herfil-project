import { product } from "../../assets";
import styles, { layout } from "../../style";
import ProductsButton from "./ProductsButton";

const Products = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={product}
        alt="products"
        className="w-[100%] h-[100%] relative z-[5] object-cover rounded-md"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Access Our <br className="sm:block hidden" /> Products & Services
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In our three business lines, we provide:<br />
        🛠 Import of Fabricated Products<br />
        🏭 Import Trade in Industrial Machinery<br />
        🚜 Rental of Construction Machinery<br />
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <ProductsButton />
      </div>
    </div>
  </section>
);

export default Products;
