import { selenelogo, umlogo, GOL } from "../assets/images";
import {
    car,
    contact,
    python,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    java,
    nextjs,
    nodejs,
    pricewise,
    react,
    flask,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    sqlLogo
} from "../assets/icons";

import article from "../assets/article.pdf"

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: sqlLogo,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Sql Developer Intern",
        company_name: "Selene Finance",
        icon: selenelogo,
        iconBg: "#00A583",
        date: "May 2022 - August 2022",
        points: [
            "Crafting complex SQL queries , and meticulously refining and enhancing the performance of established stored procedures using the powerful environment of Microsoft SQL Server Management Studio."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "University of Montemorelos",
        icon: umlogo,
        iconBg: "#9375ba",
        date: "August 2022 - Present",
        points: [
            "Spearheaded a remarkable initiative to internationalize a bespoke Student Management System, seamlessly deploying it in remote regions of Fiji and Papua New Guinea, optimizing educational processes on a global scale.",
            "Orchestrated agile development methodologies and employed an advanced toolset, including the Sprint Tools Suite, Oracle Databases, Postgres Databases, and Apache Tomcat, all integrated with Java, to ensure the system's smooth operation",
            "Demonstrated a profound mastery of various data structures, from standard arrays to advanced data structures like HashMaps, Lists, and Sets, skillfully handling extensive datasets and university-related information",
            "Collaborated within a dynamic, cross-cultural team, leveraging my unique bilingual skills in English and Spanish to bridge communication gaps, fostered collaboration, and facilitated effective teamwork",
            " Continuously enhancing the efficiency and functionality of the University of Montemorelos' Student Management System, ensuring it remains at the forefront of technological advancements and educational excellence."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Bonzaii1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'linkedin.com/in/matthew-herrera-417b07272/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-black',
        name: 'Threads Clone',
        description: 'Created a working clone of Threads! Built using NextJs 13 integrated with Mongo!',
        link: 'https://threads-kappa-seven.vercel.app',
        inSite: false
    },
    {
        iconUrl: GOL,
        theme: 'btn-back-yellow',
        name: 'Conway\'s Game Of Life',
        description: 'Worked on the famous simulation exercise known as Conway\s Game of Life using Python and then translated to JavaScript to showcase on my portfolio! The 4 unique rules made this a fun challenge as the third rule in particular made the algorithm interesting to work with!',
        link: '/GOL',
        inSite: true
    },
    {
        iconUrl: umlogo,
        theme: 'btn-back-purple',
        name: 'Perimiter Security University Project',
        description: 'Worked in a five-member team in a cutting-edge project utilizing Raspberry Pi to connect various sensors for real-time environmental monitoring in Data Centers and Server Rooms. Our work contributed to a forthcoming scientific publication and involved seamless data transmission using Mosquitto and OneSignal, ultimately leading to the creation of an innovative Alert Style Mobile Application for enhanced data center security',
        link: article,
        inSite: false
    },

];