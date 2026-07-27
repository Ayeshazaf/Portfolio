const projects = [
  {
    title: "Multi-Agent System",
    description:
      "A production-inspired AI platform consisting of multiple specialized agents including CRM, Task Management, Knowledge Retrieval (RAG), Document Processing and Reporting. Agents collaborate to automate enterprise workflows through intelligent decision making.",
    tech: "FastAPI • SQLite • Python  • FAISS • LangChain",
    github: "https://github.com/Ayeshazaf/AI_Agents",
    border: "border-violet-300 hover:border-violet-500",
  },

  {
    title: "Low-Light Object Detection (ExDark)",
    description:
      "Trained and evaluated a YOLO-based computer vision model for robust object detection under challenging low-light environments using the ExDark dataset with optimized preprocessing and evaluation pipelines.",
    tech: "YOLO • PyTorch • OpenCV • Computer Vision",
    github: "https://github.com/Ayeshazaf/Exdark-Dataset",
    border: "border-pink-300 hover:border-pink-500",
  },

  {
    title: "Natural Language to SQL",
    description:
      "Built a Natural Language to SQL converter using CodeT5, fine-tuned on a subset of the Spider dataset with basic schema linking. The system takes plain English questions and generates executable SQL queries, with an evaluation script for exact-match accuracy",
    tech: "LLMs • SQL • FastAPI • Prompt Engineering • Python ",
    github: "https://github.com/Ayeshazaf/Natural_language_to_SQL",
    border: "border-sky-300 hover:border-sky-500",
  },

  {
    title: "Medical Image Analysis",
    description:
      "Developed deep learning models for medical image analysis, including MRI brain tumor detection and classification, with a focus on practical AI applications in healthcare.",
    tech: "Deep Learning • CNN • Medical Imaging • Python",
    github: "https://github.com/Ayeshazaf/Brain-Tumor-YOLO26",
    border: "border-emerald-300 hover:border-emerald-500",
  },

  {
    title: "AI-Powered Text Summarization Tool",
    description: "Built a text summarization tool that automatically generates concise summaries from long-form articles, documents, or text inputs using Hugging Face’s pretrained summarization models, the project demonstrates the practical application of Natural Language Processing (NLP) for information compression and content understanding.",
    tech: "NLP • Hugging Face • Transformers • Python",
    github: "https://github.com/Ayeshazaf/Summary_dashboard",
    border: "border-yellow-300 hover:border-yellow-500",
  },

  {
    title: "Spam Detector",
    description: "Spam Detector (Logistic Regression, Naive Bayes, DistilBERT) Built a machine learning pipeline to classify SMS messages as spam or ham using both classical ML and transformer-based models.",
    tech: "Machine Learning • NLP • Python • Scikit-learn • PyTorch",
    github: "https://github.com/Ayeshazaf/sms_spam_detection",
    border: "border-red-300 hover:border-red-500",
  },
  {
    title: "Outfitters-Clone",
    description: "Developed a responsive e-commerce website clone of Outfitters using React.js, Tailwind CSS, and integrated APIs for product listing.",
    tech: "Frontend Development • React.js • Tailwind CSS • API Integration Backend Development • Node.js • Express.js • MongoDB",
    github: "https://github.com/Ayeshazaf/Outfitters_clone",
    border: "border-violet-300 hover:border-violet-500",
  }

];

export default function Projects() {

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
    >
      
      <div className="text-center mb-16 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
        Featured Projects
      </h2>

      <a href="/" className="rounded-full border-2 border-sky-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-sky-500">
        ← Back to Home
      </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {projects.map((project) => (

          <div
            key={project.title}
            className={`
            bg-white
            rounded-3xl
            border-2
            ${project.border}
            shadow-xl
            hover:shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-2
            p-8
            `}
          >

            <div className="text-indigo-500 mb-5">
              {project.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-7">
              {project.description}
            </p>

            <div className="mt-8 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              {project.tech}
            </div>
            <br/>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-block rounded-full border-2 ${project.border} bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-sky-500`}
              >
                View on GitHub
              </a>
            )}

           

          </div>

        ))}

      </div>
      
    </section>
  );
}
    