// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aaditya Vikram",
  fullName: "Aaditya Vikram Saravana Bhavan",
  role: "Software Engineer",
  status: "MCDS @ Carnegie Mellon · Graduating Dec 2026",
  seeking: "Open to New Grad SWE roles starting Jan 2027",
  location: "Pittsburgh, PA",
  email: "aadityas@andrew.cmu.edu",
  altEmail: "aaditya.vikram1903@gmail.com",
  phone: "(412) 390-4596",
  photo: "/IMG_4471.jpg",
  resume: "/Aaditya_Vikram_Saravana_Bhavan_Resume.pdf",

  // Hero headline
  thesis: {
    line1: "Engineering systems that scale.",
    line2: "Designing models that learn.",
  },

  now: "Wrapping up my SDE internship on Amazon RDS at AWS this August.",

  // Large opening line, then the supporting paragraph beneath it.
  lead: "I'm Aaditya. I like solving problems, especially the ones that only show up at scale.",

  intro:
    "Most of my code has run in production for people who never knew it was there. I'm finishing a Master's in Computational Data Science at Carnegie Mellon this December with a 4.00. This summer I'm at AWS, automating the certificate infrastructure behind Amazon RDS so new regions can launch on schedule. Before CMU I spent a year at Cisco building Go telemetry middleware that served 10,000+ customers, and eight months at Zscaler on the data path, where moving to Protocol Buffers cut payload size by 40%. Three published papers along the way, one of them a Best Paper award, and I solve algorithm problems for fun (LeetCode Knight, top 2.75%). I'm looking for a new grad role in backend, distributed systems, or ML infrastructure.",

  // Fills the panel under the hero chart. Recruiters scan this first.
  glance: [
    { k: "Graduating", v: "December 2026" },
    { k: "Available", v: "January 2027" },
    { k: "Focus", v: "Backend, distributed systems, ML infrastructure" },
  ],

  studyingAt: {
    name: "Carnegie Mellon University",
    detail: "M.S. Computational Data Science, GPA 4.00",
    mark: "CMU",
    accent: "#C41230",
  },

  shippedAt: [
    { name: "Amazon Web Services", logo: "/logos/aws.svg" },
    { name: "Cisco", logo: "/logos/cisco.png" },
    { name: "Zscaler", logo: "/logos/zscaler.png" },
  ],

  links: {
    github: "https://github.com/Aadi-Vikram",
    linkedin: "https://linkedin.com/in/aaditya-vikrams",
    scholar: "https://scholar.google.com/citations?user=2PE-HZMAAAAJ&hl=en",
    leetcode: "https://leetcode.com/u/aaditya_vikram/",
  },
};

// The signature stat: a load-test ramp, animated in the hero.
export const throughput = {
  from: 200,
  to: 5000,
  peak: 6000,
  unit: "RPS",
  caption: "Sustained throughput, CMU Cloud Computing Twitter service",
  detail: "1 TB+ dataset · 99.7% correctness · Go + PySpark on Amazon EKS",
};

export const stats = [
  { value: "4.00", label: "GPA at CMU", sub: "MCDS, 4.00 / 4.00" },
  { value: "1 TB+", label: "Data served", sub: "Twitter recommendation service" },
  { value: "10K+", label: "Customers reached", sub: "Cisco Catalyst Center telemetry" },
  { value: "Top 2.75%", label: "LeetCode Knight", sub: "Competitive problem solving" },
];

