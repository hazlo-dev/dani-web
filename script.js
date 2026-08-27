/* =========================================
   ANIMACIONES INICIALES
   ========================================= */

const elements = document.querySelectorAll(
    ".hidden:not(.benefits):not(.benefits .hidden):not(.process):not(.process .hidden):not(.footer):not(.button-hint):not(.travel-form-page):not(.travel-form-page .hidden)"
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

    const buttonHints = document.querySelectorAll(".button-hint.hidden");

buttonHints.forEach((hint, index) => {

    setTimeout(() => {
        hint.classList.add("show");
    }, 1100 + (index * 300));

});

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
            .register("./serviceworker.js")

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

// ============================================================
// FORMULARIO · PLANEA TU VIAJE · NAVEGACIÓN
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    const formSections = document.querySelectorAll(".travel-form-section");

    if (!formSections.length) return;


    // ========================================================
    // APARICIÓN DE LA PÁGINA DEL FORMULARIO
    // ========================================================

    const formPage = document.querySelector(".travel-form-page.hidden");

    if (formPage) {
        setTimeout(() => {
            formPage.classList.add("show");
        }, 0);
    }


    // ========================================================
    // ANIMACIÓN DE ENTRADA DE UN PASO
    // (mismo patrón .hidden / .show que el resto de la web,
    // adaptado al contenido variable de cada paso)
    // ========================================================

    const animatedSteps = new Set();

    function animateStepIn(section) {

        if (!section) return;

        const eyebrow = section.querySelector(".travel-form-eyebrow.hidden");
        const heading = section.querySelector("h1.hidden, h2.hidden");
        const intro = section.querySelector(".travel-form-intro.hidden");
        const fields = section.querySelectorAll(
            ".travel-form-field.hidden, .travel-form-legal.hidden"
        );
        const navigation = section.querySelector(".travel-form-navigation.hidden");

        let delay = 0;

        if (eyebrow) {
            setTimeout(() => eyebrow.classList.add("show"), delay);
        }

        delay += 200;

        if (heading) {
            setTimeout(() => heading.classList.add("show"), delay);
        }

        delay += 250;

        if (intro) {
            setTimeout(() => intro.classList.add("show"), delay);
        }

        delay += 300;

        fields.forEach((field, index) => {
            setTimeout(() => {
                field.classList.add("show");
            }, delay + (index * 200));
        });

        delay += fields.length * 200;

        if (navigation) {
            setTimeout(() => navigation.classList.add("show"), delay + 150);
        }
    }


    // ========================================================
    // MOSTRAR UNA SECCIÓN
    // ========================================================

    function showSection(sectionId) {

        formSections.forEach(section => {
            section.hidden = section.id !== sectionId;
        });

        if (!animatedSteps.has(sectionId)) {

            animateStepIn(document.getElementById(sectionId));
            animatedSteps.add(sectionId);

        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // ========================================================
    // GRUPO DE CHECKBOX "QUÉ INCLUYE EL PRESUPUESTO"
    // (HTML no permite un "required" nativo a nivel de grupo
    // para checkboxes, así que se alterna el required de forma
    // dinámica: obligatorio mientras no haya ninguno marcado)
    // ========================================================

    const budgetIncludesCheckboxes = document.querySelectorAll(
        'input[type="checkbox"][name="budget-includes"]'
    );

    function syncBudgetIncludesRequired() {

        const anyChecked = Array.from(budgetIncludesCheckboxes).some(
            checkbox => checkbox.checked
        );

        budgetIncludesCheckboxes.forEach(checkbox => {
            checkbox.required = !anyChecked;
        });
    }

    if (budgetIncludesCheckboxes.length) {

        syncBudgetIncludesRequired();

        budgetIncludesCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", syncBudgetIncludesRequired);
        });

    }


    // ========================================================
    // ANIMAR EL PRIMER PASO VISIBLE AL CARGAR
    // ========================================================

    const initialSection = document.querySelector(
        ".travel-form-section:not([hidden])"
    );

    if (initialSection) {
        animateStepIn(initialSection);
        animatedSteps.add(initialSection.id);
    }


    // ========================================================
    // BOTONES · SIGUIENTE
    // ========================================================

    document.querySelectorAll(".travel-form-next").forEach(button => {

        button.addEventListener("click", () => {

            const currentSection = button.closest(".travel-form-section");
            const nextSectionId = button.dataset.next;
            const nextSection = document.getElementById(nextSectionId);

            if (!currentSection || !nextSection) return;


            // Validar únicamente los campos obligatorios
            const requiredFields = currentSection.querySelectorAll(
                "input[required], textarea[required], select[required]"
            );

            let valid = true;

            requiredFields.forEach(field => {

                if (!field.checkValidity()) {
                    valid = false;
                    field.reportValidity();
                }

            });

            if (!valid) return;


            showSection(nextSectionId);

        });

    });


    // ========================================================
    // BOTONES · ATRÁS
    // ========================================================

    document.querySelectorAll(".travel-form-back").forEach(button => {

        button.addEventListener("click", () => {

            const previousSectionId = button.dataset.back;

            if (!previousSectionId) return;

            showSection(previousSectionId);

        });

    });


});