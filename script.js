const links = document.querySelectorAll("nav a");

const paginaAtual =
window.location.pathname.split("/").pop() || "index.html";

links.forEach(link => {

    if (link.getAttribute("href") === paginaAtual) {
        link.classList.add("active");
    }

});

const titulos = document.querySelectorAll("h2");

titulos.forEach(titulo => {

    titulo.addEventListener("click", () => {

        alert("Mais informações sobre: " + titulo.innerText);

    });

});

const imagens = [

"https://th.bing.com/th/id/OIP.10Midw3bQxNRcqiG3cNBmgHaE8?w=278&h=185&c=7&r=0&o=7&pid=1.7&rm=3",

"https://tse2.mm.bing.net/th/id/OIP.XSjqQaGiuLlF3NwIP7_PDgHaE0?r=0&w=768&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",

"https://tse4.mm.bing.net/th/id/OIP.tVxswC0HKz_P9kmqxGx30QHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"

];

let indice = 0;

const banner = document.getElementById("banner-img");

const btnProximo = document.getElementById("proximo");

const btnAnterior = document.getElementById("anterior");

function trocarImagem() {

    if (banner) {

        banner.src = imagens[indice];

    }

}

if (btnProximo) {

    btnProximo.addEventListener("click", () => {

        indice++;

        if (indice >= imagens.length) {

            indice = 0;

        }

        trocarImagem();

    });

}

if (btnAnterior) {

    btnAnterior.addEventListener("click", () => {

        indice--;

        if (indice < 0) {

            indice = imagens.length - 1;

        }

        trocarImagem();

    });

}

setInterval(() => {

    indice++;

    if (indice >= imagens.length) {

        indice = 0;

    }

    trocarImagem();

}, 3000);

const formLogin = document.getElementById("form-login");

if (formLogin) {

    formLogin.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome = document.getElementById("nome").value;

        const email = document.getElementById("email").value;

        const mensagem = document.getElementById("mensagem");

        if (nome === "" || email === "") {

            mensagem.innerText = "Preencha todos os campos.";

            mensagem.style.color = "red";

        }

        else {

            mensagem.innerText = "Conta criada com sucesso!";

            mensagem.style.color = "green";

        }

    });

}

const contatoForm = document.getElementById("contato-form");

if (contatoForm) {

    contatoForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome =
        document.getElementById("contato-nome").value;

        const email =
        document.getElementById("contato-email").value;

        const texto =
        document.getElementById("mensagem-texto").value;

        const retorno =
        document.getElementById("retorno");

        if (nome === "" || email === "" || texto === "") {

            retorno.innerText =
            "Todos os campos precisam ser preenchidos.";

            retorno.style.color = "red";

        }

        else {

            retorno.innerText =
            "Mensagem enviada com sucesso!";

            retorno.style.color = "green";

        }

    });

}

const infoBtn = document.querySelector(".info-btn");

const infoExtra = document.querySelector(".info-extra");

if (infoBtn) {

    infoBtn.addEventListener("click", () => {

        if (infoExtra.classList.contains("hidden")) {

            infoExtra.classList.remove("hidden");

            infoBtn.innerText = "Mostrar menos";

        }

        else {

            infoExtra.classList.add("hidden");

            infoBtn.innerText = "Saiba mais";

        }

    });

}

const estrelas =
document.querySelectorAll(".estrela");

const nota =
document.getElementById("nota");

estrelas.forEach((estrela, index) => {

    estrela.addEventListener("click", () => {

        estrelas.forEach((item, i) => {

            if (i <= index) {

                item.classList.add("ativa");

            }

            else {

                item.classList.remove("ativa");

            }

        });

        nota.innerText =
        "Você avaliou este local com "
        + (index + 1)
        + " estrelas.";

    });

});

const pesquisa =
document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keyup", () => {

        const texto =
        pesquisa.value.toLowerCase();

        const tituloLugar =
        document.querySelector(".detalhes h2");

        if (
            texto.includes("lacerda")
            || texto === ""
        ) {

            tituloLugar.style.display =
            "block";

        }

        else {

            tituloLugar.style.display =
            "none";

        }

    });

}