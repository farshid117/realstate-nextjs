import React, { useMemo, useState, useEffect } from "react";
import styles from "../../styles/homes.module.css";
import db from "../../data/db.json";
import HomeCard from "../../components/modules/HomeCard"; // مسیرت را تنظیم کن

function Homes() {
	const pageSize = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");
	const [filterBy, setFilterBy] = useState("-1"); // برای dropdown (price, rooms, address ...)

	//todo: Searching
	const filteredHomes = useMemo(() => {
		const q = String(search || "")
			.trim()
			.toLowerCase();
		if (!q && !filterBy) return db.homes;

		return db.homes.filter((home) => {
			// اگر خواستی فیلترهای بیشتر طبق filterBy اضافه کن
			const haystack = [
				home.title,
				home.address || "",
				home.code || "",
				home.expertnumber || "",
				home.expertname || "",
				String(home.price),
				String(home.meterage),
				String(home.roomCount),
			]
				.join(" ")
				.toLowerCase();

			return haystack.includes(q);
		});
	}, [search, filterBy]);

	// وقتی query تغییر کرد برگرد صفحه اول
	useEffect(() => {
		setCurrentPage(1);
	}, [search, filterBy]);

	// 2) تعداد صفحات بر اساس دادهٔ فیلترشده
	const pageNumber = useMemo(
		() => Math.max(1, Math.ceil(filteredHomes.length / pageSize)),
		[filteredHomes.length, pageSize]
	);

	// بعد از محاسبه pageNumber:
	useEffect(() => {
		if (currentPage > pageNumber) {
			setCurrentPage(pageNumber);
		} else if (currentPage < 1) {
			setCurrentPage(1);
		}
	}, [pageNumber, currentPage]);

	// todo: Filtering 
	const sortedHomes = useMemo(() => {
		// اگر هیچ فیلتری انتخاب نشده، برگرد filteredHomes بدون تغییر
		if (!filteredHomes || filteredHomes.length === 0) return filteredHomes;

		if (filterBy === "-1") return filteredHomes;

		// کپی آرایه تا original دستکاری نشود
		const arr = [...filteredHomes];

		switch (filterBy) {
			case "minprice":
				arr.sort((a, b) => (a.price || 0) - (b.price || 0));
				break;
			case "maxprice":
				arr.sort((a, b) => (a.price || 0) - (b.price || 0));
				break;
			case "rooms":
				arr.sort((a, b) => (a.roomCount || 0) - (b.roomCount || 0));
				break;
			case "meterage":
				arr.sort((a, b) => (a.meterage || 0) - (b.meterage || 0));
				break;
			case "address":
				arr.sort((a, b) =>
					(a.address || "").localeCompare(b.address || "", "fa")
				);
				break;
			default:
				break;
		}

		return arr;
	}, [filteredHomes, filterBy]);

	// سپس paginatedHomes را از sortedHomes بساز
	const paginatedHomes = useMemo(() => {
		const start = (currentPage - 1) * pageSize;
		return (sortedHomes || filteredHomes).slice(start, start + pageSize);
	}, [sortedHomes, filteredHomes, currentPage, pageSize]);

	// todo: Pagination
	const paginationItems = useMemo(() => {
		return Array.from({ length: pageNumber }, (_, i) => {
			const page = i + 1;
			const isActive = currentPage === page;
			return (
				<li
					key={page}
					className={`${styles.pagination__item} ${
						isActive ? styles.pagination__item_active : ""
					}`}
					onClick={() => goToPage(page)}>
					<button
						type='button'
						onClick={() => goToPage(page)}
						aria-current={isActive ? "page" : undefined}>
						{page.toLocaleString("fa")}
					</button>
				</li>
			);
		});
	}, [pageNumber, currentPage, styles]);

	// Helpers برای Pagination
	const goToPage = (p: any) => {
		const target = Math.min(Math.max(1, p), pageNumber);
		setCurrentPage(target);
	};

/* 	const handlePrev = (e: any) => {
		e.preventDefault();
		goToPage(currentPage - 1);
	};
	const handleNext = (e: any) => {
		e.preventDefault();
		goToPage(currentPage + 1);
	}; */

	return (
		<div className={styles["home-section"]} id='houses'>
			<div className={styles["home-filter-search"]}>
				<div className={styles["home-filter"]}>
					<select
						defaultValue={filterBy}
						onChange={(e) => setFilterBy(e.target.value)}
						className='caret-amber-800'>
						<option value='-1'>انتخاب کنید</option>
						<option value='minprice'>بر اساس کمترین قیمت</option>
						<option value='maxprice'>بر اساس بیشترین قیمت</option>
						<option value='rooms'>بر اساس تعداد اتاق</option>
						<option value='address'>بر اساس آدرس</option>
						<option value='meterage'>بر اساس اندازه</option>
					</select>
				</div>

				<div className={styles["home-search"]}>
					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='جستجو کنید'
					/>
				</div>
			</div>

			<div className={styles.homes}>
				{paginatedHomes.length ? (
					paginatedHomes.map((home) => <HomeCard key={home.id} {...home} />)
				) : (
					<div className='font-bold text-center text-rose-700 '>
						موردی یافت نشد...😥🤦‍♂️
					</div>
				)}
			</div>

			<ul className={styles.pagination__list}>
				<li className={styles.pagination__item}>
					<button
						type='button'
						onClick={() => goToPage(currentPage - 1)}
						disabled={currentPage === 1}
						aria-label='صفحه قبلی'>
						&lt;
					</button>
				</li>

				{paginationItems}

				<li className={styles.pagination__item}>
					<button
						type='button'
						onClick={() => goToPage(currentPage + 1)}
						disabled={currentPage === pageNumber}
						aria-label='صفحه بعدی'>
						&gt;
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Homes;
