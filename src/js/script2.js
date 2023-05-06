//Efeito menu
window.addEventListener('scroll', function(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('sticky', window.scrollY > 0);
})

//Envio de dados formulario
function enviarEmail() {
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var telefone = document.querySelector("#telefone").value;
    var mensagem = document.querySelector("#mensagem").value;
    var body = `
    Nome
    ${nome}

    Mensagem
    ${mensagem}
    
    Telefone
    ${telefone}

    E-mail
    ${email}
    `
    var link = "mailto:contato@quebecengenharia.com.br"
             + "?subject=" + encodeURIComponent("Contato site")
             + "&body=" + encodeURIComponent(body)
    ;
    
    window.location.href = link;
    return
}

//Animacao de conteudo
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showleft');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hiddenleft')
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showup');
        }

    });
});

const hiddenElements2 = document.querySelectorAll('.hiddenup')
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showright');
        }

    });
});

const hiddenElements3 = document.querySelectorAll('.hiddenright')
hiddenElements3.forEach((el) => observer3.observe(el));

//menu hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})