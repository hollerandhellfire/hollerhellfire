(function () {
  const config = window.HH_CONFIG;
  const container = document.getElementById("site-navigation");

  if (!config || !container) return;

  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Main navigation");

  config.navigation.forEach(item => {
    const link = document.createElement("a");

    link.href = item.url;
    link.textContent = item.label;

    if (link.href === window.location.href) {
      link.setAttribute("aria-current", "page");
    }

    nav.appendChild(link);
  });

  container.replaceChildren(nav);
})();
