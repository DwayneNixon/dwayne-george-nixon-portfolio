const linkedIn = "https://www.linkedin.com/in/dwayne-george-nixon/";
const github = "https://github.com/DwayneNixon";

const projects = [
  {
    name: "LUMEN — Assistive Vision System",
    category: "AI · COMPUTER VISION · ACCESSIBILITY",
    year: "2025—",
    art: "lumen",
    image: "./assets/lumen-concept.png",
    imageAlt: "Illustrative concept art showing computer vision cues on a city sidewalk",
    description: "An intelligent vision system that reads dynamic surroundings and gives people who are blind or have low vision timely navigation support.",
    detail: "Navigation is a moving problem: a useful aid has to understand both the shape of a place and the objects changing within it. LUMEN investigates a parallel vision pipeline, combining semantic segmentation with several domain-specific YOLO detectors. A hazard-scoring layer considers what has been detected and how it is moving, then prioritises feedback through audio and haptics. The research also focuses on difficult real-world conditions such as blur and low light. Work towards publishing this research is ongoing.",
    role: "Computer vision research · system design",
    focus: "Scene understanding · hazard prioritisation · accessible feedback",
    outcome: "Ongoing research; publication work in progress",
    tags: "YOLO · SEMANTIC SEGMENTATION · AUDIO / HAPTICS",
    sourceLabel: "LinkedIn research update",
    sourceUrl: linkedIn,
    githubUrl: "https://github.com/DwayneNixon/LUMEN-Visual-Navigation-Assistant"
  },
  {
    name: "Unified Natural Language DevOps Interface",
    category: "RESEARCH · NLP · DEVOPS",
    year: "2024—25",
    art: "devops",
    image: "./assets/unified-nl-devops-research.png",
    imageAlt: "Illustrative concept art of plain language becoming a system automation workflow",
    description: "A natural language interface for translating plain-language requests into system commands and DevOps tasks.",
    detail: "The project asks how people can express system work in everyday language and still keep a clear view of what the computer is doing. The interface interprets a request, maps it to a shell command or script, runs the task, and returns logs and feedback. The research paper was presented at ICT4SD 2025 and published by Springer in January 2026. The project also received first place at InnoQuest 2024.",
    role: "Research and interface development",
    focus: "Natural language · system commands · task feedback",
    outcome: "First place, InnoQuest 2024 · paper published in Springer, 2026",
    tags: "NLP · PYTHON · DEVOPS · SPRINGER PUBLICATION",
    sourceLabel: "Read the Springer paper",
    sourceUrl: "https://link.springer.com/chapter/10.1007/978-3-032-06700-5_20",
    paperTitle: "Unified Natural Language Interface for Automating System Commands and Advanced DevOps Tasks",
    doiUrl: "https://doi.org/10.1007/978-3-032-06700-5_20",
    githubUrl: "https://github.com/DwayneNixon/unified-nl-interface"
  },
  {
    name: "Sengoku Yami",
    category: "GAME DESIGN · UNITY · 2D",
    year: "2024—25",
    art: "game",
    image: "./assets/sengoku-yami-concept.png",
    imageAlt: "Illustrative pixel-art samurai duel on a moonlit bridge",
    description: "A hand-crafted 2D samurai fighting game about betrayal, vengeance, and the shadow that consumes its hero.",
    detail: "Sengoku Yami follows a samurai shaped by betrayal and vengeance. Built with the Teknack Gaming Studio team for the Teknack 2025 launch, the project brings together a dark fantasy story, pixel-art direction, sprite animation, and responsive fighting-game logic. The work sits at the intersection of narrative and play: each encounter needs to feel readable, immediate, and part of the character’s journey.",
    role: "Game development · story and animation",
    focus: "2D combat · character movement · narrative atmosphere",
    outcome: "Launched with the Teknack Gaming Studio team at Teknack 2025",
    tags: "UNITY · C# · PIXEL ART · GAMEPLAY",
    sourceLabel: "See LinkedIn project and launch details",
    sourceUrl: linkedIn
  },
  {
    name: "Wrath of the Shogun",
    category: "GAME DESIGN · UNITY · 3D",
    year: "2024—25",
    art: "game3d",
    image: "./assets/wrath-shogun-concept.png",
    imageAlt: "Illustrative 3D ronin standing in a rain-soaked castle courtyard",
    description: "A 3D single-player fighting game with a cinematic story of exile and a fight to reclaim an empire.",
    detail: "Wrath of the Shogun follows an exiled fighter returning to reclaim an empire. Developed with the Teknack Gaming Studio team, its production combined 3D modelling and real-time lighting with the systems that keep a single-player fight moving: enemy spawning, progression, and responsive combat in a changing environment. The project launched alongside Sengoku Yami at Teknack 2025.",
    role: "Game development · 3D modelling and lighting",
    focus: "Single-player combat · enemy encounters · atmosphere",
    outcome: "Launched with the Teknack Gaming Studio team at Teknack 2025",
    tags: "UNITY · C# · 3D MODELLING · GAMEPLAY",
    sourceLabel: "See LinkedIn project and launch details",
    sourceUrl: linkedIn
  },
  {
    name: "Road Rescue",
    category: "MOBILE · MAPS · REAL-TIME SERVICES",
    year: "2024",
    art: "road",
    image: "./assets/road-rescue-concept.png",
    imageAlt: "Illustrative mobile roadside assistance scene with a route to a service van",
    description: "A roadside breakdown assistant connecting drivers with nearby services, support, and a route forward.",
    detail: "Road Rescue is designed around the stressful moment after a vehicle breaks down. A driver can share a distress signal, find nearby garages, arrange towing or a repair booking, and ask an AI assistant for vehicle guidance. Flutter provides the mobile app, Firebase supports its connected services, and Mapbox supplies the location and mapping layer.",
    role: "Mobile app development",
    focus: "Location-aware support · service discovery · conversational help",
    outcome: "End-to-end roadside assistance concept built for mobile",
    tags: "FLUTTER · FIREBASE · MAPBOX",
    sourceLabel: "View project details on LinkedIn",
    sourceUrl: linkedIn,
    githubUrl: "https://github.com/DwayneNixon/road_rescue_app"
  },
  {
    name: "Resumatic",
    category: "WEB · PRODUCT DESIGN · FULL STACK",
    year: "2023",
    art: "resume",
    image: "./assets/resumatic-concept.png",
    imageAlt: "Illustrative desktop resume-builder workspace with a live document preview",
    description: "An online resume builder with a live preview and customisable templates for students and job seekers.",
    detail: "Resumatic turns resume creation into a guided browser workflow. Users can shape their information in the editor, compare it against a live document preview, and choose from customisable templates. The project was built with HTML, CSS, and JavaScript on the front end, with PHP and MySQL supporting its server-side features. It received third place at InnoQuest 2023.",
    role: "Full-stack web development",
    focus: "Resume editing · live preview · template customisation",
    outcome: "Third place, InnoQuest 2023",
    tags: "HTML · CSS · JAVASCRIPT · PHP · MYSQL",
    sourceLabel: "View project details on LinkedIn",
    sourceUrl: linkedIn,
    githubUrl: "https://github.com/DwayneNixon/Resumatic"
  }
];

