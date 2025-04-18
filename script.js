const xGoster = document.getElementById("x");
const yGoster = document.getElementById("y");

const kutular = document.querySelectorAll(".kutu");

let guncelle = true;

kutular.forEach((kutu) => {
  kutu.addEventListener("mouseenter", () => {
    guncelle = false;
  });

  kutu.addEventListener("mouseleave", () => {
    guncelle = true;
  });
});

document.body.addEventListener("mousemove", function (event) {
  if (guncelle) {
    xGoster.textContent = event.clientX;
    yGoster.textContent = event.clientY;
  }
});
