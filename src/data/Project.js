import { image } from "framer-motion/client";
import person2 from "../assets/person2.jpg";

const projects = [
  {
    id: 1,
    title: "ATM System",
    description: "A simple ATM system built using C that allows users to check balance, withdraw, and deposit cash.",
    tags: ["C", "ATM", "Console App"],
    image: person2,
    code: "https://github.com/Sarthak-Adk/ATM-using-C",
    category: "other"
  },
  {
    id: 2,
    title: "Learning App",
    description: "An educational platform built using React and Tailwind CSS to help beginners learn to code interactively.",
    tags: ["React", "Tailwind CSS", "Learning"],
    image: person2,
    code: "https://github.com/Sarthak-Adk/Learning-App",
    category: "web"
  },
  {
    id: 3,
    title: "CodeArena",
    description: "A MERN stack project for hosting and joining hackathons, featuring user authentication, submissions, and leaderboard.",
    tags: ["MERN", "Hackathon", "Web App"],
    code: "https://github.com/Prajon-Adhikari/Project",
    category: "web"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather application built using React and Tailwind CSS that fetches real-time weather data via API.",
    tags: ["Html", "JavaScript", "Tailwind CSS", "API"],
    code: "https://github.com/Sarthak-Adk/Weather-App-using-tailwindcss",
    category: "web"
  },
  {
    id: 5,
    title: "BMI Calculator",
    description: "A BMI calculator built using React that calculates and categorizes body mass index based on height and weight.",
    tags: ["React", "Health", "Calculator"],
    code: "https://github.com/Sarthak-Adk/BMI-Calculator",
    category: "web"
  },
  {
    id: 6,
    title: "Salon Management System",
    description: "A desktop application built in Visual Basic for managing salon bookings, staff, and customer records.",
    tags: ["Visual Basic", "Desktop App", "Management"],
    code: "https://github.com/ritikjoshi22/Salon-Management-System",
    category: "other"
  },
  {
    id: 7,
    title: "E-commerce Website",
    description: "A web application built using React and Node.js for buying and selling products online.",
    tags: ["React", "Node.js", "E-commerce"],
    image: person2,
    code: "https://github.com/ritikjoshi22/E-commerce-Website",
    category: "web"
  },
  {
    id: 8,
    title: "Accad",
    description: "A graphic design project showcasing visual branding and layout.",
    tags: ["Photoshop", "Illustrator", "Branding"],
    image: person2,
    code: "",
    category: "graphic"
  }
];

export default projects;
