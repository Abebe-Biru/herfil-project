import { NavLink } from 'react-router-dom';

const PageNav = ({ title }) => {
	return (
		<div>
			<NavLink to="/"><span className="px-2 py-1 text-blue-500">Home</span>{">"}</NavLink>
			<NavLink to="/products" ><span className="px-2 py-1 text-blue-500">Products</span>{"> "}</NavLink>{title}
		</div>
	)
}

export default PageNav