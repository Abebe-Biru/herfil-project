import { useState, useEffect } from 'react';
import { ProductsCard, ProductsFilterButtons } from '../components/Products';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import styles from '../style';

const Products = () => {
	const [cardData, setCardData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [menuItems, setMenuItems] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (limit = 30, page = 1) => {
		try {
			const response = await axios.get(`http://127.0.0.1:8000/api/products?limit=${limit}&page=${page}`);
			const apiData = response.data.products;
			const uniqueMenuItems = [...new Set(apiData.map((val) => val.purpose))];

			setLoading(false);
			setCardData(apiData);
			setFilteredData(apiData);
			setMenuItems(['All', ...uniqueMenuItems]); // Add "All" option to the filter menu
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const filterItems = (purpose) => {
		if (purpose === 'All') {
			setFilteredData(cardData); // Show all data when "All" is selected
		} else {
			const newItems = cardData.filter((value) => value.purpose === purpose);
			setFilteredData(newItems);
		}
	};



	return (
		<div className='w-full h-full'>
			<h1 className={`${styles.heading2} text-center mt-10`}>Our Products and Services</h1>
			<ProductsFilterButtons
				menuItems={menuItems}
				filterItems={filterItems}
			/>
			{loading && <div className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingY}`}><ThreeDots
				height="80"
				width="100"
				radius="9"
				color="#fff"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/></div>}
			<ProductsCard cardData={filteredData} />

		</div>
	);
};


export default Products;