export const experience = [
  {
    company: "Amazon Web Services",
    mark: "AWS",
    logo: "/logos/aws.svg",
    accent: "#FF9900",
    team: "Amazon RDS",
    role: "Software Development Engineer Intern",
    period: "May 2026 – Aug 2026",
    place: "Seattle, WA",
    current: true,
    summary:
      "Built the RDS control-plane workflow that propagates regional CA certificates to new AWS regions, so database instances there accept TLS-authenticated connections from day one.",
    bullets: [
      "Engineered an idempotent Java control-plane workflow that propagates RSA-2048, RSA-4096 and ECC-384 regional CA certificates across 3 upcoming AWS regions, enabling TLS-authenticated connections to RDS instances.",
      "Built 2 AWS Lambda functions and extended AWS CDK and IAM infrastructure to move certificate artifacts from a tooling-account S3 bucket to a global publication account, cutting trust-store publication from weeks to days.",
      "Automated internal trust-store onboarding across 2 repositories, 4 branches and 12 configuration files by retrieving regional certificates, generating code reviews, and integrating failure ticketing into region-build automation.",
    ],
    stack: ["Java", "AWS Lambda", "AWS CDK", "IAM", "Amazon S3", "TLS / PKI"],
  },
  {
    company: "Cisco",
    mark: "CS",
    logo: "/logos/cisco.png",
    accent: "#1BA0D7",
    team: "Catalyst Center",
    role: "Software Development Engineer",
    period: "Sep 2024 – Jul 2025",
    place: "Chennai, India",
    summary:
      "Owned SMO, a Go service that polls telemetry from customer devices across 10K+ enterprise deployments, and fixed the data-loss bug hiding inside it.",
    bullets: [
      "Eliminated fleet-wide telemetry gaps: a new backup and restore feature left devices briefly unreachable, and the fixed 24-hour poll silently dropped a full day of data per miss. Rebuilt it with per-device checkpoints that persist the last successful poll timestamp and request the whole gap on recovery, so any outage backfills itself. Coverage validated in AWS Athena.",
      "Built Webex bots in Node.js delivering real-time threshold and system-health alerts to on-call engineers, cutting mean time to resolution by roughly 40%.",
      "Led error-contract standardization across 8 engineering teams whose microservices fed SMO, replacing inconsistent response formats that surfaced unreadable errors to customers with one agreed schema, then reworked the backend to extract user-facing messages from it.",
    ],
    stack: ["Go", "Node.js", "AWS Athena", "Microservices", "Kubernetes"],
  },
  {
    company: "Zscaler",
    mark: "ZS",
    logo: "/logos/zscaler.png",
    accent: "#0084C6",
    team: "Cloud Security",
    role: "Software Development Engineer Intern",
    period: "Feb 2024 – Aug 2024",
    place: "Bangalore, India",
    summary:
      "Two internships on the data path: serialization, storage, and message transport for a security cloud.",
    bullets: [
      "Reduced payload size by 40% and transfer latency by 50% using Protocol Buffers; tuned PostgreSQL and PL/pgSQL workloads.",
      "Secured RabbitMQ communication, automated server workflows in Python, and reached 95% unit test coverage.",
      "Improved system-level C serialization pipelines and cut code duplication with X-Macros.",
    ],
    stack: ["Protocol Buffers", "PostgreSQL", "RabbitMQ", "C", "Python"],
  },
  {
    company: "PES University",
    mark: "PES",
    logo: "/logos/pes.png",
    accent: "#7A5AF8",
    team: "Teaching & Research",
    role: "Teaching Assistant, Cloud Computing · Research Assistant, ISFCR",
    period: "May 2022 – Dec 2023",
    place: "Bangalore, India",
    summary:
      "Taught cloud computing to 600+ students and researched the Android malware landscape for a Springer book chapter.",
    bullets: [
      "Designed coursework and ran hands-on Docker and etcd sessions for 600+ enrolled students.",
      "Authored and graded HackerRank problem sets on C fundamentals for 2,000+ first-year students.",
      "Co-authored a comprehensive review of Android malware detection published by Taylor & Francis.",
    ],
    stack: ["Docker", "etcd", "C", "Research"],
  },
];

