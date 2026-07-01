export const routes = {
  en: {
    home: "/",
    privateTours: "/private-tours/",
    experiences: "/experiences/",
    gallery: "/gallery/",
    blog: "/blog/",
    about: "/about/",
    contact: "/contact/",
    paymentPolicy: "/payment-cancellation-policy/",
    // Pillars — fonte única. dayTrips e privateGuide TRAVADOS; só halfDay resta indeciso.
    // Páginas nascem em passos posteriores; links podem 404ar no preview até lá.
    allIncluded: "/all-included/",
    privateGuide: "/private-guide-rio-de-janeiro/",
    dayTrips: "/day-trips-from-rio/",
    halfDay: "/half-day-rio/",                       // TODO slug a travar
  },
  es: {
    home: "/",
    privateTours: "/tours-privados/",
    experiences: "/experiencias/",
    gallery: "/galeria/",
    blog: "/blog/",
    about: "/sobre/",
    contact: "/contacto/",
    paymentPolicy: "/politica-de-pago-y-cancelacion/",
    allIncluded: "/todo-incluido/",
    privateGuide: "/guia-privado-rio-de-janeiro/",
    dayTrips: "/excursiones-desde-rio-de-janeiro/",
    halfDay: "/medio-dia-rio/",                     // TODO slug a travar
  },
  "pt-br": {
    home: "/",
    privateTours: "/passeios-privados/",
    experiences: "/experiencias/",
    gallery: "/galeria/",
    blog: "/blog/",
    about: "/sobre/",
    contact: "/contato/",
    paymentPolicy: "/politica-de-pagamento-e-cancelamento/",
    allIncluded: "/tudo-incluido/",
    privateGuide: "/guia-particular-rio-de-janeiro/",
    dayTrips: "/bate-e-volta-saindo-do-rio/",
    halfDay: "/meio-dia-rio/",                       // TODO slug a travar
  },
};
