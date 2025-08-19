import React, { useState } from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const profile = {
  name: "Aaditya Vikram",
  title: "Software Engineer • MCDS @ CMU",
  location: "Pittsburgh, PA",
  email: "aadityas@andrew.cmu.edu",
  photo: "/IMG_4471.jpg",
  about:
    "Hi, I’m Aaditya Vikram a software engineer and graduate student in the Master of Computational Data Science program at Carnegie Mellon University. I’m fascinated by distributed systems, data science, and machine learning, and I love building things that are both scalable and impactful. During my time at Cisco and Zscaler, I worked on everything from middleware and cloud integrations to secure data pipelines. Outside of work, I’ve published research in computer vision and data analytics, including award winning work on GAN-based image dehazing. I enjoy solving tough problems, whether it’s through coding contests, open-source contributions, or tinkering with new tools and frameworks. At the heart of it, I’m driven by curiosity and the excitement of turning complex ideas into real systems that make a difference.",
  links: {
    github: "https://github.com/Aadi-Vikram",
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
          "Led telemetry & middleware initiative in Golang preventing data loss for 10K+ customers; integrated with AWS Athena for reliable data validation.",
          "Built Webex bots in Node.js to deliver real-time alerts on traffic thresholds and system metrics, reducing MTTR by ~40%.",
          "Resolved 50+ critical bugs across backend and UI components, improving orchestration reliability.",
          "Standardized API error schemas across 20+ microservices, enhancing debugging efficiency and service consistency.",
          "Applied distributed systems and algorithm design principles to improve platform stability and performance by ~35%.",
          "Collaborated in Agile teams, driving sprint planning, code reviews, and CI/CD pipeline enhancements."
        ]
      },
      {
        company: "Zscaler",
        role: "Software Engineer Intern",
        period: "Feb 2024 – Aug 2024, Jun 2023 - Aug 2023",
        logo: "/zscaler.png",
        bullets: [
          "Compressed data by ~40% and accelerated transfers by ~50% using Protocol Buffers.",
          "Optimized PostgreSQL with PL/pgSQL, indexes, and query tuning; improved analytics throughput and performance.",
          "Secured RabbitMQ over HTTPS, implemented pseudo-clustering, and improved queue reliability.",
          "Developed IOCTLs (I/O control system calls) to strengthen low-level device communication.",
          "Automated server functions with Python scripts, reducing manual deployment overhead.",
          "Achieved ~95% unit test coverage with CMocka, ensuring robustness of critical modules.",
          "Collaborated with cross-functional teams to enhance security, scalability, and system performance."
        ]
      }
,      
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
  { title: "Best Paper Award – ISMSI 2024", logo: "/ismsi.png" },
];

