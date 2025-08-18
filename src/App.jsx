import React, { useState } from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const profile = {
  name: "Aaditya Vikram",
  title: "Software Engineer • MCDS @ CMU",
  location: "Pittsburgh, PA",
  email: "aadityas@andrew.cmu.edu",
  photo: "https://via.placeholder.com/150",
  about:
    "Hi! I’m Aaditya Vikram, a software engineer passionate about distributed systems, data science, and machine learning. I’ve worked at Cisco and Zscaler and published award-winning research. Currently pursuing my MCDS at Carnegie Mellon University, I love solving hard problems, contributing to open-source, and competing in coding contests.",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/aaditya-vikrams",
  },
};

const experiences = [
  {
    company: "Cisco",
    role: "Software Development Engineer",
    period: "Sep 2024 – Jul 2025",
    logo: "/Cisco.png",
    bullets: [
      "Led telemetry & middleware initiative preventing data loss for 10K+ customers; built a Webex bot reducing MTTR by ~40%.",
      "Resolved 50+ critical bugs; standardized API error schemas across 20+ microservices, improving platform stability by ~35%.",
    ],
  },
  {
    company: "Zscaler",
    role: "Software Engineer Intern",
    period: "Feb 2024 – Aug 2024, Jun 2023 - Aug 2023",
    logo: "/zscaler.png",
    bullets: [
      "Compressed data by ~40% and sped up transfers by ~50% using Protocol Buffers.",
      "Optimized PostgreSQL with PL/pgSQL; improved analytics throughput and performance.",
      "Secured RabbitMQ over HTTPS; added pseudo-clustering; automated servers in Python with ~95% unit test coverage.",
    ],
  },
  {
    company: "PES University",
    role: "Undergraduate Teaching Assistant, Cloud Computing and Problem Solving with C",
    period: "Jun 2023 – Dec 2023",
    logo: "/PESU.jpg",
    bullets: [
      "Designed and evaluated coursework, assignments, and projects for the undergraduate Cloud Computing course.",
      "Conducted practical, hands-on sessions on Docker and ETCD to a class of 600+ enrolled students.",
      "Created and evaluated HackerRank questions for 2,000+ first-year students on C fundamentals.",
      "Developed slide content and videos for instructional support.",
    ],
  },
  {
    company: "PES University",
    role: "Research Assistant, Center for Information Security, Forensics and Cyber Resilience",
    period: "May 2022 – Aug 2022",
    logo: "/PESU_ISFCR.jpg",
    bullets: [
      "Researched the evolving landscape of Android malware, analyzing threat types, attack vectors, and tactics used by malicious actors to compromise mobile devices and user data.",
      "Co-authored a comprehensive chapter in a Springer publication, highlighting trends and presenting insights and research directions for advancing mobile threat detection.",
    ],
  },
];

