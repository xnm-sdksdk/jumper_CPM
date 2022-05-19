const tesouros = [
  {
    nome: "tesouro1",
    status: "fechado",
  },
  {
    nome: "tesouro2",
    status: "fechado",
  },
  {
    nome: "tesouro3",
    status: "fechado",
  },
];

const createPortal = () => {
  if (
    tesouros[0].status != "aberto" ||
    tesouros[1].status != "aberto" ||
    tesouros[2].status != "aberto"
  )
    return;

  window.open("index.html", "_self");
};

document.querySelector("#tesouro1").addEventListener("click", () => {
  tesouros[0].status = "aberto";
  createPortal();
});

document.querySelector("#tesouro2").addEventListener("click", () => {
  tesouros[1].status = "aberto";
  createPortal();
});

document.querySelector("#tesouro3").addEventListener("click", () => {
  tesouros[2].status = "aberto";
  createPortal();
});
