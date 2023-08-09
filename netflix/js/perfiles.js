document.addEventListener("DOMContentLoaded", () => {
    const btnAdministrar = document.getElementById("btnAdministrar");
    const btnEntrarList = document.querySelectorAll(".entrar");

    btnEntrarList.forEach((btnEntrar) => {
        btnEntrar.addEventListener("click", () => {
            window.location.href = "perfilinicio.html";
        });
    });

    btnAdministrar.addEventListener("click", () => {
        window.location.href = "administrarPerfiles.html";
    });

    for (let i = 1; i <= 3; i++) {
        const perfilSpan = document.getElementById(`perfil${i}`);
        const basePerfil = localStorage.getItem(`perfil${i}`);
        if (basePerfil !== null) {
            perfilSpan.textContent = basePerfil;
        }
    }
});