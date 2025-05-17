function runDemo() {
  console.log("Opening voiceover...");
  // Simulate voiceover introduction
  setTimeout(() => {
    console.log("Welcome to the demo!");
    viewerExperience();
  }, 2000);
}

function viewerExperience() {
  console.log("Setting up viewer experience...");
  // Simulate viewer experience
  setTimeout(() => {
    console.log("Viewer experience is ready.");
  }, 2000);
}

export { runDemo };
