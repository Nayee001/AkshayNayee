import self from "../img/ak.png";
import melolem from "../img/melolem.png";


export let colors = [
  "rgb(0,255,164)",
  "rgb(166,104,255)",
  "rgb(255,153,51)",
  "rgb(19,136,8)",
];

export const info = {
  firstName: "Akshay",
  lastName: "Nayee",
  initials: "AK",
  position: [
    "Full-Stack Developer",
    "Software Engineer",
    "Creative Technologist",
  ],
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "Chaai ❤️",
    },
    {
      emoji: "🌎",
      text: "Located in US",
    },
    {
      emoji: "💼",
      text: "Graduate Assistant at Gannon University",
    },
    {
      emoji: "👨🏻‍🎓",
      text: "Student - Masters in Software Engineering",
    },
    {
      emoji: "📧",
      text: "akshaynayee1@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/Nayee001/Nayee001",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/akshaynayee1/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Greetings! I'm Akshaykumar Nayee, a Graduate Research Assistant at Gannon University. I'm currently in my second semester of studying Computer and Information Science, specializing in Software Engineering. With more than three years of experience, I'm enthusiastic about full-stack development and Machine Learning.",
  skills: {
    proficientWith: [
      "Python",
      "PHP",
      "Django",
      "Raspberry Pi",
      "Laravel",
      "Flask",
      "Cake-Php",
      "MySQL",
      "MongoDB",
      "Github",
      "Linux",
      "Bootstrap",
      "Html5",
      "CSS",
    ],
    exposedTo: ["Node Js", "React Js", "Docker", "Redis"],
  },
  portfolio: [
    {
      title: "Melolem",
      live: "https://www.melolem.com/",
      image: melolem,
    },
  ],
};
