/* =========================================
   ANIMACIONES INICIALES
   ========================================= */

const elements = document.querySelectorAll(
    ".hidden:not(.benefits):not(.benefits .hidden):not(.process):not(.process .hidden):not(.footer)"
);

const delays = [
    0,      // container
    0,      // hero
    200,    // Primera frase
    300,    // Segunda frase
    600,    // Dani Ruiz
    900,    // Asesor de viajes
    1100,   // Contactar por WhatsApp
    1400,   // Reservar llamada
    1700    // Planifica tu viaje
];

elements.forEach((element, index) => {

    if (
        element.classList.contains("process-step") ||
        element.classList.contains("footer") ||
        element.closest(".process")
    ) {
        return;
    }

    setTimeout(() => {
        element.classList.add("show");
    }, delays[index] || 0);

});


/* =========================================
   ANIMACIÓN DE LOS PANELES
   ========================================= */

const benefitCards = document.querySelectorAll(
    ".benefit-card.hidden"
);

const benefitsSection = document.querySelector(
    ".benefits"
);

const mainButtons = document.querySelectorAll(
    ".buttons .button.hidden"
);

const benefitsTitle = document.querySelector(
    ".benefits h2.hidden"
);


if (
    benefitsSection &&
    benefitCards.length &&
    mainButtons.length
) {

    const lastMainButton =
        mainButtons[mainButtons.length - 1];


    lastMainButton.addEventListener(
        "animationend",
        () => {

            const benefitsObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach(entry => {

                            if (!entry.isIntersecting) {
                                return;
                            }


                            if (benefitsTitle) {
                                benefitsTitle.classList.add("show");
                            }


                            benefitCards.forEach(
                                (card, index) => {

                                    setTimeout(() => {

                                        card.classList.add("show");

                                    }, 300 + (index * 350));

                                }
                            );


                            observer.unobserve(entry.target);

                        });

                    },
                    {
                        threshold: 0.15
                    }
                );


            benefitsObserver.observe(
                benefitsSection
            );


            if (window.scrollY > 100) {

                benefitsTitle?.classList.add("show");

                benefitCards.forEach(
                    (card, index) => {

                        setTimeout(() => {

                            card.classList.add("show");

                        }, 300 + (index * 350));

                    }
                );

                benefitsObserver.disconnect();

            }

        },
        {
            once: true
        }
    );

}


/* =========================================
   DESPUÉS DE "TRANQUILIDAD"
   ========================================= */

const tranquility = Array.from(
    document.querySelectorAll(".benefit-card.hidden")
).find(card => {

    return (
        card.querySelector("h3")?.textContent.trim() ===
        "Tranquilidad"
    );

});


const processSection =
    document.querySelector(".process");

const processTitle =
    document.querySelector(".process h2.hidden");

const processSubtitle =
    document.querySelector(
        ".process .process-subtitle.hidden"
    );

const processSteps =
    document.querySelectorAll(
        ".process .process-step.hidden"
    );

const processTimelineLines =
    document.querySelectorAll(
        ".process .timeline-line.hidden"
    );

const footer =
    document.querySelector(".footer.hidden");


if (tranquility && processSection) {

    tranquility.addEventListener(
        "animationend",
        () => {


            /* =====================================
               1. APARECE LA SECCIÓN
               ===================================== */

            processSection.classList.add("show");


            /* =====================================
               2. TÍTULO
               ===================================== */

            if (processTitle) {

                setTimeout(() => {

                    processTitle.classList.add("show");

                }, 300);

            }


            /* =====================================
               3. SUBTÍTULO
               ===================================== */

            if (processSubtitle) {

                setTimeout(() => {

                    processSubtitle.classList.add("show");

                }, 600);

            }


            /* =====================================
               4. PRIMER PASO
               ===================================== */

            if (processSteps[0]) {

                setTimeout(() => {

                    processSteps[0].classList.add("show");

                }, 1200);

            }


            /* =====================================
               5. PRIMERA LÍNEA
               ===================================== */

            if (processTimelineLines[0]) {

                setTimeout(() => {

                    processTimelineLines[0].classList.add("show");

                }, 900);

            }


            /* =====================================
               6. SEGUNDO PASO
               ===================================== */

            if (processSteps[1]) {

                setTimeout(() => {

                    processSteps[1].classList.add("show");

                }, 1650);

            }


            /* =====================================
               7. SEGUNDA LÍNEA
               ===================================== */

            if (processTimelineLines[1]) {

                setTimeout(() => {

                    processTimelineLines[1].classList.add("show");

                }, 1450);

            }


            /* =====================================
               7.5. TERCERA LÍNEA
               ===================================== */

            if (processTimelineLines[2]) {

                setTimeout(() => {

                    processTimelineLines[2].classList.add("show");

                }, 2200);

            }


            /* =====================================
               8. TERCER PASO
               ===================================== */

            if (processSteps[2]) {

                setTimeout(() => {

                    processSteps[2].classList.add("show");

                }, 2400);

            }


            /* =====================================
               9. FOOTER
               ===================================== */

            if (footer) {

                setTimeout(() => {

                    footer.classList.add("show");

                }, 3000);

            }

        },
        {
            once: true
        }
    );

}


/* =========================================
   SERVICE WORKER
   ========================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")

            .then(() => {

                console.log(
                    "Service Worker registrado correctamente"
                );

            })

            .catch((error) => {

                console.error(
                    "Error registrando el Service Worker:",
                    error
                );

            });

    });

}