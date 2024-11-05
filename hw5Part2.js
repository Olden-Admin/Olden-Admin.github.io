function navigateSiteAuto() {
    const url = document.getElementById("dropdown1").value;
    if (url) window.open(url, "_blank");
}

function navigateSiteButton() {
    const url = document.getElementById("dropdown2").value;
    if (url) window.open(url, "_blank");
}