const achievements = [
  { title: "Knight on LeetCode (Top 2.75%)", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" },
  { title: "Best Paper Award – ISMSI 2024", logo: "https://static.wixstatic.com/media/1c3c2f_602b6fdd6d0e48e4a2b83b7a9f9b4621~mv2.png" },
];

const certifications = [
  { name: "DeepLearning.AI Specialization", logo: "/deep-learning.png" },
  { name: "Hugging Face Course", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
];

const skills = [
  { name: "C++", logo: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" },
  { name: "Go", logo: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png" },
  { name: "Python", logo: "https://www.python.org/static/community_logos/python-logo.png" },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
  { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
];

const projects = [
  { name: "GAN‑Based Image Dehazing", img: "/bank_transaction.png", description: "Tiramisu generator + PatchGAN discriminator for multispectral image dehazing." },
  { name: "Wine Analytics Study", img: "/wine.png", description: "Comparative study of data analysis techniques on wine quality dataset." },
  { name: "Android Malware Detection Survey", img: "/android_malware.png", description: "Survey paper on Android malware detection methods and approaches." },
  { name: "Plan Your Miles", img: "/travel.png", description: "A travel based website based on client preference" },
  { name: "Yet Another Kafka", img: "/kafka.png", description: "A kafka replica using socket programming" },
  { name: "Secure Bank Transaction", img: "/banker.png", description: "A kafka replica using socket programming" },
];

const publications = [
    {
        title:
          "Enhancing Multispectral Vision: A GAN-Based Dehazing Framework for Improved Image Clarity",
        authors: "A Vikram, K Shivakumar, Chaithra, A CS, S SS",
        venue:
          "Proceedings of the 2024 8th International Conference on Intelligent Systems …",
        year: "2024",
        award: "Best Paper Award 🏆",
        links: { Paper: "#", bib: "#" },
      },
      {
        title:
          "A Pugnacious Comparative Study of Data Analysis Techniques for Wine Quality Prediction",
        authors: "DJ Garodia, A Gadad, A Vikram",
        venue:
          "2024 IEEE 9th International Conference for Convergence in Technology (I2CT), 1-6",
        year: "2024",
        award: null,
        links: { Paper: "#", bib: "#" },
      },
    {
      title: "Android malware detection: A comprehensive review",
      authors:
        "AVS Bhavan, S Golla, Y Poral, AS Paul, PB Honnavalli, S Supreetha",
      venue: "Research Advances in Network Technologies, 41-82",
      year: "2024",
      award: null,
      links: { Paper: "#", bib: "#" },
    },
  ];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`relative min-h-screen font-sans overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gradient-to-br from-black via-gray-900 to-black text-yellow-300" : "bg-gradient-to-br from-white via-gray-100 to-white text-gray-800"}`}>
      {/* Navbar */}
      <nav className={`flex justify-between items-center px-8 py-4 shadow-lg sticky top-0 z-50 ${darkMode ? "bg-black/90 border-b border-yellow-500" : "bg-white/90 border-b border-gray-300"}`}>
        <h1 className={`text-2xl font-extrabold tracking-wide drop-shadow-md ${darkMode ? "text-yellow-400" : "text-gray-800"}`}>{profile.name}</h1>
        <div className="flex items-center gap-6 font-semibold">
          {['about','experience','projects','resume','publications'].map((sec) => (
            <button key={sec} onClick={() => setActiveSection(sec)}
              className={`${activeSection===sec ? (darkMode?"border-2 border-yellow-400 bg-yellow-400 text-black":"border-2 border-gray-700 bg-gray-700 text-white") : "hover:opacity-80"} px-3 py-1 rounded-md transition-colors`}>
              {sec.charAt(0).toUpperCase()+sec.slice(1)}
            </button>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode?"hover:bg-yellow-400 hover:text-black":"hover:bg-gray-700 hover:text-white"}`}>
            {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </nav>

      {/* About */}
      {activeSection==="about" && (
        <section className="p-8 max-w-5xl mx-auto text-center relative overflow-hidden z-10">
          <img src={profile.photo} alt="profile" className="w-44 h-44 rounded-full mx-auto mb-4 border-4 border-black shadow-xl" />
          <h2 className={`text-3xl font-bold mb-2 animate-pulse ${darkMode?"text-yellow-400":"text-gray-700"}`}>{profile.title}</h2>
          <p className="leading-relaxed mb-6">{profile.about}</p>
          <div className="flex gap-6 justify-center mt-4">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:opacity-80"><Github /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-80"><Linkedin /></a>
            <a href={`mailto:${profile.email}`} className="hover:opacity-80"><Mail /></a>
          </div>

          {/* Experience */}
          <h3 className={`text-2xl font-semibold mt-12 mb-6 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {experiences.map((exp) => (
              <div key={exp.company} className={`${darkMode?"bg-gray-900 border-yellow-500 hover:shadow-yellow-400/50":"bg-gray-100 border-gray-400 hover:shadow-gray-500/50"} p-4 rounded-xl border hover:scale-105 transition-transform`}>
                <img src={exp.logo} alt="logo" className="w-16 h-16 mx-auto mb-2 object-contain" />
                <h3 className="font-bold">{exp.company}</h3>
                <p>{exp.role}</p><p className="text-sm">{exp.period}</p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <h3 className={`text-2xl font-semibold mt-12 mb-6 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Achievements</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {achievements.map((a) => (
              <div key={a.title} className={`${darkMode?"bg-gray-800 border-yellow-500 hover:shadow-yellow-400/50":"bg-gray-100 border-gray-400 hover:shadow-gray-500/50"} flex flex-col items-center p-4 rounded-xl border w-48 hover:scale-105 transition-transform`}>
                <img src={a.logo} alt="logo" className="h-12 mb-2 object-contain" />
                <p className="text-sm font-medium">{a.title}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h3 className={`text-2xl font-semibold mt-12 mb-6 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((s) => (
              <div key={s.name} className={`${darkMode?"bg-gray-800 border-yellow-500 hover:shadow-yellow-400/50":"bg-gray-100 border-gray-400 hover:shadow-gray-500/50"} flex flex-col items-center p-4 rounded-xl border w-28 hover:scale-110 transition-transform`}>
                <img src={s.logo} alt={s.name} className="h-10 mb-2 object-contain" />
                <p className="text-xs font-medium">{s.name}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h3 className={`text-2xl font-semibold mt-12 mb-6 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((c) => (
              <div key={c.name} className={`${darkMode?"bg-gray-800 border-yellow-500 hover:shadow-yellow-400/50":"bg-gray-100 border-gray-400 hover:shadow-gray-500/50"} flex flex-col items-center p-4 rounded-xl border w-48 hover:scale-105 transition-transform`}>
                <img src={c.logo} alt="logo" className="h-12 mb-2 object-contain" />
                <p className="text-sm font-medium">{c.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {activeSection==="experience" && (
        <section className="p-8 relative z-10">
          <h2 className={`text-2xl font-semibold text-center mb-6 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Experience</h2>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {experiences.map((exp) => (
              <div key={exp.company} className={`${darkMode?"bg-gray-900 border-yellow-500 hover:shadow-yellow-400/50":"bg-gray-100 border-gray-400 hover:shadow-gray-500/50"} p-6 rounded-2xl border hover:scale-[1.02] transition-transform`}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={exp.logo} alt="logo" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="font-bold text-lg">{exp.company}</h3>
                    <p>{exp.role}</p><p className="text-sm">{exp.period}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">{exp.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {activeSection==="projects" && (
        <section className="p-8 relative z-10">
          <h2 className={`text-2xl font-semibold text-center mb-6 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((p) => (
              <div key={p.name} onClick={()=>setSelectedProject(p)} className={`${darkMode?"bg-gray-900 border-yellow-500 hover:shadow-yellow-400/50":"bg-gray-100 border-gray-400 hover:shadow-gray-500/50"} rounded-xl border overflow-hidden hover:scale-105 transition-transform cursor-pointer`}>
                <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />
                <div className="p-4 text-center"><h3 className="font-bold mb-2">{p.name}</h3><p className="text-sm">{p.description}</p></div>
              </div>
            ))}
          </div>
          {selectedProject && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-black/90 border border-yellow-400 rounded-2xl p-8 max-w-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{selectedProject.name}</h3>
                <p className="mb-6">{selectedProject.description}</p>
                <button onClick={()=>setSelectedProject(null)} className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-xl hover:bg-yellow-300">Close</button>
              </div>
            </motion.div>
          )}
        </section>
      )}

      {/* Resume */}
      {activeSection==="resume" && (
        <section className="p-8 text-center relative z-10">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Resume</h2>
          <a href="/resume.pdf" target="_blank" className={`${darkMode?"bg-yellow-400 hover:bg-yellow-300 text-black":"bg-gray-800 hover:bg-gray-700 text-white"} px-6 py-2 rounded-md font-bold`}>View Resume</a>
        </section>
      )}

      {/* Publications */}
      {activeSection==="publications" && (
        <section className="p-8 text-center relative z-10">
        <h2
          className={`text-2xl font-semibold mb-4 ${
            darkMode ? "text-yellow-400" : "text-gray-700"
          }`}
        >
          Publications
        </h2>
        <p className="mb-6">
          Check out my {" "}
          <a
            href="https://scholar.google.com/citations?user=2PE-HZMAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Google Scholar
          </a>{" "}
          for a more updated list of publications.
        </p>
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {publications.map((pub, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg">{pub.title}</h3>
              <p className="italic text-sm">{pub.venue}</p>
              <p className="text-sm mb-1">{pub.authors}</p>
              {pub.award && (
                <p className="text-red-600 font-semibold">{pub.award}</p>
              )}
              <div className="flex gap-3 mt-1">
                <a
                  href={pub.links.Paper}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    darkMode
                      ? "bg-yellow-600 text-black hover:bg-yellow-500"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Paper
                </a>
                <a
                  href={pub.links.bib}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    darkMode
                      ? "bg-yellow-600 text-black hover:bg-yellow-500"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  bib
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className={`${darkMode?"bg-black border-yellow-500 text-yellow-300":"bg-gray-100 border-gray-300 text-gray-700"} p-6 text-center border-t relative z-10`}>
        <h2 className="text-lg font-bold">Aaditya Vikram</h2>
        <p className="italic">“The best way to predict the future is to create it.”</p>
      </footer>
    </div>
  );
}
