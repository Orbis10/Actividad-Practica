const foto = document.querySelector("section img");
foto.addEventListener("mouseover", function() {
    foto.style.transform = "scale(1.05)";
});
foto.addEventListener("mouseout", function() {
    foto.style.transform = "scale(1)";
});

const video = document.querySelector("section iframe");
video.addEventListener("mouseover", function() {
    video.style.transform = "scale(1.05)";
});
video.addEventListener("mouseout", function() {
    video.style.transform = "scale(1)";
});

const titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", function() {
    titulo.style.transform = "scale(1.05)";
});

titulo.addEventListener("mouseout", function() {
    titulo.style.transform = "scale(1)";
});

titulo.addEventListener("dblclick", function() {

    if (titulo.textContent === "SAMUEL ORBES") {
        titulo.textContent = "¡BIENVENIDO!";
    } else {
        titulo.textContent = "SAMUEL ORBES";
    }

});