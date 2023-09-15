function toggleContent (btnClass, containerClass) {

const btn = document.querySelector(btnClass),
      container = document.querySelector(containerClass);

    let toggleBlock = gsap.to(container, {
        height: 'auto',
        paused: true,
        autoAlpha: 1,
        duration: 1,
        ease: 'power1.out'
    })

    btn.addEventListener('click', () => {
        container.classList.toggle('show');
        container.classList.contains('show') ? toggleBlock.play() : toggleBlock.reverse();
    })
}
module.exports = toggleContent;