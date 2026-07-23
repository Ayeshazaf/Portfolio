// Programming (Python, SQL, OOP, DSA)
// Backend Development (FastAPI, REST APIs, PostgreSQL, Redis, Docker)
// Machine Learning & Deep Learning (Scikit-learn, PyTorch, Transformers)
// NLP & LLMs (Hugging Face, Sentence Transformers, Prompt Engineering)
// RAG (Embeddings, FAISS/Chroma, Retrieval, Evaluation)
// Agentic AI (LangGraph, MCP, A2A, Tool Calling, Multi-Agent Systems)
// Frontend Development (HTML, CSS, Tailwind CSS, React.js, Next.js, API Integration, Responsive Design)
// WordPress Development (WordPress, Elementor, WooCommerce, Theme Customization, Plugin Management, Website Maintenance, SEO Basics)
// AI Content & Design (Canva, Google Flow AI Image Generation, Banner Design, Social Media Content)
// DevOps & Deployment (Docker, GitHub Actions, Linux, Cloud)
const skills = [
  {
	title: "Programming",
	description: "Python, SQL, OOP, DSA",
	border: "border-violet-300 hover:border-violet-500",
  },
  {
	title: "Backend Development",
	description: "FastAPI, REST APIs, PostgreSQL, Redis, Docker, Firebase",
	border: "border-sky-300 hover:border-sky-500",
  },
  {
	title: "Machine Learning & Deep Learning",
	description: "Scikit-learn, PyTorch, Transformers,TensorFlow, NumPy, Pandas, Matplotlib, CNNs",
	border: "border-pink-300 hover:border-pink-500",
  },
  {
	title: "NLP & LLMs",
	description: "Hugging Face, Sentence Transformers, Prompt Engineering",
	border: "border-emerald-300 hover:border-emerald-500",
  },
  {
	title: "Computer Vision",
	description: "OpenCV, YOLO, Object Detection",
	border: "border-blue-300 hover:border-blue-500",
  },
  {
	title: "RAG",
	description: "Embeddings, FAISS/Chroma, Retrieval, Evaluation",
	border: "border-yellow-300 hover:border-yellow-500",
  },
  {
	title: "Agentic AI",
	description: "LangChain, MCP, A2A, Tool Calling, Multi-Agent Systems",
	border: "border-red-300 hover:border-red-500",
  },
  {
	title: "Frontend Development",
	description: "HTML, CSS, Tailwind CSS, React.js, Next.js, API Integration, Responsive Design",
	border: "border-violet-300 hover:border-violet-500",
  },
  {
	title: "WordPress Development",
	description: "WordPress, Elementor, WooCommerce, Theme Customization, Plugin Management, Website Maintenance, SEO Basics",
	border: "border-sky-300 hover:border-sky-500",
  },
  {
	title: "AI Content & Design",
	description: "Canva, Google Flow AI Image Generation, Banner Design, Social Media Content",
	border: "border-pink-300 hover:border-pink-500",
  },
  {
	title: "DevOps & Deployment",
	description: "Docker",
	border: "border-emerald-300 hover:border-emerald-500",
  }

];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
    >
      <div className="text-center mb-16 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
        My Skills
      </h2>

      <a href="/" className="rounded-full border-2 border-sky-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-sky-500">
        ← Back to Home
      </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {skills.map((skill) => (

          <div
            key={skill.title}
            className={`
            bg-white
            rounded-3xl
            border-2
            ${skill.border}
            shadow-xl
            hover:shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-2
            p-8
            `}
          >

            <h3 className="text-2xl font-bold text-gray-900">
              {skill.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-7">
              <ul>
				{skill.description.split(", ").map((item, index) => (
				  <li key={index} className="list-disc ml-5">
					{item}
				  </li>
				))}
			  </ul>
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}