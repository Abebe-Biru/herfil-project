import { Link } from 'react-router-dom';

const ProductsButton = ({ styles }) => (
    <Link to={"/products"}>
        <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            Explore Products
        </button>
    </Link>
);

export default ProductsButton;
