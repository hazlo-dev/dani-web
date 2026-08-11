const elements = document.querySelectorAll(".hidden");

const delays = [
    200,   // Primera frase
    300,   // Segunda frase
    600,   // Nombre
    900,   // Asesor de viajes
    1100,  // WhatsApp
    1400,  // Reservar llamada
    1700,  // Página de reservas
    2000,  // Beneficios
    2300,  // Reseñas

    2600,  // Así organizaremos tu viaje
    2900,  // Cuéntame tu idea
    3200,  // Busco la mejor opción
    3500,  // Solo queda disfrutar
    3800,  // Footer
];

elements.forEach((element, index) => {

    setTimeout(() => {

        element.classList.add("show");

    }, delays[index]);

});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => {
                console.log("Service Worker registrado correctamente");
            })
            .catch((error) => {
                console.error("Error registrando el Service Worker:", error);
            });
    });
}