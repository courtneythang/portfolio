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
      "Contributed to the development of agent facing and customer facing Life Insurance web applications for disability income",
      "Renewed legacy Life Insurance Java applications to modern web application frameworks",
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
  // {
  //   name: "WeatherPedia",
  //   description:
  //     "Web-based platform that allows users to access weather information for their location by entering it in the search field",
  //   tags: [
  //     { name: "Javascript", color: "blue-text-gradient" },
  //     { name: "HTML", color: "green-text-gradient" },
  //     { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
  //     { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
  //   ],
  //   image: weatherpedia,
  //   source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  // },
  // {
  //   name: "Terminal Like Portfolio Website",
  //   description:
  //     "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
  //   tags: [
  //     { name: "HTML", color: "blue-text-gradient" },
  //     { name: "css", color: "green-text-gradient" },
  //     { name: "Javascript", color: "pink-text-gradient" },
  //   ],
  //   image: termpw,
  //   source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  // },
  // {
  //   name: "Mental Health Fitness Tracker",
  //   description:
  //     "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
  //   tags: [
  //     { name: "Machine Learning", color: "blue-text-gradient" },
  //     { name: "Jupyter Notebook", color: "green-text-gradient" },
  //     { name: "Regression Algorithms", color: "pink-text-gradient" },
  //   ],
  //   image: mhft,
  //   source_code_link:
  //     "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  // },
  // {
  //   name: "PayloadMaster",
  //   description:
  //     "Tool to automate payload creation using the Metasploit framework",
  //   tags: [
  //     { name: "shell", color: "blue-text-gradient" },
  //   ],
  //   image: payloadmaster,
  //   source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  // },
  // {
  //   name: "CompileVortex",
  //   description:
  //     "Tool to automate payload creation using the Metasploit framework",
  //   tags: [
  //     { name: "Javascript", color: "blue-text-gradient" },
  //     { name: "CSS", color: "green-text-gradient" },
  //     { name: "HTML", color: "pink-text-gradient" },
  //   ],
  //   image: CompileVortex,
  //   source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  // },
  // {
  //   name: "Sketcher",
  //   description:
  //     "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
  //   tags: [
  //     { name: "OpenCV", color: "blue-text-gradient" },
  //     { name: "Matplotlib", color: "green-text-gradient" },
  //     { name: "Python", color: "pink-text-gradient" },
  //   ],
  //   image: sketcher,
  //   source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  // },
];
