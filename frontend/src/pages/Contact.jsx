import styles from '../style';
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
const Contact = () => {
	return (
		<div className='mb-10'>
			<h1 className={`${styles.heading2} ${styles.marginY} text-center`}>HerFil General Trading PLC</h1>
			<div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10">
				<div className='flex flex-col justify-center items-start border-2 m-4 p-8 sm:w-[600px] h-[400px] sm:h-[500px]'>
					<h2 className={`${styles.heading2} py-4`}>Ethiopia</h2>
					<div className={`${styles.paragraph} flex flex-row justify-center items-center gap-4 py-4`}>
						<GoLocation />
						<p >Kirkos Sub-city, Woreda 04, Wollosefer, Addis Ababa
						</p>
					</div>
					<div className={`${styles.paragraph} flex flex-row justify-center items-center gap-4 py-4`}>
						<BsTelephone />
						<p >+251911200845
						</p>
					</div>
					<div className={`${styles.paragraph} flex flex-row justify-center items-center gap-4 py-4`}>
						<TfiEmail />
						<p >herfil.info@gmail.com
						</p>
					</div>
				</div>
				<div>
					<div className="w-full">
						<iframe
							className="w-full sm:w-[600px] h-[400px] sm:h-[500px]"
							src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=Herfil%20General%20Trading%20PLC,%20Addis%20Ababa,%20Ethiopia+(Herfil%20General%20Trading%20PLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						>
							<a href="https://www.maps.ie/population/">Find Population on Map</a>
						</iframe>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Contact;
