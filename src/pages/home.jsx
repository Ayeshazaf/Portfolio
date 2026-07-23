import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">

      <div
        className="pointer-events-none absolute rounded-full blur-[150px] transition-all duration-10"
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(157, 56, 252, 0.35), rgba(38, 120, 252, 0.25), rgba(248, 91, 170, 0.18), transparent 95%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center">

    {/* Heading */}
    <div className="mt-14 text-center">

      <h1 className="text-4xl md:text-4xl font-black tracking-tight text-gray-600">
        Hi! I'm Ayesha 
      </h1>

      <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
        I'm a passionate AI Engineer with expertise in Multi-Agent Systems, Retrieval-Augmented Generation, and Computer Vision.  
      </p>

    </div>

        <div className="mt-16">
          <div className="flex h-52 w-52 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-2xl">
            <span className="text-gray-400">Avatar</span>
          </div>
        </div>

        <div className="mt-auto mb-14 flex flex-wrap justify-center gap-5">
          <Link to="/projects">
            <button className="rounded-full border-2 border-violet-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-violet-500">
              🚀 Projects
            </button>
          </Link>
          <Link to="/skills">
            <button className="rounded-full border-2 border-sky-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-sky-500">
              💻 Skills
            </button>
          </Link>
          <Link to="/contact">
            <button className="rounded-full border-2 border-pink-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-pink-500 hover:shadow-pink-200">
              📬 Contact
            </button>
          </Link>
          <Link to="/hobbies">
            <button className="rounded-full border-2 border-emerald-300 bg-white px-8 py-3 shadow-lg transition-all duration-300 hover:border-emerald-500 hover:shadow-emerald-200">
              🌿 Hobbies
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}