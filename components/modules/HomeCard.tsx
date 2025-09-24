import Image from "next/image";
function HomeCard({
	id,
	price,
	title,
	img,
	meterage,
	roomCount,
	address,
}: any) {
	return (
		<div className='card'>
			<Image src={img} alt={title || "تصویر ملک"} width={100} height={100}  className='card__img ' />
			<h5 className='card__title'> {title} </h5>
			<span className='card__like'>
				<i className='fa fa-heart'></i>
			</span>
			<div className='card__details'>
				<span className=''>
					<i className='fa fa-map-marker card__icon'></i>
				</span>
				<p className='card__text font-bold'>{address.split("،")[0]}</p>
				<span className=''>
					<i className='fa fa-user card__icon'></i>
				</span>
				<p className='card__text font-bold'>
					{roomCount.toLocaleString("fa")} اتاق
				</p>
				<span className=''>
					<i className='fa fa-expand card__icon'></i>
				</span>
				<p className='card__text font-bold'>
					{meterage.toLocaleString("fa")} متر مربع
				</p>
				<span className=''>
					<i className='fa fa-key card__icon'></i>
				</span>
				<p className='card__text font-bold'>
					{price.toLocaleString("fa")} میلیون تومان
				</p>
			</div>

			<a href={`/homes/${id}`} className='btn btn-brown btn-card'>
				مشاهده ملک
			</a>
		</div>
	);
}

export default HomeCard;
