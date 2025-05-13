async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  for (const element of elements) {
    const file = element.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (response.ok) {
        element.innerHTML = await response.text();
      } else {
        element.innerHTML = "<p>Include not found.</p>";
      }
    } catch (err) {
      element.innerHTML = "<p>Error loading include.</p>";
    }
  }
}