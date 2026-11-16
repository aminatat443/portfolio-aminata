import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaJava,
  FaJenkins,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSlack,
  FaWindows,
} from 'react-icons/fa';
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiSpringboot,
  SiSwagger,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbApi, TbCode, TbShieldCheck, TbTerminal2 } from 'react-icons/tb';

export const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'Competences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Formations', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const typewriterWords = [
  'Developpeuse Full Stack',
  'DevOps Engineer',
  'Passionnee de cybersecurite',
  'Creatrice de solutions numeriques',
  'Fondatrice de TechRise',
];

export const skills = [
  {
    title: 'Frontend',
    icon: FaReact,
    items: [
      ['HTML', TbCode],
      ['CSS', TbCode],
      ['JavaScript', SiJavascript],
      ['TypeScript', SiTypescript],
      ['React', FaReact],
      ['Angular', FaAngular],
      ['Bootstrap', FaBootstrap],
      ['Tailwind CSS', SiTailwindcss],
    ],
  },
  {
    title: 'Backend',
    icon: FaNodeJs,
    items: [
      ['PHP', FaPhp],
      ['Symfony', SiSymfony],
      ['Node.js', FaNodeJs],
      ['Express', SiExpress],
      ['Spring Boot', SiSpringboot],
      ['Java', FaJava],
      ['Python', FaPython],
      ['API REST', TbApi],
      ['JWT', TbShieldCheck],
    ],
  },
  {
    title: 'Base de donnees',
    icon: SiPostgresql,
    items: [
      ['MySQL', SiMysql],
      ['PostgreSQL', SiPostgresql],
      ['MongoDB', SiMongodb],
      ['Firebase', SiFirebase],
    ],
  },
  {
    title: 'DevOps',
    icon: FaDocker,
    items: [
      ['Git', FaGitAlt],
      ['GitHub', FaGithub],
      ['GitLab CI/CD', FaGitlab],
      ['Jenkins', FaJenkins],
      ['Docker', FaDocker],
      ['Docker Compose', FaDocker],
      ['Kubernetes', SiKubernetes],
      ['Nginx', SiNginx],
      ['AWS', FaAws],
    ],
  },
  {
    title: 'Cybersecurite',
    icon: TbShieldCheck,
    items: [
      ['DevSecOps', TbShieldCheck],
      ['RBAC', TbShieldCheck],
      ['JWT', TbShieldCheck],
      ['SonarQube', TbTerminal2],
      ['Trivy', TbTerminal2],
      ['OWASP', TbShieldCheck],
      ['Metasploit', TbTerminal2],
      ['Snort', TbShieldCheck],
      ['Suricata', TbShieldCheck],
      ['SIEM', TbTerminal2],
    ],
  },
  {
    title: 'Outils',
    icon: SiPostman,
    items: [
      ['Postman', SiPostman],
      ['Swagger', SiSwagger],
      ['Figma', FaFigma],
      ['Jira', SiJira],
      ['Slack', FaSlack],
      ['Linux', FaLinux],
      ['Windows', FaWindows],
    ],
  },
];

