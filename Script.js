function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function submitApplication() {
    alert("Thank you for applying to work with us! Our team will carefully review your resumé and respond with news soon!");
}