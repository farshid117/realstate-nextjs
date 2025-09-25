import Image from "next/image";

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faMapMarker,
	faUser,
	faExpand,
	faKey,
	faTags,
	faDollar,
	faMoneyBill,
	faMoneyBillTransfer,
	faMoneyBill1,
	faBed,
} from "@fortawesome/free-solid-svg-icons";
function HomeCard({
	id,
	title,
	img,
	roomCount,
	address,
	meterage,
	price,
	category,
}: any) {
	return (
		<div className='card'>
			<Image
				src={img}
				alt={title || "تصویر ملک"}
				width={100}
				height={100}
				className='card__img '
			/>
			<h5 className='card__title'> {title} </h5>
			<span className='card__like'>
				{/* <i className='fa fa-heart'></i> */}
				<FontAwesomeIcon icon={faHeart} size='lg' style={{ color: "red" }} />
			</span>
			<div className='card__details'>
				{/* address Feild */}
				<span className=''>
					{/* <i className='fa fa-map-marker card__icon'></i> */}
					<FontAwesomeIcon
						icon={faMapMarker}
						className='card__icon'
						size='xs'
						style={{ color: "var(--color-primary)" }}
					/>
				</span>
				<p className='card__text font-bold'>{address.split("،")[0]}</p>

				{/* roomCount Field */}
				<span className=''>
					{/* <i className='fa fa-user card__icon'></i> */}
					<FontAwesomeIcon
						icon={faBed}
						className='card__icon'
						size='xs'
						style={{ color: "var(--color-primary)" }}
					/>
				</span>
				<p className='card__text font-bold'>
					{roomCount.toLocaleString("fa")} اتاق
				</p>

				{/* Metrage Feild */}
				<span className=''>
					{/* <i className='fa fa-expand card__icon'></i> */}
					<FontAwesomeIcon
						icon={faExpand}
						className='card__icon'
						size='xs'
						style={{ color: "var(--color-primary)" }}
					/>
				</span>
				<p className='card__text font-bold'>
					{meterage.toLocaleString("fa")} متر مربع
				</p>

				{/* price feild */}
				<span className=''>
					{/* <i className='fa fa-key card__icon'></i> */}
					<FontAwesomeIcon
						icon={faMoneyBill1}
						className='card__icon'
						size='xs'
						style={{ color: "var(--color-primary)" }}
					/>
				</span>
				<p className='card__text font-bold'>
					{price.toLocaleString("fa")} میلیون تومان
				</p>

				{/* category feild */}
				<span className=''>
					{/* <i className='fa fa-key card__icon'></i> */}
					<FontAwesomeIcon
						icon={faTags}
						className='card__icon'
						size='xs'
						style={{ color: "var(--color-primary)" }}
					/>
				</span>
				<p className='card__text font-bold'>
					{" "}
					دسته بندی :{" "}
					<span
						className={clsx({
							"badge-green":
								category === "رهن کامل" || category === "رهن و اجاره",
							"badge-blue": category === "فروش" || category === "خرید",
							"badge-red": category === "مشارکت",
						})}>
						{category}
					</span>{" "}
				</p>
			</div>

			<a href={`/homes/${id}`} className='btn btn-brown btn-card'>
				مشاهده ملک
			</a>
		</div>
	);
}

export default HomeCard;
