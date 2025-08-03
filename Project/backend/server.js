const express = require("express");
const fs = require("fs");

const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3333; // Will use port 3333 by default if no port is specified

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json());

const PERSONAL_DATA = {
  name: "Your Name",
  age: 20,
  city: "Your City",
  email: "your.email@example.com",
  phone: "+966 55 555 5555",
  major: "Your Major",
  university: "Your University",
  year: "Sophomore", // Freshman, Sophomore, Junior, Senior
  bio: "Write a brief bio about yourself here!",
  hobbies: ["hobby1", "hobby2", "hobby3"],
  skills: ["HTML", "CSS", "JavaScript", "Node.js"],
  projects: [
    {
      name: "Project 1",
      description: "Personal Portfolio Frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Project 2",
      description: "Personal Portfolio API",
      technologies: ["Node.js", "Express"],
    },
  ],
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "Your University",
    graduationYear: 2026,
    gpa: "3.8",
  },
  experience: [
    {
      title: "Intern Developer",
      company: "Tech Company",
      duration: "Summer 2024",
      description: "Worked on web development projects",
    },
  ],
};
