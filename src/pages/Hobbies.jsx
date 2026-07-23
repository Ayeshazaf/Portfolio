export default function Hobbies() {
	return (
		<section className="min-h-screen px-8 py-24">
			<div className="mx-auto max-w-4xl rounded-3xl border border-emerald-200 bg-white p-10 shadow-xl">
				<h1 className="text-4xl font-black text-gray-900">Hobbies</h1>
				<ul className="mt-5 text-gray-600 leading-7 list-disc ml-5">
					<li>Reading Science Fiction</li>
                    <li>Exploring Neuroscience and Human Cognition</li>
                    <li>Cooking</li>
                    <li>Spending Time with Family and Friends</li>
				</ul>
				<a href="/" className="mt-8 inline-block rounded-full border-2 border-green-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-green-500">
        ← Back to Home
      </a>
			</div>
		</section>
	);
}
