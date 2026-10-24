// Shared by every page (loaded at the bottom of each .html file).

// Links to other websites open in a new tab, so this site stays open
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.target = "_blank";
  link.rel = "noreferrer";
});

// Abstract buttons show/hide the abstract right after their row of buttons.
// A paper whose abstract is still empty shows no Abstract button.
document.querySelectorAll(".abstract-toggle").forEach((button) => {
  const row = button.closest(".buttons");
  const abstract = row.nextElementSibling;
  if (!abstract.textContent.trim()) {
    button.remove();
    if (!row.querySelector(".btn")) row.remove();
    return;
  }
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    abstract.hidden = open;
  });
});
