// Home page banner
function closeBanner() {
    document.getElementById("banner").style.display = "none";
}

function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {return true;}
    else {return false;}
}

function showBannerOnSpecificDays() {
    if (isBannerDay()) {
        document.getElementById("banner").style.display = "block";
    }
    else {
        document.getElementById("banner").style.display = "none";
    }
}

window.onload = showBannerOnSpecificDays();