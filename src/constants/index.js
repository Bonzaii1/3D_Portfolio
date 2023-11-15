import { selenelogo, umlogo } from "../assets/images";
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];