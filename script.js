const atmosphere = document.querySelector("#atmosphere");
let atmosphereOn = true;

atmosphere?.addEventListener("click", () => {
  atmosphereOn = !atmosphereOn;
  document.body.classList.toggle("ambient-off", !atmosphereOn);
  atmosphere.textContent = `Atmosphere: ${atmosphereOn ? "on" : "off"}`;
});

// A deliberately tiny unsettling detail: after some exploration, the surface shifts slightly.
const projectSection = document.querySelector("#projects");
if (projectSection && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      document.body.classList.add("uneasy");
      observer.disconnect();
    }
  }, { threshold: 0.65 });
  observer.observe(projectSection);

  // A different thought appears in the footer each time the page loads.
const thoughts = [
  "something's not right...",
  "check again",
  "is this real?",
  "happy thoughts",
  "erase, erase, erase",
  "was that there before?"
];

const worldNote = document.querySelector("#world-note");

const randomThought =
  thoughts[Math.floor(Math.random() * thoughts.length)];

worldNote.textContent = randomThought;
}
