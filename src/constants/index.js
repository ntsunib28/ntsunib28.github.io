import {
    arunikatms,
    schedulemate,
    solarsystem,
    inkwell,
    mnt,
    lecturna,
    buildmaster,
    furnids,
    mentaltracker,
    candiborobudur,
    axforasset,
    surfle,
    dungeonhunter
} from '../assets/project-images';

import {
    androidstudio,
    binus,
    bootstrap,
    css,
    evotech,
    ara,
    figma,
    firebase,
    git,
    github,
    githubwhite,
    html,
    java,
    javascript,
    kosayu,
    laravel,
    linkedin,
    motion,
    mysql,
    react,
    tailwindcss,
    threejs,
    photoshop,
    premierepro,
    outlook,
    gmail,
    behance,
    behancedark,
    unity,
    nodejs,
    postgresql,
    prisma,
    postman,
    outsystems,
    lucide
} from '../assets/icons';

export const skills = [
    {
        imageUrl: html,
        name: 'HTML',
        timer: 1,
    },
    {
        imageUrl: css,
        name: 'CSS',
        timer: 2,
    },
    {
        imageUrl: tailwindcss,
        name: 'Tailwind CSS',
        timer: 3,
    },
    {
        imageUrl: javascript,
        name: 'Javascript',
        timer: 4,
    },
    {
        imageUrl: react,
        name: 'React',
        timer: 5,
    },
    {
        imageUrl: nodejs,
        name: 'Node JS',
        timer: 5,
    },
    {
        imageUrl: postgresql,
        name: 'PostgreSQL',
        timer: 6,
    },
    {
        imageUrl: bootstrap,
        name: 'Bootstrap',
        timer: 8,
    },
    {
        imageUrl: motion,
        name: 'Motion',
        timer: 9,
    },
    {
        imageUrl: threejs,
        name: 'Three JS',
        timer: 10,
    },
    {
        imageUrl: prisma,
        name: 'Prisma',
        timer: 11,
    },
    {
        imageUrl: mysql,
        name: 'MySQL',
        timer: 12,
    },
    {
        imageUrl: firebase,
        name: 'Firebase',
        timer: 13,
    },
    {
        imageUrl: git,
        name: 'Git',
        timer: 14,
    },
    {
        imageUrl: outsystems,
        name: 'Outsystems',
        timer: 15,
    },
    {
        imageUrl: postman,
        name: 'Postman',
        timer: 16,
    },
    {
        imageUrl: figma,
        name: 'Figma',
        timer: 17,
    },
    {
        imageUrl: photoshop,
        name: 'Photoshop',
        timer: 18,
    },
    {
        imageUrl: premierepro,
        name: 'Premiere Pro',
        timer: 19,
    },
    {
        imageUrl: unity,
        name: 'Unity3D',
        timer: 20,
    },
    {
        imageUrl: laravel,
        name: 'Laravel',
        timer: 21,
    },
    {
        imageUrl: lucide,
        name: 'Unity3D',
        timer: 22,
    },
    {
        imageUrl: java,
        name: 'Java',
        timer: 23,
    },
    {
        imageUrl: androidstudio,
        name: 'Android Studio',
        timer: 24,
    },
];

export const experience = [
    {
        name: 'PT. Arunika Rejeki Abadi',
        iconUrl: ara,
        iconBg: '#dfdfdf',
        jobTitle: 'Full-Stack Developer | Custom Logistics & Shipment Tracking System | Independent Project (Family Business)',
        points: [
            {
                title: 'Automated Data Ingestion',
                desc: 'Developed a high-speed data pipeline using <b>Node.js</b> to parse bulk Excel manifests, automating the creation of Cargo, Shipment, and Container entities.'
            },
            {
                title: 'Proactive Monitoring System',
                desc: 'Engineered background workers using <b>Node-Cron</b> and <b>Resend API</b> to dispatch automated daily reports, ensuring real-time visibility on overdue container returns.'
            },
            {
                title: 'Financial & Asset Management',
                desc: 'Built an integrated module for automated <b>Invoicing</b> with tax logic and <b>Asset Tracking</b> for fleet maintenance, costs, and driver assignments.'
            },
            {
                title: 'Relational Database Design',
                desc: 'Architected a complex schema using <b>Prisma ORM</b> and <b>PostgreSQL</b>, optimizing high-volume queries for shipping lines and logistics lifecycle stages.'
            },
            {
                title: 'Enterprise-Grade Security',
                desc: 'Implemented robust security layers including <b>JWT</b>, <b>reCAPTCHA v3</b>, and <b>Rate Limiting</b> to protect sensitive operational and financial data.'
            },
        ],
        date: 'Feb 2026 - April 2026',
    },
    {
        name: 'PT. Evotech Distribusi',
        iconUrl: evotech,
        iconBg: '#dfdfdf',
        jobTitle: 'Intern Web and Mobile Outsystems Developer',
        points: [
            {
                title: 'Core Business Systems',
                desc: 'Developed enterprise-grade modules for <b>Sales & Purchase Orders</b>, including <b>Excel-integrated scheduling</b> and real-time <b>distributor-sales chat</b>.'
            },
            {
                title: 'API Ecosystem',
                desc: 'Successfully integrated third-party services including <b>BRI QRIS (Payments)</b>, <b>WhatsApp Business</b>, <b>Google Maps</b>, and <b>Accurate Accounting</b>.'
            },
            {
                title: 'Performance Optimization',
                desc: 'Improved system reliability using <b>aggregate tuning</b>, <b>debounce techniques</b>, and <b>background timers</b> to handle high-concurrency processes.'
            },
            {
                title: 'Lifecycle Management',
                desc: 'Managed full deployment cycles from <b>Dev to Production</b>, including <b>large-scale data migrations</b> and <b>production troubleshooting</b>.'
            },
        ],
        date: 'Feb 2024 - Feb 2025',
    },
]

