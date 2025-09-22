import React, { useEffect, useState ,useMemo} from "react";
import db from "../../data/db.json";
import HomeCard from "@/components/modules/HomeCard";

import styles from "../../styles/homes.module.css";

function Homes() {
	console.log(db);
	const pageSize = 6;
	// const [pageNumber, setPageNumber] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	const pageNumber = useMemo(() => Math.ceil(db.homes.length / pageSize),[db.homes.length, pageSize]);
	console.log("pageNumber: ", pageNumber);

	let dbfiltered = db.homes.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize
	);

	  function setPagination() {
			return Array.from({ length: pageNumber }, (_, index) => {
				const page = index + 1;
				const isActive = currentPage === page; // شرط فعال بودن را تغییر بده
				return (
					<li
						key={page}
						className={`${styles.pagination__item} ${
							isActive ? styles.pagination__item_active : ""
						}`}
						onClick={() => setCurrentPage(page)}
					>
						<a href='#'>{page}</a>
					</li>
				);
			});
		}

	/* todo: Adjust Css-Module */
	const {
		"home-section": homeSection,
		"home-filter-search": homeFilterSearch,
		"home-filter": homeFilter,
		"home-search": homeSearch,
		homes,
		tags,
		tag,
		pagination__list: paginationList,
		pagination__item: paginationItem,
		"home-review": homeReview,
		"home-review-top": homeReviewTop,
		"home-review-bottom": homeReviewBottom,
		"home-details-description": homeDetailsDescription,
		// اگر از بقیه استفاده می‌کنی اضافه کن
	} = styles;

	return (
		<div className={homeSection} id='houses'>
			<div className={homeFilterSearch}>
				<div className={homeFilter}>
					<select name='' id='' className=' caret-amber-800'>
						<option value='' selected>
							انتخاب کنید
						</option>
						<option value=''>بر اساس قیمت</option>
						<option value=''>بر اساس تعداد اتاق</option>
						<option value=''>بر اساس ادرس</option>
						<option value=''>بر اساس اندازه</option>
					</select>
				</div>
				<div className={homeSearch}>
					<input type='text' placeholder='جستجو کنید' />
				</div>
			</div>
			<div className={homes}>
				{dbfiltered.map((home) => (
					<HomeCard key={home.id} {...home} />
				))}
			</div>
			<ul className={paginationList}>
				<li className={paginationItem}>
					<a href='#' className=''>
						{" "}
						&lt;{" "}
					</a>
				</li>
				{setPagination()}
				<li className={paginationItem}>
					<a href='#' className=''>
						{" "}
						&gt;{" "}
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Homes;
