// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Scroll suave ao clicar no menu
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    nav.classList.remove("open");
  });
});

// Alternar planos (Portugal / Brasil)
const toggleButtons = document.querySelectorAll(".btn-toggle");
const planosConteudos = document.querySelectorAll(".planos-conteudo");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const country = btn.dataset.country;

    toggleButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    planosConteudos.forEach((pc) => {
      pc.classList.remove("active");
    });

    const ativo = document.getElementById(`planos-${country}`);
    if (ativo) {
      ativo.classList.add("active");
      ativo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Formulário de contato (simples, sem back-end)
const form = document.getElementById("contato-form");
const feedback = document.getElementById("contato-feedback");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.elements["nome"].value || "";
    feedback.textContent = `Obrigada pela mensagem${nome ? ", " + nome : ""}! Assim que possível retornarei o contato.`;

    form.reset();
  });
}

// Ano no rodapé
const anoSpan = document.getElementById("ano-atual");
if (anoSpan) {
  anoSpan.textContent = new Date().getFullYear();
}
