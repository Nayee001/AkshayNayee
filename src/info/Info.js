import self from "../img/ak1.png";
import melolem from "../img/melolem.png";

export let colors = [
  "rgb(0,255,164)",
  "rgb(166,104,255)",
  "rgb(255,153,51)",
  "rgb(19,136,8)",
];

export const info = {
  firstName: "Akshaykumar",
  lastName: "Nayee",
  initials: "AK",
  position: [
    "Full-Stack Developer",
    "Software Engineer",
    "IoT & Cloud Enthusiast",
  ],
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🌍",
      text: "Based in the U.S.",
    },
    {
      emoji: "💼",
      text: "Graduate Research Assistant at Gannon University",
    },
    {
      emoji: "🎓",
      text: "Master’s in Software Engineering",
    },
    {
      emoji: "☁️",
      text: "AWS Certified Cloud Practitioner",
    },
    {
      emoji: "📧",
      text: "akshaynayee1@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/aakkii01",
      icon: "fa fa-instagram",
      label: "Instagram",
    },
    {
      link: "https://github.com/Nayee001",
      icon: "fa fa-github",
      label: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/akshaynayee1/",
      icon: "fa fa-linkedin",
      label: "LinkedIn",
    },
  ],
  bio: "Hi, I'm Akshaykumar Nayee! A passionate Full-Stack Developer and Graduate Research Assistant specializing in Software Engineering at Gannon University. With over four years of experience, I thrive on building scalable web applications, IoT platforms, and machine learning-driven solutions. My expertise spans full-stack development, cloud computing, and real-time data processing. Let's innovate together!",
  skills: {
    proficientWith: [
      "Python",
      "PHP",
      "JavaScript",
      "React.js",
      "Next.js",
      "Laravel",
      "Flask",
      "Django",
      "Raspberry Pi",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Linux",
      "Docker",
      "Bootstrap",
      "HTML5",
      "CSS",
    ],
    exposedTo: ["Node.js", "Redis", "Kubernetes", "GraphQL"],
  },
  portfolio: [
    {
      title: "Melolem",
      live: "https://www.melolem.com/",
      image: melolem,
    },
  ],
};
