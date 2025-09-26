import Features from "@/components/sections/index/Features";
import Gallery from "@/components/sections/index/Gallery";
import Homes from "@/components/sections/index/Homes";
import Story from "@/components/sections/index/Story";
import Head from "next/head";

function index() {
	return (
		<>
			<Head>
				<title>صفحه اصلی - املاک سیملک</title>
				<meta
					name='description'
					content='خرید، فروش و اجاره انواع املاک با بهترین قیمت‌ها در محله‌های برتر؛ هوش مصنوعی املاک برای جستجوی سریع، املاک هوشمند و انتخاب خانه رویایی شما.'
				/>
			</Head>
			<Features />
			<Story />
			<Homes />
			<Gallery />
		</>
	);
}

export default index;
