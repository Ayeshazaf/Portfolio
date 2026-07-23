export default function Contact() {
	return (
		<section className="min-h-screen px-8 py-24">
			<div className="mx-auto max-w-4xl rounded-3xl border border-pink-200 bg-white p-10 shadow-xl">
				<h1 className="text-4xl font-black text-gray-900">Contact</h1>
				<ul>
					<li className="mt-5 text-gray-600 leading-7">
						📧 Email: <a href="mailto:ayeshazafar5789@gmail.com" className="text-black-500 hover:underline">
							ayeshazafar5789@gmail.com
						</a>
					</li>
					<li className="mt-2 text-gray-600 leading-7">
						💼 Github: <a href="https://github.com/Ayeshazaf" className="text-black-500 hover:underline">
							https://github.com/Ayeshazaf
						</a>
					</li>
				</ul>
				<a href="/" className="mt-8 inline-block rounded-full border-2 border-pink-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-pink-500">
        ← Back to Home
      </a>
			</div>
		</section>
	);
}
