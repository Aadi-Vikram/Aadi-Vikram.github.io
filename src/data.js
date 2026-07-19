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
    line1: "Systems that scale.",
    line2: "Models that learn.",
  },

  now: "Wrapping up my SDE internship on Amazon RDS at AWS this August.",

  // Large opening line, then the supporting paragraph beneath it.
  lead: "I like the problems that only show up at scale.",

  intro:
    "At AWS I automate the certificate infrastructure behind Amazon RDS, the kind of work where one missed edge case blocks a region launch. At CMU I took a recommendation service from 200 to 5,000 sustained requests per second over a terabyte of data, and wrote a deep learning library from the autograd up so nothing about training stayed a black box. Before that: telemetry middleware at Cisco serving 10K+ customers, and payloads 40% smaller at Zscaler. I graduate this December and I am looking for a role where systems work and machine learning meet.",

  // Fills the panel under the hero chart. Recruiters scan this first.
  glance: [
    { k: "Graduating", v: "December 2026" },
    { k: "Available", v: "January 2027" },
    { k: "Based", v: "Pittsburgh, open to relocate" },
    { k: "Focus", v: "Backend, distributed systems, ML infrastructure" },
  ],

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
      "Extended the RDS public key infrastructure so new AWS regions can launch with modern certificate algorithms on day one.",
    bullets: [
      "Expanded launch-time certificate support from 1 to 3 algorithms across 3 upcoming AWS regions by extending RDS PKI automation to RSA-4096 and ECC-384.",
      "Cut regional certificate publication from weeks to days with 2 AWS Lambda functions plus AWS CDK and IAM infrastructure that automate a multi-step public trust-store workflow.",
      "Automated internal trust-store onboarding for new regions: secure network connectivity, retrieval of newly issued certificates, and generated code reviews for certificate repository updates.",
    ],
    stack: ["Java", "AWS Lambda", "AWS CDK", "IAM", "PKI"],
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
      "Owned telemetry middleware for a network management platform used by enterprise customers worldwide.",
    bullets: [
      "Led development of a Go-based telemetry middleware serving 10K+ customers, validating pipelines through AWS Athena.",
      "Built Webex bots in Node.js for real-time threshold and system-metric alerts, reducing mean time to resolution by 40%.",
      "Improved platform reliability by 35% by resolving 50+ issues and standardizing error handling across 20+ microservices.",
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
    period: "Jun 2023 – Aug 2023 · Feb 2024 – Aug 2024",
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
    headline: "A deep learning library written from scratch",
    summary:
      "PyTorch-style autograd, forward and backward propagation, and a model zoo built up from NumPy primitives.",
    detail:
      "Implemented a PyTorch-like deep learning library from first principles: forward and backward propagation, autograd-style training loops, optimizers, and loss functions. On top of the core, built and validated MLPs, CNNs, RNNs including GRU and LSTM cells, and Transformers, each checked against reference gradients. The project made every abstraction the framework normally hides explicit.",
    stack: ["Python", "NumPy", "Autograd", "CNNs", "Transformers"],
    metrics: [
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
      "A Tiramisu generator and PatchGAN discriminator that removes wavelength-dependent haze without estimating transmission maps.",
    detail:
      "Existing dehazing methods assume RGB imagery and break down on multispectral data, where haze behaves differently in each band. This framework decomposes channels and processes each band individually, uses a modified Tiramisu generator with dense connectivity and skip connections to keep both fine texture and semantic structure, and adds a PatchGAN discriminator to preserve local detail. Trained with adversarial, L1, and perceptual losses, it beat state-of-the-art baselines on the SHIA dataset in both PSNR and SSIM, which matters for agriculture, environmental monitoring, and remote sensing.",
    stack: ["TensorFlow", "Python", "GANs", "SHIA dataset"],
    metrics: [
      { k: "🏆", v: "Best Paper, ISMSI 2024" },
      { k: "SOTA", v: "PSNR & SSIM on SHIA" },
    ],
    link: "https://dl.acm.org/doi/10.1145/3665065.3665087",
    linkLabel: "Read the paper",
  },
  {
    name: "Yet Another Kafka",
    tag: "Distributed Systems",
    org: "PES University",
    period: "Nov 2022 – Jan 2023",
    img: "/kafka.png",
    headline: "A message broker built on raw sockets",
    summary:
      "Producer–consumer messaging with multi-broker replication and ZooKeeper-backed recovery.",
    detail:
      "Built a Kafka-like distributed messaging system from socket programming up: a producer–consumer architecture with JSON serialization and topic management. Data is replicated across multiple brokers for fault tolerance, and ZooKeeper handles leader election, synchronization, and metadata so the cluster recovers cleanly when a broker drops. Clients subscribe to topics and keep receiving through failover.",
    stack: ["Python", "Sockets", "ZooKeeper", "Replication"],
    metrics: [
      { k: "N-broker", v: "replication" },
      { k: "Auto", v: "failover recovery" },
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
