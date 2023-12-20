
anime({
    targets: '.path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration:2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});