export const projects = [
  {
    title: 'Gestion bancaire securisee',
    domain: 'Developpement Web',
    category: 'Fintech securisee',
    subtitle: 'Authentification, roles et operations',
    description:
      'Application securisee avec JWT, roles utilisateurs, gestion des comptes, operations bancaires et journalisation.',
    detailedDescription:
      'Solution bancaire securisee concue autour de la gestion des acces, de la traçabilite des operations et de la separation des roles utilisateurs.',
    features: [
      'Authentification JWT',
      'Gestion des roles utilisateurs',
      'Operations bancaires',
      'Journalisation des actions sensibles',
    ],
    problem:
      'Une application bancaire doit securiser les acces, tracer les operations et separer clairement les permissions.',
    challenges: ['Gestion fine des roles', 'Protection des routes', 'Journalisation fiable'],
    learning:
      'Ce projet m’a permis de consolider mes pratiques en authentification, autorisation et architecture backend securisee.',
    tags: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Angular', 'JWT'],
    badges: ['JWT', 'RBAC', 'Audit'],
    accent: 'from-violet-400 to-fuchsia-600',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    ],
    github: '#',
    codeLink: '#',
    demoLink: '#',
    demo: '#',
  },
  {
    title: 'Mini e-commerce',
    domain: 'Developpement Web',
    category: 'Application web',
    subtitle: 'Boutique, panier et administration',
    description:
      "Application e-commerce avec gestion des produits, panier, commandes, utilisateurs, interface admin et envoi d'e-mails.",
    detailedDescription:
      'Mini plateforme e-commerce complete avec parcours client, administration des produits et suivi des commandes.',
    features: [
      'Catalogue produits',
      'Panier et commandes',
      'Gestion utilisateurs',
      'Interface admin et emails transactionnels',
    ],
    problem:
      'Les petites boutiques ont besoin d’une solution simple pour presenter, vendre et suivre leurs produits.',
    challenges: ['Gestion du panier', 'Organisation des commandes', 'Experience admin claire'],
    learning:
      'J’ai approfondi la logique e-commerce, la gestion des utilisateurs et les emails transactionnels.',
    tags: ['Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
    badges: ['Panier', 'Admin', 'Emails'],
    accent: 'from-sky-400 to-emerald-500',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=1200&q=80',
    ],
    github: '#',
    codeLink: '#',
    demoLink: '#',
    demo: '#',
  },
  {
    title: 'Pipeline CI/CD DevOps',
    domain: 'DevOps',
    category: 'DevOps & DevSecOps',
    subtitle: 'Automatisation et analyse de securite',
    description:
      'Automatisation du deploiement avec Jenkins, GitLab, Docker, SonarQube, AWS EC2 et analyse de securite.',
    detailedDescription:
      'Pipeline DevOps automatise pour construire, tester, analyser et deployer une application avec controle qualite et securite integres.',
    features: [
      'Build et deploiement automatises',
      'Conteneurisation Docker',
      'Analyse qualite SonarQube',
      'Scan de securite avec Trivy',
    ],
    problem:
      'Le deploiement manuel ralentit les equipes et augmente les risques d’erreurs en production.',
    challenges: ['Automatiser les etapes CI/CD', 'Integrer la qualite code', 'Ajouter les scans de securite'],
    learning:
      'J’ai appris a relier integration continue, conteneurisation, controle qualite et securite applicative.',
    tags: ['Jenkins', 'GitLab CI', 'Docker', 'AWS', 'SonarQube', 'Trivy'],
    badges: ['CI/CD', 'Docker', 'Security scan'],
    accent: 'from-blue-500 to-indigo-600',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    ],
    github: '#',
    codeLink: '#',
    demoLink: '#',
    demo: '#',
  },
  {
    title: 'Gestionnaire de factures TechRise',
    domain: 'Developpement Web',
    category: 'Gestion commerciale',
    subtitle: 'Factures PDF et suivi client',
    description:
      'Application permettant de creer, previsualiser, modifier, supprimer et telecharger des factures PDF.',
    detailedDescription:
      'Outil de facturation pense pour simplifier la creation de documents commerciaux et le suivi administratif de TechRise.',
    features: [
      'Creation de factures',
      'Previsualisation avant export',
      'Modification et suppression',
      'Telechargement PDF',
    ],
    problem:
      'TechRise avait besoin d’un outil rapide pour generer des factures propres et suivre ses documents commerciaux.',
    challenges: ['Generation PDF', 'Previsualisation claire', 'Edition rapide des documents'],
    learning:
      'Ce projet a relie mes besoins d’entreprise a une solution web concrete et directement exploitable.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'PDF'],
    badges: ['PDF', 'Factures', 'TechRise'],
    accent: 'from-cyan-400 to-violet-600',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80',
    ],
    github: '#',
    codeLink: '#',
    demoLink: '#',
    demo: '#',
  },
  {
    title: 'OCR Documents',
    domain: 'Developpement Web',
    category: 'Automatisation documentaire',
    subtitle: 'Extraction automatique intelligente',
    description:
      "Systeme d'extraction automatique d'informations depuis des documents avec reconnaissance OCR et correction intelligente.",
    detailedDescription:
      'Systeme de traitement documentaire permettant d’extraire automatiquement les informations importantes et de les corriger intelligemment.',
    features: [
      'Reconnaissance OCR',
      'Extraction de donnees',
      'Correction intelligente',
      'API securisee par JWT',
    ],
    problem:
      'La saisie manuelle d’informations depuis des documents prend du temps et provoque des erreurs.',
    challenges: ['Extraction OCR fiable', 'Correction intelligente', 'Stockage structure'],
    learning:
      'J’ai explore l’automatisation documentaire, le traitement de texte et l’integration d’un moteur OCR.',
    tags: ['Node.js', 'PostgreSQL', 'Tesseract.js', 'JWT'],
    badges: ['OCR', 'Automation', 'API'],
    accent: 'from-teal-400 to-blue-600',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    ],
    github: '#',
    codeLink: '#',
    demoLink: '#',
    demo: '#',
  },
  {
    title: 'Lab de detection cyber SIEM',
    domain: 'Cybersecurite',
    category: 'Supervision & detection',
    subtitle: 'Analyse de logs, alertes et detection d’incidents',
    description:
      'Environnement de supervision cyber pour collecter des logs, analyser des alertes et simuler des scenarios d’attaque.',
    detailedDescription:
      'Ce lab cybersecurite met en place une chaine de detection simple avec collecte de logs, tableaux de bord et analyse d’evenements suspects. Il permet de mieux comprendre le role d’un SIEM dans la detection et la reponse aux incidents.',
    features: [
      'Collecte et centralisation des logs',
      'Simulation d’alertes de securite',
      'Tableaux de bord de supervision',
      'Analyse d’evenements suspects',
    ],
    problem:
      'Les incidents de securite sont difficiles a detecter sans visibilite claire sur les journaux systeme et reseau.',
    challenges: [
      'Structurer les logs exploitables',
      'Identifier les evenements suspects',
      'Presenter les alertes de facon lisible',
    ],
    learning:
      'J’ai renforce ma comprehension de la detection d’incidents, de la supervision SIEM et de l’analyse de logs.',
    tags: ['SIEM', 'ELK', 'Snort', 'Suricata', 'OWASP', 'Linux'],
    badges: ['Detection', 'Logs', 'SOC'],
    accent: 'from-rose-400 to-violet-600',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80',
    ],
    github: '#',
    codeLink: '#',
    demoLink: '#',
    demo: '#',
  },
];

