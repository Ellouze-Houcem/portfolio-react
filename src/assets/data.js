import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaParagraph
} from 'react-icons/fa';
import { FiFileText} from 'react-icons/fi';

import Work1 from '../assets/rapido.png';
import Work2 from '../assets/chiff.png';
import Work3 from '../assets/compte-est-bon.jpg';
import Work4 from '../assets/chess-gam.png';
import Work5 from '../assets/portfolio11.png';
import Work6 from '../assets/DashboardPage.jpg';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: 'portfolio-react',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ellouze',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Mohamed Houcem',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Sfax',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+21695596538',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mohamedhoucem.ellouze@ensi-uma.tn',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: '<a target="_blank" href="https://www.linkedin.com/in/ellouze-mohamed-houcem/" >ellouze-mohamed-houcem</a>',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Arabic, French, English,Spanish'
  },
];

export const stats = [
  {
    id: 1,
    no: '...',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '5',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '...',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '...',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 0,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Active member of the ENSI Robotics Association <span> ARE </span>',
    desc: 'Realization of projects, organization of RoboCup events',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Active member of Positive and Sociable Citizens <span> CPS </span>',
    desc: 'Charity club',
  },

  
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2022',
    title: 'Active member in the Microsoft ENSI Club: <span> EMC </span>',
    desc: 'realization of development projects',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - PRESENT',
    title: "Research master's degree in Smart Systems <span> National School of Computer Sciences </span>",
    desc: 'ENSI, Manouba, Tunisia',
  },
  
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021 - PRESENT',
    title: "Engineering computer Science <span> National School of Computer Sciences </span>",
    desc: 'ENSI, Manouba, Tunisia',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2021',
    title: 'Preparatory cycle <span> Preparatory Institute for Engineering Studies </span>',
    desc: 'MP, IPEIS, Sfax, Tunisia',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2020',
    title: 'Preparatory cycle <span> Preparatory Institute for Engineering Studies </span>',
    desc: 'MP, IPEIB, Bizerte, Tunisia',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Bachelor Degree <span> High School March 20, 1956 </span>',
    desc: 'Mathematics, Sfax, Tunisia',
  },
];


export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '65',
  },


  {
    id: 8,
    title: 'React',
    percentage: '60',
  },
  
  {
    id: 4,
    title: 'Php',
    percentage: '40',
  },

  {
    id: 5,
    title: 'Node.JS',
    percentage: '40',
  },

  {
    id: 6,
    title: 'Python',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Java',
    percentage: '70',
  },

  {
    id: 9,
    title: 'PL/SQL',
    percentage: '80',
  },

  {
    id: 10,
    title: 'React Native',
    percentage: '60',
  },

  {
    id: 11,
    title: 'PostgreSQL',
    percentage: '50',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work6,
    title: 'Notify',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Application Mobile',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React native, Bootstrap, Javascript, NodeJS, Postgresql, Firebase',
      },
      {
        icon: <FaParagraph />,
        title: 'Details : ',
        desc: 'It is a mobile application dedicated to alert management. This application continuously monitors generated maintenance tickets and sends instant notifications to relevant users to enhance responsiveness.',
      },
    ],
  },
  {
    id: 2,
    img: Work1,
    title: 'Rápido',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Application Mobile',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flutter - CV2 - SQLite - ESP32-Cam',
      },
      {
        icon: <FaParagraph />,
        title: 'Details : ',
        desc: 'The app enables customers to shop faster and more conveniently, while providing valuable data to retailers to improve the shopping experience for customers',
      },
    ],
  },

  {
    id: 6,
    img: Work5,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FaParagraph />,
        title: 'Details : ',
        desc: 'This portfolio website is a captivating and interactive online showcase that showcases my work, skills and professional accomplishments, providing visitors with a comprehensive overview of my expertise and creative style.',
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: 'File Encryption Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Application Desktop',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python - AES - RSA - Tkinter - OpenSSL',
      },
      {
        icon: <FaParagraph />,
        title: 'Details : ',
        desc: 'An application that measures the execution time of several encryption algorithms (AES, RSA, DES, etc.). The results will be reported in a Dashboard.',
      },
    ],
  },

  {
    id: 4,
    img: Work3,
    title: 'Le Compte Est Bon',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML - CSS - JavaScript ',
      },
      {
        icon: <FaParagraph />,
        title: 'Details : ',
        desc: 'Le Compte Est Bon is a mathematical game where players must use basic operations to reach a target number with a set of six different numbers.',
      },
    ],
  },

  {
    id: 5,
    img: Work4,
    title: 'Chess game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Application Desktop',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C++ - OOP',
      },
      {
        icon: <FaParagraph />,
        title: 'Details : ',
        desc: 'Realization of a chess game, Desktop, using an object-oriented programming approach.',
      },
    ],
  },

  

  
];