export const projects = [
  {
    name: "High-Throughput Twitter Recommendation Service",
    tag: "Distributed Systems",
    org: "Carnegie Mellon · Cloud Computing",
    period: "Jan 2026 – Apr 2026",
    img: "/kafka.png",
    headline: "200 → 5,000 sustained RPS over 1 TB of data",
    summary:
      "A production-shaped recommendation service on Amazon EKS, tuned from a naive baseline to 6,000 peak RPS at 99.7% correctness.",
    detail:
      "Built a Twitter recommendation service over 1 TB+ of data using PySpark, Go, Amazon EKS, Kubernetes, and Aurora MySQL. The first working version handled 200 sustained requests per second. Getting to 5,000 took schema denormalization to kill join fan-out, indexed Aurora lookups, horizontal pod autoscaling, connection-pool tuning, and running authentication concurrently with database queries instead of serially. Final numbers: 6,000 peak RPS, 5,000 sustained, 99.7% correctness.",
    stack: ["Go", "PySpark", "Amazon EKS", "Kubernetes", "Aurora MySQL"],
    metrics: [
      { k: "5,000", v: "sustained RPS" },
      { k: "6,000", v: "peak RPS" },
      { k: "99.7%", v: "correctness" },
    ],
  },
  {
    name: "MyTorch",
    tag: "Machine Learning",
    org: "Carnegie Mellon · Intro to Deep Learning (PhD)",
    period: "Aug 2025 – Dec 2025",
    img: "/deep-learning.png",
    headline: "Autograd from scratch, verified to 1e-5",
    summary:
      "Reverse-mode autograd over a modular computation graph, with analytical gradients checked against numerical references to within 1e-5.",
    detail:
      "Implemented a PyTorch-style deep learning library from first principles: reverse-mode autograd over a modular computation graph, forward and backward passes, optimizers, and loss functions. Every analytical gradient was verified against a numerical reference to within 1e-5 before anything was trained on top of it. Then came the models: MLPs, CNNs, RNNs with GRU and LSTM cells, and Transformers. The point was to leave nothing the framework normally hides implicit.",
    stack: ["Python", "NumPy", "Autograd", "CNNs", "Transformers"],
    metrics: [
      { k: "1e-5", v: "gradient check tolerance" },
      { k: "6", v: "model families" },
      { k: "0", v: "frameworks used" },
    ],
  },
  {
    name: "GAN-Based Multispectral Image Dehazing",
    tag: "Computer Vision · Published",
    org: "PES University · Best Paper, ISMSI 2024",
    period: "Jan 2023 – Apr 2024",
    img: "/dehazing.png",
    headline: "Best Paper Award, ISMSI 2024",
    summary:
      "Every state-of-the-art dehazing model failed on multispectral data because they all assume haze is uniform across wavelengths. It is not.",
    detail:
      "After implementing several state-of-the-art dehazing models and watching all of them produce poor results on multispectral data, the cause turned out to be a shared assumption: that haze is uniform across the spectrum. It is not. This framework decomposes the channels and processes each band individually, using a modified Tiramisu generator with dense connectivity and skip connections to keep both fine texture and semantic structure, plus a PatchGAN discriminator to preserve local detail. Trained with adversarial, L1 and perceptual losses, it beat the baselines on the SHIA dataset in both PSNR and SSIM. The practical payoff is NDVI accuracy: cleaner multispectral imagery means better crop-health assessment, and the same applies to environmental monitoring and remote sensing.",
    stack: ["TensorFlow", "Python", "GANs", "SHIA dataset"],
    metrics: [
      { k: "🏆", v: "Best Paper, ISMSI 2024" },
      { k: "SOTA", v: "PSNR & SSIM on SHIA" },
    ],
    link: "https://dl.acm.org/doi/10.1145/3665065.3665087",
    linkLabel: "Read the paper",
  },
  {
    name: "Distributed Messaging and Stream Processing",
    tag: "Distributed Systems",
    org: "PES University",
    period: "Nov 2022 – Jan 2023",
    img: "/kafka.png",
    headline: "From a hand-built broker to real stream processing",
    summary:
      "A Kafka-like broker written over raw sockets, later extended into a Samza stream-processing pipeline on Amazon EMR.",
    detail:
      "Built a Kafka-like distributed messaging system from socket programming up: a producer–consumer architecture with JSON serialization and topic management, replicated across multiple brokers for fault tolerance, with ZooKeeper handling leader election, synchronization and metadata so the cluster recovers cleanly when a broker drops. Later extended into stream processing proper: a Java Kafka producer routing a ride-hailing event trace into two topics partitioned five ways by block ID, feeding stateful Samza jobs that hold per-block driver state in a key-value store and match each rider to a driver by a four-factor weighted score over distance, rating, salary and gender preference.",
    stack: ["Java", "Python", "Sockets", "ZooKeeper", "Apache Samza", "Amazon EMR"],
    metrics: [
      { k: "N-broker", v: "replication" },
      { k: "5-way", v: "partitioned streams" },
    ],
  },
  {
    name: "Plan Your Miles",
    tag: "Full Stack",
    org: "PES University · 4-person team",
    period: "2023",
    img: "/travel.png",
    headline: "Trip planning tuned to how you actually travel",
    summary:
      "A MERN application that personalizes itineraries from stated preferences and behavioral signals.",
    detail:
      "Built with a four-person team on the MERN stack. I worked on the user profiling and personalization layer, turning preference inputs, behavioral data, and sentiment cues into ranked recommendations, and on the query and pipeline tuning that kept it responsive as the dataset grew. A/B testing showed 25% better recommendation accuracy and 30% higher engagement.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    metrics: [
      { k: "+25%", v: "recommendation accuracy" },
      { k: "+30%", v: "user engagement" },
    ],
  },
  {
    name: "Secure Bank Transaction",
    tag: "Systems · Security",
    org: "PES University",
    period: "2022",
    img: "/banker.png",
    headline: "Encrypted client-server transactions in C",
    summary:
      "Playfair-cipher encryption over a socket protocol, with MySQL-backed transaction records.",
    detail:
      "A transaction system written in C where every message between client and server is encrypted with a Playfair cipher, so only authorized clients can initiate or process a transfer. MySQL stores and retrieves transaction records with integrity checks. The project was an exercise in wiring cryptography, authentication, and database persistence into one coherent flow at a low level.",
    stack: ["C", "MySQL", "Cryptography", "Sockets"],
    metrics: [{ k: "End-to-end", v: "encrypted protocol" }],
  },
];

