import { Link } from 'react-router-dom';

const ContactButton = ({ styles }) => (
    <Link to={"/contact"}>
        <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            Contact us
        </button>
    </Link>
);

export default ContactButton;
