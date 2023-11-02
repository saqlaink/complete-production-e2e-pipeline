import {
  Ecommerce,
  Expense,
  Infosys,
  az900,
  az104,
  az400,
  jscolab,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const experiences = [
  {
    title: 'Senior Systems Engineer',
    company_name: 'Infosys Ltd.',
    icon: Infosys,
    iconBg: '#383E56',
    date: 'Sept 2021 - Present',
    points: [
      'Designed and provided solutions for networking circuits that connected different locations across the United States as a Solutions Architect for Networking Systems at Lumen Technologies.',
      'Designed customer circuits using advanced wavelength architectures for metro and long-haul Dense wavelength division multiplexing(DWDM) networks.',
      'Utilized in-depth knowledge of networking technologies and protocols to analyze customer requirements and propose optimal solutions that met their needs.',
      'Collaborated closely with sales teams, network engineers and customers to ensure successful implementation of designed solutions.',
    ],
  },
  {
    title: 'Systems Engineer Trainee',
    company_name: 'Infosys',
    icon: Infosys,
    iconBg: '#383E56',
    date: 'June 2021 - Sept 2021',
    points: [
      "Learned Active Directory Administrator for on Premise infrastructure and on Cloud. Learned the responsibility of managing and maintaining the organization's Active Directory infrastructure",
      'Learned how to maintain the secure and efficient operation of the Active Directory system, which involved tasks such as managing user accounts, groups, and network resources.',
      'I also gained experience in enforcing security policies and ensuring compliance with industry regulations to safeguard sensitive data and ensure uninterrupted access for all users.',
    ],
  },
];

const projects = [
  {
    name: 'Javascript Notebook',
    description:
      'Developed a full-stack web application using React for the frontend and Express for the backend. Used ESBuild for transpiling and bundling code by fetching required package from Unpkg.com. Published the ”jscolab” package on NPM, making it accessible to users through the command ”npx jscolab serve”.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: jscolab,
    source_code_link: 'https://github.com/saqlaink/JSNotebook',
  },
  {
    name: 'Ecommerce Website & Admin Panel',
    description:
      'Developed a modern Ecommerce web app and admin panel using Next.js. Implemented Next.js API routes for server-side logic, authentication,and data fetching. Integrated Stripe for secure online payments. Enabled routing and navigation for product categories. Added search and filtering for efficient product discovery. Developed Admin panel with management features for products, categories, featured products, and shipping fees.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: Ecommerce,
    source_code_link: 'https://github.com/saqlaink/ecommerce-front',
  },
  {
    name: 'CICD PIPELINE',
    description:
      'Implemented a CI/CD pipeline for React app on GCP using Artifact Registry, Cloud Build Trigger, and Kubernetes Cluster. It automated software delivery for development and production on GitHub, using Git for version control and CloudBuild Triggers. Defined build steps in cloudbuild.yaml and used Artifact Registry to store container images. A GCP Kubernetes cluster was set up for efficient app deployment, with configuration details in gke.yaml.',
    tags: [
      {
        name: 'GCP',
        color: 'blue-text-gradient',
      },
      {
        name: 'Kubernetes',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
    ],
    image: Expense,
    source_code_link: 'https://github.com/saqlaink/CICD-Pipeline-GCP',
  },
];
const certificates = [
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    tags: [
      {
        name: 'Describe cloud concepts',
        color: 'blue-text-gradient',
      },
      {
        name: 'Describe Azure architecture and services',
        color: 'green-text-gradient',
      },
      {
        name: 'Describe Azure management and governance',
        color: 'pink-text-gradient',
      },
    ],
    image: az900,
    source_code_link:
      'https://learn.microsoft.com/api/credentials/share/en-in/saqlainkhan-5109/AB16F762E9EE81BC?sharingId=FCC4FD2E3610000',
  },
  {
    name: 'Microsoft Certified: Azure Administrator (AZ-104)',
    tags: [
      {
        name: 'Manage Azure identities and governance',
        color: 'blue-text-gradient',
      },
      {
        name: 'Implement and manage storage',
        color: 'green-text-gradient',
      },
      {
        name: 'Deploy and manage Azure compute resources',
        color: 'pink-text-gradient',
      },
      {
        name: 'Implement and manage virtual networking',
        color: 'pink-text-gradient',
      },
      {
        name: 'Monitor and maintain Azure resources',
        color: 'pink-text-gradient',
      },
    ],
    image: az104,
    source_code_link:
      'https://learn.microsoft.com/en-gb/users/saqlainkhan-5109/credentials/D8D5F40F15A83EC2',
  },
  {
    name: 'Microsoft Certified: DevOps Engineer Expert (AZ-400)',
    tags: [
      {
        name: 'Configure processes and communications',
        color: 'blue-text-gradient',
      },
      {
        name: 'Design and implement source control',
        color: 'green-text-gradient',
      },
      {
        name: 'Design and implement build and release pipelines',
        color: 'pink-text-gradient',
      },
      {
        name: 'Develop a security and compliance plan',
        color: 'pink-text-gradient',
      },
      {
        name: 'Implement an instrumentation strategy',
        color: 'pink-text-gradient',
      },
    ],
    image: az400,
    source_code_link:
      'https://learn.microsoft.com/en-us/users/saqlainkhan-5109/credentials/7056a45526e9f0fb',
  },
];

export { experiences, projects, certificates };
