const lista = document.querySelector(".opciones");

const botones = {
  comun: document.getElementById("opcion__comun"),
  raro: document.getElementById("opcion__raro"),
  epico: document.getElementById("opcion__epico"),
};

function toggleActive(btn) {
  btn.classList.toggle("opciones__item--active");
}

function filtrarCards() {
  const cards = document.querySelectorAll(".weapon-card");

  const estado = {
    comun: botones.comun.classList.contains("opciones__item--active"),
    raro: botones.raro.classList.contains("opciones__item--active"),
    epico: botones.epico.classList.contains("opciones__item--active"),
  };

  cards.forEach((card) => {
    const tipo =
      card.classList.contains("weapon-card--comun") ? "comun" :
      card.classList.contains("weapon-card--rara") ? "raro" :
      card.classList.contains("weapon-card--epica") ? "epico" :
      null;

    const mostrar = tipo ? estado[tipo] : true;

    card.classList.toggle("opciones__item--oculto", !mostrar);
  });
}

lista.addEventListener("click", (e) => {
  const btn = e.target.closest(".opciones__item");
  if (!btn) return;

  toggleActive(btn);
  filtrarCards();
});