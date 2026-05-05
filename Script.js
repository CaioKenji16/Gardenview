function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function submitApplication() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const resume = document.getElementById("resume").value.trim();

    if (name === "" || email === "") {
        alert("You must fill all the obligatory fields.");
        return;
    }

    if (
        name.toLowerCase() === "dyle timesly" &&
        email.toLowerCase() === "timesly.dyle@gardenview.com"
    ) {
        alert("YOUR TIME IS UP...");
        revealTimesUp();
        return;
    }

    alert("Thank you for applying to work with us! Our team will carefully review your resumé and respond with news soon!");
}

function revealTimesUp() {
    document.getElementById("dyleButton").style.display = "block"
}

function revealDyle() {
    document.getElementById("dyleCard").style.display = "block";
    document.getElementById("dandyCard").style.display = "none";
    const audio = document.getElementById("trainWhistle");
    audio.play();
}

function hideDyle() {
    document.getElementById("dyleCard").style.display = "none";
    document.getElementById("dandyCard").style.display = "block";
    const audio = document.getElementById("clairDeLune");
    audio.play();
}

const valve = document.getElementById("valve");

let isDragging = false;
let lastAngle = 0;
let currentRotation = 0;

valve.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    valve.style.cursor = "grabbing";

    const rect = valve.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    lastAngle = Math.atan2(
        e.clientY - centerY,
        e.clientX - centerX
    );
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    valve.style.cursor = "grab";
});

// 🔥 segurança extra (resolve 99% dos bugs)
window.addEventListener("blur", () => {
    isDragging = false;
});

document.addEventListener("mouseleave", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = valve.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(
        e.clientY - centerY,
        e.clientX - centerX
    );

    let delta = angle - lastAngle;

    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;

    currentRotation += delta * (180 / Math.PI);

    valve.style.transform = `rotate(${currentRotation}deg)`;

    lastAngle = angle;
});

valve.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

document.addEventListener("pointerup", () => {
    isDragging = false;
});