import Features from "@/components/sections/index/Features";
import Gallery from "@/components/sections/index/Gallery";
import Homes from "@/components/sections/index/Homes";
import Story from "@/components/sections/index/Story";
import Head from "next/head";

function index() {
	return (
		<>
			<Head>
				<title>صفحه اصلی - پروژه املاک</title>
				<meta
					name='description'
					content='سایت خرید و فروش و اجاره املاک با بهترین قیمت‌ها'
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
