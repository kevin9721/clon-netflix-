class FormularioLogin {
    constructor() {
        this.formularioElement = document.querySelector('form');
        this.emailInput = document.querySelector('input[type="email"]');
        this.passwordInput = document.querySelector('input[type="password"]');
        this.rememberMeCheckbox = document.getElementById('selecion');

        this.formularioElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const rememberMe = this.rememberMeCheckbox.checked;

        if (this.validarCampos(email, password)) {
             this.realizarInicioSesion(email, password, rememberMe);
        }
    }

    validarCampos(email, password) {
        const auxiliar1 = document.querySelector(".aux1");
        const auxiliar2 = document.querySelector(".aux2");
        this.emailInput.classList.remove('empty-input');
        this.passwordInput.classList.remove('empty-input');



        if (email.trim() === '' || password.trim() === '') {
            auxiliar1.textContent = ("Ingresa un email o un número de teléfono válido.");
            auxiliar1.classList.toggle("datos2");
            auxiliar2.textContent = ("La contraseña debe tener entre 4 y 60 caracteres.");
            auxiliar2.classList.toggle("datos2");

            if (email.trim() === '') {
                this.emailInput.classList.add('empty-input');
              }
              if (password.trim() === '') {
                this.passwordInput.classList.add('empty-input');
              }
            return false;
        }
        return true;
    }

    realizarInicioSesion(email, password, rememberMe) {
        // alert(`¡Inicio de sesión exitoso!\nEmail: ${email}\nContraseña: ${password}\nRecuérdame: ${rememberMe}`);
        window.location.href = "perfil.html";

    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formularioLogin = new FormularioLogin();
});