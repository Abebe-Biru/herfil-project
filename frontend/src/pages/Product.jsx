import { PageNav } from '../components/Products';
import ReactImageMagnify from 'react-image-magnify';
import { useLocation } from 'react-router-dom';
import styles from '../style';
import { useState } from 'react';

const Product = () => {
	const { state } = useLocation();
	const { id, hid, title, description, price, stock, purpose, thumbnail, images } = state;
	const [img, setImg] = useState(`http://127.0.0.1:8000/storage/thumbnails/${thumbnail}`);

	const hoverHandler = (image, index) => {
		setImg(`http://127.0.0.1:8000/storage/product_images/${image}`);
	}

	const imageProps = {
		smallImage: {
			alt: 'Small Image',
			isFluidWidth: true,
			src: img,
		},
		largeImage: {
			src: img,
			width: 2000,
			height: 1440,
		},
		enlargedImageContainerDimensions: {
			width: '300%',
			height: '200%',
		},
		isHintEnabled: true,
		shouldUsePositiveSpaceLens: true,
		lesstyle: { backgroundColor: 'rgba(0, 0, 0, 0.2)' }
	};

	return (
		<div className={` text-dimWhite`}>
			<PageNav title={title} />

			<div className={`${styles.marginY} text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10`}>
				<div className={` ${styles.flexCenter} ${styles.paddingY} ${styles.marginX} sm:mx-0 sm:py-0 flex justify-center items-center flex-row sm:flex-col`}>
					{
						images.map((image, index) => (
							<div key={index} onMouseOver={() => hoverHandler(image, index)} className={`flex flex-row sm:flex-col justify-center items-center cursor-pointer`}>
								<img className="w-[80px] h-[80px] object-contain rounded-lg mt-4" key={index} src={`http://127.0.0.1:8000/storage/product_images/${image}`} alt={`Image ${index + 1}`} />
							</div>
						))}
				</div>
				<div className="w-full flex items-center justify-center -ml-0 sm:-ml-44">
					<ReactImageMagnify {...imageProps} />
				</div>
				<div className="w-full flex justify-center items-start flex-col px-10 -ml-0 sm:-ml-44">
					<h1 className="text-3xl font-bold py-4 underline"> {title}</h1>
					<p className={`${styles.paragraph} text-dimWhite py-2`}> {description} </p>
					<p className={`${styles.paragraph} text-dimWhite py-2`}>Price: <span className='text-orange-400'>{price}</span> ETB{purpose === 'rent' ? '/hour' : null} </p>
					<p className={`${styles.paragraph} text-dimWhite py-2`}> Stock: <span className='text-orange-400'>{stock}</span> </p>
				</div>
			</div>
		</div>
	)
}

export default Product