// ---------------------------------------------------------------------------
// Site settings. Everything here appears on every page (top banner + sidebar),
// so this is the only place you need to change your details.
// ---------------------------------------------------------------------------
const SITE = {
  name: "Francesco Losma",

  // Put a square-ish photo at this path. Your initials show until it exists.
  photo: "images/profile.jpg",

  // Put your CV at this path. Leave "" to hide the CV links.
  cv: "files/CV.pdf",

  email: "firstname.lastname@economics.ox.ac.uk",

  address: [
    "Department of Economics",
    "University of Oxford",
    "Manor Road Building",
    "Oxford OX1 3UQ",
  ],

  // Leave a url as "" to hide that link.
  social: [
    { label: "Google Scholar", icon: "scholar", url: "" },
    { label: "LinkedIn", icon: "linkedin", url: "" },
    { label: "GitHub", icon: "github", url: "https://github.com/francescolosma" },
    { label: "Twitter", icon: "x", url: "" },
  ],

  // Banner links, in order. `page` must match <body data-page="..."> on that page.
  // A "CV" link to the PDF is added at the end automatically.
  pages: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Research", href: "research.html", page: "research" },
    { label: "Notes", href: "notes.html", page: "notes" },
  ],
};

// ---------------------------------------------------------------------------
// You shouldn't need to edit below this line.
// ---------------------------------------------------------------------------

const ICONS = {
  x: '<svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.4L1.6 3h6.5l4.5 5.9L17.7 3Zm-1.1 16.2h1.7L7.2 4.7H5.4l11.2 14.5Z"/></svg>',
  scholar:
    '<svg class="social-icon scholar-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 1.8 10.2 12 17.4l10.2-7.2L12 3Z"/><path d="M6.8 13.7v3.1c1.2 1.6 3 2.5 5.2 2.5s4-.9 5.2-2.5v-3.1L12 17.4l-5.2-3.7Z"/><path d="M21.2 10.8v5.8" class="stroke-path"/></svg>',
  github:
    '<svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin:
    '<svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
};

const external = 'target="_blank" rel="noreferrer"';

function initials(name) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function renderHeader(current) {
  const links = SITE.pages.map(
    (p) => `<a href="${p.href}"${p.page === current ? ' aria-current="page"' : ""}>${p.label}</a>`
  );
  if (SITE.cv) links.push(`<a href="${SITE.cv}" ${external}>CV</a>`);

  document.getElementById("site-header").innerHTML = `
    <div class="site-header-inner">
      <a class="site-title" href="index.html">${SITE.name}</a>
      <nav class="site-nav" aria-label="Main">${links.join("")}</nav>
    </div>`;
}

function renderProfile() {
  const sections = [];

  if (SITE.cv) {
    sections.push(`<p class="profile-link"><a href="${SITE.cv}" ${external}>Curriculum vitae</a></p>`);
  }
  if (SITE.email) {
    sections.push(`
      <p class="profile-section-title">Contact information</p>
      <p class="contact"><a href="mailto:${SITE.email}">${SITE.email}</a></p>`);
  }
  if (SITE.address.length) {
    sections.push(`
      <p class="profile-section-title">Mailing address</p>
      <address class="postal-address">${SITE.address.join("<br>")}</address>`);
  }
  const social = SITE.social.filter((s) => s.url);
  if (social.length) {
    sections.push(`
      <p class="profile-section-title">Media</p>
      <nav class="social-links" aria-label="Social links">
        ${social.map((s) => `<a href="${s.url}" ${external}>${ICONS[s.icon] || ""}<span>${s.label}</span></a>`).join("")}
      </nav>`);
  }

  const profile = document.getElementById("profile");
  profile.innerHTML = `
    <div class="profile-inner">
      <img class="portrait" src="${SITE.photo}" alt="${SITE.name}" width="310" height="310" decoding="async">
      <h1><span class="name">${SITE.name}</span></h1>
      ${sections.map((s) => `<div class="profile-section">${s}</div>`).join("")}
    </div>`;

  const img = profile.querySelector(".portrait");
  const useInitials = () => {
    const badge = document.createElement("div");
    badge.className = "portrait portrait-initials";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = initials(SITE.name);
    img.replaceWith(badge);
  };
  if (!SITE.photo) useInitials();
  else img.addEventListener("error", useInitials);
}

function wireAbstractToggles() {
  document.querySelectorAll(".toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const abstract = toggle.closest(".paper").querySelector(".abstract");
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      abstract.hidden = isOpen;
    });
  });
}

renderHeader(document.body.dataset.page);
renderProfile();
wireAbstractToggles();
