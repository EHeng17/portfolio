import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  cplusplus,
  csharp,
  git,
  figma,
  python,
  jupyter,
  tensorflow,
  data,

  // Company Icons
  fusionex,
  apu,
  whenso,

  // Project Pictures
  exledgeHome,
  exledge,
  portfolioHomePage,
  airportSimulationMain,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: data,
  },
];

// Not used at the moment
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
  icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "cplusplus",
    icon: cplusplus,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python
  },
  {
    name: "jupyter",
    icon: jupyter
  },
  {
    name: "tensorflow",
    icon: tensorflow
  }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Whenso Labs",
    icon: whenso,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    technologies: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "angular.js",
        color: "pink-text-gradient",
      },
      {
        name: "javaScript",
        color: "yellow-text-gradient",
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Fusionex Group",
    icon: fusionex,
    iconBg: "#E6DEDD",
    date: "August 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    technologies: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: ".net",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "yellow-text-gradient",
      },
    ],
  },
  {
    title: "CTI Research And Development Assistant",
    company_name: "Asia Pacific University",
    icon: apu,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    technologies: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "angular.js",
        color: "pink-text-gradient",
      },
      {
        name: "power bi",
        color: "yellow-text-gradient",
      },
    ],
  },
];

const projects = [
  {
    name: "Ex Ledge",
    description:
      "A responsive web application inspired by Stack Overflow and Reddit that allows students to exchange knowledge by asking questions or answering a wide range of topics",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
      {
        name: "javaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: exledgeHome,
    source_code_link: "https://github.com/JacksonTai/ex-ledge",
  },
  {
    name: "Portfolio",
    description:
      "A responsive personal portfolio to showcase who I am, my interests, projects, achievements, and my professional contacts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: portfolioHomePage,
    source_code_link: "/",
  },
  {
    name: "Airport Simulation (CLI)",
    description:
      "A multithreaded airport simulation in Java. This project utilizes concurrency concepts such as threads, locks, semaphores, atomic variables, and queues",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      }
    ],
    image: airportSimulationMain,
    source_code_link: "https://github.com/EHeng17/java-concurrent-airport",
  },
];

const contactMethods = [
  {
    name: "faGithub",
    link: "https://github.com/EHeng17",
    type: "link"
  },
  {
    name: "faLinkedin",
    link: "https://www.linkedin.com/in/chuaeheng/",
    type: "link"
  },
  {
    name: "faEnvelope",
    link: "3eheng2988@gmail.com",
    type: "email"
  }
]

export { navLinks, services, technologies, experiences, projects, contactMethods };