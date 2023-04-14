import {
  data,
  backend,
  fullstack,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  unitedNations,
  lokyata,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [{
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

const services = [{
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Cloud Engineer",
    icon: data,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack DevOps developer",
    icon: fullstack,
  },
];

const technologies = [{
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [{
    title: "Leader of Technical Interns",
    company_name: "United Nations (Design Lab)",
    icon: unitedNations,
    iconBg: "#383E56",
    date: "Feb 2018 - May 2018",
    points: [
      "Developed and implemented state-of-the-art machine learning models using Python to analyze large volumes of text data for various projects related to cybersecurity and natural language processing (NLP).",
      "Designed and built a text classification model using convolutional neural networks (CNN) and various NLP techniques, such as NLTK, Word2Vec, and TF-IDF, to classify text data with high accuracy and speed.",
      "Conducted thorough feature engineering and feature extraction to identify relevant features and optimize the performance of the model.",
      "Oversaw data cleansing efforts for cybersecurity strategy documents from over 75 countries, ensuring that the data was accurate, complete, and reliable for analysis purposes. Utilized various techniques, including natural language processing and data visualization, to analyze and clean the data efficiently.",
    ],
  },
  {
    title: "Cheif Data Analyst",
    company_name: "Lokyata",
    icon: lokyata,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led the data analysis efforts for the 1st national-scale fully automated lending platform in Madagascar, utilizing big data for lending without the need for credit history or income information.",
      "Monitored portfolio performance, performed ad-hoc analysis.",
      "Designed and managed data models, ETL processes, and data pipelines using Dataiku and Apache Airflow to manage more than 2 million Nano loan data on a daily basis. Ensured data quality.",
      "Conducted A/B testing for credit scoring ML models to evaluate the effectiveness of marketing strategies.",
      "Developed interactive dashboards in Tableau for multiple financial portfolios to enable customers to access real-time data.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // }
];

const testimonials = [{
    testimonial: ".",
    name: "a",
    designation: "a",
    company: "a",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
  // ,
  // {
  //   testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [{
    name: "Car Rent",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [{
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects
};