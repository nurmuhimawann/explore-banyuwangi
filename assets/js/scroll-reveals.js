const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // animations repeat
})
sr.reveal(`.home__data , .footer__container`)
sr.reveal(`.home__card`, { delay: 600, distance: '100px', interval: 100 })