const certifications = [
  { name: "DeepLearning.AI Specialization", logo: "/deep-learning.png" },
  { name: "Hugging Face Course", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
];

const skills = [
    // Programming Languages
    { name: "C++", logo: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" },
    { name: "Go", logo: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png" },
    { name: "Python", logo: "https://www.python.org/static/community_logos/python-logo.png" },
    { name: "Java", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
    { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
  
    // Data Science & ML
    { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
    { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
    { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
    { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "pandas", logo: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
    { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
    { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },

  
    // Web Development
    { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" },
    { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  
    // Databases
    { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
  
    // DevOps & Tools
    { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
    { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
    { name: "Jenkins", logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" },
    { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
    { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
    { name: "Grafana", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg" },
  ];
  

const projects = [
  { name: "GAN‑Based Image Dehazing", img: "/bank_transaction.png", description: "Tiramisu generator + PatchGAN discriminator for multispectral image dehazing.", additional: "This work presents a GAN-based framework for multispectral image dehazing that overcomes the limitations of traditional RGB-focused methods by explicitly addressing wavelength-dependent haze effects across spectral bands. The approach introduces a channel decomposition strategy to process each band individually, a modified Tiramisu generator to capture both fine textures and semantic features through dense connectivity and skip connections, and a PatchGAN discriminator to preserve local structural details. Trained with a combination of adversarial, L1, and perceptual losses, the model achieves sharper, more realistic outputs with fewer artifacts. Experiments on the SHIA dataset show significant improvements over state-of-the-art methods, delivering higher PSNR and SSIM scores as well as visually clearer imagery. By removing haze without relying on explicit transmission map estimation, the framework enables robust multispectral imaging in agriculture, environmental monitoring, defense, and remote sensing, where clarity and spectral fidelity are crucial." },
  { name: "Wine Analytics Study", img: "/wine.png", description: "Comparative study of data analysis techniques on wine quality dataset.", additional: "This study investigates the use of data analysis and machine learning techniques to enhance wine quality prediction in response to the industry’s rapid growth and rising demand. Various physicochemical attributes, such as acidity, sugar, chlorides, sulfates, density, and alcohol content, were analyzed, followed by feature selection methods like Information Gain and Random Forests to identify the most influential factors. Multiple classification models including Artificial Neural Networks (ANN), Support Vector Machines (SVM), Logistic Regression, Decision Trees, Random Forests, and XGBoost were applied to two tasks: classifying wines as red or white, and as good or poor in quality. Results showed high accuracy for red/white classification, with XGBoost achieving the best performance (99.38%), while Random Forests provided the most reliable outcomes for quality prediction (87.83%), confirming their effectiveness in optimizing automated wine quality assessment."},
  { name: "Android Malware Detection Survey", img: "/android_malware.png", description: "Survey paper on Android malware detection methods and approaches.", additional: "The rapid growth of smartphones, particularly Android with its dominant global market share of around 87%, has made mobile devices central to daily life but also highly vulnerable to malware due to the platform’s open-source nature, flexible architecture, and permission management. As malware attacks, especially Trojans, have surged reaching nearly half a million new variants monthly researchers have focused on developing detection and defense methods. This literature survey reviews over 90 studies since 2010, analyzing approaches such as machine learning, code and structural similarity, static and dynamic analysis, app store vulnerability detection, and IoT focused methods. Findings show that machine learning dominates as the most effective strategy for Android malware detection, though challenges remain regarding dataset quality, algorithm selection, and resource efficiency, highlighting ongoing research needs in this critical security domain." },
  { name: "Plan Your Miles", img: "/travel.png", description: "A travel based website based on client preference", additional: "Collaborated in a 4-member team to develop Plan Your Miles, a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that leveraged database management, data analytics, and emotional sentiment analysis to deliver personalized vacation planning. I contributed to designing and implementing user profiling and personalization algorithms that analyzed client preferences, behavioral data, and emotional cues to dynamically tailor recommendations, while also optimizing data pipelines and database queries for scalability and efficiency. Through A/B testing and performance evaluation, the application demonstrated a 25% improvement in recommendation accuracy and a 30% increase in user engagement, highlighting the effectiveness of integrating advanced personalization techniques with an interactive front-end interface." },
  { name: "Yet Another Kafka", img: "/kafka.png", description: "A kafka replica using socket programming", additional: "Designed and implemented a Kafka replica by building a custom producer–consumer model using socket programming, JSON-based data serialization, and efficient topic management to simulate real-world distributed streaming. The system was engineered to handle fault tolerance by distributing data across multiple brokers, ensuring reliability and scalability even under heavy workloads. To maintain consistency and coordination among brokers, Zookeeper was integrated for leader election, synchronization, and metadata management, enabling seamless failover and system stability. This project provided hands-on experience with distributed systems, data streaming, and message queue design, while reinforcing concepts of reliability, scalability, and real time data processing that are central to modern event driven architectures." },
  { name: "Secure Bank Transaction", img: "/banker.png", description: "A kafka replica using socket programming", additional: "This project focused on analyzing modern day daily financial transactions and exploring how encryption can serve as a secure and reliable mechanism for communication between senders and receivers. Using the C programming language, the system was designed with the Playfair cipher encryption and decryption algorithm to ensure that only authorized clients could initiate or process transactions, thereby preventing unauthorized access and enhancing confidentiality. To support secure data handling, MySQL was integrated for storage and retrieval, enabling efficient management of transaction records while maintaining data integrity. The project not only demonstrated the practical implementation of cryptographic algorithms in real world scenarios but also highlighted the importance of secure communication, database integration, and authentication techniques in safeguarding digital transactions." },
];

const publications = [
    {
        title:
          "Enhancing Multispectral Vision: A GAN-Based Dehazing Framework for Improved Image Clarity",
        authors: "A Vikram, K Shivakumar, Chaithra, A CS, S SS",
        venue:
          "Proceedings of the 2024 8th International Conference on Intelligent Systems, Metaheuristics & Swarm Intelligence",
        year: "2024",
        award: "Best Paper Award 🏆",
        links: { Paper: "https://dl.acm.org/doi/10.1145/3665065.3665087", bib: "#" },
      },
      {
        title:
          "A Pugnacious Comparative Study of Data Analysis Techniques for Wine Quality Prediction",
        authors: "DJ Garodia, A Gadad, A Vikram",
        venue:
          "2024 IEEE 9th International Conference for Convergence in Technology (I2CT), 1-6",
        year: "2024",
        award: null,
        links: { Paper: "https://ieeexplore.ieee.org/document/10543546", bib: "#" },
      },
    {
      title: "Android malware detection: A comprehensive review",
      authors:
        "AVS Bhavan, S Golla, Y Poral, AS Paul, PB Honnavalli, S Supreetha",
      venue: "Research Advances in Network Technologies, 41-82",
      year: "2024",
      award: null,
      links: { Paper: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003433958-3/android-malware-detection-aaditya-vikram-saravana-bhavan-srujana-golla-yuktha-poral-alan-paul-prasad-honnavalli-supreetha", bib: "#" },
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
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
  >
    <div
      className={`rounded-2xl p-8 max-w-lg text-center border transition-colors duration-300
        ${darkMode 
          ? "bg-black/90 border-yellow-400 text-yellow-300" 
          : "bg-white border-gray-300 text-gray-800"
        }`}
    >
      <h3 
        className={`text-2xl font-bold mb-4 
          ${darkMode ? "text-yellow-400" : "text-gray-800"}`}
      >
        {selectedProject.name}
      </h3>
      <p className="mb-6 text-left">{selectedProject.additional}</p>
      <button
        onClick={() => setSelectedProject(null)}
        className={`font-bold px-6 py-2 rounded-xl transition-colors duration-200
          ${darkMode
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
      >
        Close
      </button>
    </div>
  </motion.div>
)}
        </section>
      )}

      {/* Resume */}
      {activeSection==="resume" && (
        <section className="p-8 text-center relative z-10">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode?"text-yellow-400":"text-gray-700"}`}>Resume</h2>
          <a href="/Aaditya_Vikram_Saravana_Bhavan_Resume.pdf" target="_blank" className={`${darkMode?"bg-yellow-400 hover:bg-yellow-300 text-black":"bg-gray-800 hover:bg-gray-700 text-white"} px-6 py-2 rounded-md font-bold`}>View Resume</a>
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
