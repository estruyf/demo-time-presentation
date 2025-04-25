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
        presenterExperience();
    }, 2000);
}

function presenterExperience() {
    console.log("Setting up presenter experience...");
    // Simulate presenter experience
    setTimeout(() => {
        console.log("Presenter experience is ready.");
        realDemo();
    }, 2000);
}

function realDemo() {
    console.log("Starting the real demo...");
    // Simulate the real demo
    setTimeout(() => {
        console.log("Demo in progress...");
        closing();
    }, 2000);
}

function closing() {
    console.log("Closing the demo...");
    // Simulate closing remarks
    setTimeout(() => {
        console.log("Thank you for attending the demo!");
    }, 2000);
}

export { runDemo };