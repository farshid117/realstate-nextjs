// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang='fa' dir='rtl' className='html-root'>
				<Head>
					{/* 🟢 Meta عمومی */}
					<meta charSet='utf-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />

					{/* 🟢 CDN یا لینک‌های سراسری (مثال: Font Awesome, Google Fonts) */}
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
						crossOrigin='anonymous'
						referrerPolicy='no-referrer'
					/>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin=''
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body className='body-root'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