export const publications = [
  {
    title: "Enhancing Multispectral Vision: A GAN-Based Dehazing Framework for Improved Image Clarity",
    authors: "A Vikram, K Shivakumar, Chaithra, A CS, S SS",
    venue: "ISMSI 2024, 8th International Conference on Intelligent Systems, Metaheuristics and Swarm Intelligence",
    year: "2024",
    award: "Best Paper Award",
    link: "https://dl.acm.org/doi/10.1145/3665065.3665087",
  },
  {
    title: "A Pugnacious Comparative Study of Data Analysis Techniques for Wine Quality Prediction",
    authors: "DJ Garodia, A Gadad, A Vikram",
    venue: "IEEE I2CT 2024, 9th International Conference for Convergence in Technology",
    year: "2024",
    award: null,
    link: "https://ieeexplore.ieee.org/document/10543546",
  },
  {
    title: "Android Malware Detection: A Comprehensive Review",
    authors: "AVS Bhavan, S Golla, Y Poral, AS Paul, PB Honnavalli, S Supreetha",
    venue: "Research Advances in Network Technologies, Taylor & Francis (book chapter)",
    year: "2024",
    award: null,
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003433958-3/android-malware-detection-aaditya-vikram-saravana-bhavan-srujana-golla-yuktha-poral-alan-paul-prasad-honnavalli-supreetha",
  },
];

export const skills = [
  { group: "Languages", items: ["Go", "C / C++", "Python", "Java", "SQL", "JavaScript"] },
  { group: "Cloud & Systems", items: ["AWS", "AWS CDK", "Lambda", "EKS", "Kubernetes", "Docker", "Linux", "Microservices", "REST APIs"] },
  { group: "Data", items: ["Aurora MySQL", "PostgreSQL", "MongoDB", "PySpark", "AWS Athena", "Protocol Buffers"] },
  { group: "Machine Learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "Transformers", "Computer Vision"] },
];

export const education = [
  {
    school: "Carnegie Mellon University",
    mark: "CMU",
    accent: "#C41230",
    degree: "M.S. Computational Data Science (MCDS)",
    grade: "GPA 4.00 / 4.00",
    period: "Expected Dec 2026",
    place: "Pittsburgh, PA",
    courses: [
      "Introduction to Deep Learning (PhD)",
      "Introduction to Machine Learning (MS)",
      "Foundations of Computational Data Science",
      "Cloud Computing",
      "Multimodal Machine Learning",
    ],
  },
  {
    school: "PES University",
    logo: "/logos/pes.png",
    degree: "B.Tech. Computer Science and Engineering",
    grade: "GPA 9.42 / 10.00",
    period: "May 2024",
    place: "Bangalore, India",
    courses: ["Data Structures and Algorithms", "Computer Networks", "Data Analytics", "Big Data"],
  },
];

export const sections = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

// Scrolling strip under the hero.
export const marquee = [
  "Go", "PyTorch", "Kubernetes", "AWS Lambda", "PySpark", "Distributed Systems",
  "Aurora MySQL", "Transformers", "AWS CDK", "Python", "Amazon EKS", "C/C++",
  "Protocol Buffers", "Computer Vision", "PostgreSQL", "Docker", "TensorFlow", "Java",
];
