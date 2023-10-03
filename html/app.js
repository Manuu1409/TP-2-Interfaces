document.addEventListener("DOMContentLoaded", function() {
    const log_in = document.querySelector(".loginButton");

    log_in.onclick = function() {
        this.innerHTML = "<div class='load'></div>";
        setTimeout(() => {
            this.innerHTML = "Correcto";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }, 2000);
    }
});
