// ===== Configuração =====
const WHATSAPP = "5511954443124";
const MENSAGEM = "Olá Ray! Vi seu site e gostaria de agendar um horário.";

const linkWpp = (servico) => {
  const texto = servico
    ? `Olá Ray! Vi seu site e tenho interesse em: ${servico}. Pode me passar os horários?`
    : MENSAGEM;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
};

// Todos os elementos com data-wpp viram link de WhatsApp (data-wpp="Serviço" personaliza a mensagem)
document.querySelectorAll("[data-wpp]").forEach((a) => {
  a.href = linkWpp(a.dataset.wpp);
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("ano").textContent = new Date().getFullYear();

// ===== Topo e menu mobile =====
const topo = document.getElementById("topo");
const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu-btn");

const aoRolar = () => topo.classList.toggle("rolou", window.scrollY > 30);
aoRolar();
window.addEventListener("scroll", aoRolar, { passive: true });

const fecharMenu = () => {
  menu.classList.remove("aberto");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
};
menuBtn.addEventListener("click", () => {
  const abrir = !menu.classList.contains("aberto");
  menu.classList.toggle("aberto", abrir);
  menuBtn.setAttribute("aria-expanded", String(abrir));
  document.body.style.overflow = abrir ? "hidden" : "";
});
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", fecharMenu));

// ===== Galeria (lida de js/fotos.js, gerado pelo otimizar_fotos.py) =====
const fotos = window.FOTOS || [];
const grade = document.getElementById("grade-galeria");

fotos.forEach((foto, i) => {
  const item = document.createElement("button");
  item.className = "galeria-item revelar";
  item.setAttribute("aria-label", `Ampliar foto ${i + 1}`);
  item.innerHTML = `<img src="${foto.thumb}" width="${foto.w}" height="${foto.h}" loading="lazy" alt="Trabalho da Ray Renova ${i + 1}">`;
  item.addEventListener("click", () => abrirLightbox(i));
  grade.appendChild(item);
});

// Enquanto houver poucas fotos, completa a grade com cartões elegantes
const ALTURAS = [320, 240, 380, 280, 340, 260];
for (let i = fotos.length; i < 6; i++) {
  const vazio = document.createElement("div");
  vazio.className = "galeria-vazio revelar";
  vazio.style.height = `${ALTURAS[i]}px`;
  vazio.textContent = i % 2 ? "Beleza que Renova" : "Em breve, novas transformações";
  grade.appendChild(vazio);
}

// ===== Lightbox =====
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
let atual = 0;

function mostrar(i) {
  atual = (i + fotos.length) % fotos.length;
  lbImg.src = fotos[atual].src;
  lbImg.alt = `Trabalho da Ray Renova ${atual + 1}`;
}
function abrirLightbox(i) {
  mostrar(i);
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  lb.querySelector(".lb-fechar").focus();
}
function fecharLightbox() {
  lb.hidden = true;
  document.body.style.overflow = "";
}

lb.querySelector(".lb-fechar").addEventListener("click", fecharLightbox);
lb.querySelector(".lb-ant").addEventListener("click", () => mostrar(atual - 1));
lb.querySelector(".lb-prox").addEventListener("click", () => mostrar(atual + 1));
lb.addEventListener("click", (e) => { if (e.target === lb) fecharLightbox(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") fecharLightbox();
  if (e.key === "ArrowLeft") mostrar(atual - 1);
  if (e.key === "ArrowRight") mostrar(atual + 1);
});

// Deslizar no celular
let toqueX = null;
lb.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (toqueX === null) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
  toqueX = null;
});

// ===== Animação ao rolar =====
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visivel");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".revelar").forEach((el) => obs.observe(el));
} else {
  document.documentElement.classList.add("sem-js");
}
