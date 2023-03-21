const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  threshold: 0.2,
  rootMargin: "0px",
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
