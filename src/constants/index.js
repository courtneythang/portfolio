import {
  aologo,
  cpp,
  css,
  cypress,
  docker,
  git,
  groovy,
  gwclogo,
  html,
  java,
  javascript,
  jest,
  laravel,
  mysql,
  nodejs,
  openshift,
  php,
  python,
  reactjs,
  redux,
  sql,
  typescript,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

export const services = [
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "Groovy", icon: groovy },
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
  { title: "JavaScript", icon: javascript },
  { title: "TypeScript", icon: typescript },
  { title: "PHP", icon: php },
  { title: "React", icon: reactjs },
  { title: "Laravel", icon: laravel },
  { title: "Git", icon: git },
  { title: "Docker", icon: docker },
  { title: "OpenShift", icon: openshift },
  { title: "SQL", icon: sql },
  { title: "Node.js", icon: nodejs },
  { title: "Cypress", icon: cypress },
  { title: "Jest", icon: jest },
  { title: "Redux", icon: redux },
  { title: "MySQL", icon: mysql },
];

export const experiences = [
  {
    title: "Associate Software Developer 2",
    company_name: "Auto-Owners Insurance",
    icon: aologo,
    iconBg: "#ffffff",
    date: "August 2023 - Current",
    points: [
      "Modernized customer facing web application to React https://www.auto-owners.com",
      "Developed and integrated new API endpoints intended for native mobile apps and web apps to share for customer and policy retrieval",
      "Contributed to the development of agent facing and customer facing Life Insurance web applications for disability income",
      "Renewed legacy applications to modern web application frameworks such as React",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Auto-Owners Insurance",
    icon: aologo,
    iconBg: "#ffffff",
    date: "May 2023 - August 2023",
    points: [
      "Developed a mock banking application in Java that managed savings, checking, and loan accounts",
      "Constructed a mock insurance web application determining insurance costs and quotes",
      "Implemented a Java batch application that retreived insurance data through csv's then processed and converted that data to a readable receipt format",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Girls Who Code",
    icon: gwclogo,
    iconBg: "#ffffff",
    date: "June 2022 - August 2022",
    points: [
      "Instructed web development classes consisting of 50-65 high school students",
      "Developed lesson plans and projects in HTML, CSS, and JavaScript",
    ],
  },
];

export const projects = [
  {
    name: "Digibooth",
    description:
      "Web application inspired by a photobooth that captures images using a webcam and produces a photostrip",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    source_code_link: "https://github.com/courtneythang/digibooth",
  },
  {
    name: "Wordle-Infinite",
    description: "Wordle Clone developed in React with infinite words",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "WordsAPI", color: "yellow-text-gradient" },
    ],
    source_code_link: "https://github.com/courtneythang/wordle-infinite",
  },
];
