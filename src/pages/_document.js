import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head crossOrigin />
				<body>
					<Main />
					<NextScript crossOrigin />
				</body>
			</Html>
		)
	}
}

export default MyDocument