export const educations = [
    {
        name: 'Bina Nusantara University',
        iconUrl: binus,
        iconBg: '#dfdfdf',
        description: 'Graduated within 3.5 years in Computer Science in university where I learned many things such as algorithm, data structures, database, human computer interaction, and many more. In the 4th-semester I pursued interactive multimedia as my streaming course. In my streaming courses, I learned many things to consider when applying media to an application.',
        date: '2021 - 2025',
        point: '3.75 GPA',
    },
    {
        name: 'SMAK Kolese Santo Yusup',
        iconUrl: kosayu,
        iconBg: '#dfdfdf',
        description: 'I studied Natural Science(MIPA) as a high school student in SMAK Kolese Santo Yusup, I learned many things while in high school. One of them was creating a web using HTML, CSS, PHP and MySQL as a final project.',
        date: '2018 - 2021',
        point: 'Graduated with 91.67/100',
    },
];

export const socialLinks = [
    {
        name: 'Outlook',
        username: 'nicholas.theodore@binus.ac.id',
        iconUrl: outlook,
        link: 'mailto:nicholas.theodore@binus.ac.id',
        timer: 1
    },
    {
        name: 'Gmail',
        username: 'nicholastheodore700@gmail.com',
        iconUrl: gmail,
        link: 'mailto:nicholastheodore700@gmail.com',
        timer: 2
    },
    {
        name: 'Behance',
        username: 'www.behance.net/nicholastheodore-nt',
        iconUrl: behance,
        link: 'https://www.behance.net/nicholastheodore-nt',
        timer: 3
    },
    {
        name: 'GitHub',
        username: 'https://github.com/ntsunib28',
        iconUrl: githubwhite,
        link: 'https://github.com/ntsunib28',
        timer: 4
    },
    {
        name: 'LinkedIn',
        username: 'linkedin.com/in/nicholas-theodore-nt',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nicholas-theodore-nt/',
        timer: 5
    }
];

