document.addEventListener("DOMContentLoaded", () => {
  const perfilesBotones = document.querySelectorAll(".perfiles button");
  const perfilesSpanes = document.querySelectorAll(".perfiles span");

  perfilesBotones.forEach((button, index) => {
      button.addEventListener("click", () => {
          const nombrePerfil = prompt("Ingrese el nuevo nombre del perfil:");
          if (nombrePerfil !== null) {
            //  selecionarImagen.addEventListener("click", () => {
            //     const img= document.querySelector(".perfil button");
            //     img.src ="/img/img/Facebook_logo.png";
            //  })
              perfilesSpanes[index].textContent = nombrePerfil;
              localStorage.setItem(`perfil${index + 1}`, nombrePerfil);
              //METODO .cloneNode() para clonar un elemnto 

          }
      });
  });
  const btnListo = document.getElementById("btnListo");
  btnListo.addEventListener("click", () => {
      window.location.href = "perfil.html";
  });
});