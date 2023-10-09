import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductsCardSkeleton from './ProductsCardSkeleton';
import styles from '../../style';

const ProductsCard = ({ cardData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 py-14 px-10 rounded overflow-hidden shadow-lg m-2">
      {cardData.map((card, index) => (
        <div key={index} className={`bg-black-gradient-2 my-3 p-4 rounded shadow-md relative`}>

          {!isLoading ? (
            <NavLink state={{ id: card.id, hid: card.hid, title: card.title, description: card.description, price: card.price, stock: card.stock, purpose: card.purpose, thumbnail: card.thumbnail, images: card.images }} to={`/products/${card.hid}`}>
              <>
                <div className='flex flex-row justify-between items-center'>
                  <h2 className="text-xl font-semibold mb-2 capitalize text-orange-400">{card.purpose}</h2>
                  <h2 className='text-white'>Price: <span className='text-orange-400'>{card.price}</span> ETB{card.purpose === 'rent' ? '/hour' : null} </h2>
                </div>
                <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
                  <img
                    src={`http://127.0.0.1:8000/storage/thumbnails/${card.thumbnail}`}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </div>
                <div className='flex flex-row justify-between items-center'>
                  <h2 className={`${styles.heading2}`}>{card.title}</h2>
                  <h2 title='Stock' className='text-white'><span className='bg-black text-orange-400 rounded-full p-2 shadow-lg'>{card.stock}</span> </h2>
                </div>
                <p className={`${styles.paragraph}`}>{card.description}</p>
              </>
            </NavLink>
          ) : null}

          {isLoading ? <ProductsCardSkeleton /> : null}
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
ProductsCard.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object).isRequired, // Ensure cardData is an array of objects and is required
};


export default ProductsCard;