import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import spring from "./Spring.png";
import react from "./React.png";
import angular from "./Angular.png";
import nextjs from "./Next.js.png";
import nodejs from "./Node.js.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import user_image from "./user-image.jpg";
import work_1 from "./work-1.png";
import work_2 from "./work-2.png";
import work_3 from "./work-3.png";
import work_4 from "./work-4.png";
import work_5 from "./work-5.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  spring,
  react,
  angular,
  nextjs,
  nodejs,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const projectsData = [
  {
    id: 1,
    title: "Patient Management System",
    description:
      "Built a production-ready Patient Management microservices system using Java and Spring Boot, with event-driven communication (Kafka), gRPC, containerized deployments, and AWS infrastructure as code. The project demonstrates real enterprise patterns: API gateway, authentication service, observability (Prometheus/Grafana), resilience, caching, and end-to-end deployment automation.",
    bgImage: "/work-1.png",
    image: work_1,
    tools: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "gRPC / Protobuf",
      "Apache Kafka",
      "Docker",
      "Redis",
      "Resilience4j",
      "Prometheus",
      "Grafana",
      "JUnit / RestAssured",
      "Maven/Gradle",
    ],
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Food Ordering",
    description:
      "Developed a full-stack food ordering application using React.js, Node.js, Express, and MongoDB with Auth0 authentication. Implemented restaurant management, search with filters, cart and checkout system integrated with Stripe, and order tracking for customers and restaurants. Deployed both backend and frontend to Render, ensuring a responsive, secure, and scalable solution.",
    bgImage: "/work-2.png",
    image: work_2,
    tools: ["NodeJS", "React JS", "MongoDB", "AuthO"],
    github: "https://github.com",
  },
  {
    id: 3,
    title: "PowerPoint Lyrics Generator",
    description:
      "No making each slide, Just copy and generate your ppt for your church in one click!",
    bgImage: "/work-3.png",
    image: work_3,
    tools: ["React JS", "Shadcn"],
    github: "https://github.com/prem-kumart/ppt-generator",
  },
  {
    id: 4,
    title: "Quiz App",
    description: "Simple Quiz App. Just upload your json file.",
    bgImage: "/work-4.png",
    image: work_4,
    tools: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/prem-kumart/Quiz-App-c14",
  },
  {
    id: 5,
    title: "REST Countries ",
    description:
      "A React-based web application that fetches and displays country data using the REST Countries API. The app allows users to explore detailed information about countries worldwide, including population, region, capital, languages, and currencies. It also features a search, filter, and dark mode toggle for a smooth user experience.",
    bgImage: "/work-5.png",
    image: work_5,
    tools: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "REST Countries API",
      "Context API / Redux",
    ],
    github: "https://github.com/prem-kumart/ppt-generator",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Java,Python,JavaScript",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Master's in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.spring,
  assets.nodejs,
  assets.react,
  assets.nextjs,
  assets.angular,
  assets.mongodb,
  assets.figma,
  assets.git,
];