export const experiences = [
  {
    role: 'Fondatrice & Gerante',
    company: 'TechRise',
    period: 'Depuis Mai 2026',
    location: 'Dakar - Senegal',
    details:
      "Creation et gestion de TechRise, une entreprise specialisee dans la vente d'ordinateurs, de materiel informatique, bureautique et audiovisuel.",
    missions: [
      "Vente d'ordinateurs",
      'Conseil client',
      'Negociation commerciale',
      'Gestion des commandes',
      'Gestion des stocks',
      'Creation de factures',
      'Gestion des fournisseurs',
      'Creation de campagnes publicitaires Facebook et WhatsApp',
      'Marketing digital',
      'Service apres-vente',
      'Gestion de la relation client',
    ],
  },
];

export const education = [
  {
    title: 'Baccalaureat serie scientifique',
    subtitle: 'Diplome secondaire scientifique',
    school: 'Senegal',
    period: '2020 - 2021',
    note: 'Baccalaureat',
  },
  {
    title: 'Licence Telecommunications & Reseaux',
    subtitle: 'Option DevOps & Cybersecurite',
    school: 'Ecole Centrale des Logiciels Libres et de Telecommunications',
    period: '2021 - 2024',
    note: 'Mention Tres Bien',
  },
  {
    title: 'Formation Angular, Spring Boot & Intelligence Artificielle',
    subtitle: 'Developpement web moderne et IA',
    school: 'Webgram',
    period: 'Mars - Aout 2025',
    note: 'Formation entreprise',
  },
];

export const certifications = ['Cisco Ethical Hacker', 'Analyste en cybersécurité FORCE-N'];
