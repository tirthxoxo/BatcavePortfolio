import { useState } from "react";
import "./index.css";
import Projects from "./Projects";
import ScrollReveal from "./ScrollReveal";

const EMAIL = "darjitirth947@gmail.com";
const GITHUB = "https://github.com/tirthxoxo";
const LINKEDIN = "https://www.linkedin.com/in/tirth-darji-04ab30312/";

const skills = [
  "Python", "Java", "JavaScript", "React",
  "HTML & CSS", "Machine Learning", "Git & GitHub", "SQL",
];

const projects = [
  {
    number: "01",
    name: "CareerIQ",
    type: "MACHINE LEARNING",
    description: "An AI-powered college placement prediction and career analytics system.",
    tags: ["Python", "Scikit-learn", "React"],
    link: GITHUB,
  },
  {
    number: "02",
    name: "Hospital Management",
    type: "WEB APPLICATION",
    description: "A hospital management project exploring structured workflows and application development.",
    tags: ["Python", "Odoo", "XML"],
    link: GITHUB,
  },
  {
    number: "03",
    name: "Batcave Portfolio",
    type: "PERSONAL PROJECT",
    description: "A cinematic developer portfolio inspired by Gotham and futuristic Batcomputer interfaces.",
    tags: ["React", "CSS", "JavaScript"],
    link: GITHUB,
  },
];

const welcomeLines = [
  "BATCOMPUTER OS v2.6.0",
  "SECURE CONNECTION ESTABLISHED.",
  "WELCOME, VISITOR.",
  'Type "help" to see available commands.',
];

