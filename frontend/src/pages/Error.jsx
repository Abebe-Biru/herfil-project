import { NavLink } from 'react-router-dom';
import styles from '../style';
const Error = () => {
	return (
		<div className={` w-full h-screen ${styles.heading2} ${styles.flexCenter} flex-col`}>
			<h1> 404 Page not found!</h1>
			<div className={` ${styles.flexCenter} ${styles.heading2}`}>
				<NavLink to="/"> Back to <span className="px-2 py-1 text-blue-500 underline">Home</span></NavLink>
			</div>
		</div>
	)
}

export default Error