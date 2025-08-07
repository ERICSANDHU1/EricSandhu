export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building AI Voice-Based Learning Assistant",
    description: "Built a voice-interactive AI web app ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];export const projects = [
  {
    id: 1,
    title: "🧠 AI Voice-Based Learning Assistant",
    des: "Built a voice-interactive AI web app offering mock interviews, guided meditation, topic lectures, language skill practice, and Q&A preparation.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", ],
    link: "https://github.com/ERICSANDHU1/TALKWISE-AI",
    pinTitle: "TALKWISEAI",
  },
  {
    id: 2,
    title: "Voxera - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: [" /next.svg", "/tail.svg", "/ts.svg", "/stream.svg", ],
    link: "https://github.com/ERICSANDHU1/Voxera",
    pinTitle: "Voxera",
  },
  {
    id: 3,
    title: "Interactive Dashboard - Nextjs Application",
    des: "Responsive dashboard built with Next.js and JavaScript. Features intuitive UI components, Offers smooth navigation and interactive UI components.",
    img: "/p3.jpg",
    iconLists: [  " /next.svg" , "/tail.svg", "/ts.svg",],
    link: "https://github.com/ERICSANDHU1/Nextjs",
    pinTitle: "Dashboard",
  },
  {
    id: 4,
    title: "Animated Portfolio - 3D Website",
    des: "created the Professional Portfolio website, combining GSAP animations and Three.js 3D effects..",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ERICSANDHU1/THREE.JS",
    pinTitle: "3DPortfolio",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Eric was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner.",
    name: "Vanshika",
    title: "Batchmate",
  },
  {
    quote:
      "Working with Eric was a seamless and inspiring experience. His eye for detail, creative vision, and technical expertise made the entire process smooth and results-driven. Eric doesn't just build — he elevates. I'd collaborate with him again in a heartbeat",
    name: "Adrian",
    title: "Client",
  },
  {
    quote:
      "Eric's commitment to excellence is unmatched. He brought clarity, innovation, and a strong sense of ownership to our project from day one. Beyond being technically gifted, he's incredibly professional and collaborative — a rare combination",
    name: "Cyrus",
    title: "Friend",
  },
  {
    quote:
      "Partnering with Eric was one of the best decisions for our digital project. His thoughtful approach, fast execution, and deep understanding of modern web development exceeded all expectations. He truly treats every project like his own.",
    name: " Shubhi ",
    title: "Batchmate ",
  },
  // {
  //   quote:
  //     "Collaborating with Eric was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eric's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner.",
  //   name: "VANSHIKA",
  //   title: "BatchMate",
  // },
];

export const companies = [
  {
    id: 1,
    name: "Convex",
    img: "/convex.svg",
    nameImg: "/convexname.jpg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "HTML, CSS & JavaScript Foundations",
    desc: "Built personal projects to understand the core concepts of semantic HTML, responsive CSS, and vanilla JavaScript interactions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "MERN Stack Development",
    desc: "Created full-stack applications using MongoDB, Express.js, React.js, and Node.js to understand API development and CRUD operations.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Next.js & Framer Motion",
    desc: "Explored server-side rendering and dynamic routing in Next.js. Integrated Framer Motion to add smooth animations and transitions to the UI.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Creative Web with Three.js & GSAP",
    desc: "Developed interactive 3D experiences and scroll animations using Three.js and GSAP to build immersive portfolio and landing pages.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ERICSANDHU1",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/ERIC_FFX", // Replace with your Twitter handle
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/eric-sandhu-277b85307 ",
  },
];

