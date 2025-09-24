import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {



	return (
		<div className='container'>
			{/* todo: SideBar */}
			<div className='sidebar'>
				<input
					type='checkbox'
					name='toggle'
					id='sidebar-toggle'
					className='sidebar__input'
				/>
				<label htmlFor='sidebar-toggle' className='sidebar__label'>
					<div className='sidebar__btn'></div>
				</label>

				<div className='sidebar__bg'></div>
				<ul className='list'>
					<li className='list__item'>
						<Link href='/' className='list__link'>
							صفحه اصلی
						</Link>
					</li>
					<li className='list__item'>
						<Link href='#' className='list__link'>
							ویژگی ها
						</Link>
					</li>
					<li className='list__item'>
						<Link href='' className='list__link'>
							نظرات
						</Link>
					</li>
					<li className='list__item'>
						<Link href='houses.html' className='list__link'>
							خانه ها
						</Link>
					</li>
					<li className='list__item'>
						<Link href='#' className='list__link'>
							گالری
						</Link>
					</li>
				</ul>
			</div>

			{/* todo: Header Right */}
			<header className='header'>
				<img src='/img/logo.webp' alt='Nexter Logo' className='header__logo' />
				<h3 className='u-heading-3 u-heading--light font-bold text-center '>
					هلدینگ ساختمانی سیملک
				</h3>
				<h1 className='u-heading-1 font-bold text-center'>
					اعتماد به سیملک، آرامش در سرمایه‌گذاری!
				</h1>
				<h3 className='font-bold text-blue-300 text-center'>
					سیملک، هر ملک یک داستان؛ ما نویسنده‌اش هستیم!
				</h3>
				<div className=''>
					<Link href='/homes' className='btn header__btn btn-brown'>
						املاک ما را مشاهده کنید
					</Link>
				</div>

				{/* <p className='seeon__text'>دیده می شود در</p>
				<figure className='seeon__box-img'>
					<img src='/img/logo-bbc.png' alt='BBC' className='seeon__img' />
					<img src='/img/logo-bi.png' alt='BBC' className='seeon__img' />
					<img src='/img/logo-forbes.png' alt='BBC' className='seeon__img' />
					<img
						src='/img/logo-techcrunch.png'
						alt='BBC'
						className='seeon__img'
					/>
				</figure> */}
			</header>
			{/* todo:  Header Left */}
			<div className='real-tors'>
				<p className='real-tors__tittle font-bold'>سه کارشناس برتر</p>
				<div className='real-tors__list'>
					<img
						src='/img/realtor-2.jpeg'
						alt='real-tors top 2'
						className='real-tors__img'
					/>
					<div className='real-tors__details'>
						<h3 className='u-heading-3 u-heading--white'>ریحانه جاویدان</h3>
						<p className='real-tors__text'>10 فروش خانه</p>
					</div>

					<img
						src='/img/expert2.webp'
						alt='real-tors top 1'
						className='real-tors__img'
					/>
					<div className='real-tors__details'>
						<h3 className='u-heading-3 u-heading--white'>احسان منصورآبادی</h3>
						<p className='real-tors__text'>7 فروش خانه</p>
					</div>

					<img
						src='/img/expert3.webp'
						alt='real-tors top 3'
						className='real-tors__img'
					/>
					<div className='real-tors__details'>
						<h3 className='u-heading-3 u-heading--white'>حامد رفعت بخش</h3>
						<p className='real-tors__text'>5 فروش خانه</p>
					</div>
				</div>
			</div>

			{/* todo: Components */}
			<Component {...pageProps} />

			{/* todo: Footer */}
			<footer className='footer'>
				<ul className='nav'>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							خانه رویایی خود را پیدا کنید
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							درخواست پروپوزال
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							برنامه اجاره خانه ها
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							با ما تماس بگیرید
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							ملک خود را ارسال کنید
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							با ما کار کنید
						</a>
					</li>
				</ul>

				<p className='copyright'>
					&copy; حقوق مادی معنوی این سایت برای
					<strong className='copyright__name'> علیرضا خیاطپور </strong>
					محفوظ میباشد
				</p>
			</footer>
		</div>
	);
}
