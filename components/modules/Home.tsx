
function Home({ id, price, title, img, meterage, roomCount }) {
	return (
		<div className='card'>
			<img src={img} alt='House 6' className='card__img' />
			<h5 className='card__title'> {title} </h5>
			<span className='card__like'>
				<i className='fa fa-heart'></i>
			</span>
			<div className='card__details'>
				<span className=''>
					<i className='fa fa-map-marker card__icon'></i>
				</span>
				<p className='card__text'>شیراز</p>
				<span className=''>
					<i className='fa fa-user card__icon'></i>
				</span>
				<p className='card__text'>{roomCount.toLocaleString("fa")} اتاق</p>
				<span className=''>
					<i className='fa fa-expand card__icon'></i>
				</span>
				<p className='card__text'>{meterage.toLocaleString("fa")} متر مربع</p>
				<span className=''>
					<i className='fa fa-key card__icon'></i>
				</span>
				<p className='card__text'>{price.toLocaleString("fa")} میلیون تومان</p>
			</div>

			<a href='#' className='btn btn-brown btn-card'>
				مشاهده ملک
			</a>
		</div>
	);
}

export default Home