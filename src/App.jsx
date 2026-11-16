import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiPhone,
  FiSend,
  FiSun,
  FiTarget,
  FiX,
} from 'react-icons/fi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import {
  certifications,
  education,
  experiences,
  navItems,
  projects,
  skills,
  typewriterWords,
} from './data/portfolio.js';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const doneTyping = !deleting && text === currentWord;
    const doneDeleting = deleting && text === '';
    const delay = doneTyping ? 1300 : deleting ? 42 : 75;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }

      if (doneDeleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setText((value) =>
        deleting ? currentWord.slice(0, value.length - 1) : currentWord.slice(0, value.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return text;
}

function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        className="mx-auto w-full max-w-6xl px-7 sm:px-10 lg:px-14 xl:px-16"
      >
        <motion.div variants={item} className="mb-10 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-description">{description}</p>}
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}

function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/76 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/72">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-7 sm:px-10 lg:px-14 xl:px-16">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 font-semibold">
          <span className="grid size-10 place-items-center rounded-xl bg-slate-950 text-sm text-white shadow-lg shadow-cyan-500/20 dark:bg-white dark:text-slate-950">
            AT
          </span>
          <span className="hidden text-slate-900 dark:text-white sm:block">Aminata Traore</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsDark((value) => !value)}
            className="icon-button"
            aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
            title={isDark ? 'Mode clair' : 'Mode sombre'}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="icon-button menu-toggle"
            aria-label="Ouvrir le menu"
            title="Menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-5 shadow-2xl dark:bg-slate-950"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">Navigation</span>
                <button type="button" className="icon-button" onClick={closeMenu} aria-label="Fermer le menu" title="Fermer">
                  <FiX />
                </button>
              </div>
              <div className="grid gap-2">
                {navItems.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu} className="mobile-nav-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const typedText = useTypewriter(typewriterWords);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute left-1/3 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/18 blur-3xl dark:bg-cyan-400/12" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/16 blur-3xl dark:bg-violet-500/12" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center px-7 pb-16 sm:px-10 lg:px-14 xl:px-16">
        <motion.div variants={container} initial="hidden" animate="show" className="hero-content">
          <motion.h1 variants={item} className="hero-title">
            Aminata Traore
          </motion.h1>
          <motion.p variants={item} className="hero-role">
            Developpeuse Full Stack • DevOps • Cybersecurite
          </motion.p>
          <motion.div variants={item} className="typewriter-line">
            <span>{typedText}</span>
            <i />
          </motion.div>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-slate-650 dark:text-slate-300">
            Developpeuse web Full Stack specialisee dans le developpement d'applications modernes, securisees et
            performantes. Passionnee par le DevOps, la cybersecurite et l'automatisation CI/CD, je concois des
            solutions numeriques innovantes repondant aux besoins des entreprises.
          </motion.p>
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <span className="hero-badge">📍 Dakar, Senegal</span>
            <span className="hero-badge">🚀 Disponible pour des opportunites</span>
          </motion.div>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">
              Voir mes projets <FiArrowUpRight />
            </a>
            <a href="/cv-aminata-traore.pdf" className="secondary-button" download>
              <FiDownload /> Telecharger mon CV
            </a>
            <a href="#contact" className="ghost-button">
              <FiMail /> Me contacter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    ['Formation', 'Licence Telecommunications & Reseaux'],
    ['Option', 'DevOps & Cybersecurite'],
    ['Mention', 'Tres Bien'],
  ];

  return (
    <Section
      id="about"
      eyebrow="A propos"
      title="A propos"
      description="Une approche complete: produit, securite et livraison."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={item} className="panel p-7 sm:p-8">
          <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-cyan-500/12 text-cyan-500">
            <FiUser size={24} />
          </div>
          <p className="text-lg leading-8 text-slate-650 dark:text-slate-300">
            Developpeuse web full-stack, je travaille sur des interfaces claires, des backends solides et des
            architectures pensees pour etre maintenables. Mon objectif est d’evoluer comme developpeuse full-stack,
            DevOps ou analyste cybersecurite, avec une pratique ancree dans les besoins terrain.
          </p>
          <div className="mt-7 flex items-start gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
            <FiTarget className="mt-1 shrink-0 text-cyan-500" size={24} />
            <p className="leading-7 text-slate-650 dark:text-slate-300">
              Concevoir, automatiser, securiser et ameliorer les applications a chaque etape, du code au deploiement.
            </p>
          </div>
        </motion.div>
        <motion.div variants={container} className="grid gap-4">
          {stats.map(([label, value]) => (
            <motion.div key={label} variants={item} className="panel flex items-center gap-4 p-5">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-violet-500/12 text-violet-500">
                <FiAward size={22} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Competences"
      title="Competences"
      description="Un socle technique large pour construire et securiser."
    >
      <motion.div variants={container} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article key={group.title} variants={item} className="panel p-3.5">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-950 text-cyan-300 shadow-lg dark:bg-white dark:text-slate-950">
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(([name, SkillIcon]) => (
                  <span key={name} className="skill-pill">
                    <SkillIcon /> {name}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const domainOrder = ['Developpement Web', 'DevOps', 'Cybersecurite'];
  const projectsByDomain = projects.reduce((groups, project) => {
    const domain = project.domain;
    return {
      ...groups,
      [domain]: [...(groups[domain] || []), project],
    };
  }, {});

  return (
    <Section
      id="projects"
      eyebrow="Projets"
      title="Projets"
      description="Des solutions concretes, modernes et pensees pour les utilisateurs."
    >
      <motion.div variants={container} className="space-y-8">
        {domainOrder.map((domain) => (
          <div key={domain}>
            <h3 className="domain-title">{domain}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {(projectsByDomain[domain] || []).map((project) => (
                <motion.article key={project.title} variants={item} whileHover={{ y: -6 }} className="project-card">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="project-image-button"
                    aria-label={`Voir les details du projet ${project.title}`}
                  >
                    <img src={project.image} alt={`Apercu du projet ${project.title}`} className="project-image" />
                    <span className={`project-image-glow bg-gradient-to-r ${project.accent}`} />
                  </button>
                  <div className={`mb-3 h-1 w-14 rounded-full bg-gradient-to-r ${project.accent}`} />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <span key={badge} className="project-badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button type="button" onClick={() => setSelectedProject(project)} className="details-button">
                    Voir détails <FiArrowUpRight />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={onClose} aria-label="Fermer la modale" title="Fermer">
              <FiX />
            </button>
            <div className="modal-image-wrap">
              <img src={project.image} alt={`Apercu du projet ${project.title}`} className="modal-image" />
            </div>
            <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[1fr_0.92fr]">
              <div>
                <p className="eyebrow mb-3">Projet</p>
                <h3 className="modal-title">{project.title}</h3>
                <p className="mt-3 font-semibold text-cyan-600 dark:text-cyan-300">{project.category}</p>
                <p className="mt-4 leading-7 text-slate-650 dark:text-slate-300">{project.detailedDescription}</p>
                <div className="mt-4">
                  <h4 className="modal-subtitle">Probleme resolu</h4>
                  <p className="mt-3 leading-7 text-slate-650 dark:text-slate-300">{project.problem}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={project.github} className="secondary-button" target="_blank" rel="noreferrer">
                    <FiCode /> GitHub
                  </a>
                  <a href={project.demo} className="primary-button" target="_blank" rel="noreferrer">
                    <FiExternalLink /> Demo
                  </a>
                  <button type="button" onClick={onClose} className="ghost-button">
                    <FiX /> Fermer
                  </button>
                </div>
              </div>
              <div>
                {project.gallery?.length > 0 && (
                  <div className="mb-7">
                    <h4 className="modal-subtitle">Galerie</h4>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {project.gallery.map((image) => (
                        <img key={image} src={image} alt={`Capture ${project.title}`} className="gallery-image" />
                      ))}
                    </div>
                  </div>
                )}
                <h4 className="modal-subtitle">Fonctionnalites principales</h4>
                <div className="mt-3 grid gap-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="feature-row">
                      <FiCheckCircle /> {feature}
                    </div>
                  ))}
                </div>
                <h4 className="mt-5 modal-subtitle">Difficultes rencontrees</h4>
                <div className="mt-3 grid gap-2">
                  {project.challenges.map((challenge) => (
                    <div key={challenge} className="feature-row">
                      <FiTarget /> {challenge}
                    </div>
                  ))}
                </div>
                <h4 className="mt-5 modal-subtitle">Ce que j'ai appris</h4>
                <p className="mt-2 leading-7 text-slate-650 dark:text-slate-300">{project.learning}</p>
                <h4 className="mt-5 modal-subtitle">Technologies utilisees</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Parcours"
      title="Experience professionnelle"
      description="Fondatrice de TechRise, entre tech, gestion et relation client."
    >
      <div className="grid gap-6">
        <motion.div variants={container} className="space-y-4">
          {experiences.map((experience) => (
            <motion.article key={experience.role} variants={item} className="timeline-card">
              <div className="timeline-marker">
                <div className="grid size-10 place-items-center rounded-xl bg-blue-500/12 text-blue-500">
                  <FiBriefcase size={20} />
                </div>
              </div>
              <div className="timeline-content">
                <div>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">{experience.period}</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{experience.role}</h3>
                  <p className="mt-1 text-base font-semibold text-violet-600 dark:text-violet-300">{experience.company}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <FiMapPin /> {experience.location}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-650 dark:text-slate-300">{experience.details}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {experience.missions.map((mission) => (
                      <div key={mission} className="feature-row">
                        <FiCheckCircle /> {mission}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section
      id="education"
      eyebrow="Formations"
      title="Formations"
      description="Un parcours oriente reseaux, DevOps, cybersecurite et IA."
    >
      <motion.div variants={container} className="grid gap-5 md:grid-cols-2">
        {education.map((course) => (
          <motion.article key={course.title} variants={item} className="panel p-3.5">
            <div className="mb-3 grid size-10 place-items-center rounded-xl bg-cyan-500/12 text-cyan-500">
              <FiBookOpen size={20} />
            </div>
            <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-300">{course.period}</p>
            <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">{course.title}</h3>
            <p className="mt-1 text-sm font-semibold text-violet-600 dark:text-violet-300">{course.subtitle}</p>
            <p className="mt-2 text-sm leading-6 text-slate-650 dark:text-slate-300">{course.school}</p>
            <span className="mt-3 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-200">
              {course.note}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications"
      description="Des bases solides en cybersecurite."
    >
      <motion.div variants={container} className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification) => (
          <motion.article key={certification} variants={item} className="panel flex items-center gap-3 p-3.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-500/12 text-violet-500">
              <FiAward size={20} />
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{certification}</h3>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function Contact() {
  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent('Bonjour Aminata, je souhaite vous contacter pour un projet.');
    return `https://wa.me/?text=${message}`;
  }, []);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Contact"
      description="Discutons d’un projet, d’une mission ou d’une opportunite."
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div variants={item} className="panel p-3.5">
          <div className="space-y-4">
            <a href="mailto:aminata.traore@example.com" className="contact-row">
              <FiMail /> Email
            </a>
            <a href="tel:+221000000000" className="contact-row">
              <FiPhone /> Téléphone
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-row">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-row">
              <FiGithub /> GitHub
            </a>
            <div className="contact-row">
              <FiMapPin /> Dakar, Senegal
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400">
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </motion.div>

        <motion.form variants={item} className="panel grid gap-2.5 p-3.5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Nom
              <input type="text" name="name" placeholder="Votre nom" className="field" />
            </label>
            <label className="field-label">
              Email
              <input type="email" name="email" placeholder="vous@email.com" className="field" />
            </label>
          </div>
          <label className="field-label">
            Sujet
            <input type="text" name="subject" placeholder="Sujet du message" className="field" />
          </label>
          <label className="field-label">
            Message
            <textarea name="message" rows="5" placeholder="Votre message" className="field resize-none" />
          </label>
          <button type="button" className="primary-button justify-center">
            Envoyer le message <FiSend />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-7 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14 xl:px-16">
        <p>© {new Date().getFullYear()} Aminata Traore. Tous droits reserves.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub" title="GitHub">
            <FiGithub />
          </a>
          <a href="#home" className="nav-link">
            Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