function App() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const [terminalOpen, setTerminalOpen] = useState(true);

  function runCommand(event) {
    event.preventDefault();

    const raw = command.trim();
    if (!raw) return;

    const input = raw.toLowerCase();
    let output = [];

    switch (input) {
      case "help":
        output = [
          "AVAILABLE COMMANDS",
          "about     — Learn about Tirth",
          "skills    — View technical skills",
          "projects  — Explore current missions",
          "contact   — Display contact information",
          "github    — Open GitHub profile",
          "linkedin  — Open LinkedIn profile",
          "clear     — Clear terminal history",
          "help      — Display this command list",
        ];
        break;

      case "about":
        output = [
          "IDENTITY VERIFIED.",
          "Name: Tirth Darji",
          "Role: Computer Engineering student",
          "Interests: Software development, AI and machine learning.",
          "Mission: Build useful digital experiences and keep learning.",
        ];
        break;

      case "skills":
        output = [
          "TECHNICAL ARSENAL",
          ...skills.map((skill) => `> ${skill}`),
        ];
        break;

      case "projects":
        output = [
          "MISSION DATABASE",
          ...projects.map(
            (project) => `${project.number} // ${project.name} — ${project.type}`
          ),
          "Use the Missions section to explore the project cards.",
        ];
        break;

      case "contact":
        output = [
          "OPEN COMMUNICATION CHANNEL",
          `Email: ${EMAIL}`,
          "Use the Contact section to send a message.",
        ];
        break;

      case "github":
        output = ["Opening GitHub profile in a new tab..."];
        window.open(GITHUB, "_blank", "noopener,noreferrer");
        break;

      case "linkedin":
        output = ["Opening LinkedIn profile in a new tab..."];
        window.open(LINKEDIN, "_blank", "noopener,noreferrer");
        break;

      case "clear":
        setHistory([]);
        setCommand("");
        return;

      default:
        output = [
          `Unknown command: "${raw}"`,
          'Type "help" to see the available commands.',
        ];
    }

    setHistory((previous) => [
      ...previous,
      { input: raw, output },
    ]);
    setCommand("");
  }

  return (
    <main>
      <ScrollReveal />  
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Batcave home">
          <span className="brand-symbol">B</span>
          <span>BAT<span className="gold">CAVE</span></span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#skills">ARSENAL</a>
          <a href="#projects">MISSIONS</a>
          <a href="#terminal">BATCOMPUTER</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <span className="system-status">
          <span className="status-dot" /> SYSTEM ONLINE
        </span>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            DEVELOPER PROFILE // 001
          </div>

          <p className="hero-pretitle">THE CITY NEEDS BUILDERS.</p>

          <h1>
            THINK IN
            <br />
            <span className="outline-text">SHADOWS.</span>
            <br />
            BUILD IN
            <br />
            <span className="gold">LIGHT.</span>
          </h1>

          <p className="hero-description">
            I'm <strong>Tirth Darji</strong> — a Computer Engineering student
            who turns ideas into intelligent, practical digital experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              EXPLORE MISSIONS <span>↗</span>
            </a>
            <a className="button button-secondary" href="#contact">
              CONTACT ME
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span className="meta-separator">/</span>
            <span>ALWAYS LEARNING</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Batcomputer radar graphic">
          <div className="visual-grid" />
          <div className="radar radar-outer" />
          <div className="radar radar-inner" />
          <div className="radar-cross horizontal" />
          <div className="radar-cross vertical" />

          <div className="radar-center bat-emblem">
                <svg
                  viewBox="0 0 100 60"
                  className="bat-emblem-icon"
                  role="img"
                  aria-label="Bat emblem"
                >
                  <path
                    d="M5 8
                      L23 16
                      L31 10
                      L40 25
                      L50 19
                      L60 25
                      L69 10
                      L77 16
                      L95 8
                      L88 30
                      L76 39
                      L65 36
                      L57 49
                      L50 42
                      L43 49
                      L35 36
                      L24 39
                      L12 30 Z"
                    fill="currentColor"
                  />
                </svg>
          </div>

          <span className="radar-label radar-label-top">GOTHAM NETWORK</span>
          <span className="radar-label radar-label-bottom">
            SIGNAL ACTIVE <span className="status-dot" />
          </span>
          <span className="coordinate coordinate-one">27.1767° N</span>
          <span className="coordinate coordinate-two">72.8777° E</span>
          <div className="scan-line" />
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-line" />
          <span>04</span>
        </div>
      </section>

      <section className="ticker" aria-label="Developer philosophy">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <span key={index}>
              CODE WITH PURPOSE <b>✳</b> BUILD THE IMPOSSIBLE <b>✳</b>
              LEARN. BUILD. REPEAT. <b>✳</b>
              INTELLIGENCE MEETS CREATIVITY <b>✳</b>
            </span>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-kicker">01 / THE PERSON BEHIND THE MASK</span>
          <h2>NOT A SUPERHERO.<br /><span className="muted">JUST A BUILDER.</span></h2>
        </div>

        <div className="about-content">
          <div className="about-mark" aria-hidden="true">T<span>.</span></div>
          <div>
            <p className="about-lead">
              Curiosity is my superpower. Code is my weapon of choice.
            </p>
            <p className="body-copy">
              I'm a Computer Engineering student exploring software
              development, machine learning, and creative ways to solve
              real-world problems. I believe the best projects don't just
              look impressive — they make a difference.
            </p>
            <div className="about-stats">
              <div><strong>∞</strong><span>THINGS TO LEARN</span></div>
              <div><strong>01</strong><span>MISSION AT A TIME</span></div>
              <div><strong>100%</strong><span>BUILDER MINDSET</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-kicker">02 / THE ARSENAL</span>
          <h2>TOOLS OF<br /><span className="muted">THE TRADE.</span></h2>
        </div>

        <p className="body-copy skills-intro">
          Every skill is another tool in the utility belt. This arsenal grows
          with every mission.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <span>{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <Projects className="section projects-section" id="projects">
        <div className="projects-heading">
          <div className="section-heading">
            <span className="section-kicker">03 / CLASSIFIED OPERATIONS</span>
            <h2>SELECTED<br /><span className="muted">MISSIONS.</span></h2>
          </div>
          <span className="classified-stamp">TOP SECRET<br />GOTHAM DIVISION</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <span>MISSION_{project.number}</span>
                <span className="project-status">● ACTIVE FILE</span>
              </div>

              <div className="project-art">
                <span className="project-art-number">{project.number}</span>
                <span className="project-cross">＋</span>
                <span className="project-art-caption">RESTRICTED ACCESS</span>
              </div>

              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  VIEW ON GITHUB <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="project-note">
          MORE MISSIONS IN DEVELOPMENT <span>///</span> TRANSMISSION CONTINUES
        </p>
      </Projects>

      <section className="terminal-section" id="terminal">
        <div className="terminal-heading">
          <span className="section-kicker">04 / SECURE ACCESS TERMINAL</span>
          <h2>THE <span className="terminal-blue">BATCOMPUTER.</span></h2>
          <p>Don't just browse the system. Interact with it.</p>
        </div>

        <div className="bat-terminal">
          <div className="terminal-titlebar">
            <div className="terminal-lights">
              <span />
              <span />
              <span />
            </div>
            <span>WAYNE ENTERPRISES // SECURE SHELL</span>
            <button
              className="terminal-toggle"
              type="button"
              onClick={() => setTerminalOpen((open) => !open)}
            >
              {terminalOpen ? "MINIMIZE −" : "OPEN +"}
            </button>
          </div>

          {terminalOpen && (
            <div className="terminal-body">
              <div className="terminal-output" aria-live="polite">
                {welcomeLines.map((line, index) => (
                  <p className="terminal-welcome" key={index}>{line}</p>
                ))}

                {history.map((entry, index) => (
                  <div className="terminal-entry" key={index}>
                    <p className="terminal-command">
                      <span>visitor@gotham:~$</span> {entry.input}
                    </p>
                    {entry.output.map((line, lineIndex) => (
                      <p className="terminal-result" key={lineIndex}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>

              <form className="terminal-form" onSubmit={runCommand}>
                <label htmlFor="terminal-command">
                  <span>visitor@gotham:~$</span>
                </label>
                <input
                  id="terminal-command"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  placeholder="type a command..."
                  autoComplete="off"
                  spellCheck="false"
                  aria-label="Enter a Batcomputer command"
                />
                <button type="submit">EXECUTE ↵</button>
              </form>

              <div className="terminal-hint">
                TIP: TYPE <button type="button" onClick={() => setCommand("help")}>HELP</button>
                {" "}TO BEGIN YOUR INVESTIGATION.
              </div>
            </div>
          )}
        </div>

        <div className="terminal-quickcommands">
          {["help", "about", "skills", "projects", "contact", "github", "linkedin", "clear"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => {
                if (item === "github") {
                  window.open(GITHUB, "_blank", "noopener,noreferrer");
                  setHistory((previous) => [...previous, { input: "github", output: ["Opening GitHub profile in a new tab..."] }]);
                } else if (item === "linkedin") {
                  window.open(LINKEDIN, "_blank", "noopener,noreferrer");
                  setHistory((previous) => [...previous, { input: "linkedin", output: ["Opening LinkedIn profile in a new tab..."] }]);
                } else if (item === "clear") {
                  setHistory([]);
                } else {
                  setCommand(item);
                  setTerminalOpen(true);
                  document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-kicker">05 / OPEN CHANNEL</span>
        <h2>GOT A MISSION?<br /><span className="gold">LET'S BUILD IT.</span></h2>
        <p>
          Have an interesting idea, a project, or an opportunity? My channel
          is open. Let's create something worth remembering.
        </p>

        <a
          className="button button-primary"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's build something together")}`}
        >
          INITIATE CONTACT <span>↗</span>
        </a>

        <div className="social-links">
          <a href={GITHUB} target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href={`mailto:${EMAIL}`}>EMAIL ↗</a>
        </div>

        <div className="contact-watermark" aria-hidden="true">B</div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-symbol">B</span>
          <span>BAT<span className="gold">CAVE</span></span>
        </a>
        <span>DESIGNED IN THE DARK. BUILT FOR THE LIGHT.</span>
        <a href="#home">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} TIRTH DARJI</span>
      </footer>
    </main>
  );
}

export default App;