function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function submitApplication() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const resume = document.getElementById("resume").value.trim();

    // ❌ Campos obrigatórios
    if (name === "" || email === "") {
        alert("You must fill all the obligatory fields.");
        return;
    }

    // 👁️ Easter egg específico
    if (
        name.toLowerCase() === "dyle timesly" &&
        email.toLowerCase() === "timesly.dyle@gardenview.com"
    ) {
        alert("YOUR TIME IS UP...");
        revealTimesUp();
        return;
    }

    // ✅ Resposta normal
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
}