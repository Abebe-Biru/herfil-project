// import {data} from '../constants';
const ProductsFilterButtons = ({ menuItems, filterItems, setCardData, data }) => {
	return (
		<div>
			{/* <button onClick={()=>setCardData(data)} className="text-blue-400 ml-3 text-xl p-1 px-5 py-1 underline capitalize">All</button> */}
			{menuItems.map((item, index) => (
				<button onClick={() => filterItems(item)} className="text-blue-400 ml-3 text-xl p-1 px-5 py-1 underline capitalize" key={index}>{item}</button>
			))}
		</div>
	)
}

export default ProductsFilterButtons