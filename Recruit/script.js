const tabs = document.querySelectorAll("[data-track]");
const cards = document.querySelectorAll("[data-track-card]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.track;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    cards.forEach((card) => {
      card.classList.toggle("active", card.dataset.trackCard === target);
    });
  });
});

const header = document.querySelector("[data-header]");

if (header) {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
