import React from 'react'
import db from "../../data/db.json";
import HomeCard from '@/components/modules/HomeCard';

import styles from "../../styles/homes.module.css"

function Homes() {
  console.log(db)

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
				{db.homes.map((home) => (
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
				<li className={paginationItem}>
					<a href='#' className=''>
						2
					</a>
				</li>
				<li className={`${paginationItem}  ${styles.pagination__item_active}`}>
					<a href='#' className=''>
						1
					</a>
				</li>
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

export default Homes