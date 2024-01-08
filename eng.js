
document.addEventListener('DOMContentLoaded', function () {
    const menuOpener = document.getElementById('menu-opener');
    const menu = document.querySelector('.menulog');

    menuOpener.addEventListener('click', function () {
        // Alternar a visibilidade do menu ao clicar no menu-opener
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Fechar o menu ao clicar em um item do menu (opcional)
    const menuItems = document.querySelectorAll('.menulog ul li a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            // Verificar se a tela está no modo responsivo antes de ocultar o menu
            if (window.innerWidth <= 800) {
                menu.style.display = 'none';
            }
        });
    });

    // Fechar o menu ao clicar fora dele (opcional)
    window.addEventListener('click', function (event) {
        if (!event.target.matches('#menu-opener') && !event.target.closest('.menulog')) {
            menu.style.display = 'none';
        }
    });

    // Redefinir a visibilidade do menu ao redimensionar a tela
    window.addEventListener('resize', function () {
        if (window.innerWidth > 800) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
            });
        }
    }

    document.querySelectorAll('.menulog a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
});

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        fetch(e.target.action, {
            method: "POST",
            body: new FormData(e.target),
            headers: {
                Accept: "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {
                alert("Seu Email foi enviado com sucesso!");
                console.log(data);
            })
            .catch(error => {
                alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
                console.error(error);
            });
    });
});