const featured = [projects[0], projects[1], projects[2], projects[4]];
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]));

function card(project, index) {
  return `<article class="project-card">
    <div class="project-art" data-art="${project.art}">
      <img src="${project.image}" alt="" loading="lazy" />
      <span class="art-tag">${escapeHtml(project.category)}</span>
      <span class="art-number">0${index + 1} / 0${projects.length}</span>
    </div>
    <div class="project-info"><div><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.category)}</p></div><span class="project-year">${escapeHtml(project.year)}</span></div>
  </article>`;
}

document.querySelector("#featured-projects").innerHTML = featured.map((project) => card(project, projects.indexOf(project))).join("");
document.querySelector("#all-projects").innerHTML = projects.map((project, index) => `
  <article class="case-study" id="case-${index + 1}">
    <div class="case-image-wrap">
      <img class="case-image" src="${project.image}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" />
      <span class="image-disclosure">ILLUSTRATIVE CONCEPT ART</span>
      <span class="case-index">0${index + 1} / 0${projects.length}</span>
    </div>
    <div class="case-copy">
      <p class="eyebrow">${escapeHtml(project.category)} <span>· ${escapeHtml(project.year)}</span></p>
      <h2>${escapeHtml(project.name)}</h2>
      <p class="case-intro">${escapeHtml(project.description)}</p>
      <p class="case-detail">${escapeHtml(project.detail)}</p>
      <div class="case-facts">
        <div><span>MY CONTRIBUTION</span><p>${escapeHtml(project.role)}</p></div>
        <div><span>AREAS OF FOCUS</span><p>${escapeHtml(project.focus)}</p></div>
        <div><span>OUTCOME</span><p>${escapeHtml(project.outcome)}</p></div>
      </div>
      <p class="case-tags">${escapeHtml(project.tags)}</p>
      <div class="case-links">
        <a href="${project.sourceUrl}" target="_blank" rel="noreferrer">${escapeHtml(project.sourceLabel)} <span>↗</span></a>
        ${project.githubUrl ? `<a class="github-link" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub repository <span>↗</span></a>` : ""}
        ${project.paperTitle ? `<p class="paper-citation">${escapeHtml(project.paperTitle)} · ICT4SD 2025 · Springer, 2026</p>` : ""}
        ${project.doiUrl ? `<a href="${project.doiUrl}" target="_blank" rel="noreferrer">DOI: 10.1007/978-3-032-06700-5_20 <span>↗</span></a>` : ""}
      </div>
    </div>
  </article>`).join("");

