const Alert = ({ children }) => (
	<div className="rounded-md bg-brand-100 border border-brand-400 shadow-brand p-4 flex items-center">
		<svg className="h-5 w-5 text-brand-400" fill="currentcolor" viewBox="0 0 20 20">
			<path fillRule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-7-4A1 1 0 119 6a1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
		</svg>
		<div className="ml-3 flex-1">
			<p className="leading-5 text-brand-700" style={{ marginTop: '0 !important', marginBottom: '0 !important' }}>
				{children}
			</p>
		</div>
	</div>
)

export default Alert