export const projects = [
    {
        timer: 1,
        name: 'Arunika TMS',
        imageUrl: arunikatms,
        type: 'Web application (Mini-ERP)',
        tools: 'PostgreSQL, Node & Express, React, Prisma, Railway, Resend API, Google Maps API',
        contribution: 'Full Stack Developer',
        description: 'A comprehensive Transportation Management System designed to digitize logistics operations. Features include Excel data processing, container tracking, invoicing, and proactive daily reporting via Resend API.',
        design: '',
        source: '',
        link: '/',
        icon: linkedin
    },
    {
        timer: 2,
        name: 'Schedule Mate',
        imageUrl: schedulemate,
        type: 'Mobile app',
        tools: 'Java, Firebase, Android Studio, Figma',
        contribution: 'Full Stack Developer',
        description: 'Group Project - Schedule Mate is a tool that connects to the student database and makes notifications and alarms to help the students be on time for their academic purposes',
        design: 'https://www.behance.net/gallery/180748569/Schedule-Mate',
        source: 'https://github.com/ntsunib28/Schedule-Mate',
        link: 'https://github.com/ntsunib28/Schedule-Mate',
        icon: github
    },
    {
        timer: 3,
        name: 'Inkwell and Quill Bookstore',
        imageUrl: inkwell,
        type: 'Web App',
        tools: 'HTML, Bootstrap, Javascript, PHP, Blade, MySQL, Laravel',
        contribution: 'Backend Developer',
        description: 'Group Project - A bookstore web application for my web programming final project which uses Laravel. This app applies CRUD, Middleware, Authentication, etc',
        design: '',
        source: 'https://github.com/zenthlol/WebProgFinalProject.git',
        link: 'https://github.com/zenthlol/WebProgFinalProject.git',
        icon: github
    },
    {
        timer: 1,
        name: 'Solar System',
        imageUrl: solarsystem,
        type: 'Threejs Web App',
        tools: 'Threejs, HTML, Javascript',
        contribution: 'Front End Developer',
        description: 'Group Project - Solar System project for my Computer Graphics final project using ThreeJS. In this app you can see how our solar system work and get info about our planet if you click them',
        design: '',
        source: 'https://github.com/ntsunib28/Solar-System.git',
        link: 'https://github.com/ntsunib28/Solar-System.git',
        icon: github
    },
    {
        timer: 2,
        name: 'M&T',
        imageUrl: mnt,
        type: 'Static Web App',
        tools: 'HTML, CSS, Javascript, Figma',
        contribution: 'Front End Developer',
        description: 'Group Project - Multinational & Trends(M&T) is a company that sells and displays fashionable clothes for men. In this project, me and my partner create a static website to promote the said company',
        design: 'https://www.behance.net/gallery/180832725/M-T-Web-Design?',
        source: 'https://github.com/ntsunib28/MnT.git',
        link: 'https://github.com/ntsunib28/MnT.git',
        icon: github
    },
    {
        timer: 3,
        name: 'Build Master',
        imageUrl: buildmaster,
        type: 'Prototype',
        tools: 'Figma',
        contribution: 'Designer',
        description: 'Group Project - Me and my team made an AI Genshin Impact Building Assistant design. Fill in the genshin impact character and inventory, then the app will return a build recommendation',
        design: 'https://www.behance.net/gallery/171130559/Build-Master-Genshin-Impact-AI-Builder',
        source: '',
        link: 'https://www.behance.net/gallery/171130559/Build-Master-Genshin-Impact-AI-Builder',
        icon: behancedark
    },
    {
        timer: 1,
        name: 'Candi Borobudur Website',
        imageUrl: candiborobudur,
        type: 'Prototype',
        tools: 'Figma',
        contribution: 'Designer',
        description: 'Personal Project - Candi Borobudur web design that I made to learn more about UI/UX and how to design a website',
        design: 'https://www.behance.net/gallery/181971345/Candi-Borobudur-Web-Design',
        source: '',
        link: 'https://www.behance.net/gallery/181971345/Candi-Borobudur-Web-Design',
        icon: behancedark
    },
    {
        timer: 2,
        name: 'Furnids',
        imageUrl: furnids,
        type: 'Static Web App',
        tools: 'HTML, CSS, Figma',
        contribution: 'Front End Developer',
        description: 'Individual Project - A static website for a furniture selling company for my assignment that I design using figma and then code using HTML and CSS',
        design: 'https://www.behance.net/gallery/180893493/Furnids?',
        source: 'https://github.com/ntsunib28/Furnids.git',
        link: 'https://github.com/ntsunib28/Furnids.git',
        icon: github
    },
    {
        timer: 3,
        name: 'Mental Tracker',
        imageUrl: mentaltracker,
        type: 'Prototype',
        tools: 'Figma',
        contribution: 'Designer',
        description: 'Group Project - An app that utilizes AI to determine its user’s mental health by collecting the user’s physical data',
        design: 'https://www.behance.net/gallery/180797697/Mental-Tracker-AI-Based-Mental-Health-Tracker',
        source: '',
        link: 'https://www.behance.net/gallery/180797697/Mental-Tracker-AI-Based-Mental-Health-Tracker',
        icon: behancedark
    },
    {
        timer: 1,
        name: 'Lecturna Landing Page',
        imageUrl: lecturna,
        type: 'Landing Page',
        tools: 'HTML, CSS, Figma',
        contribution: 'Front End Developer',
        description: 'Group Project - This project require me and my team to create a landing page for Lecturna. Lecturna is a coding course website for children ages 7-17',
        design: 'https://www.behance.net/gallery/180808675/Lecturna-Landing-Page',
        source: 'https://github.com/ntsunib28/Lecturna-LandingPage.git',
        link: 'https://github.com/ntsunib28/Lecturna-LandingPage.git',
        icon: github
    },
    {
        timer: 2,
        name: 'AXForAsset',
        imageUrl: axforasset,
        type: 'Static Mobile App',
        tools: 'Java, Android Studio, Figma',
        contribution: 'Front End Developer',
        description: 'Group Project - AXForAsset is a marketplace for game assets where the user needs to log in before they are able to buy game assets',
        design: 'https://www.behance.net/gallery/181506887/AxForAsset',
        source: 'https://github.com/ntsunib28/AXForAsset.git',
        link: 'https://github.com/ntsunib28/AXForAsset.git',
        icon: github
    },
    {
        timer: 3,
        name: 'Dungeon Hunter',
        imageUrl: dungeonhunter,
        type: 'Game Design',
        tools: 'Gitbook, Unity3D',
        contribution: 'Game Designer',
        description: 'Group Project - A roguelike game which the player explore the dungeon and defeat mythical creatures. In this project, we only created the map of the game',
        design: '',
        source: 'https://kelompoks-organization.gitbook.io/dungeon-hunter/',
        link: 'https://kelompoks-organization.gitbook.io/dungeon-hunter/',
        icon: github
    },
    {
        timer: 1,
        name: 'Surfle',
        imageUrl: surfle,
        type: 'App Prototype',
        tools: 'Figma',
        contribution: 'Designer',
        description: 'Group Project - A reliable search engine for surfing the web. An assignment which me and my team created a search engine prototype design using figma',
        design: 'https://www.behance.net/gallery/164011581/Surfle-Search-Engine-Mobile-App-Design',
        source: '',
        link: 'https://www.behance.net/gallery/164011581/Surfle-Search-Engine-Mobile-App-Design',
        icon: behancedark
    },
];