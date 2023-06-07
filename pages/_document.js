import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap'
						rel='stylesheet'
					/>
					<meta
						property='twitter:image'
						content='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-one.5fb0c5c8.png&w=1920&q=75'></meta>
					<meta
						property='twitter:card'
						content='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-one.5fb0c5c8.png&w=1920&q=75'></meta>
					<meta property='twitter:title' content='Team building app'></meta>
					<meta
						property='twitter:description'
						content='Unlock the full potential of your team with our innovative team building app.'></meta>
					<meta
						property='og:image'
						content='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-one.5fb0c5c8.png&w=1920&q=75'></meta>
					<meta property='og:title' content='Team building app'></meta>
					<meta
						property='og:description'
						content='Unlock the full potential of your team with our innovative team building app.'
					/>
					<meta property='og:url' content='http://localhost:3000/'></meta>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