const nav = document.querySelector(".main-nav");
const transition = document.querySelector(".page-transition");
const menuToggle = document.querySelector(".menu-toggle");
let currentPage = "";
let transitioning = false;

function setMenuOpen(open) {
  nav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

function pageFromHash() {
  const name = location.hash.replace(/^#/, "") || "home";
  return ["home", "work", "about", "now", "contact"].includes(name) ? name : "home";
}

function showPage(name, animate = true) {
  const pageName = ["home", "work", "about", "now", "contact"].includes(name) ? name : "home";
  if (currentPage === pageName && document.querySelector(`#page-${pageName}`)?.classList.contains("active")) return;
  const finish = () => {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
      page.setAttribute("aria-hidden", "true");
    });
    const next = document.querySelector(`#page-${pageName}`);
    next.classList.add("active");
    next.setAttribute("aria-hidden", "false");
    document.title = `${next.dataset.title} — Dwayne George Nixon`;
    document.querySelectorAll("[data-page]").forEach((link) => {
      const active = link.dataset.page === pageName;
      link.classList.toggle("active", active);
      link.toggleAttribute("aria-current", active);
      if (active) link.setAttribute("aria-current", "page");
    });
    currentPage = pageName;
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    transitioning = false;
  };
  if (!animate || !currentPage || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finish();
    return;
  }
  if (transitioning) return;
  transitioning = true;
  transition.classList.remove("go");
  void transition.offsetWidth;
  transition.classList.add("go");
  window.setTimeout(finish, 390);
}

window.addEventListener("hashchange", () => showPage(pageFromHash()));
showPage(pageFromHash(), false);
menuToggle.addEventListener("click", () => {
  setMenuOpen(!nav.classList.contains("open"));
});
document.querySelectorAll("[data-page], .contact-pill, .hero-actions a, .circle-link, .closing-cta a, .site-footer a, #linkedin-link, .cv-download").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const pointerScene = document.querySelector("#scene");
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.setProperty("--mx", `${event.clientX}px`);
  glow.style.setProperty("--my", `${event.clientY}px`);
  if (event.pointerType === "touch" || !pointerScene) return;
  const bounds = pointerScene.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    pointerScene.style.setProperty("--tilt-x", "0deg");
    pointerScene.style.setProperty("--tilt-y", "0deg");
    return;
  }
  const x = (event.clientX - bounds.left) / bounds.width - .5;
  const y = (event.clientY - bounds.top) / bounds.height - .5;
  pointerScene.style.setProperty("--tilt-x", `${y * -5}deg`);
  pointerScene.style.setProperty("--tilt-y", `${x * 6}deg`);
});
pointerScene.addEventListener("pointerleave", () => {
  pointerScene.style.setProperty("--tilt-x", "0deg");
  pointerScene.style.setProperty("--tilt-y", "0deg");
});

document.querySelector("#brand-name").innerHTML = "DWAYNE GEORGE NIXON<br /><small>COMPUTER ENGINEER · BUILDER</small>";
document.querySelectorAll("[data-person]").forEach((node) => node.textContent = "Dwayne George Nixon");
document.querySelectorAll("[data-year]").forEach((node) => node.textContent = new Date().getFullYear());
document.querySelector("#hero-description").textContent = "I’m Dwayne, a computer engineer and researcher building accessible AI, useful software, and interactive worlds — grounded in a 9.79 CGPI at DBIT and a new academic chapter in Edinburgh.";
document.querySelector("#availability").textContent = "RESEARCH · ENGINEERING · CREATIVE TECHNOLOGY";
document.querySelector("#about-lead").textContent = "I’m a computer engineer who moves between research, software, student leadership, and game making — drawn to work where technology can be useful, expressive, and shared.";
document.querySelector("#about-copy").textContent = "At Don Bosco Institute of Technology, I graduated in Computer Engineering with a 9.79 CGPI and received the Best Outgoing Student award. I explored assistive computer vision and DevOps research, built mobile and web products, and helped student teams turn ideas into public events and games. I’m now continuing my education at the University of Edinburgh, carrying that mix of technical curiosity and community building into a new chapter.";
document.querySelector("#linkedin-link").href = linkedIn;
document.querySelector("#github-profile-link").href = github;
document.querySelector("#email-link").href = linkedIn;
document.querySelector("#email-link").innerHTML = "Connect on LinkedIn <span>↗</span>";
document.querySelector("#contact-linkedin").href = linkedIn;
document.querySelector("#contact-email").href = linkedIn;
document.querySelector("#contact-email").innerHTML = "Send a message <span>↗</span>";
document.querySelector("#now-date").textContent = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date()).toUpperCase();
document.querySelector(".hero-meta span:first-child").innerHTML = "MUMBAI → EDINBURGH <i>↗</i>";
document.querySelector(".art-caption p").innerHTML = "Research, engineering & play.<br /><small>ACCESSIBILITY / SYSTEMS / GAMES</small>";
