document.addEventListener('DOMContentLoaded', function() {
    // Função para animações de scroll
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('animated');
            }
        });
    }

    // Configuração do IntersectionObserver para destacar seções ativas no menu
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptions = {
        root: null,
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}` || (id === 'hero' && link.getAttribute('href') === 'index.html')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    // Observa as seções (adiciona 'hero' como exceção para corresponder ao link "Home")
    sections.forEach(section => observer.observe(section));
    const heroSection = document.querySelector('.hero');
    heroSection.setAttribute('id', 'hero');
    observer.observe(heroSection);

    // Evento de scroll para animações
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();
});

document.getElementById('meuBotao').addEventListener('click', function() {
    fbq('track', 'PageView');
  });
